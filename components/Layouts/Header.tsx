import React, { useContext } from 'react'
import styled from '@emotion/styled';
import Image from 'next/image'
import esFlag from '../../public/es.png';
import enFlag from '../../public/usa.png';
import { Switch } from './Switch';
import { WhoAmIm } from '../WhoAmIm';
import { FormattedMessage } from 'react-intl';
import { LangContext } from '../../context/langContext';

export const Header = () => {

    const { changeLan } = useContext(LangContext);

    return (
        <>

            <HeaderContainer>
                <BoxHeaderTitle>
                    <div className="flags" style={{
                        display: 'flex',
                    }}>

                        <Image
                            className="pointer"
                            onClick={() => changeLan('en-US')}
                            src={enFlag} alt="en flag" />
                        <Image
                            className="pointer"
                            onClick={() => changeLan('es-ES')}
                            src={esFlag} alt="es Flag" />

                    </div>
                    <LinkContainer>
                        <a href=""><FormattedMessage
                            id="app.home" />
                        </a>
                        <a href="#tecnologies"><FormattedMessage
                            id="app.technologies" />
                        </a>
                        <a href="#projects"><FormattedMessage
                            id="app.projects" />
                        </a>
                        <a href="#contact"><FormattedMessage
                            id="app.contact" />
                        </a>
                    </LinkContainer>
                </BoxHeaderTitle>

                <NamePresentation>
                    <h2>Reynaldo Larz</h2>
                    <h3>
                        <FormattedMessage
                            id="app.job"
                        />
                    </h3>
                </NamePresentation>
                <Switch />
                <ProfileImage size={150} />

            </HeaderContainer>


        </>
    )

}

const BoxHeaderTitle = styled.div`
    display:flex;
    justify-content: space-between;
    padding-top: 3rem;
    align-content:center;
    align-items:center;
    `;
const LinkContainer = styled.div`
    a{
        color:white;
        margin-left: 30px;
        font-family:'Open Sans';
    }
`;
const HeaderContainer = styled.div`
        width: 1200px;
        height: 450px;
        margin:auto;
        position:relative;
`;
const NamePresentation = styled.div`
    margin:auto ;
    margin-top: 70px;
    color: white;
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    border-radius: 5px;
    padding: 25px;
    width: 450px;
    border: 2px solid #fff;
    h2{
        margin-top: 0;
        margin-bottom: 0;
        font-size: 48px;
        margin-bottom: 1rem;
    }
    h3{
        margin-top: 0;
        margin-bottom: 0;
        font-size: 24px;

    }
`;

const ProfileImage = styled.div<{
    size: number
}>`
    
    background: url('https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg');
    width: ${({ size }) => size + 'px'} ;
    height: ${({ size }) => size + 'px'} ;
    position:absolute;
    border-radius: 50%;
    bottom: calc(-1 * (${({ size }) => size + 'px'} / 2));
	left: calc(50% - calc(${({ size }) => size + 'px'} / 2));
    border: 5px solid #3ba99c;
    
`;