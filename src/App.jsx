import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './Component/Header/Header'
import Home from './Component/Home/Home'
import Posts from './Component/Posts/Posts'
import About from './Component/About/About'
import Postdetail from './Component/Postdetail/Postdetail'


function App() {

  return (
    <>
    <BrowserRouter>
    <Header></Header>
    <Routes>
      <Route path='/' element={<Home></Home>}/>
      <Route path='/home' element={<Home></Home>}/>
      <Route path='/posts' element={<About></About>}/>
      <Route path='/postdetail/:id' element={<Postdetail></Postdetail>}/>
      <Route path='*' element={'ERROR 404'}/>
    </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App
