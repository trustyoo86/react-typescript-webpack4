'use strict'

import * as React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import About from './About'

/* tslint:disable */
describe('<About />', () => {
  it ('about component without problem', () => {
    const component = shallow(<About />)
    expect(component).to.exist
  })
})
