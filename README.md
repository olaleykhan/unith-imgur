# Unith-Imgur


## Overview

Unith-Imgur is a simple SPA that renders a dataset gotten from an unreliable API.

## Project Structure

```bash
unith-imgur
├── Dockerfile
├── Dockerfile.dev
├── compose.dev.yaml
├── docker-compose.yaml
├── package.json
├── src
│   ├── components
│   │   ├── Item.svelte
│   │   ├── ItemList.svelte
│   │   └── index.ts
│   ├── pages
│   │   ├── Home.svelte
│   │   ├── ItemDetail.svelte
│   │   └── index.ts
│   ├── redux
│   │   ├── slices
│   │   │   ├── itemsSlice.ts
│   │   │   └── activeItemSlice.ts
│   │   └── store.ts
│   ├── utils
│   │   └── api.ts
│   └── App.svelte
├── static
│   ├── favicon.png
│   └── robots.txt
├── .eslintrc.cjs
├── .gitignore
├── .prettierrc
├── README.md
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

## Project Summary

- `src`: Main source code directory.
- `src/components`: Reusable UI components.
- `src/pages`: Svelte pages for routing.
- `src/redux`: Redux slices and store setup for state management.
- `src/utils`: Utility functions and API helper.
- `static`: Static assets like images and icons.

## Stack

- [Next.js](https://nextjs.org/): React framework for building web applications with server-side rendering.
- [React](https://reactjs.org/): JavaScript library for building user interfaces.
- [Redux](https://redux.js.org/): State management library for JavaScript apps.
- [Redux tool kit Query](https://redux-toolkit.js.org/rtk-query/overview): data fetching and caching tool for Redux.
- [TypeScript](https://www.typescriptlang.org/): Typed superset of JavaScript that compiles to plain JavaScript.
- [MUI](https://mui.com/): React components for faster and easier web development.
- [Vitest](https://vitest.dev/): Vite-native unit test framework.


## Setting Up

Insert your environment variables.

## Run Locally

Clone the Unith-Imgur repository:

```bash
git clone https://github.com/your-username/unith-imgur.git
cd unith-imgur
```
install dependencies

```bash
npm install
```



# Unith

## Getting Started

First, run the development server:

```bash
npm run dev
```


### Using Docker

1. [Install Docker](https://docs.docker.com/get-docker/) on your machine.
1. run your dev container: `docker compose -f compose.dev.yaml up --build`.

```bash
docker compose -f compose.dev.yaml up --build
```


1. Run your production container: `docker compose up --build`.

```bash
docker compose up --build
```
