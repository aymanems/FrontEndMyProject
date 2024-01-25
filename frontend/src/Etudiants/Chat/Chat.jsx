import React from 'react'
import './chat.css'
function Chat() {
    const handleMessage=(e)=>{
        e.preventDefault()
    }
  return (
    <div className='cardChat'>
    
    <div className=''>
  
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