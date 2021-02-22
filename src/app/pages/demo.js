import React, { useState, useEffect } from 'react'

function Example() {
  const [count, setCount] = useState(5)

  useEffect(() => {
    console.log('sss')
    // console.log(chatAPI)
    document.title = `You clicked ${count} times`;
  })
  return (
    <div>
      <p>You Clicked {count} times</p>
      <button onClick={() => setCount(6)}>
        Click me
      </button>
    </div>
  )
}
export default Example