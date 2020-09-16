import React, { Component } from 'react';

class Covid extends Component {
    render() {
        return (
            <div className='container'>
                <h3 className='text-center mt-5'>Coronavirus (COVID-19)</h3>
                <article style={{
                display: 'flex', flexDirection: 'column',
                justifyContent: 'center', alignSelf: 'center',minHeight:'300px',
                fontSize: '20px', alignItems: 'center',letterSpacing:'2px',borderSpacing:'2px'
            }}>
                <p>
                Coronavirus (COVID-19) which is an infectious disease caused by respiratory illness and symptoms like flu, cough, fever, difficulty breathing, on December 31, 2019, the first case was recorded in Wuhan, China and later the virus got spread around the world and as of now around <span style={{fontWeight:'bold',color:'red'}}>{this.props.all.cases}</span> confirmed cases are being recorded since then.To get up to date results, this website collects the data from Johns Hopkins University Center for Systems Science and Engineering (JHU CSSE).</p>
            </article>
            </div>
        );
    }
}

export default Covid;