import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import NewsFeed from './components/NewsFeed';
import Header from './components/Header';

describe('App', () => {
  const app = shallow(<App />);

  it('renders properly', () => {
    expect(app).toMatchSnapshot();
  });

  it('contains a NewsFeed Component', () => {
    expect(app.containsMatchingElement(<NewsFeed />)).toEqual(true);
  });

  it('contains a Header Component', () => {
    expect(app.containsMatchingElement(<Header />)).toEqual(true);
  });
});
