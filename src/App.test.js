// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

import App from './App';
import {render,screen} from '@testing-library/react'
test('its rendering a heading',()=>{
  render(<App></App>)
  const headingelement = screen.getByText('hello');
  expect(headingelement).toBeInTheDocument()
})
// test('check heading',()=>{
//   render(<App></App>)
//   const paraelement = screen.getByRole('paragraph')
//   console.log(paraelement);
//   expect(paraelement).toBeInTheDocument()
// })

// render,select,interact,result-match- by assertion