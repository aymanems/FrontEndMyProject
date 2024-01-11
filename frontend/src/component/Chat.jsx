import React from 'react'
import '../css/chat.css'
function Chat() {
    const handleMessage=(e)=>{
        e.preventDefault()
    }
  return (
    <div className='cardChat'>
    
    <div className=''>

    </div>


    <div>
        <form onSubmit={handleMessage} action="">
            <input className='chat' type="text" placeholder='Message'  />
        </form>
    </div>
    </div>
  )
}

export default Chat