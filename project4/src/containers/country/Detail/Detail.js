import React, { Component } from 'react';
import axios from 'axios'
import TitleH1 from '../../../components/Title/TitleH1';
import Country from '../Country';

class Detail extends Component {


    state = {
        data: null,
        loading:false
    }

    componentDidMount = () => {
        const key = '1062091d1d172e073216e695fcceb0d2'
        this.setState({ loading: true });
        axios.get(`http://api.countrylayer.com/v2/name/${this.props.params.id}?access_key=${key}& fullText=true`)
        .then(response=>{
            console.log(response)
            this.setState({ 
                loading: false,
                data:response.data[0]
             });
        })
        .catch(except=>{
            this.setState({ loading: false });

        })

    }


    render() {
        return (
            //put your component codes
            <div className='container'>

            <TitleH1>Detail country: {this.props.params.id}</TitleH1>
            {
                this.state.data &&
                <Country detail={true} name={this.state.data.name} capital={this.state.data.capital} region={this.state.data.region} />

            }
          


            </div>
        )
    }
}
export default Detail;