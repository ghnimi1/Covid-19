import React, { Component } from 'react';

class Prevention extends Component {
    render() {
        return (
            <>
                <h3 className='text-center mt-5'>Prevention</h3><br></br>
                <div className='row text-center'>
                    <div className='col-12 col-md-4 mt-4'>
                        <img height='250px' width='80%' src="https://www.who.int/images/default-source/health-topics/coronavirus/risk-communications/general-public/protect-yourself/blue-4.png" alt='prevention' />
                    </div>
                    <div className='col-12 col-md-4 mt-4'>
                        <img height='250px' width='80%' src="https://www.who.int/images/default-source/health-topics/coronavirus/risk-communications/general-public/protect-yourself/blue-1.png" alt='prevention' />

                    </div>
                    <div className='col-12 col-md-4 mt-4'>
                        <img height='250px' width='80%' src="https://www.who.int/images/default-source/health-topics/coronavirus/risk-communications/general-public/handshaking.png" alt='prevention' />

                    </div>
                </div>
            </>
        );
    }
}

export default Prevention;