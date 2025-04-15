# Contributing

Contributions are always welcome, no matter how large or small!

Before we go any further, I'll try my best to articulate my vision for this library. 

## Original Vision

I wanted the components in my app to feel alive. Small things like Buttons, lists, images and texts feel much better when they are visually interactive and responsive. Imagine playing a fighting game in which there is no hit animation on the enemy. It looks odd and unnatural. The same idea goes here and to achieve that, I came up with react-native-micro-interactions. 

This library provides all that in simple and subtle manner that is super easy to use and modify.

## How to contribute

I understand that this is a project that is still very young and open on both ends. So I have decided to define a structure so that contributing is a little easier. I am dividing the work into **four categories** - 

1) **Animations**: These include new micro animations that can be added to the arsenal. Keep in mind that these animations must be subtle and the animation options should be synonymous with the types that are already in use.

2) **Triggers**: These include additional triggers or changes to how triggers behave. As the userbase grows, triggers must also expand to make it more acceessible.

3) **Core**: Includes changes to the core **AnimatedWrapper** component or the several hooks and functionality that define the core of this library. I have spent most of my time trying to optimize it and build it in such a way that it is scalable. But once it starts to bottleneck the progress, we will need to update it.

4) **Other**: For the stuff that's left out.

**Note**: I am making this structure based on the current state of the library. I hope we reach a point when these guiding rails needs to be changed.

## PR Rules:

Just include which category the PR belongs to :)

Alright! Enjoy the rest of the default guidelines!

## Development workflow

This project is a monorepo managed using [Yarn workspaces](https://yarnpkg.com/features/workspaces). It contains the following packages:

- The library package in the root directory.
- An example app in the `example/` directory.

To get started with the project, run `yarn` in the root directory to install the required dependencies for each package:

```sh
yarn
```

> Since the project relies on Yarn workspaces, you cannot use [`npm`](https://github.com/npm/cli) for development.

The [example app](/example/) demonstrates usage of the library. You need to run it to test any changes you make.

It is configured to use the local version of the library, so any changes you make to the library's source code will be reflected in the example app. Changes to the library's JavaScript code will be reflected in the example app without a rebuild, but native code changes will require a rebuild of the example app.

You can use various commands from the root directory to work with the project.

To start the packager:

```sh
yarn example start
```

To run the example app on Android:

```sh
yarn example android
```

To run the example app on iOS:

```sh
yarn example ios
```

Make sure your code passes TypeScript and ESLint. Run the following to verify:

```sh
yarn typecheck
yarn lint
```

To fix formatting errors, run the following:

```sh
yarn lint --fix
```

Remember to add tests for your change if possible. Run the unit tests by:

```sh
yarn test
```

### Commit message convention

We follow the [conventional commits specification](https://www.conventionalcommits.org/en) for our commit messages:

- `fix`: bug fixes, e.g. fix crash due to deprecated method.
- `feat`: new features, e.g. add new method to the module.
- `refactor`: code refactor, e.g. migrate from class components to hooks.
- `docs`: changes into documentation, e.g. add usage example for the module..
- `test`: adding or updating tests, e.g. add integration tests using detox.
- `chore`: tooling changes, e.g. change CI config.

Our pre-commit hooks verify that your commit message matches this format when committing.

### Linting and tests

[ESLint](https://eslint.org/), [Prettier](https://prettier.io/), [TypeScript](https://www.typescriptlang.org/)

We use [TypeScript](https://www.typescriptlang.org/) for type checking, [ESLint](https://eslint.org/) with [Prettier](https://prettier.io/) for linting and formatting the code, and [Jest](https://jestjs.io/) for testing.

Our pre-commit hooks verify that the linter and tests pass when committing.

### Publishing to npm

We use [release-it](https://github.com/release-it/release-it) to make it easier to publish new versions. It handles common tasks like bumping version based on semver, creating tags and releases etc.

To publish new versions, run the following:

```sh
yarn release
```

### Scripts

The `package.json` file contains various scripts for common tasks:

- `yarn`: setup project by installing dependencies.
- `yarn typecheck`: type-check files with TypeScript.
- `yarn lint`: lint files with ESLint.
- `yarn test`: run unit tests with Jest.
- `yarn example start`: start the Metro server for the example app.
- `yarn example android`: run the example app on Android.
- `yarn example ios`: run the example app on iOS.

### Sending a pull request

> **Working on your first pull request?** You can learn how from this _free_ series: [How to Contribute to an Open Source Project on GitHub](https://app.egghead.io/playlists/how-to-contribute-to-an-open-source-project-on-github).

When you're sending a pull request:

- Prefer small pull requests focused on one change.
- Verify that linters and tests are passing.
- Review the documentation to make sure it looks good.
- Follow the pull request template when opening a pull request.
- For pull requests that change the API or implementation, discuss with maintainers first by opening an issue.
