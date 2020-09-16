import React, { Component } from 'react';
import { Container, Col,Row } from 'reactstrap';


class About extends Component {
    render() {
        return (
            <div className='container'
                style={{
                    display: 'flex', flexDirection: 'column',
                    justifyContent: 'center', alignSelf: 'center', height: '350px',
                    fontSize: '20px', alignItems: 'center',
                    letterSpacing:'2px',borderSpacing:'2px'
                }}>
                <p>The idea behind this application is to displays the statistics of Coronavirus COVID-19 around the world </p>
                <p>If you don't find any of the cases are not reflecting on this website then also you can visit the World Health Organization site.</p>
               
            </div>
        );
    }
}

export default About;