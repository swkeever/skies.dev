import React from 'react';
import { FaCode, FaTools, FaConnectdevelop } from 'react-icons/fa';
import Layout from '../components/Layout';
import Container from '../components/Container';
import Education from '../components/cv/Education';
import Header from '../components/cv/Header';
import Experience from '../components/cv/Experience';
import Skills from '../components/cv/Skills';
import Basics from '../components/cv/Basics';

export type IExperience = {
  company: string;
  position: string;
  location: string;
  startDate: string;
  endDate: string;
  highlights: string[];
};

const styles = `
inline 
mr-1 
text-primarySoft
`;

const data = {
  basics: {
    name: 'Sean Keever',
    label: 'Full Stack Developer',
    location: 'Seattle, WA',
  },
  experience: [
    {
      company: 'OfferUp',
      position: 'Software Engineer, Intern',
      location: 'Bellevue, WA',
      startDate: '2019-06',
      endDate: '2019-09',
      highlights: [
        'Developed a dynamic web interface in React providing an easy way to manage A/B tests.',
        'Built a REST API using Java and AWS DynamoDB for storing and fetching A/B tests.',
        'Led meetings with platform engineers to design a cloud-based PaaS architecture for developing internal web tools.',
        'Communicated project design to tech leads, participated in daily stand-ups, and wrote technical documentation to enable successful project handover',
      ],
    },
    {
      company: 'University of Washington',
      position: 'Research Assistant',
      location: 'Seattle, WA',
      startDate: '2019-01',
      endDate: '2019-06',
      highlights: [
        'Performed ETL and created visualizations from phone sensor data to help build a machine learning model that predicts mental health.',
        'Utilized Python and Jupyter Notebooks to develop and document the visualizations.',
      ],
    },
  ],
  education: [
    {
      school: 'University of Washington',
      location: 'Seattle, WA',
      degree: 'BS',
      major: 'Computer Engineering',
      startDate: '2018-09',
      endDate: '2020-06',
      gpa: '3.7',
    },
    {
      school: 'Seattle Central College',
      location: 'Seattle, WA',
      degree: 'AS',
      major: 'Pre-Engineering',
      startDate: '2016-06',
      endDate: '2018-06',
      gpa: '4.0',
    },
  ],
  skills: [
    {
      icon: <FaCode className={`${styles} text-2xl mb-1`} />,
      category: 'Programming Languages',
      keywords: ['Javascript', 'TypeScript', 'Java', 'Python', 'HTML', 'CSS'],
    },
    {
      icon: <FaConnectdevelop className={`${styles} text-2xl mb-1`} />,
      category: 'Frameworks and Libraries',
      keywords: [
        'React.js',
        'Node.js',
        'Gatsby.js',
        'Next.js',
        'Express',
        'Sass',
      ],
    },
    {
      icon: <FaTools className={`${styles} text-lg mb-1 ml-px mr-2`} />,
      category: 'Environments and Tooling',
      keywords: [
        'IntelliJ IDEA',
        'VS Code',
        'Git',
        'Linux',
        'Windows',
        'macOS',
      ],
    },
  ],
};

export default function CVPage() {
  return (
    <Layout>
      <div
        className={`
        diagonal-t
        bg-primaryBg
        pb-40
      `}
      />
      <Container className="mb-16 max-w-5xl">
        <Header {...data.basics} />
        <div className="flex flex-col md:flex-row-reverse">
          <div className="md:w-7/12">
            <Experience experience={data.experience} />
          </div>
          <div className="md:w-5/12 mr-12">
            <Basics basics={data.basics} />
            <Education education={data.education} />
            <Skills skills={data.skills} />
          </div>
        </div>
      </Container>
    </Layout>
  );
}
