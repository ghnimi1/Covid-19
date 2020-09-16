import React from 'react';
import './App.css';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Covid from './pages/Covid/Covid';
import Navbarr from './components/Navbar/Navbarr';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import axios from 'axios'
import CountryDetails from './components/CountryDetails/CountryDetails';
import Notfound from './pages/Notfound/Notfound';
import Prevention from './pages/Prevention/Prevention';
import Footer from './components/Footer/Footer';


class App extends React.Component {
  state = {
    countries: [],
    country: [],
    all: {},
    loading: false
  };
  getCountries = async () => {
    this.setState({ loading: true });

    const res = await axios.get('https://corona.lmao.ninja/v2/countries');

    this.setState({ countries: res.data, loading: false });
  };

  // get all total
  getAll = async () => {
    this.setState({ loading: true });

    const res = await axios.get('https://corona.lmao.ninja/v2/all');

    this.setState({ all: res.data, loading: false });
  };

  //get single country data

  getCountryData = async (country) => {
    try{
      this.setState({ loading: true });

    const res = await axios.get(
      `https://corona.lmao.ninja/v2/countries/${country}`
    );
    this.setState({ country: res.data, loading: false });
    }catch(e){
      console.log(e);
      
    }
    
  };

  async componentDidMount() {
    this.getCountries();
    this.getAll();
    this.getCountryData();
  }
  render(){ 
    console.log(this.state);
           
    return (
    <Router>
      <div className="App" style={{backgroundColor:'#fafafa',minHeight:'700px'}}>
      <Navbarr/>
      <Switch>
           <Route exact path='/Covid-19' render={(props) => <Home {...props} 
           loading={this.state.loading}
           all={this.state.all} 
           countries={this.state.countries} 
           />}/>
           <Route
              exact
              path='/Covid-19/country/:country'
              render={props => (
                <CountryDetails
                  {...props}
                  getCountryData={this.getCountryData}
                  country={this.state.country}
                  loading={this.state.loading}
                />
              )}
            />
            <Route exact path='/coronavirus' render={(props) => <Covid {...props} 
           all={this.state.all} 
           />}/>
           <Route exact path='/about' component={About}/>
           <Route exact path='/prevention' component={Prevention}/>
           <Route component={Notfound}/>
      </Switch>
     <Footer/>
    </div>
    </Router>
    
  );
  }
  
}

export default App;
