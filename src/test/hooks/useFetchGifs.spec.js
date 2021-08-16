import { renderHook } from '@testing-library/react-hooks';
import { useFetchGifs } from '../../hooks/useFetchGifs';

describe('useFetchGifs hooks', () => {
  test('should be return initial state', async() => {
    const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('Manzana'));
    const { data, loading } = result.current;
    await waitForNextUpdate();

    expect(data).toEqual([]);
    expect(loading).toBeTruthy();
  });

  test('should be return image array and loading=false', async() => {
    const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('Manzana'));
    await waitForNextUpdate();
    const { data, loading } = result.current;

    expect(data.length).toEqual(10);
    expect(loading).toBe(false);
  });

});
