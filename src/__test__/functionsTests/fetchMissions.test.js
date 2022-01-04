import { fetchData } from '../../redux/missions/thunk/thunk';

describe('FetchMissions', () => {
  test('gets the correct data', async () => {
    const responce = await fetchData();
    const data = await responce.json();
    expect(data).toBeInstanceOf(Array);
    expect(data[0]).toBeInstanceOf(Object);
    expect(data[0].id).not.toBeNull();
  });
});
