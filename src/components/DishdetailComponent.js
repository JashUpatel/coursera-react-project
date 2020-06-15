import React,{ Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, ListGroupItem, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import ListGroup from 'reactstrap/lib/ListGroup';
import { Link } from 'react-router-dom';

//class DishDetail extends Component{
    // constructor(props){
    //     super(props);
    //     //console.log(this.props.dish)
        
    // }

   function  RenderDish({selectDish}){
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

    function RenderComments({selectComments}){
        
        if(selectComments !=null){
        //const com = selectDish.comments;
         //{console.log(selectDish.comments)}
         const style = {border:'none'};


         return(
            <div>
            <h4>Comments</h4>
            <ListGroup className="list-unstyled" >{selectComments.map((comment)=>{
                 return(
                    <div>
                         <ListGroupItem style={style}>{comment.comment}</ListGroupItem>
                         <ListGroupItem style={style}>-- {comment.author} , {new Intl.DateTimeFormat('en-us',{year:'numeric',month:'short',day:'2-digit'}).format(new Date(Date.parse(comment.date)))}</ListGroupItem>
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

//    render(){

        
const DishDetail=(props)=>{
            
    return(
        <div className="container">
        <div className="row">
        <Breadcrumb>
            <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
            <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
            <BreadcrumbItem active>item{props.selectDish.name}</BreadcrumbItem>
        </Breadcrumb>

        </div>
        
        <div className="row">
        
            <div className="col-12 col-md-5 m-1">
            {/* { this.renderDish(this.props.selectDish) } */}
            <RenderDish selectDish={props.selectDish}/>
            </div>
            <div className="col-12 col-md-5 m-1">
            
            
            {/* {  this.renderComments(this.props.selectDish) } */}
           <RenderComments selectComments={props.comments}/>
            </div>

        </div>
        </div>
    );


}
//    }

//}

export default DishDetail;
