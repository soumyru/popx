import styled from "styled-components"

const Welcome = () => {
  return (
    <WelcomeDiv className='welcome'>
        <h1>Welcome to PopX</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    </WelcomeDiv>
  )
}

export default Welcome

const WelcomeDiv=styled.div`

h1{
  font-size: 24px;
}
    p{
        color: gray;
        margin-bottom:20px;
        margin-top: 8px;
        width: 70%;
    }
`