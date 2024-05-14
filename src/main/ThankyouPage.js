import React from 'react';
import medhaLogo from '../images/medha.png';
import { useLocation } from 'react-router-dom';

const ThankyouPage = () => {
    const location = useLocation();
    const { studentData } = location.state;
    return (
        <div className='p-lg-5'>
            <div className='p-lg-5'>
                <div className='text-center thankyou'>
                    <img src={medhaLogo} className='logo ' alt="Medha Logo" />
                    <div className='sign-up-text text-white display-6 pb-5'>SIGN UP SUCCESSFUL</div>
                </div>
                <div className='fz-24 p-lg-5'>
                    <div className='d-lg-flex justify-content-between pb-2'>
                        <div>
                            Name:{location.state && location.state.full_name}
                        </div>
                        <div>Date: {new Date().toLocaleDateString()}</div>
                    </div>
                    <div>Email id: {location.state && location.state.email}</div>
                </div>
                <div className='text-center fz-24 pb-4'><b>Student Id: {location.state && location.state.id}</b></div>
                <div className='footer-thankyou text-center py-4 fz-24'>
                <p><b>You will receive a confirmation email with your student ID.</b></p>
                <p>In case you require a receipt of the transaction, mail us at <a href="mailto:finance@medha.org.in">finance@medha.org.in</a></p>
                </div>
            </div>
        </div>
    );
};

export default ThankyouPage;
