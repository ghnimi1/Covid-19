import React, { Component } from 'react';
import {
    Container,
    Row,
    Col,
    Card,
    CardBody,
    Button,
    CardDeck,
    Spinner
} from 'reactstrap';
import Chart from 'react-google-charts';
import Maps from './Maps';


export class CountryDetails extends Component {
    componentDidMount() {
        this.props.getCountryData(this.props.match.params.country);
    }

    render() {
        const loading = this.props.loading
        return (
            <>
                {loading ?
                    (
                        <div className='text-center' style={{ marginTop: '250px' }}>
                            <Spinner type="grow" color="primary" />
                            <Spinner type="grow" color="secondary" />
                            <Spinner type="grow" color="success" />
                            <Spinner type="grow" color="danger" />
                            <Spinner type="grow" color="warning" />
                            <Spinner type="grow" color="info" />
                            <Spinner type="grow" color="dark" />
                        </div>
                    ) : <div style={{ marginTop: '50px' }}>
                        <Container>
                            <Row >
                                <Col>
                                    <Card inverse body outline color='info' className='my-3'>
                                        <CardBody>
                                            <h2 style={{ color: 'black' }}>
                                                {this.props.country.country} - Covid-19 Overview
</h2>
                                            <CardDeck style={{ marginTop: '20px', width: '100%',justifyContent:'space-between' }}>
                                           
                                                    <Row style={{ display: 'flex', flexDirection: 'column' }}>
                                                        <Col>
                                                            <Card body inverse color='danger' className='text-center mt-2'>
                                                                <h3>{this.props.country.cases}</h3>
                                                                <h4>Confirmed</h4>
                                                            </Card>
                                                        </Col>
                                                        <Col>
                                                            <Card body inverse color='dark' className='text-center mt-2' >
                                                                <h3>{this.props.country.deaths}</h3>
                                                                <h4>Deaths</h4>
                                                            </Card>
                                                        </Col>
                                                        <Col >
                                                            <Card body inverse color='success' className='text-center mt-2'>
                                                                <h3>{this.props.country.recovered}</h3>
                                                                <h4>Recovered</h4>
                                                            </Card>
                                                        </Col>
                                                    </Row>

                                                <div>
                                                    <Chart
                                                        width={'400px'}
                                                        height={'300px'}
                                                        chartType='PieChart'
                                                        loader={<div>Loading....</div>}
                                                        data={[
                                                            ['Task', 'Hours per Day'],
                                                            ['', ''],
                                                            ['Deaths', this.props.country.deaths],
                                                            ['Active', this.props.country.active],
                                                            ['Recovered', this.props.country.recovered]
                                                        ]}
                                                        options={{
                                                            title: 'Overview in Percentage'
                                                        }}
                                                    />

                                                </div>
                                            </CardDeck>
                                        </CardBody>
                                    </Card>

                                </Col>
                                <Col lg='4' md="4" sm="12">
                                    <Card inverse body outline color='info' className='my-3'>
                                        <CardBody>
                                            <div style={{ color: 'black', textAlign: 'center' }}>
                                                <h2>{this.props.country.critical} </h2>{' '}
                                                <h3>Critical Cases treated in ICU</h3>
                                                <hr></hr>
                                            </div>
                                            <Card>
                                                <Button disabled color='primary'>
                                                    <h4>Today</h4>
                                                </Button>
                                                <CardBody>
                                                    <Card
                                                        body
                                                        inverse
                                                        color='warning'
                                                        className='text-center'
                                                    >
                                                        <h3>{this.props.country.todayCases}</h3>
                                                        <h4>New Cases</h4>
                                                    </Card>
                                                    <Card
                                                        body
                                                        inverse
                                                        color='danger'
                                                        className='text-center'
                                                        style={{ marginTop: '20px' }}
                                                    >
                                                        <h3>{this.props.country.todayDeaths}</h3>
                                                        <h4>New Deaths</h4>
                                                    </Card>
                                                </CardBody>
                                            </Card>
                                        </CardBody>
                                    </Card>
                                </Col>
                            </Row>
                        </Container>
                        <h1></h1>
                        <Container>
                            <Row style={{ display: 'flex', justifyContent: 'center' }}>
                                <Col>
                                    <Card outline color='info' style={{ width: '100%' }}>
                                        <Maps countries={this.props.country.countryInfo}
                                            deaths={this.props.country.deaths}
                                            active={this.props.country.active}
                                            recovered={this.props.country.recovered}
                                        />
                                    </Card>
                                </Col>
                            </Row>
                        </Container>

                    </div>}
            </>

        );
    }
}

export default CountryDetails;
