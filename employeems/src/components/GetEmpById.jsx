import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const GetEmpById = () => {
    const [eid, setEid] = useState('');
    const history = useNavigate();

    const changeEmployee = (event) => {
        let newData = event.target.value;
        setEid(newData);
    }

    const changePath = (event) => {
        event.preventDefault();
        history(`/getemployeebyid/${eid}`);
    }

    return (
        <>
            <form onSubmit={changePath}>
                <input
                    type="number"
                    placeholder='Enter Employee Id'
                    id='eid'
                    onChange={changeEmployee}
                    value={eid}
                />
                <button type='submit'>Get Employee</button>
            </form>
        </>
    )
}

export default GetEmpById;
