import React, { Component } from 'react'
import {
  Card, CardImg, CardText, CardBody, CardTitle, CardHeader, Button, CardSubtitle
} from 'reactstrap';

import { Link } from 'react-router-dom'
import { Col } from 'react-bootstrap';

class CountryItem extends Component {

  render() {
    return (
      <Col  style={{width:'100%'}}>
        <Card style={{ minHeight: '310px', marginTop: "10px" }}>
          <CardHeader className="text-center" style={{backgroundColor:'aliceblue'}}>
            <CardImg src={this.props.countries.countryInfo.flag} alt="img" style={{ width: '60px', float: 'left' }} />
            <CardTitle> <strong>{this.props.countries.country}</strong></CardTitle>
          </CardHeader>
          <CardBody style={{}} >
            <CardSubtitle> <strong> Confrimed : </strong>{this.props.countries.cases} </CardSubtitle>
            <CardSubtitle> <strong>Deaths : </strong>{this.props.countries.deaths} </CardSubtitle>
            <CardSubtitle><strong>Recovered :</strong> {this.props.countries.recovered} </CardSubtitle>
            <CardSubtitle><strong>Critical :</strong> {this.props.countries.critical} </CardSubtitle>
            <CardSubtitle><strong>Active :</strong> {this.props.countries.active} </CardSubtitle>
            <hr />
            <CardSubtitle ><strong>Cases Today :</strong> {this.props.countries.todayCases} </CardSubtitle>
            <CardSubtitle><strong>Deaths Today:</strong> {this.props.countries.todayDeaths} </CardSubtitle>
          </CardBody>
          <Link to={`/Covid-19/country/${this.props.countries.country}`}>
            <Button color='info' style={{ width: '100%' }}>More Info </Button>
          </Link>
        </Card>
      </Col>
    )
  }
}

export default CountryItem
