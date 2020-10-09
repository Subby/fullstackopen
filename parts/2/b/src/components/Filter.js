import React from 'react'

export const Filter = ({filterText, handleFilterChange}) => {
    return <div>
        filter person shown <input value={filterText} onChange={handleFilterChange}/>
    </div>;
};