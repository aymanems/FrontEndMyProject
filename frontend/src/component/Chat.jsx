import React from 'react'
import '../css/chat.css'
function Chat() {
    const handleMessage=(e)=>{
        e.preventDefault()
    }
  return (
    <div className='cardChat'>
    
    <div className=''>
    <Stack sx={{
      width:'100px',
      height:'100px',
      border:'1px solid black'
    }}>aaaa</Stack>
    </div>


    <div >
        <form  className='formChat'onSubmit={handleMessage} action="">
            <input className='chat'  type="text" placeholder='Message'  />
           <button style={{backgroundColor:'#f0f2f5'}} type="submit"> <i className='bx bxs-send chatIcon' ></i></button>
        </form>
    </div>
    </div>
  )
}

export default Chat