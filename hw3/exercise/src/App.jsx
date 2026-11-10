import { CharProvider } from './Info';
import { BrowserRouter, Routes, Route } from 'react-router'
import './App.css'
import Home from './Home'
import Characters from './Characters'
import Species from './Species'
import Locations from './Locations'

function App() {
    return (
        <CharProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />     
                    <Route path="/characters" element={<Characters />} />
                    <Route path="/species" element={<Species />} />
                    <Route path="/locations" element={<Locations />} />
                </Routes>    
            </BrowserRouter> 
        </CharProvider>
    );
}

export default App;

/*<Route path="/characters" element={<Characters />} />  
                    <Route path="/species" element={<Species />} />  
                    <Route path="/locations" element={<Locations />} /> */
