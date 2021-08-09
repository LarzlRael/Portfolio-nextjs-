import React from 'react'
import styled from '@emotion/styled';
import { FormattedMessage } from 'react-intl';

export const WhoAmIm = () => {
    return (
        <WhoIamContainer>
            <h3>
                <FormattedMessage
                    id="app.whoami"
                />
            </h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, ipsam! Vitae at dolor amet ipsum eaque consequatur eveniet enim asperiores aliquid doloremque, maxime corrupti porro iste qui esse iusto nemo.</p>
        </WhoIamContainer>
    )
}


const WhoIamContainer = styled.div`
    margin: auto;
    margin-top:40px;
    width: 740px;
    
    padding: 30px;
    
    h3{
        text-align:center;
        margin: 1.5rem;
    }
    p{
        color: #5A5A5A;
        font-weight: 400;
    }
`;