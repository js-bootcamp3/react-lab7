import React, { memo } from 'react'

const Child = ({details}) => {
  console.log('child rendered', details)
  return (
    <div className="child">
      Child
    </div>
    
  )
}

export default memo(Child)