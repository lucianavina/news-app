import React from 'react';
import styles from './Form.module.css'
import useSelect from '../../Hooks/useSelect'
import PropTypes from 'prop-types'


const Form = ({saveCategory}) => {

    const Options = [
        { value: 'general', label: 'General' },
        { value: 'business', label: 'Business' },
        { value: 'entertainment', label: 'Entertainment' },
        { value: 'health', label: 'Health' },
        { value: 'science', label: 'Science' },
        { value: 'sports', label: 'Sports' },
        { value: 'technology', label: 'Technology' },
        
    ]

    // use custom Hook

    const [category, SelectNews] = useSelect('general', Options)
    
//Submit form take category to app.js
    
    const searchNews = e => {

        e.preventDefault()
        saveCategory(category)
    }


    return (
        <div className={`${styles.buscador} row`}>
            <div className='col s12 m8 offset-m2'>
                <form
                    onSubmit={searchNews}
                >
                    <h2 className={styles.heading}>Encuentra noticias por categoría</h2>
                    <SelectNews/>
                    <div className='input-field col s12'>
                        <input
                            type='submit'
                            className = {`${styles['btn-block']} btn-large amber darken-2`}
                            value='Buscar'
                            />
                    </div>
                </form>
                
            </div>
        </div>
    );
}

Form.propTypes = {
    saveCategory: PropTypes.func.isRequired
}
 
export default Form;