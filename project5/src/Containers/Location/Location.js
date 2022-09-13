import React, { Component } from 'react';
import TitleH1 from '../../Components/Ui/Title/TitleH1';
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import axios from 'axios'
import Establishment from '../../Components/Establishment/Establishment';
class Location extends Component {
    state = {
        searchData: null

    }

    handleGetData = (params) => {
        axios.get(`https://etablissements-publics.api.gouv.fr/v3/departements/09/${params}`)
            .then(response => {
                this.setState({ searchData: response.data.features })

            })
            .catch(ex => {

            })

    }
    render() {
        return (
            //put your component codes
            <div>
                <TitleH1>List of departements France</TitleH1>
                <Button variant='secondary' onClick={() => this.handleGetData('mairie')}>Mairie</Button>
                <Button variant='secondary' onClick={() => this.handleGetData('commisariat_police')}>Commisariat</Button>
                <Button variant='secondary' onClick={() => this.handleGetData('pole_emploi')}>Pôle emploi</Button>
                <Button variant='secondary' onClick={() => this.handleGetData('prefecture')}>Préfecture</Button>
                <Row>

                    {
                        this.state.searchData && this.state.searchData.map(etab => {
                            return(
                                <Col md={6}>
                                <Establishment
                                phone={etab.properties.telephone}
                                adress={etab.properties.adresses[0].codePostal}
                                >example1</Establishment>

                            </Col>

                            )
                            


                        })
                    }
                </Row>



            </div>
        )
    }
}
export default Location;