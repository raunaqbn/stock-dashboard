'use client';

export default function StockUpdate() {
  const updateDate = "February 16, 2026 at 06:59 AM";

  return (
    <div style={{ padding: '20px', maxWidth: '1600px', margin: '0 auto', color: '#fff', background: '#0f0f0f', minHeight: '100vh' }}>
      <div style={{ marginBottom: '30px' }}>
        <a href="/" style={{ color: '#667eea', textDecoration: 'none', fontSize: '16px' }}>← Back to Dashboard</a>
        <h1 style={{ fontSize: '48px', margin: '20px 0 10px 0', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          Test Update - Market Analysis
        </h1>
        <p style={{ color: '#888', fontSize: '14px' }}>{updateDate}</p>
      </div>

      <div style={{ background: 'linear-gradient(135deg, #1e1e1e 0%, #2a2a2a 100%)', padding: '30px', borderRadius: '16px', border: '1px solid #333', lineHeight: '1.8' }}>
        <div dangerouslySetInnerHTML={{ __html: `<h2>Market Overview</h2><p>This is a test stock update with <strong>formatted HTML content</strong>.</p><ul><li>NVDA showing strong momentum</li><li>TSLA consolidating near support</li></ul>` }} />
      </div>
    </div>
  );
}
