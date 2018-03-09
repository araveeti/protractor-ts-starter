import {Config} from 'protractor';

export let config: Config = {
  seleniumAddress: 'http://127.0.0.1:4723/wd/hub',
  framework: 'jasmine',
  specs: [ './specs/google-example-mobile-spec.js' ],
  
  // You could set no globals to true to avoid jQuery '$' and protractor '$'
  // collisions on the global namespace.
  noGlobals: true,

  capabilities: {
    browserName: 'safari',
    platformName: 'iOS',
    platformVersion: '11.1',
    automationName: 'XCUITest',
    deviceName: 'iPhone 7',
  },
};