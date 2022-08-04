import { render, screen, fireEvent } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import ThemeContainer from "./ThemeContainer"


describe("<ThemeContainer/>", () => {
    it("Should render default theme correcctly", () => {
        render(<ThemeContainer />);
        const themeContainer = screen.getByTestId("theme-container")

        // is light default 
        expect(themeContainer).toHaveStyle({
            background: "#ddd",
            color: "#000"
        })
    })

    it("Should toggle to dark theme where toggle button click", () => {
        render(<ThemeContainer />);
        const themeContainer = screen.getByTestId("theme-container")
        const toggleButton = screen.getByRole("button", {
            name: "Toggle"
        })


        // click button 
        fireEvent.click(toggleButton)

        // verify theme
        expect(themeContainer).toHaveStyle({
            background: "#333",
            color: "#fff"
        })

        // disable button


        // toggle to them again
        userEvent.click(toggleButton)
        expect(themeContainer).toHaveStyle({
            background: "#ddd",
            color: "#000"
        })
    })

    it("Should disable toggle button when uncheck allow check box", () => {
        render(<ThemeContainer />);
        const allowToggleCheckBox = screen.getByRole("checkbox")
        const toggleButton = screen.getByRole("button", {
            name: "Toggle"
        })
        const themeContainer = screen.getByTestId("theme-container")

        // click button 
        userEvent.click(allowToggleCheckBox)

        // is toggle disable
        expect(toggleButton).toBeDisabled()

        // try to click button 
        userEvent.click(toggleButton)

        // is defalt theme
        expect(themeContainer).toHaveStyle({
            background: "#ddd",
            color: "#000"
        })

        // re-enable 
        userEvent.click(allowToggleCheckBox)

        // is toggle enable
        expect(toggleButton).toBeEnabled()
    })

    it()
})