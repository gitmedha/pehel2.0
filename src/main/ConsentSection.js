import React, { useState } from 'react';

const ConsentSection = ({ onCheckingFirstBox, onCheckingSecondBox }) => {
    const [isFirstChecked, setIsFirstChecked] = useState(false);
    const [isSecondChecked, setIsSecondChecked] = useState(false);

    const handleFirstConsentSelection = (e) => {
        const checked = e.target.checked;
        setIsFirstChecked(checked);
        onCheckingFirstBox(checked);
    };

    const handleSecondConsentSelection = (e) => {
        const checked = e.target.checked;
        setIsSecondChecked(checked);
        onCheckingSecondBox(checked);
    };

    return (
        <div className="form-check py-5 consent-form">
            <input
                className="form-check-input"
                type="checkbox"
                id="firstMessage"
                checked={isFirstChecked}
                onChange={handleFirstConsentSelection}
            />
            <label className="form-check-label" htmlFor="firstMessage">
                My guardian and I give consent to complete an internship as part of Medha's program. I will be doing a project with a company for a minimum of 100 hours to gain work experience.
            </label>
            <div className='disclaimer lato-light mt-4'>
                Guardian can contact Medha's Student Relationship Manager at any time, with questions or concerns.
            </div>
            <br />
            <input
                className="form-check-input"
                type="checkbox"
                id="secondMessage"
                checked={isSecondChecked}
                onChange={handleSecondConsentSelection}
            />
            <label className="form-check-label" htmlFor="secondMessage">
                I agree to the <a className='link' href='https://medha.org.in/payments/Student.Consent.Form.pdf' target='_blank'>student consent form</a>.
            </label>
        </div>
    );
};

export default ConsentSection;
