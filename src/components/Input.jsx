import styled from 'styled-components';
import sendMessageIcon from '../assets/sendMessageIcon.png';
import { Context } from '../context/Context';
import { useContext } from 'react';

// Styled components for Input, Container, and SendIcon
const Container = styled.div`
  background-color: #1E1E38;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px;
  border-radius: 8px;
`;

const StyledInput = styled.input`
  width: 100%; 
  height: auto;
  margin-right: 8px;
  background-color: transparent;
  color: #f4f4f5;
  font-size: 14px;
  outline: none;
  border: none;
`;

const SendIcon = styled.img`
  background-color: rgba(24, 12, 33, 0.6);
  padding: 8px;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: rgba(24, 12, 33, 0.3);
  }
`;

const Input = () => {
  const { onSent, input, setInput } = useContext(Context);

  // Function to handle sending the input message
  const handleSend = () => {
    if (input.trim()) { // Check if the input is not empty before calling onSent function
      onSent(input);
    }
  };

  return (
    <Container>
      <StyledInput 
        type="text" 
        placeholder="Type something ..." 
        value={input} 
        onChange={(e) => setInput(e.target.value)} 
      />
      <SendIcon 
        src={sendMessageIcon} 
        alt="Message Icon"
        onClick={handleSend} 
      />
    </Container>
  );
};

export default Input;
