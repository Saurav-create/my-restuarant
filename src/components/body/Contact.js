import React, { Component } from 'react';
import { Button, FormGroup, Label, Col } from 'reactstrap';
import { Form, Control, Errors, actions } from "react-redux-form";
import { connect } from 'react-redux';



const required = val => {
   return val && val.length;
}
const isNumber = val => {
   return !isNaN(Number(val));
}
const validEmail = val => {
  return  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(val);
}

const mapDispatchToProps = dispatch =>{
    return{
        resetFeedbackForm: ()=>{
            dispatch(actions.reset('feedback'))

        }
    }
}


required();
isNumber();
validEmail();

class Contact extends Component {

    handelSubmit = values => {
        console.log(values);
        this.props.resetFeedbackForm();


    }

    render() {
        document.title = 'Contact';
        return (
            <div>
                <div className='container'>
                    <div className='row row-content' style={{ paddingLeft: "20px", textAlign: 'left' }}>
                        <div className='col-12'>
                            <h1> Send us your Feedback </h1>
                        </div>
                        <div className='col-12 col-md-7'>
                            <Form model='feedback' onSubmit={values => this.handelSubmit(values)}>
                                <FormGroup row>
                                    <Label htmlFor='firstname' md={2}> Frist Name</Label>
                                    <Col md={10}>
                                        <Control.text
                                            model='.firstname'
                                            name='firstname'
                                            placeholder='First Name'
                                            className='form-control'
                                            validators={{ required }} />

                                        <Errors
                                            className='text-danger'
                                            model=".firstname"
                                            show='touched'
                                            messages={{ required: 'Required' }}
                                        />

                                    </Col>

                                </FormGroup>
                                <FormGroup row>
                                    <Label htmlFor='lastname' md={2}>Last Name</Label>
                                    <Col md={10}>
                                        <Control.text
                                            model='.lastname'
                                            name='lastname'
                                            placeholder='Last Name'
                                            className='form-control'
                                            validators={{ required }} />


                                        <Errors
                                            className='text-danger'
                                            model=".lastname"
                                            show='touched'
                                            messages={{ required: 'Required' }}
                                        />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label htmlFor='telnum' md={2}>Contact</Label>
                                    <Col md={10}>
                                        <Control.text
                                            model='.telnum'
                                            name='telnum'
                                            placeholder='Tel. Number'
                                            className='form-control'
                                            validators={{ required, isNumber }} />

                                        <Errors
                                            className='text-danger'
                                            model=".telnum"
                                            show='touched'
                                            messages={{ required: 'Required!    ', isNumber: '   invalid Number' }}
                                        />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label htmlFor='email' md={2}>Email</Label>
                                    <Col md={10}>
                                        <Control.text
                                            model='.email'
                                            name='email'
                                            placeholder='Email'
                                            className='form-control'
                                            validators={{ required, validEmail }} />

                                        <Errors
                                            className='text-danger'
                                            model=".email"
                                            show='touched'
                                            messages={{ required: 'Required!  ', validEmail: 'Invalid Email' }}
                                        />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Col md={{ size: 6, offset: 2 }}>
                                        <FormGroup check>
                                            <Label check>
                                                <Control.checkbox
                                                    model='.agree'
                                                    name='agree'
                                                    className='form-check-input' />
                                                <strong>May we contact you?</strong>
                                            </Label>
                                        </FormGroup>
                                    </Col>
                                    <Col md={{ size: 3, offset: 1 }}>
                                        <Control.select
                                            model='.contactType'
                                            name='contactType'>
                                            <option>Tel.</option>
                                            <option>Email</option>
                                        </Control.select>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label htmlFor='message' md={2}>Your Feedback</Label>
                                    <Col md={10}>
                                        <Control.textarea
                                            model='.message'
                                            name='message'
                                            rows='12'
                                            className='form-control'
                                            validators={{ required }} />

                                        <Errors
                                            className='text-danger'
                                            model=".message"
                                            show='touched'
                                            messages={{ required: 'Required' }}
                                        />

                                    </Col>
                                </FormGroup>
                                <FormGroup >
                                    <Col md={{ size: 10, offset: 2 }}>
                                        <Button type='submit' color='primary'>
                                            Send Feedback
                                        </Button>
                                    </Col>
                                </FormGroup>

                            </Form>

                        </div>

                    </div>
                </div>
            </div>
        );
    }

}


export default connect(null, mapDispatchToProps)(Contact);