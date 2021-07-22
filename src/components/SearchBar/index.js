import React, { useState, useEffect, useRef } from 'react';

//Style
import { Wrapper, Content } from './SearchBar.styles';
//composent
import searchIcon from '../../images/search-icon.svg';


const SearchBar = ({ setSearchTerm}) => {
    const [state, setstate] = useState('');
    const initial = useRef(false)

    useEffect(()=>{
        if(initial.current){
            initial.current = false;
            return; 
        }

        const timer = setTimeout(() => {
            setSearchTerm(state);
          }, 500);
      
        return () => clearTimeout(timer)
    },[setSearchTerm, state]);

    return (
        <Wrapper>
            <Content>
                <img src={searchIcon} alt="search-icon"/>
                <input
                    type="text"
                    placeholder="Search Movie"
                    onChange={event => setstate(event.currentTarget.value)} 
                    value={state} />
            </Content>
        </Wrapper>
    )

}

export default SearchBar;
