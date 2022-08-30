import React, { useState, useEffect, useCallback } from 'react'
import './style.css';
import Child from './Child';

export default function Parent() {
  const [show, setShow] = useState(false)
  const [details, setDetails] = useState(0)

  const detailsCallback = useCallback(() => {
  }, [details])
  
  useEffect(() => {
    console.log('details', details)
  }, [detailsCallback])
  


  const handleClick = () => {
    setDetails(details ? 0 : 1)
  }

  return (
    <div className="parent">
      <div>
        Parent
        <button onClick={handleClick}>Trigger</button>
      </div>

      <Child details={'text'}/>
    </div>
  )
}
