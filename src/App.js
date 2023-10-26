import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import GetBooks from './components/GetBooks';
import GetBookById from './components/GetBookById';
import AddBook from './components/AddBook';
import DeleteBook from './components/DeleteBook';
import EditBook from './components/EditBook';
import {Routes,Route} from 'react-router-dom'
function App() {
  return (
    <div className="">
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/books' element={<GetBooks/>} />
        <Route path='/getbook' element={<GetBookById/>}/>
        <Route path='/addBook' element={<AddBook/>}/>
        <Route path='/deletebook'element={<DeleteBook/>}/>
        <Route path='/editbook' element={<EditBook/>} />
      </Routes>
    </div>
  );
}

export default App;
