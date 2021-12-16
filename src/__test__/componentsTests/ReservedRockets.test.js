import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../redux/configureStore';
import ReservedRockets from '../../components/myProfile/ReservedRockets';

describe('ReservedRockets', () => {
  it('renders correctly', () => {
    const tree = render(<Provider store={store}><ReservedRockets /></Provider>);
    expect(tree).toMatchSnapshot();
  });
});
