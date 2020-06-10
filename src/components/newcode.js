import React, { Component } from 'react'
import { Card,CardImg,CardText,CardBody,CardTitle } from 'reactstrap';

class DishDetail extends Component {
    constructor(props) {
        super(props)
    }
    renderDish(dish){
        return (
        <div>
            <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name}/>
                    <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                    </CardBody>
           </Card>
        </div>
        );
    }
    renderComments(comments){
        
            if(comments==null)
            {
                return (
                    <div></div>
                );
            }
            else{
                const greetings=comments.map((greeting)=>{
                    return(
                        <ul key={greeting.id} className='list-unstyled'>
                            <li>
                                <p>{greeting.comment}</p>
                                <p>-- {greeting.author},{greeting.date}</p>
                            </li>
                        </ul>
                    );
                });
            return(
            <div>
               <h4>Comments</h4>
               {greetings}
            </div>
            );
            }
    }
    render() {
        const dish=this.props.selectedDish;
        if(dish!=null){
        return (
            <div className="row">
            <div className="col-12 col-md-5 m-1">
                {this.renderDish(dish)}
            </div>
            <div className="col-12 col-md-5 m-1">
                {this.renderComments(dish.comments)}
            </div>
            </div>
        );}
        else{
            return (
            <div></div>
        );}
    }
}

export default DishDetail