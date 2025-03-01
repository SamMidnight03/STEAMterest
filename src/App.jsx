import { BrowserRouter, Route, Routes } from 'react-router'
import '/App.css'
import Header from '/Components/Header'
import Explorar from '/Pages/Explorar'
import Registro from '/Pages/Registro'
import Login from '/Pages/Login'

function App() {

  return (
    <>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route index element={<Explorar/>}></Route>
          <Route path='Registro' element={<Registro/>}></Route>
          <Route path='LogIn' element={<Login/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
