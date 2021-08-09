import React from 'react'
import styled from '@emotion/styled';
import { FormattedMessage } from 'react-intl';

export const MyProjects = () => {
    return (
        <MyProjectsStyles id="projects">
            <h2>
                <FormattedMessage
                    id="app.projects"
                />
            </h2>
            <MyProjectsGrid />
        </MyProjectsStyles>
    )
}
const MyProjectsGrid = () => {
    return (
        <WorkGridContainer>
            <WorksOneGrid />
            <WorksOneGrid />
            <WorksOneGrid />
            <WorksOneGrid />
            <WorksOneGrid />
            <WorksOneGrid />

        </WorkGridContainer>
    )
}


const WorksOneGrid = () => {
    return (
        <WorksOneGridContainer>
            <ContainerImage />
            <h3>Lorem ipsum dolor</h3>
            <h4>Html Css Js</h4>
        </WorksOneGridContainer>
    )
}

const WorksOneGridContainer = styled.div`
    width: 235px;
    height: 300px;
    border-radius: 5px 5px 0 0;
    overflow: hidden;
    text-align: center;
    h3{
        font-size: 1rem;
        color:#3895EA;
        margin: 10px 0;
    }
    h4{
        margin-top: 0px;
        font-size: 0.8rem;
        color: #5A5A5A;
    }

`;

const MyProjectsStyles = styled.div`
    background: #f3f3f3;
    
    margin-top: 90px;
    h2{
        padding-top: 2rem;
        padding-bottom: 2rem;
        text-align: center;
    }
`;
const WorkGridContainer = styled.div`
    width: 1200px;
    margin:auto;
    display: grid;
    gap: 3.7rem;
    grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
`;

const ContainerImage = styled.div`
    width: 100%;
    height: 235px;
    
    border-radius: 5px;
    background: url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80');

`;