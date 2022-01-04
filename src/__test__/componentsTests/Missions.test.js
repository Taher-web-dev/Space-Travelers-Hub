import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../redux/configureStore';
import Missions from '../../components/Mission/Missions';

describe('Missions', () => {
  it('renders correctly', () => {
    const tree = render(<Provider store={store}><Missions /></Provider>);
    expect(tree).toMatchSnapshot();
  });
});
