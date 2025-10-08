import React from 'react';
import Letter from './Letter';
import SectionHeading from '../SectionHeading';

export default function AboutMe() {
  return (
    <div id="about" className="mx-auto max-w-[1000px] px-4 mt-40">
      <SectionHeading
        heading="Who is Awais?"
        subheading="Full-Stack Web Developer | Expertise in React, Next.js, Node.js, Nest.js & Modern Frameworks"
      />
      <Letter />
    </div>
  );
}
