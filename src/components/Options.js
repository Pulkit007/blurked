import React, { useEffect, useState } from 'react';

const Options = (props) => {
    const { options, handleSetOptions, handleClick } = props;
    const [optionsState, setOptionsState] = useState(options);

    return (
        <div className='optionList'>
            <div className='option'>
                <input checked={optionsState.removeName} onChange={() => {
                    setOptionsState({ ...optionsState, removeName: !optionsState.removeName });
                    handleSetOptions({ ...options, removeName: !optionsState.removeName });
                }} type="checkbox" />
                <label htmlFor={"Name"}>Name</label>
            </div>
            <div className='option'>
                <input checked={optionsState.removeAddress} onChange={() => {
                    setOptionsState({ ...optionsState, removeAddress: !optionsState.removeAddress });
                    handleSetOptions({ ...options, removeAddress: !optionsState.removeAddress });
                }} type="checkbox" />
                <label htmlFor={"Address"}>Address</label>
            </div>
            <div className='option'>
                <input type="checkbox" checked={optionsState.removeEmail} onChange={() => {
                    setOptionsState({ ...optionsState, removeEmail: !optionsState.removeEmail });
                    handleSetOptions({ ...options, removeEmail: !optionsState.removeEmail });
                }} />
                <label htmlFor={"Email"}>Email</label>
            </div>
            <div className='option'>
                <input type="checkbox" checked={optionsState.removePhone} onChange={() => {
                    setOptionsState({ ...optionsState, removePhone: !optionsState.removePhone });
                    handleSetOptions({ ...options, removePhone: !optionsState.removePhone });
                }} />
                <label htmlFor={"Phone Number"}>Phone Number</label>
            </div>
            <div className='option'>
                <input type="checkbox" checked={optionsState.removeDate} onChange={() => {
                    setOptionsState({ ...optionsState, removeDate: !optionsState.removeDate });
                    handleSetOptions({ ...options, removeDate: !optionsState.removeDate });
                }} />
                <label htmlFor={"Date"}>Date</label>
            </div>
            <div className='option'>
                <input type="checkbox" checked={optionsState.removePin} onChange={() => {
                    setOptionsState({ ...optionsState, removePin: !optionsState.removePin });
                    handleSetOptions({ ...options, removePin: !optionsState.removePin });
                }} />
                <label htmlFor={"Pin"}>Pin</label>
            </div>
            <div className='option'>
                <input type="checkbox" checked={optionsState.removeGender} onChange={() => {
                    setOptionsState({ ...optionsState, removeGender: !optionsState.removeGender });
                    handleSetOptions({ ...options, removeGender: !optionsState.removeGender });
                }} />
                <label htmlFor={"Gender"}>Gender</label>
            </div>
            <div className='option'>
                <input type="checkbox" checked={optionsState.removeURL} onChange={() => {
                    setOptionsState({ ...optionsState, removeURL: !optionsState.removeURL });
                    handleSetOptions({ ...options, removeURL: !optionsState.removeURL });
                }} />
                <label htmlFor={"Url"}>Url</label>
            </div>
            <div className='option'>
                <input type="checkbox" checked={optionsState.removePostalCode} onChange={() => {
                    setOptionsState({ ...optionsState, removePostalCode: !optionsState.removePostalCode });
                    handleSetOptions({ ...options, removePostalCode: !optionsState.removePostalCode });
                }} />
                <label htmlFor={"Postal Code"}>Postal Code</label>
            </div>
            <button onClick={() => handleClick()} className='submit-btn'>Redact</button>
        </div >
    )
}

export default Options;