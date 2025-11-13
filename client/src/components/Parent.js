import React, {useState} from 'react'
import Child from './Child'

const Parent = () => {

    const [message, setMessage] = useState('Hello India')

    const chooseMessage = (message) => {
        setMessage(message)
    }

  return (
    <>
        <div>
            <h3>{message}</h3>
            <Child chooseMessage = {chooseMessage} />
        </div>
    </>
  )
}

export default Parent