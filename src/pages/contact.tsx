import React from 'react';
import Layout from '../components/Layout';
import Container from '../components/Container';
import Form from '../components/contact/Form';

export default function ContactPage() {
  return (
    <Layout
      title="Contact"
      className={`
        bg-neutralBgSoft
        text-onNeutral
      `}
    >
      <div
        className={`
        diagonal-t
        pt-40
        pb-48
        relative
        bg-primary
        md:pt-64
      `}
      />
      <Container
        className={`
          px-5 
          pb-5
          bg-neutralBg
          z-30
          -mt-64
          mb-32
          relative
          mx-auto
          p-2
          shadow-2xl
          rounded-md
          lg:-mt-64
          w-11/12
          md:max-w-md
        `}
      >
        <h1
          className={`
            text-lg
            mb-2
          `}
        >
          Contact
        </h1>
        <Form />
      </Container>
    </Layout>
  );
}
