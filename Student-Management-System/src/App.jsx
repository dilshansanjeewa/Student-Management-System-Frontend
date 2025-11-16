import { Routes,Route } from 'react-router-dom'
import './App.css'
import Register from './components/pages/Register'
import Delete from './components/pages/Delete'
import Update from './components/pages/Update'

function App() {

  return (
    <>
    <Routes>
      <Route path='register' element={<Register/>}/>
      <Route path='update' element={<Update />}/>
      <Route path='delete' element={<Delete />}/>
    </Routes>
    </>
  )
}

export default App
