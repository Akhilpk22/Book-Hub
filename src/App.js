
import './App.css';
import Home from './Pages/Home';
import Footer from './Pages/Footer';
import SellingBox from './components/SellingBox';
import { Navigate, Route, Routes } from 'react-router-dom';
import BookView from './components/BookView';

import FreeBooks from './components/FreeBooks';
import OnlyUserBook from './components/OnlyUserBook';
import Auth from './Pages/Auth';
import { useContext } from 'react';
import { tokenVerifyContext } from './Context/TokenVerify';



function App() {
  const {isAuthorized,setisAuthorized}= useContext(tokenVerifyContext)

  return (
      
    <div >
      
      <Routes>
        {/* initialy  we have login and to click login and  register */}
        <Route path='/' element={<Auth />}/>
        <Route path='/register' element={<Auth register/>}/>
        <Route path='/Home' element={isAuthorized?<Home/>:<Auth/>}/>
        <Route path='/bookselling' element={isAuthorized?<SellingBox />:<Auth/>}/>
        <Route path='/bookview' element={isAuthorized?<BookView/>:<Auth/>}/>
        <Route path='/freebooks' element={isAuthorized?<FreeBooks/>:<Auth/>}/>
        <Route path='/userbook'element={isAuthorized?<OnlyUserBook/>:<Auth/>}/>
        <Route path='/*' element={<Navigate to={'/'}/>}/>
      </Routes>
      <Footer/>

    </div>
  );
}

export default App;
