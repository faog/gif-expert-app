import React from 'react';
import { shallow } from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';

describe('<GifGridItem /> Component', () => {
  let wrapper;

  const props = {
    title: 'Un titulo',
    url: 'https://localhost/algo.jpg'
  };

  beforeEach(() => {
    wrapper = shallow(<GifGridItem {...props} />);
  });

  test('should be render <GifGridItem />', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should be render a paragraph with title', () => {
    const p = wrapper.find('p');
    expect(p.text().trim()).toBe(props.title);
  });

  test('should be have image equal to props', () => {
    const img = wrapper.find('img');
    expect(img.prop('src')).toBe(props.url);
    expect(img.prop('alt')).toBe(props.title);
  });

  test('should be have card class', () => {
    const div = wrapper.find('div');
    expect(div.hasClass('card')).toBe(true);
  });
});
