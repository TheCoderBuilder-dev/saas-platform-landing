import { useState, useEffect } from 'react';
import './App.css';

// Icon components
const Icons = {
  Server: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="2" width="20" height="8" rx="2" ry="2"/>
      <rect x="2" y="14" width="20" height="8" rx="2" ry="2"/>
      <line x1="6" y1="6" x2="6.01" y2="6"/>
      <line x1="6" y1="18" x2="6.01" y2="18"/>
    </svg>
  ),
  Zap: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
    </svg>
  ),
  Shield: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    </svg>
  ),
  Globe: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10"/>
      <line x1="2" y1="12" x2="22" y2="12"/>
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
    </svg>
  ),
  Activity: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
    </svg>
  ),
  Clock: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10"/>
      <polyline points="12 6 12 12 16 14"/>
    </svg>
  )
};

function App() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const handleMove = (e) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', handleMove);
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => {
      window.removeEventListener('mousemove', handleMove);
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="canvas">
      {/* Navigation - Minimal & Floating */}
      <nav className="nav-minimal">
        <div className="nav-grid">
          <div className="nav-item">SYNC</div>
          <div className="nav-item nav-center">Infrastructure Platform</div>
          <div className="nav-item nav-end">
            <span className="nav-link">Docs</span>
            <span className="nav-link">Login</span>
          </div>
        </div>
      </nav>

      {/* Hero - Massive Typography */}
      <section className="hero-massive">
        <div className="hero-container">
          <div className="hero-grid">
            <div className="hero-main">
              <div className="hero-meta">
                <span>{time.toLocaleTimeString('en-US', { hour12: false })}</span>
                <span>UTC</span>
                <span className="live-indicator">LIVE</span>
              </div>
              <h1 className="display-massive">
                Infrastructure
                <br />
                <span className="outline-text">Without</span>
                <br />
                Limits
              </h1>
            </div>
            <div className="hero-side">
              <div className="stat-block">
                <div className="stat-value">847ms</div>
                <div className="stat-label">Global Deploy Time</div>
              </div>
              <div className="stat-block">
                <div className="stat-value">99.99%</div>
                <div className="stat-label">Uptime Guarantee</div>
              </div>
              <div className="action-block">
                <button className="btn-action">Start Building</button>
                <div className="subtext">No credit card required</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Data Stream Visualization */}
      <section className="data-stream">
        <div className="stream-container">
          <div className="stream-header">
            <span>Real-time Activity</span>
            <span className="stream-count">2,847 requests/sec</span>
          </div>
          <div className="stream-grid">
            {[...Array(50)].map((_, i) => (
              <div 
                key={i} 
                className="stream-bar"
                style={{ 
                  height: `${Math.random() * 100}%`,
                  animationDelay: `${i * 0.05}s`
                }}
              ></div>
            ))}
          </div>
        </div>
      </section>

      {/* Diagonal Split Section - Unique Layout */}
      <section className="diagonal-split">
        <div className="diagonal-container">
          <div className="diagonal-left">
            <div className="diagonal-content">
              <div className="section-label">PERFORMANCE</div>
              <h2 className="diagonal-title">Milliseconds<br />Matter</h2>
              <div className="performance-metrics">
                <div className="perf-item">
                  <div className="perf-chart">
                    <div className="perf-bar" style={{ width: '95%' }}></div>
                  </div>
                  <div className="perf-label">Cache Hit Rate</div>
                </div>
                <div className="perf-item">
                  <div className="perf-chart">
                    <div className="perf-bar" style={{ width: '88%' }}></div>
                  </div>
                  <div className="perf-label">CDN Coverage</div>
                </div>
                <div className="perf-item">
                  <div className="perf-chart">
                    <div className="perf-bar" style={{ width: '99%' }}></div>
                  </div>
                  <div className="perf-label">Response Time</div>
                </div>
              </div>
            </div>
          </div>
          <div className="diagonal-right">
            <div className="diagonal-visual">
              <div className="latency-map">
                {[...Array(8)].map((_, i) => (
                  <div key={i} className="latency-ring" style={{ 
                    width: `${(i + 1) * 60}px`,
                    height: `${(i + 1) * 60}px`,
                    animationDelay: `${i * 0.2}s`
                  }}></div>
                ))}
                <div className="latency-center">8ms</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section - Editorial */}
      <section className="timeline-section">
        <div className="timeline-container">
          <h2 className="timeline-heading">Deploy in Three Acts</h2>
          <div className="timeline-track">
            <div className="timeline-item">
              <div className="timeline-marker">I</div>
              <div className="timeline-content">
                <h3>Push Code</h3>
                <p>Git push triggers automatic build pipeline. Zero configuration required.</p>
                <div className="timeline-time">0.2s</div>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker">II</div>
              <div className="timeline-content">
                <h3>Build & Optimize</h3>
                <p>Automatic bundling, tree-shaking, and edge optimization.</p>
                <div className="timeline-time">2.1s</div>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker">III</div>
              <div className="timeline-content">
                <h3>Global Deploy</h3>
                <p>Distributed to 300+ edge locations worldwide simultaneously.</p>
                <div className="timeline-time">0.8s</div>
              </div>
            </div>
          </div>
          <div className="timeline-total">Total: 3.1s average</div>
        </div>
      </section>

      {/* Comparison Grid - Side by Side */}
      <section className="comparison-grid">
        <div className="comparison-container">
          <div className="comparison-header">
            <h2>Traditional Infrastructure vs SYNC</h2>
          </div>
          <div className="comparison-table">
            <div className="comparison-col traditional">
              <div className="col-header">Traditional Cloud</div>
              <div className="comparison-row">
                <div className="row-metric">Deploy Time</div>
                <div className="row-value bad">5-10 minutes</div>
              </div>
              <div className="comparison-row">
                <div className="row-metric">Configuration</div>
                <div className="row-value bad">Complex YAML</div>
              </div>
              <div className="comparison-row">
                <div className="row-metric">Scaling</div>
                <div className="row-value bad">Manual setup</div>
              </div>
              <div className="comparison-row">
                <div className="row-metric">Global Deploy</div>
                <div className="row-value bad">Multi-region config</div>
              </div>
              <div className="comparison-row">
                <div className="row-metric">Monitoring</div>
                <div className="row-value bad">Third-party tools</div>
              </div>
            </div>
            <div className="comparison-col sync">
              <div className="col-header">SYNC Platform</div>
              <div className="comparison-row">
                <div className="row-metric">Deploy Time</div>
                <div className="row-value good">3.1 seconds</div>
              </div>
              <div className="comparison-row">
                <div className="row-metric">Configuration</div>
                <div className="row-value good">Zero config</div>
              </div>
              <div className="comparison-row">
                <div className="row-metric">Scaling</div>
                <div className="row-value good">Automatic</div>
              </div>
              <div className="comparison-row">
                <div className="row-metric">Global Deploy</div>
                <div className="row-value good">One command</div>
              </div>
              <div className="comparison-row">
                <div className="row-metric">Monitoring</div>
                <div className="row-value good">Built-in dashboard</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Stats Panel */}
      <section className="stats-panel">
        <div className="stats-panel-container">
          <div className="stats-grid-modern">
            <div className="stat-card large">
              <div className="stat-card-content">
                <div className="stat-icon-wrapper">
                  <div className="stat-icon-circle"></div>
                </div>
                <div className="stat-number-massive">99.99%</div>
                <div className="stat-description">Uptime SLA with automatic failover and redundancy</div>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-number">3.2B</div>
              <div className="stat-label">Daily Requests</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">300+</div>
              <div className="stat-label">Edge Locations</div>
            </div>
            <div className="stat-card dark">
              <div className="stat-card-content">
                <div className="realtime-label">LIVE METRICS</div>
                <div className="realtime-graph">
                  {[...Array(20)].map((_, i) => (
                    <div 
                      key={i} 
                      className="realtime-line"
                      style={{ 
                        height: `${30 + Math.random() * 70}%`,
                        animationDelay: `${i * 0.1}s`
                      }}
                    ></div>
                  ))}
                </div>
                <div className="realtime-value">156K req/s</div>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-number">8ms</div>
              <div className="stat-label">P95 Latency</div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Blocks - Asymmetric */}
      <section className="features-architect">
        <div className="feature-layout">
          <div className="feature-large">
            <div className="feature-icon-wrapper">
              <Icons.Globe />
            </div>
            <div className="feature-number">01</div>
            <h2 className="feature-title">
              Deploy to
              <br />
              the Edge
            </h2>
            <p className="feature-desc">
              300+ global locations. Sub-10ms latency to 95% of internet users.
              Automatic failover and intelligent routing included.
            </p>
            <div className="feature-visual">
              <div className="globe-representation">
                {[...Array(12)].map((_, i) => (
                  <div 
                    key={i}
                    className="globe-node"
                    style={{
                      left: `${15 + i * 7}%`,
                      top: `${50 + Math.sin(i * 0.5) * 30}%`
                    }}
                  ></div>
                ))}
              </div>
            </div>
          </div>

          <div className="feature-split">
            <div className="feature-small">
              <div className="feature-icon-wrapper">
                <Icons.Zap />
              </div>
              <div className="feature-number">02</div>
              <h3>Instant Scaling</h3>
              <p>From zero to millions in milliseconds. No configuration needed.</p>
            </div>
            <div className="feature-small">
              <div className="feature-icon-wrapper">
                <Icons.Shield />
              </div>
              <div className="feature-number">03</div>
              <h3>Type Safety</h3>
              <p>Full TypeScript support with auto-generated types from your schema.</p>
            </div>
          </div>

          <div className="feature-wide">
            <div className="feature-icon-wrapper">
              <Icons.Server />
            </div>
            <div className="feature-number">04</div>
            <div className="feature-content-wide">
              <h2>Built for Developers</h2>
              <div className="code-inline">
                <pre>{`const app = sync.deploy({
  runtime: 'edge',
  regions: 'auto'
});`}</pre>
              </div>
              <p>Deploy with a single command. Rollback in seconds. Monitor everything in real-time.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Wall */}
      <section className="metrics-wall">
        <div className="metrics-container">
          <div className="metric-massive">
            <div className="metric-number">2.7B</div>
            <div className="metric-label">Requests Per Day</div>
          </div>
          <div className="metric-massive">
            <div className="metric-number">8.2ms</div>
            <div className="metric-label">P95 Latency</div>
          </div>
          <div className="metric-massive">
            <div className="metric-number">0.001%</div>
            <div className="metric-label">Error Rate</div>
          </div>
          <div className="metric-massive">
            <div className="metric-number">47</div>
            <div className="metric-label">Countries</div>
          </div>
        </div>
      </section>

      {/* Pricing - Editorial Style */}
      <section className="pricing-editorial">
        <div className="pricing-intro">
          <h2 className="pricing-headline">Simple, Transparent Pricing</h2>
          <p className="pricing-subhead">Pay only for what you use. No hidden fees. No surprises.</p>
        </div>
        
        <div className="pricing-layout">
          <div className="price-tier">
            <div className="tier-header">
              <div className="tier-name">Developer</div>
              <div className="tier-price">
                <span className="price-main">Free</span>
              </div>
            </div>
            <div className="tier-body">
              <ul className="tier-features">
                <li>100K requests/month</li>
                <li>10 GB bandwidth</li>
                <li>Community support</li>
                <li>Unlimited projects</li>
              </ul>
              <button className="tier-button">Start Free</button>
            </div>
          </div>

          <div className="price-tier tier-featured">
            <div className="featured-label">Recommended</div>
            <div className="tier-header">
              <div className="tier-name">Professional</div>
              <div className="tier-price">
                <span className="price-main">$49</span>
                <span className="price-period">/month</span>
              </div>
            </div>
            <div className="tier-body">
              <ul className="tier-features">
                <li>10M requests/month</li>
                <li>1 TB bandwidth</li>
                <li>Priority support</li>
                <li>Advanced analytics</li>
                <li>Custom domains</li>
                <li>Team collaboration</li>
              </ul>
              <button className="tier-button">Start Trial</button>
            </div>
          </div>

          <div className="price-tier">
            <div className="tier-header">
              <div className="tier-name">Enterprise</div>
              <div className="tier-price">
                <span className="price-main">Custom</span>
              </div>
            </div>
            <div className="tier-body">
              <ul className="tier-features">
                <li>Unlimited requests</li>
                <li>Unlimited bandwidth</li>
                <li>24/7 dedicated support</li>
                <li>SLA guarantees</li>
                <li>Custom contracts</li>
                <li>On-premise options</li>
              </ul>
              <button className="tier-button">Contact Sales</button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial - Magazine Style */}
      <section className="testimonial-magazine">
        <div className="testimonial-content">
          <div className="quote-mark">"</div>
          <blockquote className="testimonial-quote">
            We cut our infrastructure costs by 60% and improved performance by 3x. 
            The migration took one afternoon.
          </blockquote>
          <div className="testimonial-attribution">
            <div className="attribution-name">Marcus Chen</div>
            <div className="attribution-title">VP Engineering, Axiom</div>
          </div>
        </div>
      </section>

      {/* Footer - Minimal */}
      <footer className="footer-minimal">
        <div className="footer-layout">
          <div className="footer-col-main">
            <div className="footer-logo">SYNC</div>
            <div className="footer-tagline">The edge platform for modern applications</div>
          </div>
          <div className="footer-col">
            <div className="footer-heading">Product</div>
            <a href="#features">Features</a>
            <a href="#pricing">Pricing</a>
            <a href="#docs">Documentation</a>
          </div>
          <div className="footer-col">
            <div className="footer-heading">Company</div>
            <a href="#about">About</a>
            <a href="#blog">Blog</a>
            <a href="#careers">Careers</a>
          </div>
          <div className="footer-col">
            <div className="footer-heading">Legal</div>
            <a href="#privacy">Privacy</a>
            <a href="#terms">Terms</a>
            <a href="#security">Security</a>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-copyright">© 2024 Sync Platform · Designed by Brian Munene Mwirigi</div>
          <div className="footer-links">
            <a href="#twitter">Twitter</a>
            <a href="#github">GitHub</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;