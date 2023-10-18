import React, { useState } from 'react'

function FilterTask({handleSelectChange, selectedOption}) {

    return (
            <select value={selectedOption} onChange={handleSelectChange} className='bg-primary p-2 border-none text-white'>
                <option value="">Select an option</option>
                <option value="completed">Completed</option>
                <option value="not-completed">Not Completed</option>
            </select>
    )
}

export default FilterTask