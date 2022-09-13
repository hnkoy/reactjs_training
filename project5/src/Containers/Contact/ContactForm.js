import React from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Badge from 'react-bootstrap/Badge'
import {withFormik} from 'formik'
import * as Yup from 'yup'

const ContactForm = (props) => (
    //put your component codes
    <>
        <Form>
            <Form.Group className="mb-3" controlId="name">
                <Form.Label>Name <Badge bg="warning" text="dark">Min 5 characters</Badge></Form.Label>
                <Form.Control type="text"
                 name="name"
                  placeholder="put your name"
                  onChange={props.handleChange}
                  value={props.values.name}
                  onBlur={props.handleBlur}

                  />

                  {
                      props.touched.name && props.errors.name && <span style={{ color:"red" }}>{props.errors.name}</span>
                  }
               
            </Form.Group>

            <Form.Group className="mb-3" controlId="email">
                <Form.Label>Mail</Form.Label>
                <Form.Control type="email" 
                name="email" 
                placeholder="put your email" 
                onChange={props.handleChange}
                value={props.values.email}
                onBlur={props.handleBlur}

                />
                 {
                      props.touched.email && props.errors.email && <span style={{ color:"red" }}>{props.errors.email}</span>
                  }
            </Form.Group>

            <Form.Group className="mb-3" controlId="message">
                <Form.Label>Message <Badge bg="warning" text="dark">Min 10-200 characters</Badge></Form.Label>
                <Form.Control as="textarea"
                 placeholder="put your message" 
                 name="message"

                 onChange={props.handleChange}
                 value={props.values.message}
                 onBlur={props.handleBlur}

                 />
                  {
                      props.touched.message && props.errors.message && <span style={{ color:"red" }}>{props.errors.message}</span>
                  }
            </Form.Group>
            
            <Button variant="primary" onClick={props.handleSubmit}>
                Send
            </Button>
        </Form>
    </>
)
export default withFormik({
    mapPropsToValues:()=>({
        name:"",
        email:"",
        message:""

    }),

    validationSchema:Yup.object().shape({
        name:Yup.string()
        .min(5,'name require 5 characters min')
        .required('name is required'),
        email:Yup.string()
        .email("Email not correct")
        .required('Email is required'),
        message: Yup.string()
        .min(10,'message must have 10 characters min')
        .required('message is required')
        .max(200,'message must have max 200 character')


    }),
    handleSubmit:(values,{props})=>{
        alert('message send')

    }
})(ContactForm);