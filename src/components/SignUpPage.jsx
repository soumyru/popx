import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom';


const SignUpPage = () => {
    const navigate=useNavigate();

    const handleClick=()=>{
        navigate('/account-page');
    }
  return (
        <SignUpContainer>
        <h1>Create your PopX account</h1>
        <form action=''>
            <fieldset>
                <legend>Full Name</legend>
                <input type="text" placeholder='Enter full name' required />
            </fieldset>
            <fieldset>
                <legend>Phone Number</legend>
                <input type="number" placeholder='Enter phone number' required/>
            </fieldset>
            <fieldset>
                <legend>Email Address</legend>
                <input type="email" placeholder='Email address' />
            </fieldset>
            <fieldset>
                <legend>Password</legend>
                <input type="password" placeholder='Email address' />
            </fieldset>
            <fieldset>
                <legend>Company name</legend>
                <input type="email" placeholder='Enter Company name' />
            </fieldset>
            <p>Are you an agency?</p>
            <input type="radio" id="yes" name="agency" value="yes"/>
            <label htmlFor="yes">Yes</label>
            <input type="radio" id="no" name="agency" value="no"/>
            <label htmlFor="no">No</label>
        </form>
        <button onClick={handleClick}>Create an account</button>
    </SignUpContainer>
  )
}

export default SignUpPage

const SignUpContainer=styled.div`
padding: 20px;
background-color:#f2f2f2;


*{
    background-color: #f2f2f2;
}
fieldset{
    border-radius: 8px;
    outline: none;
    border: 1px solid gray;
    margin-bottom: 10px;
    color: #4f31ba;
}
input{
    border: none;
    outline: none;
    padding: 10px;
    margin-bottom: 8px;
}
p{
    margin-top: 14px;
    margin-bottom: 8px;
}
label{
    margin: 10px;
}
h1{
    width:70%;
}

form{
    margin-top: 20px;
}
button{
    background-color: #4f31ba;
    padding: 20px 50px;
    text-align: center;
    border-radius: 10px;
    margin: 8px auto;
    border: none;
    width: 90%;
    cursor: pointer;
    color: white;
    display: flex;
    position: relative;
    justify-content: center;
}
`