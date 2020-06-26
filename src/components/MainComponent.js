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
import { postComment, fetchDishes, fetchComments, fetchPromos } from '../redux/ActionCreators';
import { actions } from 'react-redux-form';
import { TransitionGroup, CSSTransition} from 'react-transition-group';
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


const mapDispatchToProps = (dispatch)=>({
  postComment: (dishId, rating, author, comment)=> dispatch(postComment(dishId, rating, author, comment)),
  fetchDishes: ()=> {dispatch(fetchDishes())},
  resetFeedbackForm: ()=>{ dispatch(actions.reset('feedback'))},
  fetchComments: ()=> {dispatch(fetchComments())},
  fetchPromos: ()=> {dispatch(fetchPromos())} 


});

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

componentDidMount(){
  this.props.fetchDishes();
  this.props.fetchPromos();
  this.props.fetchComments();
  
}

  render(){

    const HomePage=()=>{
      return(
        <Home dish={this.props.dishes.dishes.filter((dish)=>dish.featured)[0]} 
        dishesLoading={this.props.dishes.isLoading}
        dishesErrMess={this.props.dishes.errMess}
        promotion={this.props.promotions.promotions.filter((promo)=>promo.featured)[0]}
        promosLoading={this.props.promotions.isLoading}
        promosErrMess={this.props.promotions.errMess}
        leader={this.props.leaders.filter((leader)=>leader.featured)[0]}
        />
      );
    }

const DishWithId=({match})=>{
  return(
    <DishDetail selectDish={this.props.dishes.dishes.filter((dish)=>dish.id===parseInt(match.params.dishId,10))[0]} 
    isLoading={this.props.dishes.isLoading}
    errMess={this.props.dishes.errMess}
    comments={this.props.comments.comments.filter((comment)=>comment.dishId===parseInt(match.params.dishId,10))}
    commentsErrMess={this.props.comments.errMess}
    postComment={this.props.postComment}
    />
  );

}

    return(
      <div className="App">
      <Header/>
      <TransitionGroup>
        <CSSTransition key={this.props.location.key} classNames="page" timeout={300}>
      <Switch>
        <Route path="/home" component={HomePage}/>
        <Route exact path='/menu' component={()=><Menu dishes={this.props.dishes}/>}/>
        <Route path="/menu/:dishId" component={DishWithId} />   
        <Route exact path='/contactus' component={()=><Contact  resetFeedbackForm={this.props.resetFeedbackForm}/>}/> 
        <Route exact path='/aboutus' component={()=><About leaders={this.props.leaders}/>}/> 
            
        <Redirect to="/home"/>
      </Switch>
      </CSSTransition>
      </TransitionGroup>


      {/* <Menu dishes={this.state.dishes} onClick={(dishId)=>this.onDishSelect(dishId)} />
      <DishDetail selectDish={this.state.dishes.filter((dish)=>dish.id===this.state.selectedDish)[0]} /> */}
      <Footer/>
      </div>
    );



  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
