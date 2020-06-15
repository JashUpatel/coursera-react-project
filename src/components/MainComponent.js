import React, { Component } from 'react';
//import logo from './logo.svg';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import DishDetail from "./DishdetailComponent";
import Contact from './ContactComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import About from './AboutComponent';
import { Switch,Route,Redirect, withRouter} from 'react-router-dom';
import {connect} from "react-redux";

//import './App.css';

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

const mapStateToProps=state=>{
  return{
    dishes:state.dishes,
    comments:state.comments,
    promotions:state.promotions,
    leaders:state.leaders

  }
}

class Main extends Component {

  constructor(props){
    super(props);

    // this.state={
    //   dishes:DISHES,
    //   comments:COMMENTS,
    //   promotions:PROMOTIONS,
    //   leaders:LEADERS,
    //   //selectedDish:null

    // };

    
  }

 


  onDishSelect(dishId){
    this.setState({selectedDish:dishId});
    //console.log("updated")
}


  render(){

    const HomePage=()=>{
      return(
        <Home dish={this.props.dishes.filter((dish)=>dish.featured)[0]} 
        promotion={this.props.promotions.filter((promo)=>promo.featured)[0]}
        leader={this.props.leaders.filter((leader)=>leader.featured)[0]}
        />
      );
    }

const DishWithId=({match})=>{
  return(
    <DishDetail selectDish={this.props.dishes.filter((dish)=>dish.id===parseInt(match.params.dishId,10))[0]} 
    comments={this.props.comments.filter((comment)=>comment.dishId===parseInt(match.params.dishId,10))}/>
  );

}

    return(
      <div className="App">
      <Header/>
      <Switch>
        <Route path="/home" component={HomePage}/>
        <Route exact path='/menu' component={()=><Menu dishes={this.props.dishes}/>}/>
        <Route path="/menu/:dishId" component={DishWithId} />   
        <Route exact path='/contactus' component={Contact}/> 
        <Route exact path='/aboutus' component={()=><About leaders={this.props.leaders}/>}/> 
            
        <Redirect to="/home"/>
      </Switch>


      {/* <Menu dishes={this.state.dishes} onClick={(dishId)=>this.onDishSelect(dishId)} />
      <DishDetail selectDish={this.state.dishes.filter((dish)=>dish.id===this.state.selectedDish)[0]} /> */}
      <Footer/>
      </div>
    );



  }
}

export default withRouter(connect(mapStateToProps)(Main));
