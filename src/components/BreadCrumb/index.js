import React from 'react';
import { Link } from 'react-router-dom';
// styles
import { Wrapper, Content } from './BreadCrumb.styles';

export const BreadCrumb = ({ movieTitlle }) => {
    return (
        <Wrapper>
            <Content>
                <Link to="/">
                    <span>Home</span>
                </Link>
                <span>|</span>
                <span>{movieTitlle}</span>
            </Content>
        </Wrapper>
    )
}
