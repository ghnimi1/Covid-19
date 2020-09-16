import React, { Component, useState } from 'react';
import { Card, CardBody, Container, Row, Col, Button } from 'reactstrap';
import Chart from 'react-google-charts';
import CuntUp from 'react-countup';


const Total = (props) => {

    return (
        <>
                <Container>
                    <Row>
                        <Col className='col-6 col-md-3'>
                            <Card style={{ height: '80px', marginTop: '10px' }}>
                                <CardBody className='text-center'>
                                    <h5 style={{ marginTop: '-15px' }}>
                                        <CuntUp
                                            start={0}
                                            end=  {props.all.cases}
                                            duration={2.5}
                                            separator='.'
                                        /> 
                                       
                                    </h5>
                                </CardBody>
                                <Button
                                    disabled
                                    style={{ backgroundColor: '#DF1414', color: 'white' }}
                                >
                                    Confirmed
                </Button>
                            </Card>
                        </Col>
                        <Col  className='col-6 col-md-3'>
                            <Card style={{ height: '80px', marginTop: '10px' }}>
                                <CardBody className='text-center'>
                                    <h5 style={{ marginTop: '-15px' }}>
                                        <CuntUp
                                            start={0}
                                            end= {props.all.deaths}
                                            duration={2.5}
                                            separator='.'
                                        /> 
                                        
                                    </h5>
                                </CardBody>
                                <Button
                                    disabled
                                    style={{ backgroundColor: 'black', color: 'white' }}
                                >
                                    Deaths
                </Button>
                            </Card>
                        </Col>
                   
                        <Col  className='col-6 col-md-3'>
                            <Card style={{ height: '80px', marginTop: '10px' }}>
                                <CardBody className='text-center'>
                                    <h5 style={{ marginTop: '-15px' }}>
                                    <CuntUp
                                            start={0}
                                            end={props.all.recovered}
                                            duration={2.5}
                                            separator='.'
                                        />
                                        
                                    </h5>
                                </CardBody>
                                <Button
                                    disabled
                                    style={{ backgroundColor: '#2D9707', color: 'white' }}
                                >
                                    Recovered
                </Button>
                            </Card>
                        </Col>
                        <Col  className='col-6 col-md-3'>
                            <Card style={{ height: '80px', marginTop: '10px' }}>
                                <CardBody className='text-center'>
                                    <h5 style={{ marginTop: '-15px' }}>
                                        <CuntUp
                                            start={0}
                                            end= {props.all.active}
                                            duration={2.5}
                                            separator='.'
                                        />
                                        
                                    </h5>
                                </CardBody>
                                <Button
                                    disabled
                                    style={{ backgroundColor: '#FFA500', color: 'white' }}
                                >
                                    Active
                                </Button>
                            </Card>
                        </Col>
                    </Row>
                </Container>
                <Row className='text-center d-none d-lg-block'>
                    <Col style={{ height: '300px' }}>
                        <Chart
                            width={'500px'}
                            height={'300px'}
                            style={{ marginLeft: '25%', marginTop: '15px' }}
                            chartType='PieChart'
                            loader={<div style={{ marginTop: '60px' }}>Loading Chart</div>}
                            data={[
                                ['Task', 'Hours per Day'],
                                ['', ''],
                                ['Deaths', props.all.deaths],
                                ['Active', props.all.active],
                                ['Recovered', props.all.recovered],

                            ]}
                            options={{
                                title: 'Overview in Percentage'
                            }}
                        />
                    </Col>
                </Row>
               </>
    );
}

export default Total;