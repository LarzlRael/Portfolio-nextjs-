
import styled from '@emotion/styled';
import { Layout } from '../components/Layouts/Layout';

const Heading = styled.h1`
  color:red;
`;

export default function Home() {
  return (
    <div>
      <Layout>
        <Heading>nostros</Heading>
      </Layout>
    </div>
  )
}
