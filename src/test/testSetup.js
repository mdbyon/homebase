import { expect } from 'chai';
import { mount, render, shallow } from 'enzyme';

global.expect = expect;

global.mount = mount;
global.render = render;
global.shallow = shallow;

var jsdom = require('jsdom').jsdom;
var exposedProperties = ['window', 'navigator', 'document'];

global.document = jsdom('');
global.window = document.defaultView;
Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    exposedProperties.push(property);
    global[property] = document.defaultView[property];
  }
});

global.navigator = {
  userAgent: 'node.js'
};