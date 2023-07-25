import React from 'react'
import ChatNav from './chatNav'
import ChatMessage from './chatMessage'
import SendMessage from './sendMessage'

const Chat = () => {
  return (
    <div className='chat'>
        <ChatNav/>
        <ChatMessage/>
        <SendMessage/>
    </div>
  )
}

export default Chat