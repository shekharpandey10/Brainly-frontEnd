import React, { useEffect } from 'react'

function Test() {
    console.log('hello')
    useEffect(() => {
  console.log("Just logging after every render");
});
  return (
    <div>
      hello india
    </div>
  )
}

export default Test
