import React from 'react';
import { FaStar } from 'react-icons/fa';
import CVSection from './CVSection';
import CVList from './CVList';
import CVSectionTitle from './CVSectionTitle';

export type Skill = {
  category: string;
  keywords: string[];
};

function Item({ skill }: { skill: Skill }) {
  return (
    <li>
      <h3 className="mt-0 mb-1 text-base">
        {skill.icon}
        {skill.category}
      </h3>

      <ul className="list-none ml-0 my-0 px-2 flex flex-wrap space-x-1">
        {skill.keywords
          .sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))
          .map((keyword) => (
            <li
              key={keyword}
              className="bg-neutralBgSoft text-onNeutralBgSoft font-normal px-2 rounded-full"
            >
              {keyword}
            </li>
          ))}
      </ul>
    </li>
  );
}

export default function Skills({ skills }: { skills: Skill[] }) {
  return (
    <CVSection>
      <CVSectionTitle>
        <FaStar className="inline mr-1 text-3xl text-onPrimarySoft mb-1" />
        Skills
      </CVSectionTitle>
      <CVList>
        {skills.map((skill) => (
          <Item key={skill.category} skill={skill} />
        ))}
      </CVList>
    </CVSection>
  );
}