import React, { Component } from 'react';
import Unity, { UnityContent } from "react-unity-webgl";
import Build from './assets/2D_webgl_beginning/Build/2D_webgl_beginning.json';
import UnityLoader from './assets/2D_webgl_beginning/Build/UnityLoader.js';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.unityContent = new UnityContent(
      Build,
      UnityLoader
    );
  }


  componentDidMount() {
    console.log()
  }

  render() {
    return (
      <div className="App">
         <Unity unityContent={this.unityContent} />
      </div>
    );
  }
}

export default App;
