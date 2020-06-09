import React from 'react';
import Layout from '../components/layout';
import Container from '../components/layout/Container';
import Education from '../components/pages/cv/Education';
import Header from '../components/pages/cv/Header';

const data = {
  basics: {
    name: 'Sean Keever',
    label: 'Full Stack Developer',
    email: 'swkeever[at]gmail{dot}com',
    phone: '',
    website: 'https://swkeever.github.io',
    location: 'Seattle, WA',
    profiles: [
      {
        network: 'Twitter',
        username: '@swkeever',
        url: 'https://www.twitter.com/swkeever',
      },
      {
        network: 'LinkedIn',
        username: 'swkeever',
        url: 'https://www.linkedin.com/in/swkeever',
      },
      {
        network: 'GitHub',
        username: 'swkeever',
        url: 'https://www.github.com/swkeever',
      },
    ],
  },
  work: [
    {
      company: 'OfferUp',
      position: 'Software Engineer Intern',
      website: 'http://www.offerup.com',
      startDate: '2019-06',
      endDate: '2019-09',
      summary:
        'Worked across the stack to improve infrastructure used for company wide A/B tests',
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
      website: 'http://www.make4all.org',
      startDate: '2019-01',
      endDate: '2019-06',
      summary:
        "Developed visualizations and did analytics from mobile phone sensor data to better understand user's behavior",
      highlights: [
        'Performed ETL and created visualizations from phone sensor data to help build a machine learning model that predicts mental health.',
        'Utilized Python and Jupyter Notebooks to develop and document the visualizations.',
      ],
    },
  ],
  education: [
    {
      institution: 'University of Washington',
      area: 'B.S. Computer Engineering',
      startDate: '2018-09',
      endDate: '2020-06',
      gpa: '3.7',
      courses: [
        'Data Structures',
        'Algorithms',
        'Distributed Systems',
        'Machine Learning',
        'Operating Systems',
        'Networks',
        'Databases',
        'Computer Architecture',
      ],
    },
    {
      institution: 'Seattle Central College',
      area: 'A.S. Pre-Engineering',
      startDate: '2016-06',
      endDate: '2018-06',
      gpa: '4.0',
      courses: [
        'Linear Algebra',
        'Differential Equations',
        'Calculus',
        'Physics',
        'Accounting',
        'General Chemistry',
      ],
    },
  ],
  awards: [
    {
      title: 'Google Endowed Scholarship',
      date: '2019-09',
      awarder: 'Google',
      summary: '',
    },
    {
      title: 'Jussila-Ford Endowed Scholarship',
      date: '2018-09',
      awarder: 'Company',
      summary: '',
    },
    {
      title: 'Seattle Foundation Scholarship',
      date: '2018-07',
      awarder: 'Company',
      summary: '',
    },
    {
      title: 'Financial Aid For Education',
      date: '2016-07',
      awarder: 'Company',
      summary: '',
    },
  ],
  skills: [
    {
      name: 'Web Development',
      level: 'Master',
      keywords: ['HTML', 'CSS', 'Javascript'],
    },
  ],
  languages: [
    {
      language: 'English',
      fluency: 'Native speaker',
    },
    {
      language: 'Spanish',
      fluency: 'Elementary',
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
      <Container
        className={`
        max-w-xl
      `}
      >
        <Header {...data.basics} />
        <div
          className={`
          px-2
        `}
        >
          <Education education={data.education} />
        </div>
      </Container>
    </Layout>
  );
}
