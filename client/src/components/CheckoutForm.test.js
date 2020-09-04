import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows


test("form shows success message on submit with form details", () => {
    render(<CheckoutForm />)
    const firstNameInput = screen.getByText(/first name:/i)

    fireEvent.change(firstNameInput, {target: {value: 'thomas'}})
});
