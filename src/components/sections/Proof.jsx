function Proof() {
  const proofs = [
    {
      title: 'AI-Driven Analysis',
      description: 'Machine learning algorithms trained on thousands of successful EB-1A petitions'
    },
    {
      title: 'Criterion Mapping',
      description: 'Direct alignment with USCIS guidelines for clear eligibility assessment'
    },
    {
      title: 'Comprehensive Review',
      description: 'Professional-grade evaluation covering all major visa categories'
    }
  ]

  return (
    <section className="section sec-navy" id="proof">
      <div className="container">
        <div className="sec-hdr">
          <div className="gold-rule"></div>
          <h2 className="h2" style={{ color: 'var(--white)' }}>Why Choose PetitionIQ</h2>
          <p className="lead" style={{ color: 'rgba(255, 255, 255, 0.6)' }}>
            Our platform combines AI innovation with immigration expertise.
          </p>
        </div>
        
        <div className="proof-split">
          <div className="proof-left">
            <div className="founder-card">
              <div className="fc-top">
                <div className="fc-tag">Founder & CEO</div>
                <h3 className="fc-name">Khushboo Jain</h3>
                <p className="fc-title">Employment-Based Immigration Specialist</p>
              </div>
              <div className="fc-body">
                <p className="fc-bio">
                  With over a decade of experience in immigration law, Khushboo founded PetitionIQ to democratize access to quality immigration evaluation.
                </p>
                <div className="fc-stats">
                  <div className="fc-stat">
                    <div className="fc-stat-num">10<sup>+</sup></div>
                    <div className="fc-stat-lbl">Years Experience</div>
                  </div>
                  <div className="fc-stat">
                    <div className="fc-stat-num">5K<sup>+</sup></div>
                    <div className="fc-stat-lbl">Petitions Evaluated</div>
                  </div>
                  <div className="fc-stat">
                    <div className="fc-stat-num">95<sup>%</sup></div>
                    <div className="fc-stat-lbl">Success Rate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="proof-right">
            <div className="platform-hdr">
              <div className="gold-rule"></div>
              <h3 className="h2" style={{ color: 'var(--white)' }}>Platform Features</h3>
            </div>
            <div className="platform-items">
              {proofs.map((proof, index) => (
                <div key={index} className="pi">
                  <div className="pi-icon">🎯</div>
                  <div>
                    <h4 className="pi-title">{proof.title}</h4>
                    <p className="pi-desc">{proof.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Proof
