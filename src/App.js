import './App.css';
import { Route, Routes } from 'react-router-dom';

import FontPage from '../src/Pages/Home/FontPage/FontPage'
import About from '../src/Pages/About/About'
import Header from '../src/Pages/Shared/Header/Header'
import Footer from '../src/Pages/Shared/Footer/Footer'
import Services from '../src/Pages/Home/Services/Services'
import Service from '../src/Pages/Home/Service/Service'
import Login from '../src/Pages/Login/Login'
import Register from '../src/Pages/Login/Register'
import NotFound from '../src/Pages/404/NotFound'


function App() {
  return (
    <div className="App">

      <Header></Header>
      <Routes>
        <Route path='/' element={<FontPage></FontPage>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/service' element={<Services></Services>}></Route>
        <Route path='/service' element={<Service></Service>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>

    </div>
  );
}

export default App;
