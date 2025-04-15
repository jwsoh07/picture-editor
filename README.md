# 🖌️ Picture Editor

A browser-based picture editor built with **React**, **Fabric.js**, and **MobX**, allowing users to draw on canvas, manipulate layers, and use tools like shapes, fill, pencil, brush, and eraser.

## ✨ Features

- Draw shapes (rectangle, circle, triangle, arrow, star, hexagon)
- Freeform tools (pencil and brush)
- Eraser support
- Fill color
- Clear canvas
- Manage layers (with optional layer clearing)
- Responsive canvas size
- Modern UI using Radix UI and styled-components

## 🛠️ Tech Stack

| Layer            | Technology                                                                      |
| ---------------- | ------------------------------------------------------------------------------- |
| UI Framework     | [React](https://reactjs.org/)                                                   |
| State Management | [MobX](https://mobx.js.org/)                                                    |
| Canvas Engine    | [Fabric.js](https://fabricjs.com/)                                              |
| Styling          | [CSS Modules](https://github.com/css-modules/css-modules)                       |
| Component UI     | [Radix UI](https://www.radix-ui.com/)                                           |
| Icons            | [react-icons](https://react-icons.github.io/react-icons/)                       |
| Testing          | [Vitest](https://vitest.dev/) + [Testing Library](https://testing-library.com/) |
| Build Tool       | [Vite](https://vitejs.dev/)                                                     |
| Linting/Format   | ESLint, Prettier                                                                |

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/jwsoh07/picture-editor.git
cd picture-editor
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run Locally

```bash
npm run dev
```

## 🧪 Testing

- Written with **Vitest**
- Located in the `src/components/**/__tests__` directory
- Use `npm run test` or `npx vitest` to run tests

## 🛠️ Adding New Tools

📌 Notes
The Fabric.js canvas is created in useCanvas.ts and managed through React and MobX.

Tools are extendable. To add a new tool:

- Create a handler in toolHandlers/
- Update ToolBar
- ToolStore
- DrawingArea with new logic

## 🧑‍💻 Author

Made with ❤️ by jwsoh07
