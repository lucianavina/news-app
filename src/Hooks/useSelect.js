import React, {useState} from 'react';

const useSelect = (inicialState, options) => {

    //custom's Hook State
    
    const [state, updateState] = useState(inicialState)

    const SelectNews = () => (

        <select
            className='browser-default'
            value={state}
            onChange={e => updateState(e.target.value)}
        >
            
            {options.map(option => (
                <option key={option.value} value={option.value}>{option.label}</option>
            ))}
           
        </select>
       
    )

    return [state, SelectNews]
}
 
export default useSelect;