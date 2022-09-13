import React from 'react'
import CountryManager from './containers/country/CountryManager';
import {BrowserRouter,useParams,Route,Routes} from 'react-router-dom';
import NavBar from './components/navBar/NavBar';
import DetailCountry from './containers/country/DetailCountry';

function App() {
  let params = useParams();
  return (
    <BrowserRouter>
    <NavBar></NavBar>
    
    <Routes>
    <Route path='/'  element={<div>Home page</div>}/>
    <Route path='/country'  element={<CountryManager/>}/>
    <Route path='/country/:id'    element={<DetailCountry  params={params.id}></DetailCountry>}/> 
    <Route
      path="*"
      element={
        <main style={{ padding: "1rem" }}>
          <p>There's nothing here!</p>
        </main>
      }
    />

    </Routes>
    </BrowserRouter>
    
    
     
  );
}

export default App;
