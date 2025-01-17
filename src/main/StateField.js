import React, { useEffect, useState } from 'react';
import axiosConfig from '../axios/axiosConfig';

const StateField = ({ value, onStateSelected, nameOfLabel, isMandatory, nameOfSecondaryLabel ,hasError, errorMessage}) => {
    const [stateList, setStateList] = useState([]);
    const [selectedState, setSelectedState] = useState('');
    const [apiResponse, setApiResponse] = useState([]);

    useEffect(() => {
        axiosConfig.post('/api/geographies/findall')
        .then(response => {
            if(response && response.data){
                setApiResponse(response && response.data);
                const uniqueStates = Array.from(new Set(response.data.map(state => state.state)));
                setStateList(uniqueStates);
            }
        })
        .catch(error => {
            console.error('Error fetching states:', error);
        });
    }, []);

    const handleStateChange = (e) => {
        setSelectedState(e.target.value);
        if(e.target.value){
            let completeList = apiResponse;
            let filteredData = completeList.filter(item => item.state === e.target.value);
            onStateSelected(e.target.value, filteredData);
        }
    };

    return (
        <div className="form-group py-2">
            <label className='fz-16 lato-regular mb-1'>
                {nameOfLabel}
            </label>
            <select
                className={hasError === true ? "form-control input-error":"form-control"}
                aria-label="Default select example"
                value={selectedState}
                onChange={handleStateChange}
            >
                <option value="">Select a State</option>
                {stateList.sort().map((state, index) => (
                    <option key={index} value={state}>{state}</option>
                ))}
            </select>
            <label className='fz-12 lato-light mb-1'>{nameOfSecondaryLabel}</label>
            <span className='mandatory-class'>{isMandatory ? "*" : ""}</span>
            {hasError === true ? <div className='error-message'> {errorMessage} </div>:<div></div>}
        </div>
    );
};

export default StateField;
