import Registration from './components/Registration';
import Login from './components/Login';
import NavigationBar from './components/NavigationBar';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Shop from './components/Shop';

function App() {
  return (
    <div>
     <BrowserRouter>
      <NavigationBar/>
      <Routes>
          <Route path = "/" element = {<Shop/>}/>
          <Route path = "/registration" element = {<Registration/>}/>
          <Route path = "/login" element = {<Login/>}/>
      </Routes>
     </BrowserRouter>      
    </div>
  );
}

export default App;
