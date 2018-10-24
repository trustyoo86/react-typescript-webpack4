'use strict';

import 'babel-register';
import 'babel-polyfill';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
/* eslint-disable */
var testContext = require.context('../src', true, /-spec\.tsx$/);
testContext.keys().forEach(testContext);