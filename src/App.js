import React from 'react'
/* import {BrowserRouter} from 'react-router-dom' */
import {HashRouter} from 'react-router-dom'
import {Navbar} from './components/Navbar'
import {Pages} from './components/Pages'



function App() {
  return (
    <HashRouter >
      <div className="container-fluid ">
        <div className="row">
          <div className="col-2">
            <Navbar />
          </div>
          <div className="col-10 ">
             <Pages />            
          </div>
        </div>
      </div>
    </HashRouter>
  );
}

export default App;

