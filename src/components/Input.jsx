import styled from 'styled-components';
import sendMessageIcon from '../assets/sendMessageIcon.png';

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
  background-color: rgba(24, 12, 33, 0.5);
  padding: 8px;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: rgba(24, 12, 33, 0.4);
  }
`;

const Input = () => {
  return (
    <Container>
      <StyledInput type="text" placeholder="Type something ..." />
      <SendIcon src={sendMessageIcon} alt="Message Icon" />
    </Container>
  );
};

export default Input;
