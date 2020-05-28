import React from 'react'

import Compensation from './../../components/compensation/compensation'
import CustomButton from './../../components/button/custom-button'

import './home.scss'

function Home () {
    return (
        <div className='home'>
            <Compensation />
            <div className="buttons">
                <CustomButton  type="submit">Attendance</CustomButton>
                <CustomButton  type="submit">Leave Balance</CustomButton>
                <CustomButton  type="submit">Download Payslip</CustomButton>
            </div>
        </div>
    )
}

export default Home