# Contributing to Floik

We welcome contributions to Floik. Please read this guide to understand how you can help build and improve the portal and community system.

## Code of Conduct

By participating in this project, you agree to abide by our Code of Conduct. Please read the full code in the CODE_OF_CONDUCT.md file at the root of the repository.

## Getting Started

To contribute to this project, start by setting up the codebase locally.

1. Fork the repository and clone it to your local machine.
2. Ensure you have Node.js 18 or higher installed on your system.
3. Establish your PostgreSQL database and prisma configurations as described in our getting started docs.
4. Run the API server, landing app, and web portal Client in development mode.

## Development Workflow

We follow standard git branching workflows.

1. Create a new branch with a descriptive name starting with feat/, fix/, chore/, or docs/. E.g. feat/add-oauth-provider.
2. Make your edits and ensure that linting rules pass. Run npm run lint in the packages you edit.
3. Test your changes locally to ensure there are no regressions.
4. Push your branch to GitHub and open a Pull Request.

## Pull Request Guidelines

To make reviews efficient, please stick to these rules:

* Write clear and descriptive commit messages.
* Keep pull requests focused on a single change. Avoid mixing unrelated bug fixes or features in a single PR.
* Write unit tests for new business logic when applicable.
* Keep formatting consistent. Do not run auto-formatting rules that change major portions of files you did not edit.
* Verify that Next.js client-side code does not introduce validation or hydration conflicts.

## Project Structure

Floik is organized as a monorepo-adjacent layout with three main components:
* floik_api: Main Express, TypeScript backend and Prisma client.
* floik_web: Portal frontend built on Next.js and Tailwind.
* floik_landing: Marketing and public-facing site.
