import React from 'react';

const Header = () => {
  return (
    <header className="header glass-panel">
      <div className="logo-container">
        <div className="logo-icon-wrapper">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="logo-svg">
            <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
          </svg>
        </div>
        <div className="logo-text-group">
          <h1 className="logo-title">FairCare <span className="highlight-text">AI</span></h1>
          <span className="logo-subtitle">Unbiased Diagnostic Engine v2.0</span>
        </div>
      </div>
      <div className="header-actions">
        <div className="status-badge pulse-badge">
          <span className="dot pulse"></span>
          <span className="status-text">Core Systems Optimal</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
