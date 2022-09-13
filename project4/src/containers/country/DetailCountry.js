import React from 'react';
import { useParams } from "react-router-dom"
import Detail from './Detail/Detail';

const DetailCountry = (props) => {
    let params = useParams();
    return (
        //put your component codes
        <Detail params={params}></Detail>
    )
}
export default DetailCountry;