# ZEALOUS ASSIGNMENT

## Email Validation -  [ Fronr-End Engineer Coding Test]


# zealous
## Packages

In the packages folder you find the following projects:

- ui: This package contains storybook and all UI components used in web
- web: This package contains the main project and imports components from ui.

## Commands

### `yarn install`

run from the root to install the dependencies for all of the projects.

### `yarn build:ui`

This will transpile all components of the UI library to javascript. It is very important that you run this step before starting web.

### `yarn start:ui`

This command will start the development server for storybook. [Storybook](https://storybook.js.org/) is a place where you can develop react components in isolation. 

### `yarn test:ui`

This command will start the test runner for the component tests in the ui project.
Before writing your test you can start this service and write your test to green!

### `yarn start:web`

This command will start the development server for the main project, a web page.
We organise our code by domains:

    * domains
        * auth

## Assignment

After you start the web project you will see a panel with an input in the browser.
This is the start of a login screen that we are developing.

We would like you to add the following functionality:

- The input needs to accept an email
- If the user provides an value that does not conform with an email pattern
  then we want to show a message directly underneath the input informing him what is expected.

It is important that you conform to the standards that you come across in this repository.
