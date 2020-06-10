import React, { Component } from "react";
import Media from "reactstrap/lib/Media";
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import CardImgOverlay from "reactstrap/lib/CardImgOverlay";
import DishDetail from "./DishdetailComponent";



class Menu extends Component{

    constructor(props){
        super(props);
        this.state={
            selectDish: null
        }

    }

    onDishSelect(dish){
        this.setState({selectDish:dish});
    }
    
    renderDish(dish){
        if(dish != null){
            return(
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );

        }
        else{
            return(
                <div></div>
            );
        }

    }

    render(){
        const menu = this.props.dishes.map((dish)=>{
            return(
                <div key={dish.id} className="col-12 col-md-5 m-1">
                {/* <Media tag='li'>
                    <Media left middle>
                        <Media object src={dish.image} alt={dish.name}/>
                    </Media>
                    <Media body className="ml-5">
                        <Media heading>{dish.name}</Media>
                        <p>{dish.description}</p>
                    </Media>
                
                
                </Media> */}

                <Card onClick={()=>this.onDishSelect(dish)}>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardImgOverlay>
                        <CardTitle>{dish.name}</CardTitle>
                    </CardImgOverlay>

                </Card>
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
                {this.renderDish(this.state.selectDish)}
            </div> */}

            <DishDetail selectDish={this.state.selectDish} />

            </div>
        );
    }

}

export default Menu;