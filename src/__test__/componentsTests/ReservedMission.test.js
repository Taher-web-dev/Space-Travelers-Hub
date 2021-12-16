import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../redux/configureStore';
import ReservedMission from '../../components/myProfile/ReservedMission';

describe('ReservedMission', () => {
  it('renders correctly', () => {
    const tree = render(<Provider store={store}><ReservedMission /></Provider>);
    expect(tree).toMatchSnapshot();
  });
});
