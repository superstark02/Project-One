import React from 'react';
import './App.css';
import D3 from './Components/D3';

class App extends React.Component {

  render() {
    return (
      <div className="wrap" style={{ flexDirection: "column",height:"100vh" }} >
        <div>
          <D3 />
        </div>
      </div>
    );
  }
}

export default App;
