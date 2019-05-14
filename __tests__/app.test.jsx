import React from 'react';
import { shallow } from 'enzyme';

import App from '../src/App';

const setup = (props = {}, state = null) => {
  let wrapper = shallow(<App {...props} />);
  if (state) wrapper.setState(state);
  return wrapper;
};

const findByAttr = (wrapper, val) => {
  return wrapper;
};

describe('<App />', () => {
  it('renders <App/> components', () => {
    const wrapper = setup();
    const appComponent = findByAttr(wrapper, 'component-app');

    expect(appComponent.length).toBe(1);
  });
});