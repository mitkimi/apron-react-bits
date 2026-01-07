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