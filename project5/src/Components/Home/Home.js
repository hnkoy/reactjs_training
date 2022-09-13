import React from "react";
import TitleH1 from '../Ui/Title/TitleH1'
import Image from 'react-bootstrap/Image'
import Homeimg from '../../assets/images/chateau.jpg'
const Home = (props) => (
    //put your component codes
    <>
    <TitleH1>Welcome to my website</TitleH1>
    <p>This my website for my training react js for this year</p>
    <Image src={Homeimg} fluid thumbnail style={{ width:"100%" }}/>
    </>
)
export default Home;