import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Chat from './components/Chat';
import Join from './components/Join';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Join/>}/>
          <Route path='/chat' element={<Chat/>}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
