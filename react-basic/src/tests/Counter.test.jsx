import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import Counter from '../components/Counter'

describe("erhöht bei Klick den Count", ()=>{


    test("erhöht den Counter um 1 nach Klick", async () => {

        render(<Counter />)

        expect(screen.getByText("Count: 0")).toBeInTheDocument()

        await userEvent.click(screen.getByRole("button", { name: "Erhöhen" }))


        expect(screen.getByText("Count: 1")).toBeInTheDocument()

    })

    test("erhöht den Counter um 3 nach Klick", async () => {

        render(<Counter />)

        expect(screen.getByText("Count: 0")).toBeInTheDocument()

        await userEvent.click(screen.getByRole("button", { name: "Erhöhen" }))
        await userEvent.click(screen.getByRole("button", { name: "Erhöhen" }))
        await userEvent.click(screen.getByRole("button", { name: "Erhöhen" }))


        expect(screen.getByText("Count: 3")).toBeInTheDocument()

    })

})