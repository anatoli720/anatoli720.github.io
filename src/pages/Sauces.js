import React from 'react';
import {Link } from 'react-router-dom';
import Header from '../components/Header';


const Sauces = ()=> {

    return ( <div>
        <Header/>
          <Link to="/"><h1>Соусы</h1></Link>
    </div>
      
    )
}
export {Sauces}