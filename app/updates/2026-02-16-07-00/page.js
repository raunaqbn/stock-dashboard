'use client';

export default function StockUpdate() {
  const updateDate = "February 16, 2026 at 07:00 AM";

  return (
    <div style={{ padding: '20px', maxWidth: '1600px', margin: '0 auto', color: '#fff', background: '#0f0f0f', minHeight: '100vh' }}>
      <div style={{ marginBottom: '30px' }}>
        <a href="/" style={{ color: '#667eea', textDecoration: 'none', fontSize: '16px' }}>← Back to Dashboard</a>
        <h1 style={{ fontSize: '48px', margin: '20px 0 10px 0', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          Daily Market Wrap - Feb 16
        </h1>
        <p style={{ color: '#888', fontSize: '14px' }}>{updateDate}</p>
      </div>

      <div style={{ background: 'linear-gradient(135deg, #1e1e1e 0%, #2a2a2a 100%)', padding: '30px', borderRadius: '16px', border: '1px solid #333', lineHeight: '1.8' }}>
        <div dangerouslySetInnerHTML={{ __html: `<h2>🔥 Top Movers</h2><p><strong>NVDA:</strong> Strong breakout above resistance at $143. Target: $150</p><p><strong>TSLA:</strong> Consolidating near $385 support. Watch for bounce.</p><h2>📊 Market Summary</h2><ul><li>S&P 500: +0.8%</li><li>Tech sector leading gains</li><li>VIX down to 14.2 (low volatility)</li></ul>` }} />
      </div>
    </div>
  );
}
