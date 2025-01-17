import React, { useState, useEffect }  from 'react';
import axiosConfig from '../axios/axiosConfig';

const CategoryField = ({ value, onCategorySelect, nameOfLabel, isMandatory, errorMessage, hasError }) => {
    const [categoryData, setCategoryData] = useState([]);

    useEffect(() => {
        axiosConfig.get('/api/picklist-field-configs?table=students&field=category')
        .then(response => {
            if(response){
            setCategoryData(response.data[0].values);
            }
        })
    }, []);

    const onCategoryChange =(event)=>{
        onCategorySelect(event.target.value);
    }

    return (
        <div className="form-group py-2 category-fields">
            <label className='fz-16 lato-regular mb-1'>{nameOfLabel}
            <span className='mandatory-class'>{isMandatory? "*": ""}</span>
            </label>
            <div className='mt-1'>
                {categoryData.map(category => (
                    <div key={category.key} className="form-check form-check-inline">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="category"
                            id={`${category.key}`}
                            value={category.value}
                            onChange={(e) => {onCategoryChange(e)}}
                        />
                        <label className="form-check-label" htmlFor={`inlineRadio${category.key}`}>
                            {category.value}
                        </label>
                    </div>
                ))}
            </div>
            {hasError === true ? <div className='error-message mt-1'> {errorMessage} </div>:<div></div>}
        </div>
    );
};

export default CategoryField;
