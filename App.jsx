import React, { Component } from 'react';


import Map from './Map'

// import GoogleApiWrapper from './GoogleApiWrapper';

class App extends Component {

    

  render() {
 

    return (
        <div className='container'>
            <div className='welcome'>
                <p style={{color: "white"}}>Sweet San Diego Sunsets</p>
                
            </div>
            <div id="map">
              <Map/>
            </div>
        </div>
    );
  }
}


export default App;