import React from 'react';
import medhaLogo from '../images/medha.png';
import { useLocation } from 'react-router-dom';

const ThankyouPage = () => {
    const location = useLocation();

    return (
        <div className='thankyou-page'>
            <div className='p-lg-5'>
                <div className='header-thankyou'>
                    <div className='thankyou d-flex justify-content-between'>
                        <div>
                        <img src={medhaLogo} className='logo ' alt="Medha Logo" />
                        </div>
                        <div className='sign-up-text text-white display-6 d-flex flex-column justify-content-center px-2'>SIGN UP SUCCESSFUL</div>
                    </div>
                    <div className='fz-24 p-lg-2'>
                        <div className='text-center'>
                            <div>
                                Name:{ location?.state?.name || 'N/A'}
                            </div>
                            <div>Date: {new Date().toLocaleDateString()}</div>
                        </div>
                        <div className='text-center'>Email id: {location?.state?.email || 'N/A'}</div>
                    </div>
                    <div className='text-center fz-24 pb-4'><b>Student Id: {location?.state?.id || 'N/A'}</b></div>
                    <div className='footer-thankyou text-center py-4 fz-24'>
                    <p><b>You will receive a confirmation email with your student ID.</b></p>
                    <p>In case you require a receipt of the transaction, mail us at <a href="mailto:finance@medha.org.in">finance@medha.org.in</a></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ThankyouPage;
