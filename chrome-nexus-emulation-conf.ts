import {Config} from 'protractor';

export let config: Config = {
  framework: 'jasmine',
  capabilities: {
    browserName: 'chrome',
    chromeOptions: {
      mobileEmulation: {
        deviceName: 'Pixel 2',
      },
    },
  },
  specs: [ './specs/google-example-mobile-spec.js' ],
  
  // You could set no globals to true to avoid jQuery '$' and protractor '$'
  // collisions on the global namespace.
  noGlobals: true,
};