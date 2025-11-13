import React from 'react'

const Child = ({chooseMessage}) => {

    let msg = "hello i am an Indian"

  return (
    <>
        <div>
            <button className='btn btn-info' onClick={()=> chooseMessage(msg)}>Change Message</button>
        </div>
    </>
  )
}

export default Child