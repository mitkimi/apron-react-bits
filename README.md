# @apron-design/react

A modern React component library with dynamic component installation via CLI.

## Installation

You can use our CLI to dynamically add components to your project:

```bash
npx @apron-design/cli add @apron-react-bits/LogoParticleGather
```

Or install components directly:

```bash
npm install @apron-design/react-logo-particle-gather
# or
yarn add @apron-design/react-logo-particle-gather
# or
pnpm add @apron-design/react-logo-particle-gather
```

## Usage

After installation, you can import and use the component:

```jsx
import { LogoParticleGather } from '@apron-design/react-logo-particle-gather';

function App() {
  return (
    <div>
      <LogoParticleGather />
    </div>
  );
}
```

## Available Components

- `@apron-react-bits/LogoParticleGather` - A particle effect component for logo animations

To add this component to your project:

```bash
npx @apron-design/cli add @apron-react-bits/LogoParticleGather
```

## CLI Commands

- `npx @apron-design/cli add <component>` - Add a component to your project
- `npx @apron-design/cli add <component> -d` - Add a component as dev dependency

## Deployment with Base Path

The website is configured to use the `/apron-react-bits` prefix by default for GitHub Pages deployment at https://mitkimi.github.io/apron-react-bits.

```bash
# Build with base path (automatically applied)
yarn build

# Or using npm
npm run build
```

The base path is always active in the configuration, which applies the `/apron-react-bits` prefix to all routes and assets.