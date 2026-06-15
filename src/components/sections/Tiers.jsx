function Tiers() {
  const tiers = [
    {
      id: 'a',
      number: 'A',
      label: 'Stage A',
      name: 'Free AI Evaluation',
      price: 'Free',
      priceClass: 'tp-free',
      description: 'Initial AI-powered assessment mapping your credentials to EB-1A criteria.',
      note: 'No attorney consultation included'
    },
    {
      id: 'b1',
      number: 'B1',
      label: 'Stage B1',
      name: 'Initial Consultation',
      price: 'From $500',
      priceClass: 'tp-paid',
      description: '30-minute consultation with immigration specialist to discuss your evaluation results.',
      note: 'Perfect for further guidance'
    },
    {
      id: 'b2',
      number: 'B2',
      label: 'Stage B2',
      name: 'Full Assessment',
      price: 'From $1,500',
      priceClass: 'tp-full',
      description: 'Comprehensive review including document analysis and personalized strategy recommendations.',
      note: 'Most popular option',
      featured: true
    },
    {
      id: 'c',
      number: 'C',
      label: 'Stage C',
      name: 'Direct Filing',
      price: 'Contact us',
      priceClass: 'tp-dir',
      description: 'End-to-end petition preparation and filing assistance with attorney oversight.',
      note: 'Premium service'
    }
  ]

  return (
    <section className="section sec-gray" id="tiers">
      <div className="container">
        <div className="sec-hdr center">
          <div className="gold-rule" style={{ margin: '0 auto 24px' }}></div>
          <h2 className="h2">Flexible Evaluation Stages</h2>
          <p className="lead" style={{ margin: '14px auto 0' }}>
            Choose the level of support that fits your immigration journey.
          </p>
        </div>
        
        <div className="tiers">
          <div className="tier-conn"></div>
          {tiers.map((tier) => (
            <div key={tier.id} className={`tier ${tier.featured ? 'feat' : ''}`}>
              <div className={`t-num tn-${tier.id}`}>{tier.number}</div>
              <div className="t-lbl">{tier.label}</div>
              <h3 className="t-name">{tier.name}</h3>
              <div className={`t-price ${tier.priceClass}`}>{tier.price}</div>
              <p className="t-desc">{tier.description}</p>
              <p className="t-note">{tier.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Tiers
