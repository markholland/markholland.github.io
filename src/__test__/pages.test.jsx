import * as React from 'react'

import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Page from '../pages/404'

test('404 page renders', () => {
  const wrapper = shallow(
    <Page />
  )
  expect(toJson(wrapper)).toMatchSnapshot();
})
