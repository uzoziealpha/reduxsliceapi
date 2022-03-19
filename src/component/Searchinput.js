import React, {useRef} from 'react';
import './Searchinput.css';



const Searchinput = () => {
    const searchValue = useRef();
    return (
        <section className='section search'>
            <form className='search-form'>
               <div className='form-control'>
                 <label htmlFor='name'>Search Job Bounties</label>
                 <input type='text' name='name' id='name' ref={searchValue}/>
               </div>
            </form>
        </section>
    );
};

export default Searchinput;