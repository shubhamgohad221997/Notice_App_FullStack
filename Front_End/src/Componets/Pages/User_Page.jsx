import { Box, Button, Input, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "../App.css"

const User_Page = () => {

    const [text, setText] = useState('');

    const navigate=useNavigate()
 
    function handleInput(e){
      const { value } = e.target;
      
      const input1 = /^[A-Za-z0-9]+$/;
      if (value !== "" && input1.test(value)) {
        setText(value);
  
        console.log('Input: ', value);
      }
      else{



        alert("Only Enter Alphanumeric  ")

  
      }
      console.log(e.target.value)
    }

    console.log("Text :", text)
    function handleClick(){
    localStorage.setItem("_U_s_e_r_", text)
    navigate("/notice")

}


  return (
    <Box>
      <Box className='usernameBox'>
        <Text>Enter Your Username</Text><br />

        <Input placeholder='Enter UserName' onChange={(e)=>handleInput(e)}></Input>
        <Button  className='btnLogin' bg={"black"} _hover={{bg:"teal"}} onClick={handleClick}>Login</Button>
      </Box>
    </Box>
  )
}

export default User_Page
