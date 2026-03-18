# js-interview-assessment

This is a React project bootstrapped with Vite, using Ant Design for UI components, SWR for data fetching, and Vitest for testing. It is fully TypeScript-enabled and includes ESLint and Prettier for code quality, along with Husky and lint-staged for pre-commit checks.

This project is primarily configured for **Yarn**, but **npm** also works.

**Requirements:**

- Node.js 24.14.0 or higher
- Yarn v1.22.22 or higher
- Docker (optional, for containerized setup)

## Environment Variables

Before running the project, you **must create a `.env` file in the root directory** based on the `.env.example` file.

Example `.env`:

```dotenv
VITE_API_URL=https://api.currencybeacon.com/v1
VITE_API_KEY=your_api_key_here
VITE_DEFAULT_CURRENCY_FROM=USD
VITE_DEFAULT_CURRENCY_TO=PLN
```

Replace `your_api_key_here` with your actual API key and set default currencies as needed.

**Note:** `.env` is required for the application to run correctly.

## Installation

1. Clone the repository:

```shell
git clone https://github.com/piotrgorak93/js-interview-assessment.git
cd js-interview-assessment
```

2. Install dependencies:

```shell
yarn install  (or npm install)
```

## Docker Setup

This project can be run inside a Docker container to simplify environment management.

1. Build the Docker image:

```shell
docker build -t js-interview-assessment .
```

2. Run the container with environment variables:

```shell
docker run --env-file .env -p 5173:5173 js-interview-assessment
```

## Available Scripts

### Development

`yarn dev` (or `npm run dev`)

Starts the Vite development server with hot reloading.

### Build

`yarn build` (or `npm run build`)
Builds the project for production in the `dist` folder.

### Preview

`yarn preview` (or `npm run preview`)
Serves the production build locally for testing.

### Linting & Formatting

`yarn lint` — Run ESLint

`yarn lint:fix` — Run ESLint with auto-fix

`yarn format` — Run Prettier

npm equivalents:

`npm run lint`

`npm run lint:fix`

`npm run format`

### Testing

`yarn test` — Run tests in browser preview mode

`yarn test:ci` — Run tests headless

`yarn test:coverage ` — Run tests with coverage

`yarn test:coverage:ci` — Run coverage headless

npm equivalents:

`npm run test`

`npm run test:ci`

`npm run test:coverage`

`npm run test:coverage:ci`

## Testing Notes

We use Vitest with vitest-browser-react for React hooks testing.

- Tests are located alongside source files.
- Coverage is collected via @vitest/coverage-v8.
- Example of testing `useApiClient`:

```ts
import { renderHook } from 'vitest-browser-react'
import { useApiClient } from './api-client'

await renderHook(() =>
  useApiClient('/url-with-params', { params: { a: 1, b: 2 } })
)
```

## Linting & Formatting

- ESLint with @eslint/js and React plugin
- Prettier for code formatting
- Husky + lint-staged run linting and formatting on pre-commit

### Run all linters

`yarn lint`

`yarn format`

npm equivalents:

`npm run lint`

`npm run format`
