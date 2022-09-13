import React from "react";
import Button from '../../components/Buttons/Button';



const bookContent = (props) => (
    //put your component codes
    <>
        <td>{props.title}</td>
        <td>{props.author}</td>
        <td>{props.nbrPage}</td>
        <td> <Button btnStyle="btn-warning" Clic={props.update}>Update</Button></td>
        <td> <Button btnStyle="btn-danger" Clic={props.delete}>Delete</Button></td>
       



    </>

)
export default bookContent;