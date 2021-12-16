import { fetchRocketsData } from '../../redux/rockets/thunk/thunk';

describe('Test if getRockets', () => {
  test('fetch the data', async () => {
    const data = await fetchRocketsData();
    expect(data).toBeInstanceOf(Array);
    expect(data[0]).toBeInstanceOf(Object);
    expect(data[0].id).not.toBeNull();
  });
});
