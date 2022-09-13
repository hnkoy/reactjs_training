import React, { Component } from 'react';
import TitleH1 from '../../Components/Ui/Title/TitleH1';
import Button from 'react-bootstrap/Button'
import {LinkContainer} from 'react-router-bootstrap'
import { Route,Routes } from 'react-router-dom';
import ContactForm from './ContactForm';
class Contact extends Component {
    render() {
        return (
            //put your component codes
            <>

            <TitleH1>Contact us</TitleH1>
            <h1>Adress:</h1>
            <p>xxxxxxxxxxxxx</p>

            <h1>Phone number:</h1>
            <p>xxxxxxxxxxxxx</p>
           
            <LinkContainer to='form'>
            <Button variant="primary">Open contact form</Button>

            </LinkContainer>
            <Routes>
            <Route path='form' element={<ContactForm/>}></Route>
            </Routes>
           



                
            </>
        )
    }
}
export default Contact;