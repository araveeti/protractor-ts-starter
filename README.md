# Protractor + TypeScript Starter Project

This is a starter project for Protractor for coding with TypeScript. It's intended for e2e automation test over webpages & Mobile webpages

## Technologies

The project uses:

    * TypeScript
    * Protractor
    * Jasmine
    * Appium (for mobile testing) [Optional]
    * nodeJS 9 (TS is configured for transpiling to ES6)

## How to use it

In order to use this starter project, you should clone this repository ande run `npm install` for download all project required dependencies.

Tests must be placed under the **specs/** directory.

You can provide multiple configurations in the root directory.

### Installing / Updating webdrivers for first time

The following command should be executed in order to get the webdrivers needed for testing

```bash
./node_modules/.bin/webdriver-manager update
```

### Running tests

_You should provide JS extension and not the *.TS due to protractor will run over transpiled TS sources._

```bash
tsc
npm test tmp/config-file.js
```

## Mobile Testing

These steps are mandatory as they install Appium and download web drivers.clear

```bash
./node_modules/.bin/webdriver-manager update --ios
./node_modules/.bin/webdriver-manager update --android
```

### iOS Native Testing

**Requirements**:

    * XCode
    * iOS Simulated Module downloaded
    * Homebrew installed
    * Install Carthage via homebrew `brew install carthage`

**JSON Capabilities Configuration:**

```json
capabilities: {
    browserName: 'safari',
    platformName: 'iOS',
    platformVersion: '11.1',
    automationName: 'XCUITest',
    deviceName: 'iPhone 7',
  },
```