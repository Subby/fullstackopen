import React from 'react'

export const PersonForm = ({newName, handleNameChange, newNumber, handleNumberChange, handleSubmitButton}) => {
  return <form>
    <div>
      name: <input value={newName} onChange={handleNameChange}/>
    </div>
    <div>
      number: <input value={newNumber} onChange={handleNumberChange}/>
    </div>
    <div>
      <button type="submit" onClick={handleSubmitButton}>add</button>
    </div>
  </form>;
};