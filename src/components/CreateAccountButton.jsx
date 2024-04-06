import styled from "styled-components"
import { useNavigate } from 'react-router-dom';


const CreateAccountButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/sign-up-page');
  };
  return (
    <Button onClick={handleClick}>Create Account</Button>
  )
}

export default CreateAccountButton

const Button=styled.button`
    background-color: #573ca8fb;
    padding: 20px 50px;
    color: white;
    text-align: center;
    border-radius: 10px;
    margin: 8px auto;
    border: none;
    width: 100%;
    cursor: pointer;
`
