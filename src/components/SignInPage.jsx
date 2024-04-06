import React from 'react'
import styled from 'styled-components'
import SignInForm from './SignInForm'
import { useNavigate } from 'react-router-dom';

const SignInPage = () => {
  const navigate=useNavigate();

  const handleClick=()=>{
      navigate('/account-page');
  }
  return (
    <SignInContainer>
        <h1>Signin to your PopX account</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        <SignInForm/>
        <button onClick={handleClick}>Login</button>
    </SignInContainer> 
  )
}

export default SignInPage

const SignInContainer=styled.div`
background-color:#f2f2f2;
*{
  background-color:#f2f2f2;
}
padding: 20px;

    h1,p{
        margin-bottom:10px;
        width: 70%;
    }
    p{
      color: gray;
    }
    fieldset{
      margin: 10px 0;
      border: gray 1px solid;
    }

    button{
      background-color: #c2c2c2;
      padding: 15px;
      width: 100%;
      border-radius: 8px;
      color: white;
      border: none;
      cursor: pointer;
    }
`