# hammad-portfolio

# 🚀 Project Setup

## Prerequisites
Before running the project, ensure you have the following installed:

- **Node.js (LTS)**: https://nodejs.org/
- **npm** (included with Node.js)

Verify the installation:

```bash
node -v
npm -v
```

## Installation

1. Clone or download this repository.
2. Open a terminal in the project root directory.
3. Install all required dependencies:

```bash
npm install
```

## Run the Development Server

Start the application using:

```bash
npm run dev
```

The terminal will display a local URL (typically `http://localhost:5173`). Open it in your browser to view the application.

## Build for Production

To create an optimized production build:

```bash
npm run build
```

## Preview the Production Build

To preview the production build locally:

```bash
npm run preview
```

## Troubleshooting

- If the `node_modules` folder is missing, run:

  ```bash
  npm install
  ```

- If you receive the error:

  ```
  'vite' is not recognized as an internal or external command
  ```

  install the project dependencies first by running:

  ```bash
  npm install
  ```

- If the application references images, videos, or PDFs that do not appear locally, ensure the required asset files are available and correctly placed in the project's asset directory.
