import React, { memo, useRef, useEffect, useState, useContext } from 'react'
import ChildThree from './ChildThree';
import { LangContext } from '../../App';

const Child = ({details}) => {
  const [childValue, setChildValue] = useState(null)
  const lang = useContext(LangContext)
  const childRef = useRef();
  const [list, setList] = useState([])

  console.log('list', list)

  const addToList = () => {
    const newList = [...list, { name: `${Date.now()}`}]
    setList(newList)
  }

  const handleRemove = (index) => {
    const newList = [...list]
    newList.splice(index, 1)
    setList(newList)
  }

  useEffect(() => {
    if (!childRef) return;

    setChildValue(childRef.current.innerText)
  }, [childRef])

  return (
    <div ref={childRef} className="child">
      {lang.child}

      <button onClick={addToList}>Add</button>
      {list.map((item, index) => <div>{item.name} <span onClick={() => handleRemove(index)}>X</span></div>)}
      <ChildThree/>
    </div>
  )
}

export default memo(Child)