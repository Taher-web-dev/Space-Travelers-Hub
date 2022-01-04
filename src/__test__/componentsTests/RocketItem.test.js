import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../redux/configureStore';
import RocketItem from '../../components/Rocket/RocketItem';

describe('RocketItem', () => {
  it('renders correctly', () => {
    const rocket = {
      id: 1,
      name: 'rocket_name',
      type: 'rocket_type',
      reserved: false,
      flickr_images: ['rocket_image'],
      description: 'rocket_description',
    };
    const tree = render(<Provider store={store}><RocketItem rocket={rocket} /></Provider>);
    expect(tree).toMatchSnapshot();
  });
});
