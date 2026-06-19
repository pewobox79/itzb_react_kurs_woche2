import {render, screen} from '@testing-library/react'
import "@testing-library/jest-dom"
import Greeting from "../components/Greeting";

describe("das sind alle meine tests", ()=>{

    test("zeigt einen Namen an", () => {

        render(<Greeting name='Peter' />)
        expect(screen.getByText("Hallo Peter")).toBeInTheDocument()

    })

    test("zeigt einen Datum an", () => {

        render(<Greeting name='Peter' />)
        expect(screen.getByText("Hallo Peter")).toBeInTheDocument()

    })
})