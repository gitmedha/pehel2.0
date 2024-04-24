import React from 'react';

const FamilyIncome = ({ value, onChange, nameOfLabel, isMandatory }) => {
  return (
    <div className="form-group py-2 category-fields">
        <label className='fz-16 lato-regular mb-1'>{nameOfLabel}
        <span className='mandatory-class'>{isMandatory? "*": ""}</span>
        </label>
        <div className='mt-1'>
            <div class="form-check form-check-inline mt-1 mb-1">
                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
                <label class="form-check-label" for="inlineRadio1">&lt;₹25,000</label>
            </div>
            <div class="form-check form-check-inline mt-1 mb-1">
                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
                <label class="form-check-label" for="inlineRadio2">₹25,000 - ₹50,000</label>
            </div>
                <div class="form-check form-check-inline mt-1 mb-1">
                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
                <label class="form-check-label" for="inlineRadio2"> ₹50,000 - ₹1,00,000</label>
            </div>
            <div class="form-check form-check-inline mt-1 mb-1">
                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
                <label class="form-check-label" for="inlineRadio2">₹1,00,000 - ₹2,50,000</label>
            </div>
            <div class="form-check form-check-inline mt-1 mb-1">
                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
                <label class="form-check-label" for="inlineRadio2">&lt;₹2,50,000</label>
            </div>
        </div>
    </div>
  );
};

export default FamilyIncome;
