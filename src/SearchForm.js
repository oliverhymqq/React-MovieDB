import React, { useState } from 'react'
import { useGlobalContext } from './context'
const SearchForm = () => {
  const { query, setQuery, error } = useGlobalContext()
  const [input, setInput] = useState('')
  //console.log(input)

  const handleSearch = (e) => {
    e.preventDefault()
    setQuery(input)
    console.log(query)
  }

  return (
    <form className="search-form" onSubmit={handleSearch}>
      <h2>search movies</h2>
      <input
        type="text "
        className="form-input"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button className="btn" type="submit" onClick={handleSearch}>
        search
      </button>
      {error.show && <div className="error">{error.msg}</div>}
    </form>
  )
}

export default SearchForm
