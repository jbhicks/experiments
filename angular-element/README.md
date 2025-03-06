# Angular Custom Element

This project demonstrates how to create a custom element (web component) using Angular Elements. The component is built into a single JavaScript file that can be easily included in any HTML page.

## Development

To start the development server:

```bash
npm start
```

## Building the Custom Element

To build the custom element as a single file:

```bash
npm run build:element
```

This will create a single file at `dist/elements/angular-element.js` that contains everything needed to use the component.

## Using the Custom Element

After building, you can use the custom element in any HTML page:

```html
<!DOCTYPE html>
<html>
<head>
  <script src="path/to/angular-element.js"></script>
</head>
<body>
  <angular-element name="World" greeting="Hello"></angular-element>
</body>
</html>
```

### Properties

The custom element supports the following properties:

- `name`: The name to greet (default: "World")
- `greeting`: The greeting text (default: "Hello")

These can be set as attributes in HTML or dynamically via JavaScript:

```js
const element = document.querySelector('angular-element');
element.name = 'Universe';
element.greeting = 'Greetings';
```

## How It Works

This project follows the recommended pattern for building Angular Elements:

### Component Structure

1. **Angular Component** (`src/app/greeting/greeting.component.ts`):
   - Standard Angular component with inputs, outputs, and templates
   - This is what you develop and test within Angular

2. **Custom Element Definition** (`src/app/custom-element/greeting-element.ts`):
   - Wraps the Angular component using `createCustomElement()`
   - Registers it with the browser via `customElements.define()`

### Build Process

The build process automatically extracts only the code necessary for your web component:

1. **Angular Production Build** performs tree-shaking to eliminate unused code
2. **Concatenation Script** (`element-build.js`) collects all built JS files and combines them
3. **Output** is a single, self-contained JS file that includes your component and the Angular runtime it needs

This approach ensures your web component is as small as possible while retaining all functionality.

## Demo

To see a demo of the custom element:

1. Build the element: `npm run build:element`
2. Open `public/element-demo.html` in a browser

## Project Structure

- `src/app/greeting/greeting.component.ts`: The Angular component that becomes a custom element
- `src/app/custom-element/greeting-element.ts`: Defines and registers the custom element
- `src/main.ts`: Entry point that bootstraps either the regular app or the custom element
- `element-build.js`: Script that concatenates the built files into a single JS file
