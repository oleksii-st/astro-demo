# Astro Demo

A web application built with [Astro](https://astro.build), TypeScript, and TailwindCSS.

## 🚀 Features

- ⚡️ Built with Astro for optimal performance
- 🎨 Styled with TailwindCSS and typography plugin
- 📝 TypeScript support
- 🔍 SEO-friendly with sitemap and robots.txt
- 🎯 ESLint and Prettier for code quality
- 🔄 Utility-first CSS with clsx and tailwind-merge

## 📦 Prerequisites

- Node.js >= 20
- Yarn 4.5.1 (project uses Yarn as package manager)

## 🛠️ Installation

1. Clone the repository:

```bash
git clone https://github.com/oleksii-st/astro-demo.git
cd astro-demo
```

2. Install dependencies:

```bash
yarn install
```

3. Set up environment variables:

```bash
cp .env.example .env
```

Make sure to update the `.env` file with your specific configuration values.

## 📝 Available Scripts

- `yarn dev` or `yarn start` - Start development server
- `yarn build` - Build the project with type checking
- `yarn preview` - Preview the built project
- `yarn astro` - Run Astro CLI commands
- `yarn lint` - Run ESLint
- `yarn lint:fix` - Fix ESLint issues and format code
- `yarn format` - Format code with Prettier

## 🏗️ Project Structure

```
astro-demo/
├── src/
│   ├── components/
│   ├── layouts/
│   └── pages/
├── public/
├── .env.example
├── .env (generated from .env.example)
├── .eslintrc.js
├── .prettierrc
├── astro.config.mjs
├── tailwind.config.mjs
└── tsconfig.json
```

## 🔧 Configuration

### Environment Variables

Before starting the development server, make sure to:

1. Copy `.env.example` to `.env`
2. Update the values in `.env` according to your environment
3. Never commit `.env` file to version control

### Astro

The project uses Astro with the following integrations:

- `@astrojs/tailwind` - TailwindCSS integration
- `@astrojs/sitemap` - Sitemap generation
- `astro-robots-txt` - Robots.txt generation

### TypeScript

TypeScript is configured with strict mode and includes type checking via `@astrojs/check`.

### TailwindCSS

TailwindCSS is configured with:

- Typography plugin for rich text styling
- Custom configuration in `tailwind.config.mjs`

### ESLint

ESLint is configured with:

- TypeScript support
- Astro plugin
- Simple import sort plugin
- Custom rules and configurations

### Prettier

Prettier is configured with:

- Astro plugin support
- Custom formatting rules
