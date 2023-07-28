
import './App.css';
import Gallery from './components/Gallery';
import SearchBar from './components/SearchBar';
import { useState, useRef } from 'react';
import { DataContext } from './context/DataContext'
import { SearchContext } from './context/SearchContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AlbumView from './components/AlbumView';
import ArtistView from './components/ArtistView';
import { Fragment } from 'react';

function App() {
  const [data, setData] = useState([])
  const [message, setMessage] = useState('Search for Music!')
  const API_URL = 'https://itunes.apple.com/search?term='
  const searchInput = useRef('')

  const handleSearch = (e, term) => {
    e.preventDefault()
    const fetchData = async () => {
      document.title = `${term} Music`
      const response = await fetch(API_URL + term)
      const resData = await response.json()
      if (resData.results.length > 0) {
        setData(resData.results)
      } else {
        setMessage('Not Found')
      }
    }
    fetchData()
  }


  return (
    <div className="App">
      {message}
      <Router>
        <Routes>
          <Route path='/' element ={
          <Fragment>
            <SearchContext.Provider value={{
              term: searchInput,
              handleSearch: handleSearch
            }}>
              <SearchBar />
            </SearchContext.Provider>
            <DataContext.Provider value={data}>
              <Gallery />
            </DataContext.Provider>
          </Fragment>
          }/>
          <Route path='/album/:id' element={<AlbumView/>}/>
          <Route path='/artist/:id' element={<ArtistView/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
