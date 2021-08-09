import React from 'react'
import styled from '@emotion/styled';
import Js from '../public/javascript.png';
import Image from 'next/image';
import { Tec } from '../interfaces/tec.interface';


export const GridItem = ({ imageRoute, name }: Tec) => {

    /* const myLoader = ({ src, width, quality }: any) => {
        return `https://example.com/${src}?w=${width}&q=${quality || 75}`
    } */

    return (
        <GridTec>
            <Image
                src={imageRoute}
                width={500}
                height={500}
                alt={name} />
        </GridTec>
    )
}
const GridTec = styled.div`
    /* width: 120px;*/
    height:120px;
    border: 1px solid #cacaca;
    border-radius: 5px;
`;