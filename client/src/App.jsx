import './App.css'
import {Routes, Route} from 'react-router-dom'
import Dashboard from './pages/Dashboard';
import Movies from './pages/Movies';
import Tvshows from './pages/Tvshows';
import Peoples from './pages/People';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Navbar from './components/Navbar'

function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='movies' element={<Movies/>}/>
        <Route path='tvshows' element={<Tvshows/>}/>
        <Route path='peoples' element={<Peoples/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='signup' element={<Signup/>}/>
      </Routes>
    </>
  )
}

export default App
