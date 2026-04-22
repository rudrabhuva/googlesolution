import React, { useEffect, useState } from 'react';

const ResultCard = ({ result }) => {
  const [animatedScore, setAnimatedScore] = useState(0);
  
  useEffect(() => {
    // Reset and animate the fairness score on mount
    setAnimatedScore(0);
    const timeout = setTimeout(() => {
      setAnimatedScore(result.fairnessScore);
    }, 100);
    return () => clearTimeout(timeout);
  }, [result.fairnessScore]);

  return (
    <div className="result-card fade-in">
      <div className="metrics-header">
        <div className="score-widget fairness-widget">
          <div className="score-circle-container">
            <svg viewBox="0 0 36 36" className="circular-chart fairness-chart">
              <path className="circle-bg"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <path className="circle"
                strokeDasharray={`${animatedScore}, 100`}
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <text x="18" y="20.35" className="percentage">{animatedScore}%</text>
            </svg>
            <div className="glow-effect"></div>
          </div>
          <div className="widget-label flex-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginRight: '4px'}}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
            Fairness Index
          </div>
        </div>

        <div className="score-widget risk-widget">
          <div className="risk-level-indicator">
            <div className={`risk-value text-${result.badgeClass}`}>{result.riskScore}</div>
            <div className="risk-scale">/ 100</div>
          </div>
          <div className="widget-label">Computed Risk Score</div>
          <div className="mini-progress-bar">
            <div className={`mini-progress-fill bg-${result.badgeClass}`} style={{ width: `${result.riskScore}%`}}></div>
          </div>
        </div>
      </div>

      <div className="result-body">
        <div className="result-group mb-4">
          <div className="result-header">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>
            <span className="result-label">Clinical Prognosis</span>
          </div>
          <h3 className={`result-value prediction text-${result.badgeClass}`}>{result.prediction}</h3>
        </div>

        <div className="result-group mb-4">
          <div className="result-header">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
            <span className="result-label">AI Explainability Matrix</span>
          </div>
          <p className="result-value text-muted">{result.explanation}</p>
        </div>

        <div className="result-group mb-4">
          <div className="result-header">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
            <span className="result-label">Treatment Pathway</span>
          </div>
          <p className="result-value treatment">{result.treatment}</p>
        </div>

        <div className="status-bars-container">
          <div className="status-row">
            <span className="status-label">Emergency Priority</span>
            <span className={`cyber-badge badge-${result.badgeClass}`}>
              <span className="pulse-dot"></span>
              {result.priority}
            </span>
          </div>
          <div className="status-row">
            <span className="status-label">Model Confidence</span>
            <span className="cyber-badge badge-neutral">
              {result.confidence}% Match
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
