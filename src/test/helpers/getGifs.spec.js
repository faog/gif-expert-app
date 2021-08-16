import { getGifs } from '../../helpers/getGifs';

describe('getGifs test', () => {
  test('should be 10 elements', async() => {
    const gifs = await getGifs('One Punch');
    expect(gifs.length).toBe(10);
  });

  test('should be 0 elements when dont have "category"', async() => {
    const gifs = await getGifs('');
    expect(gifs.length).toBe(0);
  });
});
