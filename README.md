# Plateaumed's React Native Organization Guide

This documentation is a guide for contributing to this project, all the principles and guidelines must be adhered to, for consistency and ease of maintainance.

## Table of Contents

1.  [Getting started](#getting-started)
1.  [Folder Structure](#folder-structure)
1.  [Naming Conventions](#namingconventions)
1.  [Linting](#linting)
1.  [Git & Github Guide](#github)
1.  [Testing](#testing)
1.  [Recommended Extensions](#recommended-extensions)
1.  [Misc](#misc)

# Getting Started!

This [**React Native**](https://reactnative.dev) project is bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

> **Note**:
>
> - [_**Yarn**_](https://yarnpkg.com/getting-started) is used as the package manager.
> - [_**VsCode**_](https://code.visualstudio.com/download) is the recommended code editor for this project.

## Step 1: Clone project

Default branch:

```
$ develop
```

Clone this repo locally:

```
$ git clone https://github.com/Plateaumed/ehr-reactnative-mobile-v2.git
```

```
$ cd [Your root path]\ehr-reactnative-mobile-v2
```

## Step 2: Install dependencies

```
$ yarn install
```

If you are running app on iOS:

```
$ cd ios
```

```
$ pod install
```

Return to the project main directory:

```
$ cd ..
```

## Step 3: Run the Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

For Android:

```bash
yarn android
```

For iOS:

```bash
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Connected Android Device_ or _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator or connected your android device correctly.

## Congratulations! :tada:

You've successfully setup and run Neo. :partying_face:

**[⬆ back to top](#table-of-contents)**

# Folder structure

### Assets

This folder is where assets including but not limited to _fonts_, _icons (.svg)_ and _images (.png, .jpeg, .jpg, .gif)_ are kept. All assets are grouped as seen below.

```bash
  └───assets
     ├───fonts
     ├───images
     └───svg
```

### Components

A component is a folder with a structure as seen below:

```bash
   ───app-text-input
      ├───index.test.tsx
      ├───index.tsx
      ├───styles.ts
      ├───types.ts
      └───hook/hooks
```

_**<u>index.tsx</u>**: This file contains concrete implementation of the component._

_**<u>index.test.tsx</u>**: This file contains tests that validate concrete implementation of a component works as expected._

_**<u>styles.ts</u>**: As the name implies, it contains the various styles the component needs. This is created when inline styling grows beyond one._

_**<u>types.ts</u>**: This optional file contains various type definition a compoent needs._

_**<u>hook/hooks</u>**: A component can have a hook created to help with logic,this could be a file or folder depending on the scenario. kindly see the [hooks section](#hooks) to understand how this file or folder should be structured._

All globally resuable components are kept in this folder. Components are grouped by types as seen below. Components common to two or more component types are kept in the common folder as seen below.

```bash
 └──components
    ├───buttons
    │   ├───app-touch-button
    │   └───app-upload-button
    ├───common
    │   ├───app-loading
    │   ├───app-row
    │   ├───app-text
    │   └───display-image
    └───inputs
        ├───app-select-text-input
        └───app-text-input
```

### Constants

This folder contains code that would not change, ranging from mock-data, fixed-data like options in a bottom sheet or a sortby options. check files already existing in this directory to get a sense of what can go in.

### Doc

This folder serves as a gallery/catalog containing screen shots of components implemented in the code base. For every new component added, a screen shot of such component should be included under the **created-components** folder.

### Hooks

### Mocks

### Navigation

### Resources

### Screens

### State

### Types

### Utils

### Project Folder Structure Overview

```bash

 ├───assets
 │   ├───fonts
 │   ├───images
 │   └───svg
 ├───components
 │   ├───buttons
 │   │   ├───app-touch-button
 │   │   └───app-upload-button
 │   ├───cards
 │   │   └───status-label
 │   ├───common
 │   │   ├───app-loading
 │   │   ├───app-row
 │   │   ├───app-text
 │   │   └───display-image
 │   ├───forms
 │   │   ├───appointment-form
 │   │   ├───form-field-controller
 │   │   └───patient-form
 │   ├───headers
 │   │   ├───app-header
 │   │   └───auth
 │   ├───inputs
 │   │   ├───app-select-text-input
 │   │   ├───app-text-input
 │   │   └───app-toggle-switch
 │   └───sheets
 │       ├───app-content-sheet
 │       └───app-sheet
 ├───doc
 │   └───created-components
 ├───hooks
 │   ├───clinics
 │   └───patients
 ├───navigation
 │   ├───auth-stack
 │   ├───doctor
 │   │   ├───bottom-tab
 │   │   └───root-navigation
 │   └───routes
 ├───resources
 │   └───colors
 ├───screens
 │   ├───common
 │   │   └───auth
 │   │       └───login
 │   └───front-desk
 │       ├───bottom-tabs
 │       │   └──records
 │       └───stack-screens
 │           └──view-appointments
 ├───state
 │   ├───services
 │   └───slices
 │       └───auth
 ├───types
 │   ├───doctor
 │   └───frondesk
 └───utils
    ├───helpers
    └───localStorage
```

**[⬆ back to top](#table-of-contents)**

# Misc

If you're curious to learn more about React Native, check out the [Introduction to React Native](https://reactnative.dev/docs/getting-started).

### Troubleshooting

If you can't get this to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

### Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.
