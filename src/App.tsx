import { Routes, Route } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Home from './components/Home/Home'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<Header />}>
          <Route index element={'About'} />
        </Route>
        <Route path='/projects' element={<Header />}>
          <Route index element={'Projects'} />
        </Route>
        <Route path='/connect' element={<Header />}>
          <Route index element={'Connect'} />
        </Route>
        <Route path='/*' element={'Not Found'} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
