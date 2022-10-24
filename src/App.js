
import './App.css';
import { Routes,Route } from 'react-router';
import Main from './view/Main';
import Detail from './component/Detail';
import Search from './component/Search';



function App() {


  return (
    <>
    <Routes>
      <Route path="/" element={<Main/>}/>
      <Route path="/:id" element={<Detail/>}/>
      <Route path="/search" element={<Search/>}/>    

    </Routes>
    </>
  );
}

export default App;
