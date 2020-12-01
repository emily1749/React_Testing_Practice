// import { render, screen } from '@testing-library/react';
//we're using enzyme not testing library ehre
import App from './App';
import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

//set up enzyme's adaptor
Enzyme.configure({ adapter: new Adapter() });

//for TDD we want red tests before green tests

const setup = () => shallow(<App />);

const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test='${val}']`);

test('renders without error', () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, 'component-app');
  expect(appComponent.length).toBe(1);
});
test('renders button', () => {
  const wrapper = setup();
  const button = findByTestAttr(wrapper, 'increment-button');
  expect(button.length).toBe(1);
});
test('renders counter display', () => {
  const wrapper = setup();
  const counterDisplay = findByTestAttr(wrapper, 'counter-display');
  expect(counterDisplay.length).toBe(1);
});
test('counter starts at 0', () => {
  const wrapper = setup();
  const count = findByTestAttr(wrapper, 'count').text();
  expect(count).toBe('0');
});
test('clicking on button increments counter', () => {
  const wrapper = setup();

  //find the button
  const button = findByTestAttr(wrapper, 'increment-button');
  //click the button
  button.simulate('click');
  //find the display, and test that the number has been incremented
  const count = findByTestAttr(wrapper, 'count').text();
  expect(count).toBe('1');
});
// test('renders without crashing', () => {
//   const wrapper = shallow(<App />);
//   // expect(wrapper).toBeFalsy();
//   // expect(wrapper).toBeTruthy();

//   console.log(wrapper.debug());
//   // throw new Error;
// });
// // test('renders learn react link', () => {
// //   render(<App />);
// //   const linkElement = screen.getByText(/learn react/i);
// //   expect(linkElement).toBeInTheDocument();
// //   // throw new Error();
// // });
