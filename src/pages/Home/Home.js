import React, { useState } from 'react';
import Total from '../../components/Total/Total';
import Countries from '../../components/Countries/Countries';
import { Spinner, NavbarToggler } from 'reactstrap'
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';


const Home = (props) => {
    const { loading } = props
    return (
        <>
            {loading ?
                (
                    <div className='text-center' style={{ paddingTop: '250px' }}>
                        <Spinner type="grow" color="primary" />
                        <Spinner type="grow" color="secondary" />
                        <Spinner type="grow" color="success" />
                        <Spinner type="grow" color="danger" />
                        <Spinner type="grow" color="warning" />
                        <Spinner type="grow" color="info" />
                        <Spinner type="grow" color="dark" />
                    </div>
                ) :
                <Row >
                    <Col>
                            <Countries countries={props.countries } all={props.all}/>
                    </Col>
                </Row>
            }
        </>
    );
}
export default Home;