import { useEffect } from 'react'
import { useSelector } from 'react-redux'


import {
  useGetAllPokemonsQuery,
} from './store/services/pokemon'

function App() {
  const count = useSelector(({ counter }) => counter.value)

  const { data, error, isLoading } = useGetAllPokemonsQuery()

  useEffect(() => {
    console.log('list pokemon => ', data)
  }, [data])
  

  return (
    <>
      <h1>
        Vite + React: count is {count}
      </h1>

      <div>
        {error ? (
          <>Oh no, there was an error</>
        ) : isLoading ? (
          <>Loading...</>
        ) : data ? (
          <>
            <h3>data receive</h3>
            {/* <h3>{data.species.name}</h3>
            <img src={data.sprites.front_shiny} alt={data.species.name} /> */}
          </>
        ) : null}
      </div>
    </>
  )
}

export default App
