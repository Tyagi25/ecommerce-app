import './App.css'
import {Routes,Route} from 'react-router'
import { HomePage } from './Pages/HomePage'

function App() {

  return (
    <Routes>
      <Route path="/" element={<HomePage />}/>
      <Route path="checkout" element={<div>Welcome to CheckOut Page</div>}/>
    </Routes>
  )
}

export default App
