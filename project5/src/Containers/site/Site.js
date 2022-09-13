import React, { Component } from 'react';
import Home from '../../Components/Home/Home';
import Location from '../Location/Location';
import Contact from '../Contact/Contact';
import NavBar from '../../Components/Ui/Navbar/NavBar';
import { Route, Routes } from 'react-router-dom';
import Container from 'react-bootstrap/Container'
import Error404 from '../../Components/Errors/Error404';
import Footer from '../../Components/Footer/Footer';
class Site extends Component {
    render() {
        return (
            //put your component codes
            <>
                <div className='site'>
                    <NavBar />
                    <Container>

                        <Routes>
                            <Route path='/' element={<Home></Home>} />
                            <Route path='/location' element={<Location></Location>} />
                            <Route path='/contact/*' element={<Contact></Contact>} />
                            <Route
                                path="*"
                                element={<Error404 />}
                            />

                        </Routes>

                    </Container>
                    <div className='minsite'></div>
                </div>
                <Footer />

            </>

        )
    }
}
export default Site;