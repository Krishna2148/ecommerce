import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Card from '../Components/Card'
import { useState } from 'react'

const Home = () => {
  let items = useSelector(store => store.itemStore.items)

  let [count, setCount] = useState(8)
  let [search, setSearch] = useState('')
  let [filteredResult, setFilteredResult] = useState([])

  let dispatch = useDispatch()

  const load_data = () => {
    fetch(`https://dummyjson.com/products`)
      .then((response) => response.json())
      .then(data => dispatch({ type: "LOAD_DATA", payload: data.products }))
      .catch((err) => console.log(err))
  }
  useEffect(load_data, [count])
  const filterProducts = () => {
    setFilteredResult(
      items.filter(item => item.title.toLowerCase().match(search.toLowerCase()))
    )
  }



  return (
    <>
      <div className="bg-secondary-subtle py-2">
        <input type="search" className='form-control w-50 m-auto' placeholder="enter your seach here...!"
          onChange={e => setSearch(e.target.value)} onKeyUp={filterProducts} />
      </div>
      <div className="container my-3 p-4">
        <div className='row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4'>
          {
            search?.length > 0 ?
             filteredResult.length > 0 ?
             filteredResult?.slice(0, count).map((item, i) => {
                return <Card key={i} item={item} />
              }) 
              :
              <div className="alert alert-danger text-center h4">No products found</div>
              :
              items.length > 0 && items.slice(0, count).map((item, i) => {
                return <Card key={i} item={item} />
              })
          }
        </div>
        {
          count < 30 ?
            <button className='btn btn-warning w-100 btn-small' onClick={() => { return setCount(count + 4) }}>Load More</button>
            :
            <div className="text-center h4">All items loaded</div>
        }
      </div>
    </>
  )
}

export default Home