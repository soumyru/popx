import React from 'react'
import styled from 'styled-components'
const AccountPage = () => {
  return (
    <>
<div className='top' style={{backgroundColor:"white"}}>
        <h3 style={{fontWeight: 600}}>Account Settings</h3>
    </div>
    <AccountContainer>
    <div className='profile'>
        <div className="image">
            <img src="" alt="image" />
            <div className='name'>
                <h4>Marry Doe</h4>
                <p>Marry@Gmail.com</p>
            </div>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam fuga aspernatur facere deserunt, molestiae similique?</p>
    </div>
    </AccountContainer>
    </>
  )
}

export default AccountPage

const AccountContainer=styled.div`
background-color: #f2f2f2;
padding: 20px;
*{
background-color: #f2f2f2;
}

.image{
        margin: 30px;
        display: flex;
}
.image img{
    margin-right: 20px;
    border-radius: 50%; 
    border: 1px solid black;
    height: 100px;
    width: 100px;
}
    .name h4{
        margin-bottom: 10px;
    }

p{
    margin-bottom: 20px;
}
    .profile{
        border-bottom: dashed grey;
    }

`