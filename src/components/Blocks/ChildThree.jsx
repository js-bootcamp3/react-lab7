import React, { useId, useTransition, useState, useContext } from 'react'
import { ThemeContext } from '../../App';

const ChildThree = props => {
  const id = useId();
  const inputId = useId();

  const [isPending, startTransition] = useTransition();
  const [count, setCount] = useState(0);
  
  function handleClick() {
    startTransition(() => {
      setCount(c => c + 1);
    })
  }

  const theme = useContext(ThemeContext);

  return (
    <>
      <div 
        id={id} 
        style={{ background: theme.background, color: theme.foreground, fontSize: theme.fontSze }}
      >
        <h1>ChildThree</h1>
        {isPending && 'Loading ...'}
        <button onClick={handleClick}>{count}</button>
      </div>
      
      <label htmlFor={inputId}>Name</label>
      <input type="text" id={inputId}/>
    </>
    
  )
}

export default ChildThree