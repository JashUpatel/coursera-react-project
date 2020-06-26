import React, { Component } from "react";
//import Media from "reactstrap/lib/Media";
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import CardImgOverlay from "reactstrap/lib/CardImgOverlay";
import { Link } from 'react-router-dom';
//import DishDetail from "./DishdetailComponent";
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';

function RenderMenuItem({dish,onClick}){
    return(
                <Card>
                    <Link to={`/menu/${dish.id}`}>
                    <CardImg width="100%" src={baseUrl + dish.image} alt={dish.name} />
                    <CardImgOverlay>
                        <CardTitle>{dish.name}</CardTitle>
                    </CardImgOverlay>
                    </Link>

                </Card>
    );
}


//class Menu extends Component{

    // constructor(props){
    //     super(props);
        // this.state={
        //    // dishes:DISHES,
        //     selectedDish:null
      
        //   };
        //   //console.log("hyyyyy")
      
   // }

    // onDishSelect(dish){
    //     console.log(dish)
    //     this.setState({selectDish:dish});
    // }

    
    // renderDish(dish){
    //     if(dish != null){
    //         return(
    //             <Card>
    //                 <CardImg width="100%" src={dish.image} alt={dish.name} />
    //                 <CardBody>
    //                 <CardTitle>{dish.name}</CardTitle>
    //                 <CardText>{dish.description}</CardText>
    //                 </CardBody>
    //             </Card>
    //         );

    //     }
    //     else{
    //         return(
    //             <div></div>
    //         );
    //     }

    // }

    const Menu =(props)=>{
        const menu = props.dishes.dishes.map((dish)=>{
            return(
                <div key={dish.id} className="col-12 col-md-5 m-1" >
                {/* <Media tag='li'>
                    <Media left middle>
                        <Media object src={dish.image} alt={dish.name}/>
                    </Media>
                    <Media body className="ml-5">
                        <Media heading>{dish.name}</Media>
                        <p>{dish.description}</p>
                    </Media>
                
                
                </Media> */}

                <RenderMenuItem dish={dish} />

                
                </div>
            );
        });

        if(props.dishes.isLoading){
        return(
            <div className="container">
                <div className="row">
                    <Loading />
                </div>
            </div>
        );
    }
    else if(props.dishes.errMess){
        return(
            <div className="container">
                <div className="row">
                    <h4>{props.dishes.errMess}</h4>
                </div>
            </div>
        );   
    }
    else

        return(
            <div className="container">
            
            
            <div className="row">
            <Breadcrumb>
            <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
            <BreadcrumbItem active>Menu</BreadcrumbItem>
            </Breadcrumb>
            
            <div className="col-12">
            <h3>Menu</h3>
            <hr/>
            </div>
            {/* <Media list>
            {menu}
            </Media> */}
            {menu}
            </div>
            
            {/* <div className="row">
                {this.renderDish(this.dish)}
            </div> */}

            {/* <DishDetail selectDish={this.state.selectDish} /> */}

            </div>
        );
    }
    

    

    
    

//}

export default Menu;