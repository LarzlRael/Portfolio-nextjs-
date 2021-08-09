import React from 'react'
import styled from '@emotion/styled';
import { GridItem } from './GridItem';
import { InfoGridsTec } from '../data/dataTec';
import { FormattedMessage } from 'react-intl';

export const TecnologiesGrids = () => {
    return (
        <TecContainer id="tecnologies">
            <h2>
                <FormattedMessage
                    id="app.technologies"
                />
            </h2>

            <GridContainer>

                {InfoGridsTec.map((info) => (
                    <GridItem
                        imageRoute={info.imageRoute}
                        name={info.name}
                        key="xd"
                    />
                ))}

            </GridContainer>

        </TecContainer>
    )
}

interface Props {
    children: React.ReactNode,
}
const GridContainer = ({ children }: Props) => {
    return (
        <GridContainerSytyle >
            {children}
        </GridContainerSytyle>
    )
}


const TecContainer = styled.div`
    background: #f3f3f3;
    height: 450px;
    h2{
        font-size:24px;
        text-align: center;
        padding-top: 30px;
        padding-bottom: 30px;
    }
`;

const GridContainerSytyle = styled.div`
    width: 1200px;
    margin: auto;
    display: grid;
    gap: 3.7rem;
    grid-template-columns: repeat(auto-fill, minmax(7rem, 1fr));
`;