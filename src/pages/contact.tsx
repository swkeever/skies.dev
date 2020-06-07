import React from 'react';
import Layout from '../components/layout';
import Container from '../components/layout/Container';
import Form from '../components/pages/contact/form';
import Diagonal from '../components/pages/contact/Diagonal';
import Title from '../components/pages/contact/Title';

export default function ContactPage() {
  return (
    <Layout
      className={`
        bg-neutralBgSoft
        text-onNeutral
      `}
    >
      <Diagonal />
      <Container
        className={`
          mt-8 
          px-5 
          pb-5
          bg-neutralBg
          z-30
          -mt-64
          relative
          w-10/12
          mx-auto
          p-2
          shadow-2xl
          rounded-md
          md:w-2/3 
          lg:-mt-64
          lg:w-6/12
          xl:w-4/12
        `}
      >
        <Title />
        <Form />
      </Container>
    </Layout>
  );
}
