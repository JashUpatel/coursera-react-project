import React, { Component } from 'react';
import {Breadcrumb, BreadcrumbItem, Form, FormGroup, Label, Input, Col, Button, FormFeedback } from 'reactstrap';
import { Link } from 'react-router-dom';

//function Contact(props){
  
class Contact extends Component{
    constructor(props){
        super(props);
        this.state={
            firstname:"",
            lastname:"",
            telnum:"",
            email:"",
            agree:false,
            contactType:"Tel.",
            message:"",
            touched:{
                firstname: false,
                lastname:false,
                telnum:false,
                email:false
            }
        }
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleInputChange=this.handleInputChange.bind(this);
        this.handleBlur=this.handleBlur.bind(this);
// both mehod can be used using bind or defining method under constructor
        //   this.handleSubmit =(event)=>{
        //     console.log(JSON.stringify(this.state))
        //     alert(JSON.stringify(this.state))
        //     event.preventDefault();
        // };
    }




    handleInputChange(event){
        const target=event.target;
        const value=target.type==='checkbox'?target.checked:target.value;
        const name = target.name;
        this.setState({
            [name]:value
        });

    }


    handleSubmit(event){
        console.log(JSON.stringify(this.state));
        event.preventDefault();
    }



    handleBlur=(field)=>(evt)=>{
        this.setState({
            touched:{...this.state.touched,[field]:true}
        })

    }

    validate(firstname,lastname,telnum,email){
        const errors={
            firstname:"",
            lastname:"",
            telnum:"",
            email:""

        };

        if(this.state.touched.firstname && firstname.length<3){
            errors.firstname="first Name should be greater than 3 character!";
        }
        else if(this.state.touched.firstname && firstname.length>10){
            errors.firstname="First Name should not be greater than 10 character!";
        }
        if(this.state.touched.lastname && lastname.length<3){
            errors.lastname="first Name should be greater than 3 character!";
        }
        else if(this.state.touched.lastname && lastname.length>10){
            errors.lastname="First Name should not be greater than 10 character!";
        }

        const reg =/^\d+$/;
        if(this.state.touched.telnum && !reg.test(telnum)){
            errors.telnum="Tel. Number should be only numbers!";
        }

        if(this.state.touched.email && email.split("").filter(x=>x==='@').length!==1){
            errors.email="email should contain @";
        }

        return errors;
    }

    render(){
        const errors = this.validate(this.state.firstname,this.state.lastname,this.state.telnum,this.state.email);
    return(
        
        <div className="container">
            
            <div className="row">
            <Breadcrumb>
            <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
            <BreadcrumbItem active>Contact Us</BreadcrumbItem>
            </Breadcrumb>
                <div className="col-12">
                <h3>Contact Us</h3>
                <hr/>
                </div>
                </div>
                <div className="row row-content">
                <div className="col-12">
                <h3>Location Information</h3>
                </div>
                <div className="col-12 col-sm-4 offset-sm-1">
                        <h5>Our Address</h5>
                        <address>
                        121, Clear Water Bay Road<br />
                        Clear Water Bay, Kowloon<br />
                        HONG KONG<br />
                        <i className="fa fa-phone"></i>: +852 1234 5678<br />
                        <i className="fa fa-fax"></i>: +852 8765 4321<br />
                        <i className="fa fa-envelope"></i>: <a href="mailto:confusion@food.net">confusion@food.net</a>
                        </address>
                </div>
                <div className="col-12 col-sm-6 offset-sm-1">
                    <h5>Map of our Location</h5>
                </div>
                <div className="col-12 col-sm-11 offset-sm-1">
                    <div className="btn-group" role="group">
                        <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                        <a role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
                        <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
                    </div>
                </div>
            </div>
            <div className="row row-content">
            <div classname="col-12">
            <h3>Send us Your Feedback</h3>
            </div>
            <div className="col col-md-9">
            <Form onSubmit={this.handleSubmit}>
                <FormGroup row>
                    <Label htmlfor="firstname" md={2}> First Name</Label>
                    <Col md={10}>
                        <Input onBlur={this.handleBlur('firstname')} onChange={this.handleInputChange} valid={errors.firstname===''} invalid={errors.firstname!==''} type="text" id="firstname" name="firstname" placeholder="First Name" value={this.state.firstname}/>
                        <FormFeedback>{errors.firstname}</FormFeedback>
                    </Col>
                
                </FormGroup>
                <FormGroup row>
                    <Label htmlfor="lastname" md={2}> Last Name</Label>
                    <Col md={10}>
                        <Input onBlur={this.handleBlur('lastname')} onChange={this.handleInputChange} valid={errors.lastname===''} invalid={errors.lastname!==''} type="text" id="lastname" name="lastname" placeholder="Last Name" value={this.state.lastname}/>
                       <FormFeedback>{errors.lastname}</FormFeedback> 
                    </Col>
                
                </FormGroup>
                <FormGroup row>
                    <Label htmlfor="telnum" md={2}> Contact Tel.</Label>
                    <Col md={10}>
                        <Input onBlur={this.handleBlur('telnum')} onChange={this.handleInputChange} valid={errors.telnum===''} invalid={errors.telnum!==''} type="text" id="telnum" name="telnum" placeholder="Tel. Number" value={this.state.telnum}/>
                        <FormFeedback>{errors.telnum}</FormFeedback>
                    </Col>
                
                </FormGroup>
                <FormGroup row>
                    <Label htmlfor="email" md={2}> Email</Label>
                    <Col md={10}>
                        <Input onBlur={this.handleBlur('email')} onChange={this.handleInputChange} valid={errors.email===''} invalid={errors.email!==''} type="text" id="email" name="email" placeholder="Email" value={this.state.email}/>
                        <FormFeedback>{errors.email}</FormFeedback>
                    </Col>
                
                </FormGroup>
                <FormGroup row>
                    <Col md={{size: 6,offset: 2}}>
                    <FormGroup check>
                    <Label check>
                    <Input onChange={this.handleInputChange} type="checkbox" name="agree" checked={this.state.agree}/> {' '}
                    <strong> May we Contact You?</strong>
                    </Label>
                    
                </FormGroup> 
                    </Col>
                    <Col md={{size:3,offset:1}}>
                    <Input onChange={this.handleInputChange} type="select" name="contactType" value={this.state.contactType}>
                    <option>Tel.</option>
                    <option>Email</option>
                    </Input>
                    </Col>
                
                </FormGroup>
                <FormGroup row>
                    <Label htmlfor="message" md={2}> Your Feedback</Label>
                    <Col md={10}>
                        <Input type="textarea" id="message" name="message" placeholder="Your Feedback" value={this.state.message} row="12" onChange={this.handleInputChange}/>
                        
                    </Col>
                
                </FormGroup>
                <FormGroup row>
                    <Col md={{size:10, offset:2}}>
                    <Button type="submit" color="primary">Send Feedback</Button>
                    </Col>
                </FormGroup>
            </Form>
            </div>
            </div>
        </div>        
    );
}
}


export default Contact;