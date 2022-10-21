
import './App.css';
import { Routes,Route } from 'react-router';
import Main from './view/Main';
import List from './view/List';


function App() {


  return (
    <>
    <Routes>
      <Route path="/" element={<Main/>}/>
      <Route path="/:id" element={<List/>}/>
      
    </Routes>
    </>
  );
}

export default App;
