import 'babel-polyfill';
import enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

enzyme.configure({ adpater: new Adapter() });
const testContext = require.context('../src', true, /-spec\.tsx$/);
testContext.keys().forEach(testContext);