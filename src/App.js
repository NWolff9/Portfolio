import './App.css';
import Context from './componentes/Context';
import Footer from './componentes/Footer';
import Knowledge from './componentes/Knowledge';
import Navbar from './componentes/Navbar';
import Presentation from './componentes/Presentation';


function App() {
  return (
    <div className="App">
     <Navbar/>
     <Presentation/>
     <Context/>
     <Knowledge/>
     <Footer/>
    
    </div>
  );
}

export default App;
