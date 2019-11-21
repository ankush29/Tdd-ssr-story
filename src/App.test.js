import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
  const app = shallow(<App />);

  it('renders properly', () => {
    expect(app).toMatchSnapshot();
  });

  it('contains a NewsFeed Component', () => {
    expect(app.find('NewsFeed').exists()).toBe(true);
  });

  it('contains a Header Component', () => {
    expect(app.find('Header').exists()).toBe(true);
  });
});
