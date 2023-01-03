import { Box, Button, Input, Spinner, Text } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'
import "../App.css"
import axios from "axios"
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
const Notice_Page = () => {

const [notice, setNotice]=useState("")

const [data, setData]=useState([])
const [loading,setLoading] = useState(false)

const navi=useNavigate()

console.log("Notice",notice.length)

function getData(){
    setLoading(true)
    return axios.get(`https://noticeapp-production-e835.up.railway.app/notice`)
         .then((res)=>{setData(res.data)
        setLoading(false)
        })
         .catch((err)=>console.log(err))
}
console.log("Data123",data)
function submitData(){
    setLoading(true)
    const user = localStorage.getItem("_U_s_e_r_")
    if(user){
        
        const payload={
            Notice:notice,
            UserName:user
        }
    
        return axios.post(`https://noticeapp-production-e835.up.railway.app/notice`, payload)
              .then((res)=>{
                alert("Notice added successfull"),
                getData()
                setNotice("")
                setLoading(false)
               
              })
               .catch((e)=>{
                console.log(e)
               })

              

    }
    else{
        alert("Please login first to post a Notice")
        navi("/")
    }
}


useEffect(()=>{
    getData()
},[])


  return (
    <Box>
            <Box className='usernameBox' > 
                <Text>Enter Notice for {localStorage.getItem("_U_s_e_r_")}</Text><br />
                <Input placeholder='Enter Your Notice'  value={notice} onChange={(e)=>setNotice(e.target.value)}/>
                <Button className='btnLogin' bg={"black"} _hover={{bg:"teal"}} onClick={submitData} display={notice.length >= 100 ? "block":"none"} >Submit</Button>

            </Box>
            {
                            loading && <Box zIndex={'2'} opacity='0.8' display={'grid'} position='fixed' bottom='0px' placeContent='center' w='100vw' h='100vh' bg='grey'><Spinner color='#fff' size='xl' /></Box>
                        }
            <Box className='mainBox'>
                {
                        data?.map((e)=>{
                            return(
                                <Box className='noticeBox'>
                                    <Text>{e.Notice}</Text>
                                   <Box className='notic1'>
                                   <h4 className='noticeh4'>{e.UserName}</h4>
                                   <h4 className='noticeh4'>{new Date(e?.createdAt).toDateString()} {","}{new Date(e?.createdAt).getHours()>=12?(((new Date(e?.createdAt).getHours())-12)+":"+new Date(e?.createdAt).getMinutes()+" PM") :(new Date(e?.createdAt).getHours()+":"+new Date(e?.createdAt).getMinutes()+" AM")}</h4>
                                   </Box>
                                </Box>
                            )
                        })
                }
            </Box>
    </Box>
  )
}

export default Notice_Page
