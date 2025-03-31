'use client';

import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

import usePrefersReducedMotion from '@/lib/usePrefersReducedMotion';

const StyledMainContainer = styled.main`
  counter-reset: section;
`;

const StyledAboutSection = styled.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;
const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--green);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`;
const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    box-shadow: 0 10px 30px -15px var(--navy-shadow);
    transition: var(--transition);
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    background-color: var(--green);

    &:hover,
    &:focus {
      outline: 0;
      transform: translate(-4px, -4px);

      &:after {
        transform: translate(8px, 8px);
      }

      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    &:hover,
    &:focus-visible {
      box-shadow: 0 20px 30px -15px var(--navy-shadow);
    }

    .img {
      position: relative;
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1);
      transition: var(--transition);
    }

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:before {
      top: 0;
      left: 0;
      background-color: var(--navy);
      mix-blend-mode: screen;
    }

    &:after {
      border: 2px solid var(--green);
      top: 14px;
      left: 14px;
      z-index: -1;
    }
  }
`;

const About = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const skills = [
    'C#',
    'Java',
    'Python',
    'JavaScript',
    'TypeScript',
    'ASP.NET Core',
    'CSS3',
    'SQL',
    'MySQL',
    'MS SQL',
    'T-SQL',
    'Spring',
    'HTML',
    'Agile',
    'SCRUM',
    'PL/SQL',
    'Git',
    'Linux',
    'MongoDB',
    'React',
    'Next.js',
    'Node.js',
    'Salesforce',
    'Machine Learning',
  ];

  return (
    <StyledMainContainer className="fillHeight">
      <StyledAboutSection id="about" ref={revealContainer}>
        <h2>About Me</h2>
        <div className="inner">
          <StyledText>
            <div>
              <p>Hello! My name is Sedat Can Uygur.</p>
              <p>
                I’m a Senior Software Engineer with eight years of professional
                experience in full-stack development, particularly in{' '}
                <a href="https://www.oracle.com/java/">Java</a>,{' '}
                <a href="https://learn.microsoft.com/en-us/dotnet/csharp/">
                  C#
                </a>
                , <a href="https://www.python.org/">Python</a>,{' '}
                <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">
                  JavaScript
                </a>
                , and <a href="https://www.typescriptlang.org/">TypeScript</a>.
              </p>
              <p>
                I’ve worked extensively on enterprise-level projects where I’ve
                leveraged <a href="https://microservices.io/">microservices</a>,
                containerization (<a href="https://www.docker.com/">Docker</a>)
                and cloud technologies (
                <a href="https://aws.amazon.com/">AWS</a>,{' '}
                <a href="https://azure.microsoft.com/en-us/">Azure</a>) to build
                robust, scalable solutions.
              </p>
              <p>
                I hold a{' '}
                <a href="https://en.wikipedia.org/wiki/Bachelor%27s_degree">
                  Bachelor’s degree
                </a>{' '}
                in{' '}
                <a href="https://en.wikipedia.org/wiki/Computer_engineering">
                  Computer Engineering
                </a>{' '}
                and I’ve had the opportunity to work with global brands in the
                sports and retail industries by delivering end-to-end solutions
                support for high-traffic{' '}
                <a href="https://en.wikipedia.org/wiki/E-commerce">
                  e-commerce
                </a>{' '}
                platforms.
              </p>
              <p>
                Over the course of my career, I’ve been involved in{' '}
                <a href="https://en.wikipedia.org/wiki/Software_architecture">
                  software architecture
                </a>{' '}
                design,{' '}
                <a href="https://about.gitlab.com/topics/version-control/what-is-code-review/">
                  code review
                </a>
                , ensuring best practices and maintainable,{' '}
                <a href="https://gist.github.com/wojteklu/73c6914cc446146b8b533c0988cf8d29">
                  clean code
                </a>
                .
              </p>
              <p>
                I’m also comfortable with{' '}
                <a href="https://en.wikipedia.org/wiki/DevOps">DevOps</a>{' '}
                pipelines,{' '}
                <a href="https://en.wikipedia.org/wiki/CI/CD">CI/CD</a> tools
                like <a href="https://www.jenkins.io/">Jenkins</a> and version
                control systems such as <a href="https://git-scm.com/">Git</a>{' '}
                and <a href="https://bitbucket.org/">BitBucket</a>.
              </p>
              <p>
                From designing{' '}
                <a href="https://aws.amazon.com/what-is/restful-api/">
                  RESTful
                </a>{' '}
                and <a href="https://graphql.org/">GraphQL</a> services to
                optimizing <a href="https://en.wikipedia.org/wiki/SQL">SQL</a>{' '}
                queries in <a href="https://www.postgresql.org/">PostgreSQL</a>,{' '}
                <a href="https://www.mysql.com/">MySQL</a> and{' '}
                <a href="https://en.wikipedia.org/wiki/NoSQL">NoSQL</a>, I’m
                passionate about creating efficient, high-performing
                applications.
              </p>
              <p>
                I enjoy following{' '}
                <a href="https://en.wikipedia.org/wiki/Agile_software_development">
                  Agile
                </a>{' '}
                methodologies (
                <a href="https://en.wikipedia.org/wiki/Agile_software_development">
                  Scrum
                </a>
                , <a href="https://www.atlassian.com/agile/kanban">Kanban</a>)
                and applying right{' '}
                <a href="https://medium.com/andersen-it-community/tdd-bdd-ddd-and-fdd-approaches-for-software-development-8adf4fec3cc5">
                  software development methodology
                </a>{' '}
                to improve software quality.
              </p>
              <p>
                Ultimately, my goal is to deliver innovative solutions align
                with business objectives and provide exceptional{' '}
                <a href="https://en.wikipedia.org/wiki/User_experience">UX</a>.
              </p>
              <p>Here are technologies I’ve been working with recently:</p>
            </div>

            <ul className="skills-list">
              {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
            </ul>
          </StyledText>

          <StyledPic>
            <div className="wrapper">
              <Image
                priority
                alt="Headshot"
                className="img"
                width={500}
                height={500}
                quality={95}
                src="/images/SedatCanUygur.jpg"
              />
            </div>
          </StyledPic>
        </div>
      </StyledAboutSection>
    </StyledMainContainer>
  );
};

export default About;
