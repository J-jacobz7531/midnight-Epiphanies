import React from 'react';
import { ArrowRightIcon } from './Icons';

type CardProps = {
  videoSrc: string;
  title: string;
  description: string;
  href: string;
  poster?: string;
};

const WhatWeDoCard: React.FC<CardProps> = ({ videoSrc, title, description, href, poster }) => {
  return (
    <div className="relative h-[70vh] min-h-[500px] w-full flex flex-col justify-end p-8 text-white overflow-hidden group">
      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        poster={poster}
        className="absolute top-0 left-0 w-full h-full object-cover z-0 transition-transform duration-500 group-hover:scale-105 motion-reduce:hidden"
        src={videoSrc}
      />
      {/* Motion-reduce fallback */}
      <div
        className="absolute inset-0 object-cover z-0 hidden motion-reduce:block bg-cover bg-center"
        style={{ backgroundImage: `url(${poster ?? '/placeholder.jpg'})` }}
      />

      {/* Gradient overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-ig-dark via-ig-dark/60 to-transparent z-10" />

      {/* Copy */}
      <div className="relative z-20">
        <h3 className="font-serif text-5xl lg:text-6xl font-light mb-4">{title}</h3>
        <p
          className="font-sans text-base lg:text-lg font-extralight leading-relaxed mb-6 max-w-md"
          style={{ fontFamily: "Graphik, Helvetica Neue, Helvetica, Arial, sans-serif" }}
        >
          {description}
        </p>
        <a
          href={href}
          className="inline-flex items-center font-sans font-medium text-sm text-ig-off-white group/link"
          aria-label={`${title} — Learn more`}
        >
          Learn more
          <ArrowRightIcon className="ml-2 transition-transform duration-300 group-hover/link:translate-x-2" />
        </a>
      </div>
    </div>
  );
};

const WhatWeDo: React.FC = () => {
  return (
    <section className="bg-ig-dark text-ig-off-white py-16 md:py-24">
      <div className="container mx-auto px-6 lg:px-12 text-center mb-12">
        <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl font-light" style={{ lineHeight: '1.1' }}>
          What We Do
        </h2>
        <p
          className="mx-auto mt-4 max-w-3xl text-sm md:text-base text-ig-off-white/80 font-light"
          style={{ fontFamily: "Graphik, Helvetica Neue, Helvetica, Arial, sans-serif" }}
        >
          Ophel Holdings is a diversified investment and development company. We build and back sustainable
          businesses across Africa—primarily in agriculture, renewable energy, real assets and technology—
          to deliver resilient returns and measurable impact.
        </p>
      </div>

      <div className="flex flex-col md:flex-row">
        {/* Investments */}
        <WhatWeDoCard
          videoSrc="https://igravity.net/wp-content/uploads/2025/08/investments-video.mp4"
          poster="/farmers-working.jpg"
          title="Investments"
          description="We deploy flexible capital—private debt and equity—into scalable African businesses across agriculture, renewable energy, real estate and technology. We back strong operators, value-chain infrastructure, and climate-resilient production while embedding impact and governance from day one."
          href="/investments"
        />

        {/* Products & Venture Building */}
        <WhatWeDoCard
          videoSrc="https://igravity.net/wp-content/uploads/2025/08/advisory.mp4"
          poster="/plantation.jpeg"
          title="Products & Venture Building"
          description="We incubate and operate market-ready products and platforms: post-harvest storage & processing, distributed solar, affordable real assets, and digital supply-chain tools. We co-develop with strategic partners, then scale commercially with clear impact KPIs."
          href="/products"
        />
      </div>
    </section>
  );
};

export default WhatWeDo;
