import { useEffect, useState } from "react"

function CleanupEffect() {
  const [count, setCount] = useState(0)

  function incrementCount() {
    setCount(
      (oldCount) => oldCount + 1
    )
  }

  useEffect(
    () => {
      // Tells the window object that we want some code (the callback)
      // to run at certain intervals, this is outside of React
      const intervalID = setInterval(
        () => incrementCount(),
        1000
      )

      // setInterval will keep running, even if this component is destroyed
      // So we nead some way to cleanup after our self
      // This is what the returned callback is used for
      return () => {
        clearInterval(intervalID)
      }
    },
    [count]
  )

  return (
    <div>
      <h2>Cleanup effect</h2>
      <h3>{count}</h3>
      <button onClick={incrementCount}>increment</button>
    </div>
  )
}

export default CleanupEffect