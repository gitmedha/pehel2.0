import React, { useEffect, useState } from 'react';
import axiosConfig from '../axios/axiosConfig';

const Program = ({ value, onSelection, nameOfLabel, isMandatory, nameOfSecondLabel,nameOfThirdLabel, hasError, errorMessage }) => {

    const [programList, setProgramList] = useState([]);

    useEffect(() => {
        axiosConfig.get('/api/programs?status=Active')
        .then(response => {
            if(response){
                setProgramList(response.data);
            }
        })
    }, []);
    const onProgramSelected = (e) =>{
        onSelection(e.target.value, e.target.id);
    }

    return (
        <div className="form-group py-2 category-fields">
            <label className='fz-16 lato-regular mb-1'>{nameOfLabel}
            <span className='mandatory-class'>{isMandatory? "*": ""}</span>
            </label>
            <br></br>
            <label className='fz-16 lato-regular mb-1 mt-2'>{nameOfSecondLabel}</label>
            <div className='mt-1'>
                {programList.slice(0, -1).map((program) => (
                    <div key={program.key} className="form-check form-check-inline mt-1">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="program"
                            id={program.name}
                            value={program.id}
                            onChange={(e) => {onProgramSelected(e)}}
                        />
                        <label className="form-check-label" htmlFor={`inlineRadio${program.id}`}>
                            {program.name}
                        </label>
                    </div>
                ))}
            </div>
            <label className='fz-16 lato-regular mb-1 mt-4'>{nameOfThirdLabel}</label>
            <div className='mt-1'>
                <div className="form-check form-check-inline mt-1 mb-1">
                    <input className="form-check-input" type="radio" name="program" id="Workshop" value="23" onChange={(e) => {onProgramSelected(e)}}/>
                    <label className="form-check-label" htmlFor="inlineRadio1">Pehli Udaan</label>
                </div>
            </div>
            {hasError === true ? <div className='error-message'> {errorMessage} </div>:<div></div>}
            <div className='disclaimer lato-light mt-4'>Please select either Program or Workshop you want to opt for. For more details about our program, please visit our Pehel desk or Career Centre on your campus.</div>
        </div>
    );
};

export default Program;
