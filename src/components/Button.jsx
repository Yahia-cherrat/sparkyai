// Button.js
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledButton = styled.button`
  border-style: solid;
  border-width: 2px;
  border-image: linear-gradient(to right, #FF3DFF, #EDBEC2, #734DED, #D84DD5) 1;
  padding: 5px; 
  background-color: #180C21;
  color: #F4F4F5;
  font-size: 14px;
  transition: .4s all ease-in-out;

  &:hover {
    background-color: #280C31;
    color: #FFFFFF;
    border-image: linear-gradient(to right, #D84DD5, #734DED, #EDBEC2, #FF3DFF) 1;
  }
`;

const Button = ({ children, onClick }) => {
  return (
    <StyledButton onClick={onClick}>{children}</StyledButton>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired, // Validate onClick prop as a function
};

export default Button;
