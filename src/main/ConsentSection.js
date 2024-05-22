import React from 'react';

const ConsentSection = ({})=>{
    return(
        <div class="form-check py-5 consent-form">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked/>
            <label class="form-check-label" for="flexCheckChecked">
            My guardian and I give consent to complete an internship as part of Medha's program. I will be doing a project with a company for a minimum of 100 hours to gain work experience.
            </label>
            <div className='disclaimer lato-light mt-4'>Guardian can contact Medha's Student Relationship Manager at any time, with questions or concerns.</div>
            <br></br>
            <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked/>
            <label class="form-check-label" for="flexCheckChecked">
            I agree to the <a className='link' href='https://medha.org.in/payments/Student.Consent.Form.pdf' target='_blank'>student consent form</a>.
            </label>
        </div>
    )
}

export default ConsentSection;