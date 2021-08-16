import { shallow } from 'enzyme';
import React from 'react';
import { GifExpertApp } from '../GitExpertApp';

describe('<GifExpertApp /> Component', () => {
  test('should be show component', () => {
    const wrapper = shallow(<GifExpertApp  />);
    expect(wrapper).toMatchSnapshot();
  });

  test('should be show categories list', () => {
    const categories = ['Manzana', 'Naranja', 'Pera'];
    const wrapper = shallow(<GifExpertApp defaultCategories={categories} />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('GifGrid').length).toBe(categories.length);
  });
});
