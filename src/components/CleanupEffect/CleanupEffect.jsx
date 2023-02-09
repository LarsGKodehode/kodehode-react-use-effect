import { useEffect, useState } from "react"

function CleanupEffect() {
  const [count, setCount] = useState(0)

  /**
   * 
   */
  function incrementCount() {
    setCount(
      (oldCount) => oldCount + 1
    )
  }

  useEffect(
    () => {
      // Tells the window object that we want some code (callback)
      // to run at certain intervals
      const intervalID = setInterval(
        () => incrementCount(),
        1000
      )

      // Cleanup function to our interval
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