const fs = require('fs-extra');
const concat = require('concat');
const path = require('path');

(async function build() {
  const browserDir = './dist/angular-element/browser';
  
  if (!fs.existsSync(`${browserDir}/main.js`)) {
    console.error('Error: main.js not found. Build may have failed.');
    process.exit(1);
  }
  
  // Get all JS files in the browser directory
  const dirContents = await fs.readdir(browserDir);
  const jsFiles = dirContents
    .filter(file => file.endsWith('.js'))
    .map(file => path.join(browserDir, file))
    .sort((a, b) => {
      // Ensure main.js comes first
      if (a.includes('main.js')) return -1;
      if (b.includes('main.js')) return 1;
      return 0;
    });
    
  console.log('Concatenating files:', jsFiles);

  await fs.ensureDir('dist/elements');
  await concat(jsFiles, 'dist/elements/angular-element.js');

  // Copy CSS if present
  try {
    const cssFiles = await fs.readdir(`${browserDir}/styles`);
    for (const file of cssFiles) {
      if (file.endsWith('.css')) {
        await fs.copy(
          path.join(`${browserDir}/styles`, file),
          './dist/elements/styles.css'
        );
      }
    }
  } catch (e) {
    console.log('No separate CSS files found, styles may be inlined.');
  }
  
  console.log('Angular Custom Element created successfully!');
})();
