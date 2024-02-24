# React Helper Personal Account

A personal account management application designed to simplify the daily tasks of managing personal finances.

## Project Description

The React Helper Personal Account is a user-friendly web application built with the purpose of providing individuals a convenient way to oversee their personal accounts. It's crafted using modern web technologies to ensure a seamless and interactive user experience.

## Features

- **Dashboard**: An overview of the user's financial snapshot, presenting key metrics at a glance.
- **Transaction Management**: Add, edit, and delete financial transactions with ease.
- **Account Balances**: Track the balances of different accounts, view detailed statements, and monitor cash flow.
- **Budget Planning**: Set budgets for various categories and monitor spending to stay on track with financial goals.
- **Reporting**: Generate reports to understand spending habits, income sources, and overall financial health.

## Technology Stack

- **React**: Utilizes React for its efficient rendering and state management in building a dynamic SPA (Single Page Application).
- **Redux**: Manages the application's state globally, providing a predictable state container.
- **Tailwind CSS**: Implements Tailwind CSS for a utility-first approach to styling, ensuring a responsive and aesthetically pleasing interface.

## Getting Started

To get a local copy up and running follow these simple steps.

```bash
# Clone the repository
git clone https://github.com/eugenepokalyuk/react-helper-personal-account.git

# Navigate to the project directory
cd react-helper-personal-account

# Install dependencies
npm install

# Start the development server
npm start


# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
