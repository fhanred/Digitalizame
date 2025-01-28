import 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Aterrizaje from './Componets/Aterrizaje';

function App() {
  return (
    <Router>
       <Routes>
       
       <Route exact path='/' element={<Aterrizaje/>}/>
       
      </Routes>
    </Router>
  );
}

export default App;
