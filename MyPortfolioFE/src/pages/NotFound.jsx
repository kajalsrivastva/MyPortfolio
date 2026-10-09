import React from 'react';
import { Link } from 'react-router-dom';
import { Home, AlertTriangle } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="pt-32 pb-24 bg-[#0b0f19] min-h-screen flex items-center justify-center px-4">
      <div className="bg-[#111726] border border-slate-800 p-10 sm:p-14 rounded-3xl text-center max-w-lg shadow-2xl space-y-6">
        <div className="p-4 bg-cyan-950/60 border border-cyan-800/60 rounded-2xl w-fit mx-auto text-cyan-400">
          <AlertTriangle className="w-10 h-10" />
        </div>

        <div className="space-y-2">
          <h1 className="text-4xl font-extrabold text-slate-100 font-mono">404</h1>
          <h2 className="text-xl font-bold text-slate-200">Page Not Found</h2>
          <p className="text-xs text-slate-400 leading-relaxed max-w-sm mx-auto">
            The route you are trying to access does not exist or has been moved.
          </p>
        </div>

        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold text-xs hover:from-cyan-400 hover:to-blue-500 transition-all shadow-md shadow-cyan-500/20"
        >
          <Home className="w-4 h-4" />
          Return to Home Page
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
