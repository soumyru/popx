import React from 'react'
import styled from 'styled-components'

const SignInForm = () => {
  return (
    <FormContainer>
        <form>
            <fieldset>
                <legend>Email Address</legend>
                {/* <label htmlFor="email"></label> */}
                <input type="email" placeholder='Email address' />
            </fieldset>
            <fieldset>
                <legend>Password</legend>
                {/* <label htmlFor="password"></label> */}
                <input type="password" placeholder='Email address' />
            </fieldset>
        </form>
    </FormContainer>
  )
}

export default SignInForm

const FormContainer=styled.div`
fieldset{
border-radius: 8px;

}
    input{
        border: none;
        outline: none;
        padding:6px;
    }
`