// import App from "../App";
import {render,screen} from '@testing-library/react';
import Header from './Header';
// import axiosMock from "axios";
describe('header test', () => {
    test('check whether is has data',async()=>{
        render(<Header></Header>)
        const element = screen.getByText('some data')
        // const a = screen.getByRole('heading')
        // expectg(a).
        expect(element).toBeInTheDocument()
    })
})

