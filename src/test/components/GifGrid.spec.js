import React from 'react';
import { shallow } from 'enzyme';
import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
import '@testing-library/jest-dom';
jest.mock('../../hooks/useFetchGifs');

describe('<GifGrid /> Component', () => {
  const category = 'Manzana';

  test('should be show component', () => {
    useFetchGifs.mockReturnValue({
      data: [],
      loading: true
    });

    const wrapper = shallow(<GifGrid category={category} />);
    expect(wrapper).toMatchSnapshot();
  });

  test('should be show items when useFetchGifs load ', () => {
    const gifs = [{
      id: 'ABC',
      title: 'Manzana',
      url: 'https://localhost/Manzana.jpg'
    }, {
      id: '123',
      title: 'Naranja',
      url: 'https://localhost/Naranja.jpg'
    }];

    useFetchGifs.mockReturnValue({
      data: gifs,
      loading: false
    });
    const wrapper = shallow(<GifGrid category={category} />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('p').exists()).toBe(false);
    expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
  });
});
