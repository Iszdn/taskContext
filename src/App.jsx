import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './Components/Main';
import { Route, Routes } from 'react-router-dom';
import WishList from './Components/WishlistPage';
import Layout from './Layout/MainLayout';


function App() {

  return (
    
  <Routes>
    <Route path='/' element={<Layout/>}>
<Route index element={<Main/>}/>
<Route path='/wishlist' element={<WishList/>}/>
</Route>
 </Routes>
         
    
  );
}

export default App;
