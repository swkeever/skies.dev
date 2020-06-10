/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import CVSection from './CVSection';
import CVSectionTitle from './CVSectionTitle';

export type CVBasics = {};

export default function Basics({ basics }: { basics: CVBasics }) {
  return (
    <CVSection>
      <CVSectionTitle>Contact Info</CVSectionTitle>
    </CVSection>
  );
}
