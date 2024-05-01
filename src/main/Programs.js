import React from 'react';

const Program = ({ value, onChange, nameOfLabel, isMandatory, nameOfSecondLabel,nameOfThirdLabel }) => {
  return (
    <div className="form-group py-2 category-fields">
        <label className='fz-16 lato-regular mb-1'>{nameOfLabel}
        <span className='mandatory-class'>{isMandatory? "*": ""}</span>
        </label>
        <br></br>
        <label className='fz-16 lato-regular mb-1 mt-2'>{nameOfSecondLabel}</label>
        <div className='mt-1'>
            <div class="form-check form-check-inline mt-1 mb-1">
                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
                <label class="form-check-label" for="inlineRadio1">Svapoorna</label>
            </div>
            <div class="form-check form-check-inlin mt-1 mb-1">
                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
                <label class="form-check-label" for="inlineRadio2">Swarambh</label>
            </div>
                <div class="form-check form-check-inline mt-1 mb-1">
                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
                <label class="form-check-label" for="inlineRadio2">Career Advancement Bootcamp</label>
            </div>
            <div class="form-check form-check-inline mt-1 mb-1">
                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
                <label class="form-check-label" for="inlineRadio2">Technology Advancement Bootcamp</label>
            </div>
            <div class="form-check form-check-inline mt-1 mb-1">
                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
                <label class="form-check-label" for="inlineRadio2">YouthScape</label>
            </div>
        </div>
        <label className='fz-16 lato-regular mb-1 mt-4'>{nameOfThirdLabel}</label>
        <div className='mt-1'>
            <div class="form-check form-check-inline mt-1 mb-1">
                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
                <label class="form-check-label" for="inlineRadio1">Pehli Udaan</label>
            </div>
        </div>
        <div className='disclaimer lato-light mt-4'>Please select either Program or Workshop you want to opt for. For more details about our program, please visit our Pehel desk or Career Centre on your campus.</div>
    </div>
  );
};

export default Program;
