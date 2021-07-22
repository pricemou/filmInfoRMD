import React from 'react'
import { Link } from 'react-router-dom';


import RMDBLogo from '../../images/react-movie-logo.svg'
import TMDBLogo from '../../images/tmdb_logo.svg'

import { Wrapper, Content, LogoImg, TMDBLogoImg} from './Header.style'

const Header = () => {
    return (
        <Wrapper >
            <Content>
                <Link to='/'>
                    <LogoImg src={RMDBLogo} alt="rmdb-Logo" />
                </Link>
                <TMDBLogoImg src={TMDBLogo} alt="rmdb-Logo" />
            </Content>
        </Wrapper>
    )
}

export default Header;
