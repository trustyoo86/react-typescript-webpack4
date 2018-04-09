import test from 'ava';
import * as React from 'react';
import { shallow, mount } from 'enzyme';

import About from './About';

test('shallow', t => {
  const wrapper = shallow(<About />);
  t.is(wrapper.contains(<span>Foo</span>), true);
});