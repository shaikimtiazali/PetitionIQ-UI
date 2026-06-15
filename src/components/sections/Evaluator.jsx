import { useState } from 'react'
import './Evaluator.css'

function Evaluator() {
  const [activeStep, setActiveStep] = useState(0)

  const steps = [
    { number: 1, label: 'Upload' },
    { number: 2, label: 'Analyze' },
    { number: 3, label: 'Evaluate' },
    { number: 4, label: 'Report' }
  ]

  const stepDetails = [
    {
      title: 'Upload Your Credentials',
      subtitle: 'Share your education, work history, and achievements',
      description: 'Start by uploading your CV, diplomas, publications, awards, and any other credentials that support your immigration case.'
    },
    {
      title: 'AI Analysis',
      subtitle: 'Our system reviews and categorizes your documents',
      description: 'Our machine learning algorithms analyze your credentials against USCIS criteria to identify your strongest qualifications.'
    },
    {
      title: 'Expert Evaluation',
      subtitle: 'Comprehensive assessment of your eligibility',
      description: 'Our immigration specialists provide a detailed evaluation mapping your background to specific visa category requirements.'
    },
    {
      title: 'Detailed Report',
      subtitle: 'Actionable insights and next steps',
      description: 'Receive a comprehensive report with strengths, gaps, and recommendations for your immigration strategy.'
    }
  ]

  return (
    <section className="section sec-gray" id="evaluator">
      <div className="container">
        <div className="sec-hdr center">
          <div className="gold-rule" style={{ margin: '0 auto 24px' }}></div>
          <h2 className="h2">How It Works</h2>
          <p className="lead" style={{ margin: '14px auto 0' }}>
            Four simple steps to your immigration evaluation.
          </p>
        </div>
        
        <div className="eval-wrap">
          <div className="eval-hdr">
            <div>
              <h3 className="eval-title">{stepDetails[activeStep].title}</h3>
              <p className="eval-sub">{stepDetails[activeStep].subtitle}</p>
            </div>
            <div className="stage-badge">
              <span className="sb-lbl">Stage A</span>
            </div>
          </div>
          
          <div className="eval-body">
            <div className="eval-steps">
              {steps.map((step, index) => (
                <div
                  key={step.number}
                  className={`e-step ${index === activeStep ? 'active' : ''} ${index < activeStep ? 'done' : ''}`}
                  onClick={() => setActiveStep(index)}
                  style={{ cursor: 'pointer' }}
                >
                  <div className="e-num">{step.number}</div>
                  <span style={{ fontSize: '12px', color: 'var(--navy)' }}>{step.label}</span>
                </div>
              ))}
            </div>
            
            <p style={{
              fontSize: '16px',
              color: 'var(--gray-dark)',
              lineHeight: '1.8',
              maxWidth: '600px',
              margin: '0'
            }}>
              {stepDetails[activeStep].description}
            </p>
            
            <div style={{ marginTop: '32px', display: 'flex', gap: '12px' }}>
              <button
                className="btn btn-navy"
                onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
                disabled={activeStep === 0}
                style={{ opacity: activeStep === 0 ? 0.5 : 1 }}
              >
                Previous
              </button>
              <button
                className="btn btn-gold"
                onClick={() => setActiveStep(Math.min(steps.length - 1, activeStep + 1))}
                disabled={activeStep === steps.length - 1}
              >
                {activeStep === steps.length - 1 ? 'Get Started' : 'Next'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Evaluator
