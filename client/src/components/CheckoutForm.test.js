import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows


test("form shows success message on submit with form details", async() => {
    render(<CheckoutForm />)
    const firstNameInput = screen.getByLabelText(/First Name:/i)
    const lastNameInput = screen.getByLabelText(/Last Name:/i)
    const addressInput = screen.getByLabelText(/Address:/i)
    const cityInput = screen.getByLabelText(/city:/i)
    const stateInput = screen.getByLabelText(/state:/i)
    const zipInput = screen.getByLabelText(/zip:/i)

    fireEvent.change(firstNameInput, {target: {value: 'thomas'}})
    fireEvent.change(lastNameInput, {target: {value: 'kim'}})
    fireEvent.change(addressInput, {target: {value: '111 high lane dr'}})
    fireEvent.change(cityInput, {target: {value: 'Orlando'}})
    fireEvent.change(stateInput, {target: {value: 'Florida'}})
    fireEvent.change(zipInput, {target: {value: '33333'}})

    const submitButton = screen.getByTestId(/submit/i)
    fireEvent.click(submitButton)

    const resultName = await screen.findByText(/thomas kim/i)
    expect(resultName).toBeInTheDocument()
    const resultAddress = await screen.findByText(/111 high lane dr/i)
    expect(resultAddress).toBeInTheDocument()
    const resultCity = await screen.findByText(/orlando/i)
    expect(resultCity).toBeInTheDocument()
    const resultState = await screen.findByText(/florida/i)
    expect(resultState).toBeInTheDocument()
    const resultZip = await screen.findByText(/33333/i)
    expect(resultZip).toBeInTheDocument()
});
