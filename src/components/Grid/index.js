import React from 'react'

//styes
import { Wrapper, Context } from './Grid.styles';

export const Grid = ({ header, children}) => {
    return (
        <Wrapper>
            <h1>{header}</h1>
            <Context>{children}</Context>
        </Wrapper>
    )
}
