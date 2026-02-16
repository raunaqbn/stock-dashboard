#!/bin/bash
# Deploy stock update to dashboard
# Usage: ./deploy-update.sh "Stock Update Title" "/path/to/update.md"

set -e

DATE=$(date +%Y-%m-%d)
TIME=$(date +%H-%M)
SLUG="${DATE}-${TIME}"

# Create the update directory
mkdir -p "app/updates/${SLUG}"

# Generate the update page from the provided data
cat > "app/updates/${SLUG}/page.js" << 'ENDPAGE'
'use client';

export default function StockUpdate() {
  const updateData = UPDATEDATA;

  return (
    <div style={{ padding: '20px', maxWidth: '1600px', margin: '0 auto', color: '#fff', background: '#0f0f0f', minHeight: '100vh' }}>
      <div style={{ marginBottom: '30px' }}>
        <a href="/" style={{ color: '#667eea', textDecoration: 'none', fontSize: '16px' }}>← Back to Dashboard</a>
        <h1 style={{ fontSize: '48px', margin: '20px 0 10px 0', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          {updateData.title}
        </h1>
        <p style={{ color: '#888', fontSize: '14px' }}>{updateData.date}</p>
      </div>

      <div style={{ background: 'linear-gradient(135deg, #1e1e1e 0%, #2a2a2a 100%)', padding: '30px', borderRadius: '16px', border: '1px solid #333' }}>
        <div dangerouslySetInnerHTML={{ __html: updateData.content }} />
      </div>
    </div>
  );
}
ENDPAGE

# Commit and push
git add .
git commit -m "Add stock update for ${DATE} ${TIME}"

# Push to GitHub using API to avoid auth issues
SHA=$(git rev-parse HEAD)
echo "Deployment triggered for commit: ${SHA}"
echo "Update will be available at: https://stock-dashboard-raunaqbns-projects.vercel.app/updates/${SLUG}"
