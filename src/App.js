
import './App.css';
import Home from './Pages/Home';
import Footer from './Pages/Footer';
import SellingBox from './components/SellingBox';
import { Route, Routes } from 'react-router-dom';
import BookView from './components/BookView';

import FreeBooks from './components/FreeBooks';
import OnlyUserBook from './components/OnlyUserBook';
import Auth from './Pages/Auth';



function App() {
  return (
      
    <div >
      
      <Routes>
        {/* initialy  we have login and to click login and  register */}
        <Route path='/' element={<Auth />}/>
        <Route path='/register' element={<Auth register/>}/>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/bookselling' element={<SellingBox />}/>
        <Route path='/bookview' element={<BookView/>}/>
        <Route path='/freebooks' element={<FreeBooks/>}/>
        <Route path='/userbook'element={<OnlyUserBook/>}/>
      </Routes>
      <Footer/>

    </div>
  );
}

export default App;
