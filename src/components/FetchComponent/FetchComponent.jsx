import { useEffect, useState } from "react"

const API_URL = "https://pokeapi.co/api/v2/pokemon"

async function fetchData(callback) {
  const response = await fetch(API_URL)
  const parsedData = await response.json()

  callback(parsedData.results)
}


function FetchComponent() {
  const [data, setData] = useState(null)

  // A hook we use for controlling when to do stuff
  useEffect(
    // A callback for the logic, if you need to do cleanup return another callback
    () => {fetchData(setData)},
    []
  )

  return (
    <ul>
      {
        data &&
        data.map((pokemon, index) => {
          return <li key={index}>{pokemon.name}</li>
        })
      }
    </ul>
  )
}

export default FetchComponent