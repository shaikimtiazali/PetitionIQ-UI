function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="glow glow-a"></div>
      <div className="glow glow-b"></div>
      
      <div className="hero-in">
        <div className="container">
          <div className="hero-grid">
            <div>
              <h1 className="hero-disp">
                AI-Powered Immigration
                <em>Evaluation</em>
              </h1>
              <p className="hero-body">
                Get your free Stage A evaluation for EB-1A, EB-2 NIW, and O-1A visas. Map your credentials to USCIS criteria before filing. Attorney-supervised. No legal advice.
              </p>
              <div className="hero-tags">
                <span className="tag">Free Assessment</span>
                <span className="tag">AI-Powered</span>
                <span className="tag">Attorney-Supervised</span>
              </div>
              <div className="hero-btns">
                <button className="btn btn-gold">Start Evaluation</button>
                <button className="btn btn-ghost">Learn More</button>
              </div>
            </div>
            
            <div>
              <div className="sp">
                <div className="sp-bar">
                  <div className="sp-dots">
                    <div className="sp-dot" style={{ background: '#ef4444' }}></div>
                    <div className="sp-dot" style={{ background: '#f59e0b' }}></div>
                    <div className="sp-dot" style={{ background: '#10b981' }}></div>
                  </div>
                  <span className="sp-caption">Sample Evaluation</span>
                </div>
                <div className="sp-body">
                  <div className="sp-row">
                    <div className="sp-badge ba">EB-1A</div>
                    <div>
                      <div className="sp-name">Extraordinary Ability</div>
                      <div className="sp-desc">Criterion-based evaluation</div>
                    </div>
                    <div className="sp-price">Free</div>
                  </div>
                  <div className="sp-row">
                    <div className="sp-badge bb1">✓</div>
                    <div>
                      <div className="sp-name">Awards & Honors</div>
                      <div className="sp-desc">Major awards documented</div>
                    </div>
                    <div className="sp-price">Strong</div>
                  </div>
                  <div className="sp-row">
                    <div className="sp-badge bb2">✓</div>
                    <div>
                      <div className="sp-name">Publications</div>
                      <div className="sp-desc">High-impact publications</div>
                    </div>
                    <div className="sp-price">Moderate</div>
                  </div>
                  <div className="sp-row">
                    <div className="sp-badge bb3">−</div>
                    <div>
                      <div className="sp-name">Patents</div>
                      <div className="sp-desc">No major patents</div>
                    </div>
                    <div className="sp-price">Weak</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
