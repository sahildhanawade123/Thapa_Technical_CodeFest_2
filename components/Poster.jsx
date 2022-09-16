import React from 'react'
import Button from '@mui/material/Button';
import FileDownloadDoneIcon from '@mui/icons-material/FileDownloadDone';

const Poster = () => {
    return <>
        <div className="poster paddingrl">
            <h1 className='tagline'>Savings to Set Your Website in Motion</h1>
            <h1 className="price"> 149.00</h1>
            <p className="para">Get things moving with a free domain, lifetime SSL, and DDos protection included with a four-year subscription</p>

            <div className="time">
                <div className="days">
                    <div className="daysno">01</div>
                    <div className="daystext">days</div>
                </div>

                <div className="days">
                    <div className="daysno">22</div>
                    <div className="daystext">hours</div>
                </div>

                <div className="days">
                    <div className="daysno">31</div>
                    <div className="daystext">minutes</div>
                </div>

                <div className="days">
                    <div className="daysno">16</div>
                    <div className="daystext">seconds</div>
                </div>     
            </div>



            <Button className='getstarted'>Get Started</Button>

            <p className="endtextline"><FileDownloadDoneIcon className='texticon' />Get exclusive 30-day money-back guarantee</p>


        </div>
    </>
}

export default Poster