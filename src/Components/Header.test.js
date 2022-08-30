import App from "../App";
import {render,screen} from '@testing-library/react';
import Header from './Header';
test('check whether is has data',()=>{
    render(<Header></Header>)
    const element = screen.getByText('some data')
    expect(element).toBeInTheDocument()
})