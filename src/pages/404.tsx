import React from 'react';
import Lost from '../../assets/lost.svg';
import Layout from '../components/Layout';
import Container from '../components/Container';

const NotFoundPage = () => (
  <Layout>
    <Container
      className={`
      h-screen
      flex
      flex-col
      justify-center
    `}
    >
      <h1
        className={`
        text-xl
        text-center
        mb-4
      `}
      >
        The page you requested does not exist.
      </h1>
      <Lost
        className={`
        w-10/12
        lg:w-7/12
        h-auto
        mx-auto
      `}
      />
    </Container>
  </Layout>
);

export default NotFoundPage;
