import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import LoginForm from '../components/LoginForm'

test("aktualisiert email wert", async ()=>{

    render(<LoginForm/>)

    const input = screen.getByLabelText("E-Mail")

    await userEvent.type(input, "peter@test.de")

    expect(screen.getByText("Eingabe: peter@test.de")).toBeInTheDocument()
})