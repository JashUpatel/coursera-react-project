import React,{ Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, ListGroupItem } from 'reactstrap';
import ListGroup from 'reactstrap/lib/ListGroup';
import { tagPropType } from 'reactstrap/lib/utils';

class DishDetail extends Component{
    constructor(props){
        super(props);
        
    }

    renderDish(selectDish){
        // {console.log(selectDish.comments)}
        if(selectDish != null){
            return(
                
                <Card>
                    {/* {console.log(selectDish.comments)} */}
                    <CardImg width="100%" src={selectDish.image} alt={selectDish.name} />
                    <CardBody>
                    <CardTitle>{selectDish.name}</CardTitle>
                    <CardText>{selectDish.description}</CardText>
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

    renderComments(selectDish){
        
        if(selectDish !=null){
        const com = selectDish.comments;
         {console.log(selectDish.comments)}
         const style = {border:'none'};


         return(
            <div>
            <h4>Comments</h4>
            <ListGroup className="list-unstyled" >{com.map((comment)=>{
                 return(
                    <div>
                         <ListGroupItem style={style}>{comment.comment}</ListGroupItem>
                         <ListGroupItem style={style}>-- {comment.author} , {Date(comment.date)}</ListGroupItem>
                         </div>
                         
                )     


             })}</ListGroup>
             </div>
         );
        }
        else{
            return(
                <div></div>
            );
        }
        // selectComments.comments.map((comment)=>{
        //     console.log(comment);
        // })
        // if(selectComments.comments!=null){
        //     console.log(selectComments.comments);
        // }
        // else{
        //     console.log("bc");
        // }




        // {console.log(comments)}
        // {comments.name}
    
        // {console.log(comments.comments)}
            // const comment = selectComments.comments.map((selectComment)=>{
            //     return(
            //     <div key={selectComment.id}>
            //         {/* <List className="list-unstyled">heyy</List> */}
            //         <ListGroup className="list-unstyled">
            //             <ListGroupItem>{selectComment.comment}</ListGroupItem>
            //         </ListGroup>
            //         <ListGroup className="list-unstyled">
            //             <ListGroupItem>-- {selectComment.author} , {selectComment.date}</ListGroupItem>
            //         </ListGroup>
            //     </div>
            //     );
            // });

           // return(comment);

            //  return(
            //      comment
            //     // <div> {console.log(selectComments.comments)}</div>
            //  );

    }

    render(){

        

        
        return(
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                { this.renderDish(this.props.selectDish) }
                </div>
                <div className="col-12 col-md-5 m-1">
                
                
                {  this.renderComments(this.props.selectDish) }
               
                </div>

            </div>
        );
    }

}

export default DishDetail;
