import React from "react";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
const Establishment = (props) => (
    //put your component codes
    <div className="row g-2">
       
        <div >
            <Card>
                <Card.Header>Featured</Card.Header>
                <Card.Body>
                    <Card.Title>Phone number: {props.phone}</Card.Title>
                    <Card.Title>Adress</Card.Title>
                    <Card.Text>
                      {props.adress}
                    </Card.Text>

                    <Card.Title>Shedule</Card.Title>
                    <Card.Text>
                      {props.shedule}
                    </Card.Text>
                    <Button variant="primary">Go to website</Button>
                </Card.Body>
            </Card>
        </div>
    </div>
)
export default Establishment;