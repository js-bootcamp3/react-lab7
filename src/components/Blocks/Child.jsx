import React, { memo, useRef, useEffect, useState, useContext } from 'react'
import ChildThree from './ChildThree';
import { LangContext } from '../../App';

const Child = ({details, show}) => {
  const [childValue, setChildValue] = useState(null)
  const lang = useContext(LangContext)
  const childRef = useRef();

  useEffect(() => {
    if (!childRef) return;

    setChildValue(childRef.current.innerText)
  }, [childRef])

  return (
    <div ref={childRef} className="child">
      {lang.child}
      <ChildThree show={show}/>
    </div>
  )
}

export default memo(Child)