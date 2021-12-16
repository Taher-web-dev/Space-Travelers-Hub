import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../redux/configureStore';
import MyProfile from '../../components/myProfile/myProfile';

describe('MyProfile', () => {
  it('renders correctly', () => {
    const tree = render(<Provider store={store}><MyProfile /></Provider>);
    expect(tree).toMatchSnapshot();
  });
});
