import Login,{validateEmail} from "./Login";
import { screen,render,fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import '@testing-library/jest-dom'
describe('test login',()=>{
    test('render login page',async()=>{
        
        render(<Login></Login>)
        const buttonList = await screen.findAllByRole('button')
        expect(buttonList).toHaveLength(1) 
    })
})
