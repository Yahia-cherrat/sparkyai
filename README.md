## **SparkyAI Chat Application**

Welcome to the SparkyAI Chat Application repository! This application provides a user interface to interact with an AI-powered chatbot. Users can send prompts, receive responses, and view chat history.

##Table of Contents
  - Features
  - Technologies Used
  - Components Overview
  - Context and State Management
  - Additional Notes

  ## Features

- **Chat Interface**:
  - Type and send prompts to the chatbot.
  - View responses with a typing effect.
  
- **Sidebar**:
  - Displays a history of previous prompts.
  
- **Navigation**:
  - Toggle sidebar visibility.
  - Start a new chat session.

## Technologies Used

- **React**: Frontend JavaScript library for building user interfaces.
- **Styled-components**: CSS-in-JS library for styling React components.
- **Context API**: For state management across the application.
- **Gemini API**: API used to process and respond to chat prompts.



## Components Overview

### `App`

- **Description**: Root component managing sidebar visibility and providing context to child components.
- **Usage**: Controls sidebar visibility and provides context to `Main` component.

### `Main`

- **Description**: Main chat interface displaying chat history, chatbot responses, and user input field.
- **Usage**: Receives context from `ContextProvider` to manage chat interaction.

### `Sidebar`

- **Description**: Displays a history of previous chat prompts.
- **Usage**: Uses context to access and display `prevPrompts`.

### `Input`

- **Description**: Input field for users to type prompts and send them to the chatbot.
- **Usage**: Uses context to send user input to `onSent` function.

## Context and State Management

- **`ContextProvider`**:
  - Provides context to manage application state and functions.
  - Manages user input, chat history, loading state, and chat responses.
  - Implements typing effect for responses.

## Additional Notes

- **Typing Effect**:
  - The application implements a typing effect for chatbot responses using a timeout function.

- **Styling**:
  - Uses `styled-components` for component-based styling.

- **Future Improvements**:
  - Add user authentication and session management.
  - Implement more sophisticated AI capabilities for the chatbot.

