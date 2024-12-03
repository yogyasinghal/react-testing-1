import Counter from "./Counter";
import { screen,render,fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import '@testing-library/jest-dom'
describe('test counter',()=>{
    test('render login page',async()=>{
        
        render(<Counter></Counter>)
        // const buttonList = await screen.findAllByRole('button')
        const t = await screen.findByRole('heading')
        expect(t).toBeInTheDocument(); 
    })
})