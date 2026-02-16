'use client';

import { useEffect, useState } from 'react';

export default function UpdatesIndex() {
  const updates = [
    { date: '2026-02-16', title: '9-Stock Portfolio Analysis - Complete Coverage AVGO, AMZN, META, NVDA, PANW, GOOG, PNW, SNOW, SHOP', slug: '2026-02-16-09-30' },
    { date: '2026-02-16', title: 'Comprehensive Stock Analysis - AVGO, META, PANW, NVDA, GOOG', slug: '2026-02-16-08-00' },
    { date: '2026-02-16', title: 'Daily Market Wrap - Feb 16', slug: '2026-02-16-07-00' },
    { date: '2026-02-16', title: 'Initial Dashboard Launch', slug: '2026-02-16-06-59' }
  ];

  return (
    <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto', color: '#fff', background: '#0f0f0f', minHeight: '100vh' }}>
      <div style={{ marginBottom: '30px' }}>
        <a href="/" style={{ color: '#667eea', textDecoration: 'none', fontSize: '16px' }}>← Back to Dashboard</a>
        <h1 style={{ fontSize: '48px', margin: '20px 0 10px 0', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          📊 Stock Updates Archive
        </h1>
        <p style={{ color: '#888', fontSize: '14px' }}>Historical stock analysis and research updates</p>
      </div>

      <div style={{ display: 'grid', gap: '20px' }}>
        {updates.map((update) => (
          <a
            key={update.slug}
            href={`/updates/${update.slug}`}
            style={{
              background: 'linear-gradient(135deg, #1e1e1e 0%, #2a2a2a 100%)',
              padding: '25px',
              borderRadius: '12px',
              border: '1px solid #333',
              textDecoration: 'none',
              color: '#fff',
              display: 'block',
              transition: 'border-color 0.2s'
            }}
          >
            <div style={{ fontSize: '12px', color: '#888', marginBottom: '10px' }}>{update.date}</div>
            <div style={{ fontSize: '24px', fontWeight: 'bold' }}>{update.title}</div>
          </a>
        ))}
      </div>
    </div>
  );
}
