import Greeting from "./Greeting";
import { render, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event";

describe('Greeting component', () => {
    test('renders Hello World as a text', () => {
        // 1) Arrange
        render(<Greeting />);
    
        // 2) Act
        // ... nothing
    
        // 3) Assert
        const helloWorldElement = screen.getByText('Hello World');
        expect(helloWorldElement).toBeInTheDocument();
    });

    test('renders good to see you if the btn was NOT clicked', () => {
        
        // Arrange
        render(<Greeting />);
        const outputElement = screen.getByText('good to see you', { exact: false });
        expect(outputElement).toBeInTheDocument();
    });

    test('renders "Changed!" if the btn was clicked', () => {
        render(<Greeting />);

        // Act
        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement)

        // Assert
        const outputElement = screen.getByText('Changed!', { exact: false });
        expect(outputElement).toBeInTheDocument();
    });

    test('"good to see you" is NOT visible after btn click', () => {
       // Arrange
       render(<Greeting />);
       
        // Act
        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement)

        // Assert
        const outputElement = screen.queryByText('good to see you', { exact: false });
        expect(outputElement).toBeNull();

    })


})

