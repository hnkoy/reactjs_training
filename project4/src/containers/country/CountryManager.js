import React, { Component } from 'react';
import TitleH1 from '../../components/Title/TitleH1';
import Button from '../../components/Buttons/Button';
import axios from 'axios';
import Country from './Country';
class CountryManager extends Component {
    state = {
        countryList: [],
        loading: false,
        isSelect:null
    }

    componentDidMount = () => {
        this.handleGetCountry('all')
     
    }
    handleGetCountry=(region)=>{
        let params='';
        
        if(region==='all') params=region
        else params=`region/${region}`;
        this.setState({ loading: true });
        const key = '1062091d1d172e073216e695fcceb0d2'
        axios.get(`http://api.countrylayer.com/v2/${params}?access_key=${key}`)
            .then(res => {

                const countries = res.data.map(count => {
                    return {
                        name: count.name,
                        capital: count.capital,
                        region: count.region,
                       
                    }
                })
                //console.log(countries)
                this.setState({
                    countryList: countries,
                    loading: false,
                    isSelect:region
                })
            })
            .catch(ex => {
                this.setState({ loading: false });
                console.log(ex)
            })

    }
    render() {
        console.log(this.state.countryList)
        return (
            //put your component codes
            <div className='container'>
                <TitleH1>World Country List</TitleH1>
                <Button btnStyle="btn-info" Clic={()=>this.handleGetCountry('all')} isSelect={this.state.isSelect==='all'}>All</Button>
                <Button btnStyle="btn-info" Clic={()=>this.handleGetCountry('Africa')} isSelect={this.state.isSelect==='Africa'}>Africa</Button>
                <Button btnStyle="btn-info" Clic={()=>this.handleGetCountry('Europe')} isSelect={this.state.isSelect==='Europe'}>Europe</Button>
                <Button btnStyle="btn-info" Clic={()=>this.handleGetCountry('Asia')} isSelect={this.state.isSelect==='Asia'}>Asia</Button>
                <Button btnStyle="btn-info" Clic={()=>this.handleGetCountry('Americas')} isSelect={this.state.isSelect==='Americas'}>America</Button>
                <Button btnStyle="btn-info" Clic={()=>this.handleGetCountry('Oceania')} isSelect={this.state.isSelect==='Oceania'}>Oceania</Button>
                {
                    this.state.loading ?
                        <div>Loading</div>
                        :
                        <div className='row g-2'>
                            {
                                this.state.countryList.map((data) => {

                                    return(
                                        <div className='col-12 col-md-6' key={data.name}>
                                        <Country name={data.name} capital={data.capital} region={data.region} />
                                        </div>
                                    ) 
                                })


                            }

                        </div>
                }


                <div>pagination</div>

            </div>
        )
    }
}
export default CountryManager;