import React, { Component } from "react";
//import Media from "reactstrap/lib/Media";
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import CardImgOverlay from "reactstrap/lib/CardImgOverlay";
//import DishDetail from "./DishdetailComponent";


function RenderMenuItem({dish,onClick}){
    return(
        <Card onClick={()=>{onClick(dish.id)}}>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardImgOverlay>
                        <CardTitle>{dish.name}</CardTitle>
                    </CardImgOverlay>

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
        const menu = props.dishes.map((dish)=>{
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

                <RenderMenuItem dish={dish} onClick={props.onClick}/>

                
                </div>
            );
        });


        return(
            <div className="container">
            <div className="row">
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