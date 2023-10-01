
import './App.css';
import Create from './components/Create'
import Read from './components/Read'
import Update from './components/Update'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home';
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Routes>
        <Route index element={<Home/>} />
        <Route exact path="/Home" element={<Home />} />
          <Route exact path="/Create" element={<Create/>} />
          <Route exact path="/Read" element={<Read/>} />
          <Route exact path="/Update" element={<Update/>} />
        </Routes>
      </BrowserRouter>
      <Footer />
      

    </div>
  );
}

export default App;
