import React, { useState, useEffect } from 'react'
import Header from '../../components/Header'
import Searchform from '../../components/AddPlant/searchForm'
import SearchResults from '../../components/Search/search'
import SucculentPhoto from '../../components/SucculentPhoto'
import { Col, Row, Container } from '../../components/Grid'

function Search () {
  const [search, setSearch] = useState('')
  const [results, setResults] = useState([])
  const [term, setTerm] = useState('')
  const [error, setError] = useState('')

  // When the component mounts, update the title to be Wikipedia Searcher
  useEffect(() => {
    if (!term) {
      return
    }

    setSearch('')
    console.log(search)
    const key = 'dFJuTGR0eWxpTTR5N2xXVTczWlMvZz09'
    const APIurl = 'https://cors-anywhere.herokuapp.com/https://trefle.io/api/species/?q=' + term + '&token=' + key

    fetch(APIurl, { crossOrigin: true, origin: 'http://localhost:3000' })
      .then(res => {
        res.json()
          .then(resp => {
            if (resp.length === 0) {
              throw new Error('No results found.')
            }
            if (resp.status === 'error') {
              throw new Error(res.data.message)
            }
            const plantArr = resp
            setResults(plantArr)
          }).catch(err => { throw err })
      }, [results])
      .catch(err => setError(err))

    setTerm('')

    console.log(term)
    console.log(search)
  })

  const clearForm = () => {
    setSearch('')
  }
  const handleInputChange = event => {
    setSearch(event.target.value)
  }

  const handleFormSubmit = event => {
    event.preventDefault()
    setTerm(search)
  }

  return (
    <div>
      <Row>
        <SucculentPhoto />
        <Searchform
          handleFormSubmit={handleFormSubmit}
          handleInputChange={handleInputChange}
          term={search}
        />
        <SearchResults results={results} />
      </Row>
    </div>
  )
};

export default Search