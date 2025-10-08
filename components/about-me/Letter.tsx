import React from 'react';
import Image from 'next/image';
import AquaWolfPFP from '@/public/images/svg/aquawolf-pfp.svg';

export default function Letter() {
  return (
    <div className="relative px-5 lg:px-0">
      <h2 className="text-transparent">About Me</h2>
      <div className="relative">
        {/* Letter Bottom */}
        <div className="absolute left-0 top-0 z-10 h-full w-full -rotate-1 rounded-lg bg-letter-middle lg:-rotate-2"></div>
        {/* Letter Middle */}
        <div className="absolute left-1 top-1 z-20 h-[98%] w-[98%] -rotate-1 rounded-lg bg-letter-bottom lg:left-3 lg:top-10 lg:h-[95%] lg:w-[98%] lg:rotate-3"></div>
        {/* Letter Top */}
        <div className="relative z-30 -rotate-1 rounded-lg bg-letter-top shadow-letter-top lg:rotate-2 lg:rounded-xl">
<article className="space-y-4 p-4 text-base text-white/80 lg:space-y-5 lg:p-5 lg:px-24 lg:py-14 lg:text-2xl">
  <p>Hey Everyone 👋 I’m Muhammad Awais from Lahore, Pakistan.</p>
  <p>
    My journey into web development started with curiosity and a passion for
    building things that live on the internet. What began with HTML & CSS soon
    grew into a deep dive into JavaScript and the modern ecosystem.
  </p>
  <p>
    Over time, I became skilled in technologies like <span className="text-white">React,
    Next.js, Tailwind CSS, and TypeScript</span> — crafting beautiful,
    responsive, and user-friendly interfaces. On the backend, I work with
    <span className="text-white"> Node.js, Express, NestJS, and MongoDB</span> to
    design APIs and full-stack applications.
  </p>
  <p>
    I’ve built projects ranging from a <span className="text-white">job portal</span> and
    <span className="text-white"> salon management system</span> to an
    <span className="text-white"> inventory management app</span> — each teaching me
    how to blend problem-solving with clean design.
  </p>
  <p>
    Beyond coding, I’m passionate about the intersection of design and
    technology. I enjoy working with <span className="text-white">UI frameworks</span>
    like Material UI, Shadcn, Mantine, and Framer Motion to deliver experiences
    that aren’t just functional but visually engaging.
  </p>
  <p>Today, I wear many hats:</p>
  <ul className="list-disc pl-6">
    <li>Frontend Developer (React, Next.js, Tailwind CSS)</li>
    <li>Full-Stack Builder (Node.js, Express, NestJS, MongoDB)</li>
    <li>UI/UX Enthusiast (Design systems, animations, user flows)</li>
    <li>Problem Solver & Continuous Learner</li>
  </ul>
  <p>
    My mission is simple: to craft digital experiences that are fast, reliable,
    and delightful to use. I’m always open to collaborating on impactful ideas —
    whether it’s a sleek frontend, a full-stack project, or exploring new tools
    shaping the future of web development.
  </p>
  <p>Let’s build something amazing together 🚀</p>
  <div className="relative flex flex-col items-center gap-2">
    <div className="self-start">Stay Creative ✨</div>
  </div>
  <div className="mb-10 font-handwriting text-4xl lg:text-6xl">
    <div className="text-white">Muhammad Awais</div>
  </div>
  <div className="flex items-center gap-2">
    <div className="lg:ml-4">
      <div className="text-xl font-semibold text-white lg:text-2xl">
        AwaisDev
      </div>
      <div className="text-[12px] lg:text-lg">
        Full-Stack Website Developer
      </div>
    </div>
  </div>
</article>

        </div>
      </div>
    </div>
  );
}
