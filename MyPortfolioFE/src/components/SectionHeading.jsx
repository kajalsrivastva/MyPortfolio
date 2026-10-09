import React from 'react';

const SectionHeading = ({ subtitle, title, description, center = false }) => {
  return (
    <div className={`mb-12 ${center ? 'text-center' : ''}`}>
      {subtitle && (
        <span className="inline-block px-3 py-1 mb-3 text-xs font-semibold tracking-wider text-cyan-400 uppercase bg-cyan-950/60 border border-cyan-800/50 rounded-full">
          {subtitle}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 tracking-tight">
        {title}
      </h2>
      {description && (
        <p className={`mt-3 text-slate-400 text-base sm:text-lg max-w-3xl ${center ? 'mx-auto' : ''}`}>
          {description}
        </p>
      )}
      <div className={`mt-4 h-1 w-20 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full ${center ? 'mx-auto' : ''}`} />
    </div>
  );
};

export default SectionHeading;
