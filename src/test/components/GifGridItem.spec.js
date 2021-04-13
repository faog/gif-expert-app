import React from 'react';
import { shallow } from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';

describe('<GifGridItem /> Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<GifGridItem />);
  });

  test('should be render <GifGridItem />', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
