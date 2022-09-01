import React, { useState, useEffect, useCallback, useLayoutEffect, useRef, useContext } from 'react'
import './style.css';
import Child from './Child';
import ChildTwo from './ChildTwo';
import ChildThree from './ChildThree';
import { LangContext } from '../../App';

export default function Parent() {
  const [show, setShow] = useState(false)
  const [details, setDetails] = useState(0)
  const childTwoRef = useRef();
  const lang = useContext(LangContext)
  const detailsCallback = useCallback(() => {
  }, [details])
  
  useLayoutEffect(() => {
    console.log('use layout effect')
    setShow(true)
  }, [])

  useEffect(() => {
    console.log('use effect')
  }, [detailsCallback])

  const handleClick = () => {
    setDetails(details ? 0 : 1)
  }

  const handleShow = () => {
    alert('Show')
  }
  console.log('lang', lang)

  if (!show) {
    return 'Loading...'
  }
  
  return (
    <div className="parent" >
      <div>
        {lang.parent}
        <button onClick={handleClick}>Trigger</button>
      </div>

      <Child details={'text'} show={show}/>

      <div>
        <ChildTwo ref={childTwoRef} handleShow={handleShow} />
        <button onClick={() => childTwoRef.current.getValue()}>Change text</button>
      </div>
      <div>
        <ChildThree />
      </div>
    </div>
  )
}
