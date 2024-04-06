import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const LoginButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/sign-in-page');
  };

  return (
    <Button onClick={handleClick}>Already Registered? Login</Button>
  )
}

export default LoginButton;

const Button=styled.button`
    background-color: #9fa3a8;
    padding: 20px 50px;
    text-align: center;
    border-radius: 10px;
    margin: 8px auto;
    border: none;
    width: 100%;
    cursor: pointer;

`