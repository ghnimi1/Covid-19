import React, { Component } from 'react';
import {
  InputGroup,
  InputGroupText,
  InputGroupAddon,
  Input,
  Jumbotron,Container
  
} from 'reactstrap';
import { FaSearch } from "react-icons/fa";
import CountryItem from './CountryItem';
import { Row } from 'react-bootstrap';
import Total from '../Total/Total';

class Countries extends Component {
  state = {
    search: '',
    filter: null
  };

  onChange = e => {
    this.setState({ search: e.target.value });
  };

  render() {
    const { countries } = this.props;

    const filteredCountries = countries.filter(countries => {
      return (
        countries.country
          .toLowerCase()
          .indexOf(this.state.search.toLowerCase()) !== -1
      );
    });

    return (
      <div style={{marginTop:'0px',width:'100%'}}>
        <Jumbotron fluid>
        <Container fluid>
            <div className='col-12 col-md-12'>
             <Total all={this.props.all}/>
             </div>
           
                  </Container>

      </Jumbotron>
      <div className='col-12'>
        <InputGroup size='sm'>
            <InputGroupAddon addonType='prepend'>
              <InputGroupText>
                <FaSearch/>
              </InputGroupText>
            </InputGroupAddon>
            <Input
              type='text'
              name='text'
              id='text'
              placeholder='Search by Country Name ....'
              onChange={this.onChange}
            />
          </InputGroup>
        <Row xs="1 mx-2" sm="2" md="2" lg='2' xl='3' >
          {filteredCountries.map((countries,index) => (
            <CountryItem key={index} countries={countries} />
          ))}
        </Row></div>
      </div>
    );
  }
}



export default Countries;
