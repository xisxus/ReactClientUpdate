

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Footer } from './layer/Footer'
import { Nav } from './layer/Nav'
import { Home } from './Component/Home'
import { Product } from './Component/Product'
import { Create } from './Component/CreateProduct'

function App() {
 

  return (
    <div>
      <BrowserRouter>

        <Nav/>

        <Routes>
          <Route path='/' element= {<Home/>}/>
          <Route path='/product' element= {<Product/>}/>
          <Route path='/product/add' element= {<Create/>}/>
        </Routes>

        <Footer/>

      </BrowserRouter>
    </div>
  )
}

export default App
