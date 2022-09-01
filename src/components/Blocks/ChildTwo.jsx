import React, {useState, useImperativeHandle, forwardRef, useContext} from 'react'
import './style.css'
import { ThemeContext } from '../../App';

const ChildTwo = forwardRef((props, ref) => {
  const [text, setText] = useState('Child Two');
  const theme = useContext(ThemeContext);

  useImperativeHandle(ref, () => ({
    getValue() {
      const newText = text === 'Child Two' ? 'Second Child' : 'Child Two'
      setText(newText)
    }
  }))
  

  return (
    <div  
      style={{ background: theme.background, color: theme.foreground, fontSize: theme.fontSize }}
    >
      <div onClick={props.handleShow} className="child">{text}</div>
    </div>
  )
})

export default ChildTwo