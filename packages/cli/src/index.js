#!/usr/bin/env node
import { Command } from 'commander';
import { execa } from 'execa';
import ora from 'ora';
const program = new Command();
program
    .name('apron-react')
    .description('CLI for managing apron-design/react components')
    .version('1.0.0');
program
    .command('add')
    .description('Add a component to your project')
    .argument('<component>', 'Component name to add')
    .option('-d, --dev', 'Install as dev dependency')
    .action(async (component, options) => {
    console.log(`Adding component: ${component}`);
    // Determine the actual package name based on component name
    let packageName = component;
    // Handle different formats for component specification
    if (component.startsWith('@apron-react-bits/')) {
        // Convert @apron-react-bits/ComponentName to @apron-design/react-component-name
        const componentName = component.replace('@apron-react-bits/', '');
        const kebabCase = componentName
            .replace(/([a-z])([A-Z])/g, '$1-$2')
            .toLowerCase();
        packageName = `@apron-design/react-${kebabCase}`;
    }
    else if (!packageName.startsWith('@apron-design/react-')) {
        // Convert PascalCase to kebab-case for the package name
        const kebabCase = packageName
            .replace(/([a-z])([A-Z])/g, '$1-$2')
            .toLowerCase();
        packageName = `@apron-design/react-${kebabCase}`;
    }
    try {
        const spinner = ora({
            text: `Installing ${packageName}...`,
            spinner: 'clock'
        });
        spinner.start();
        // Determine which package manager is available
        let installCommand = 'npm';
        try {
            await execa('yarn', ['--version']);
            installCommand = 'yarn';
        }
        catch {
            try {
                await execa('pnpm', ['--version']);
                installCommand = 'pnpm';
            }
            catch {
                // Use npm as fallback
            }
        }
        // Install the package
        if (installCommand === 'yarn') {
            const args = ['add'];
            if (options.dev)
                args.push('--dev');
            args.push(packageName);
            await execa('yarn', args);
        }
        else if (installCommand === 'pnpm') {
            const args = ['add'];
            if (options.dev)
                args.push('-D');
            args.push(packageName);
            await execa('pnpm', args);
        }
        else {
            const args = ['install'];
            if (options.dev)
                args.push('--save-dev');
            args.push(packageName);
            await execa('npm', args);
        }
        spinner.succeed(`Successfully installed ${packageName}`);
        console.log(`\nYou can now import the component in your project:`);
        console.log(`import { ${getComponentNameFromPackage(packageName)} } from '${packageName}';`);
    }
    catch (error) {
        spinner.fail(`Failed to install ${packageName}`);
        console.error(error.message);
        process.exit(1);
    }
});
// Helper function to extract component name from package name
function getComponentNameFromPackage(packageName) {
    // Remove @apron-design/react- prefix and convert kebab-case to PascalCase
    const componentName = packageName.replace('@apron-design/react-', '');
    return componentName
        .split('-')
        .map(part => part.charAt(0).toUpperCase() + part.slice(1))
        .join('');
}
program.parse();
