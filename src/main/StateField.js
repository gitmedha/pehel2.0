import React, { useEffect, useState } from 'react';
import axiosConfig from '../axios/axiosConfig';

const StateField = ({ value, onChange, nameOfLabel, isMandatory, nameOfSecondaryLabel }) => {
    const [stateList, setStateList] = useState([]);
    const [selectedState, setSelectedState] = useState('');

    useEffect(() => {
        axiosConfig.get('/api/geographies')
        .then(response => {
            if(response && response.data){
                // Filter out duplicate states
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
        if (onChange) {
            onChange(e.target.value);
        }
    };

    return (
        <div className="form-group py-2">
            <label className='fz-16 lato-regular mb-1'>
                {nameOfLabel}
                <span className='mandatory-class'>{isMandatory ? "*" : ""}</span>
            </label>
            <select
                className="form-control"
                aria-label="Default select example"
                value={selectedState}
                onChange={handleStateChange}
            >
                <option value="">Select a State</option>
                {stateList.map((state, index) => (
                    <option key={index} value={state}>{state}</option>
                ))}
            </select>
            <label className='fz-12 lato-light mb-1'>{nameOfSecondaryLabel}</label>
        </div>
    );
};

export default StateField;
