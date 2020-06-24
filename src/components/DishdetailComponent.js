import React,{ Component } from 'react';
import {Row, Col, Form, FormGroup, Label, Input, FormFeedback, Modal, ModalBody, ModalHeader, Button, Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, ListGroupItem, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import ListGroup from 'reactstrap/lib/ListGroup';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';

//class DishDetail extends Component{
    // constructor(props){
    //     super(props);
    //     //console.log(this.props.dish)
        
    // }

const required=(val)=> val && val.length;
const maxLength=(len)=>(val)=>!(val)||(val.length<=len);
const minLength=(len)=>(val)=>val&&(val.length>=len);

class CommentForm extends Component{
    constructor(props){
        super(props);
        this.state={
            isModalOpen:false
        }
        this.toggleCommentModal=this.toggleCommentModal.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    toggleCommentModal(){
        this.setState({
            isModalOpen:!this.state.isModalOpen
        });

    }

    handleSubmit(values){
        console.log(JSON.stringify(values));
        alert(JSON.stringify(values));

    }


    render(){
        return(
            <div>
                <Button outline onClick={this.toggleCommentModal}>
                    <span className="fa fa-pencil fa-lg"></span> Submit Comment
                </Button>

                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleCommentModal}>
                <ModalHeader toggle={this.toggleCommentModal}>Submit Comment</ModalHeader>
                <ModalBody>
                    <LocalForm onSubmit={(values)=>this.handleSubmit(values)}>
                        <Row className="form-group">
                        <Col>
                            <Label htmlFor="rating">Rating</Label>
                            
                            <Control.select  model=".rating" className="form-control" id="rating" name="rating"  >
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            
                            </Control.select>
                        </Col>
                        </Row>
                        <Row className="form-group">
                        <Col>
                            <Label htmlFor="author">Your Name</Label>
                            <Control.text validators={{required,maxLength:maxLength(15),minLength:minLength(3)}} model=".author" className="form-control" id="yourname" name="yourname" placeholder="Your Name"  />
                        <Errors className="text-danger" model=".author" show="touched" messages={{required:"Required",minLength:"Must be greater than 2 charaters", maxLength:"Must be less than 15 characters"}} />
                        </Col>
                        </Row>

                        <Row className="form-group">
                        <Col>
                            <Label htmlFor="comment">Comment</Label>
                            <Control.textarea model=".comment" className="form-control" id="comment" name="comment" row='6'  />
                        </Col>
                        </Row>
                        <Button type="submit" value="submit" color="primary">Submit</Button>
                    </LocalForm>
                </ModalBody>
            </Modal>

                
            </div>
        );
    }
}




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
                    <div key={comment.id}>
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
           <CommentForm/>
            </div>

        </div>
        </div>
    );


}
//    }

//}

export default DishDetail;