import React, { Component } from 'react';
//import logo from './logo.svg';
//import { Navbar, NavbarBrand } from 'reactstrap';
//import Menu from './components/MenuComponent';
//import { DISHES } from './shared/dishes'
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap-social/bootstrap-social.css';
import './App.css';
import Main from './components/MainComponent'
import {BrowserRouter} from 'react-router-dom';
import { Provider } from "react-redux";
import { ConfigureStore } from "./redux/configureStore";

const store= ConfigureStore();
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

class App extends Component {

  // constructor(props){
  //   super(props);

  //   this.state={
  //     dishes:DISHES
  //   };
  // }

  render(){

    return(
      <Provider store={store}>
      <BrowserRouter>
      <div className="App">
      {/* <Navbar dark color="primary">
      <div className="container">
      <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
      </div>
      </Navbar>
      <Menu dishes={this.state.dishes}/> */}
      <Main/>
      </div>
      </BrowserRouter>
      </Provider>
    );



  }
}

export default App;
