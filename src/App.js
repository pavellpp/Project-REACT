import Home from './pages/Home'
import Api from './pages/Api'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import SharedLayout from './pages/SharedLayout'


const App = () => {
  return <BrowserRouter>
         <Routes>
             <Route path='/' element= {<SharedLayout />} >
              <Route index  element={ < Home />} />
             <Route path ='/Api' element= {<Api />} />
             </Route>
         </Routes>
         </BrowserRouter>
    
  
}

export default App
