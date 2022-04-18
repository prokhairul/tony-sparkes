import './App.css';
import { Route, Routes } from 'react-router-dom';

import FontPage from './Pages/Home/FontPage/FontPage'
import About from './Pages/About/About'
import Header from './Pages/Shared/Header/Header'
import Footer from './Pages/Shared/Footer/Footer'
import Services from './Pages/Home/Services/Services'
import ServiceDetails from './Pages/ServiceDetails/ServiceDetails'
import Login from './Pages/Login/Login'
import Register from './Pages/Login/Register'
import NotFound from './Pages/404/NotFound'
import Blogs from './Pages/Blogs/Blogs';


function App() {
  return (
    <div className="App">

      <Header></Header>

      <Routes>
        <Route path='/' element={<FontPage></FontPage>}></Route>
        <Route path='/home' element={<FontPage></FontPage>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/services' element={<Services></Services>}></Route>

        <Route path='/services/:servicesId' element={<ServiceDetails></ServiceDetails>}></Route>

        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>

      <Footer></Footer>

    </div>
  );
}

export default App;
