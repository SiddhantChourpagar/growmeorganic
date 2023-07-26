import FirstPage from './components/FirstPage'

import { BrowserRouter,Routes,Route} from "react-router-dom";
import SecondPage from './components/SecondPage';

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      
      <Route path='/' element={<FirstPage></FirstPage>}></Route>
      <Route path='/second-page' element={<SecondPage></SecondPage>}></Route>     
      </Routes>    
    
    
    </BrowserRouter>
          
    </>
  )
}

export default App
