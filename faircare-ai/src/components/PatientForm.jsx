import React, { useState } from 'react';

const PatientForm = ({ onSubmit, loading }) => {
  const [formData, setFormData] = useState({
    HighBP: '0',
    HighChol: '0',
    BMI: '25',
    Smoker: '0',
    Income: '5',
    Education: '5',
    HealthScore: '3'
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form className="patient-form" onSubmit={handleSubmit}>
      <div className="info-banner">
        <div className="info-icon-wrapper">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>
        </div>
        <div className="info-text">
          <strong>FairCare AI Transparency Engine Active:</strong> Demographic datapoints (Income, Education) are neutralized algorithmically to block systemic healthcare bias.
        </div>
      </div>

      <div className="form-grid">
        <div className="form-group floating-label-group">
          <select name="HighBP" id="HighBP" className="modern-select" value={formData.HighBP} onChange={handleChange} required>
            <option value="0">Normal</option>
            <option value="1">Elevated / High</option>
          </select>
          <label htmlFor="HighBP">Blood Pressure</label>
        </div>

        <div className="form-group floating-label-group">
          <select name="HighChol" id="HighChol" className="modern-select" value={formData.HighChol} onChange={handleChange} required>
            <option value="0">Normal</option>
            <option value="1">Elevated / High</option>
          </select>
          <label htmlFor="HighChol">Cholesterol Levels</label>
        </div>

        <div className="form-group floating-label-group">
          <select name="Smoker" id="Smoker" className="modern-select" value={formData.Smoker} onChange={handleChange} required>
            <option value="0">Non-Smoker</option>
            <option value="1">Active Smoker</option>
          </select>
          <label htmlFor="Smoker">Nicotine Usage</label>
        </div>

        <div className="form-group floating-label-group">
          <input
            type="number"
            id="BMI"
            name="BMI"
            className="modern-input"
            value={formData.BMI}
            onChange={handleChange}
            min="10" max="60"
            required
            placeholder=" "
          />
          <label htmlFor="BMI">Body Mass Index (BMI)</label>
        </div>

        <div className="form-group floating-label-group full-width">
          <input
            type="number"
            id="HealthScore"
            name="HealthScore"
            className="modern-input"
            value={formData.HealthScore}
            onChange={handleChange}
            min="1" max="5"
            required
            placeholder=" "
            title="1 is Excellent Health, 5 is Poor Health"
          />
          <label htmlFor="HealthScore">Self-Reported Health Score (1-5)</label>
        </div>
      </div>

      <div className="neutralized-section">
        <h4 className="section-title">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
          Restricted Variables
        </h4>
        <div className="form-grid">
          <div className="form-group floating-label-group disabled-group">
            <select disabled id="IncomeLevel" className="modern-select disabled-input" title="Disabled to prevent socioeconomic bias">
              <option>Data Neutralized</option>
            </select>
            <label htmlFor="IncomeLevel">Income Level</label>
          </div>
          
          <div className="form-group floating-label-group disabled-group">
            <select disabled id="EducationLevel" className="modern-select disabled-input" title="Disabled to prevent socioeconomic bias">
              <option>Data Neutralized</option>
            </select>
            <label htmlFor="EducationLevel">Education Level</label>
          </div>
        </div>
      </div>

      <button type="submit" className={`submit-btn ${loading ? 'loading' : ''}`} disabled={loading}>
        <span className="btn-text">{loading ? 'Computing Analysis...' : 'Run Bias-Free AI Engine'}</span>
        <span className="btn-glow"></span>
      </button>
    </form>
  );
};

export default PatientForm;
