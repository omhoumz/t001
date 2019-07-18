import React from 'react'
import { mount } from 'enzyme'

import Comp from './comp'

it('should render correctly', () => {
  const wrapper = mount(<Comp />)

  console.log(wrapper.html())
  expect(true).toBeTruthy()
})
