import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { shallow } from 'enzyme';
/*
test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});*/
/*
it('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});*/

it('renders my app compoenent', () => {
  shallow(<App />);
});


/*
it('renders eact link', () => {
  
  expect(2+2).toEqual(4);
});*/
describe('App Component  ', () => {
  it(' it should render without  errors', () => {
    const Component = shallow(<App />);
    const wrapper = Component.find('.App');
    expect(wrapper.length).toBe(2);
  });

  it(' it should render without  errors', () => {
    const Component = shallow(<App />);
    const wrapper = Component.find('.container');
    expect(wrapper.length).toBe(1);
  });


});










 








