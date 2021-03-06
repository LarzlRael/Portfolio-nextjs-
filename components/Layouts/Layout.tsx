import React from 'react'
import Link from 'next/link';
import styled from '@emotion/styled';
import { Header } from './Header';
import { WhoAmIm } from '../WhoAmIm';
import { TecnologiesGrids } from '../TecnologiesGrids';
import { MyProjects } from '../MyProjects';
import { FormContact } from '../FormContact';
interface LayoutProps {
    children: React.ReactNode,
}
export const Layout = ({ children }: LayoutProps) => {
    return (
        <>
            <MainLayout>
                <Header />
            </MainLayout>
            <WhoAmIm />
            <TecnologiesGrids />

            <MyProjects />
            <FormContact />
        </>
    )
}


const MainLayout = styled.div`
    width: 100%;
    background:url('https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80') center/cover;
    position: relative;

    &:before {
        content:"";
        background-color: rgba(59, 169, 156,0.6);
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    
    }
`;
