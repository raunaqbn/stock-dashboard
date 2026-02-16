'use client';

import { LineChart, Line, AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, RadialBarChart, RadialBar, PieChart, Pie, Cell } from 'recharts';

export default function StockDashboard() {
  const lastUpdated = new Date().toLocaleString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
  });

  const stocks = [
    {
      symbol: 'AVGO',
      name: 'Broadcom',
      price: 325.17,
      change: -7.48,
      changePercent: -2.30,
      recommendation: 'STRONG BUY',
      rating: 5,
      targetPrice: 456,
      upside: 40.2,
      rsi: 45,
      pe: 50,
      marketCap: 'N/A',
      keyPoints: [
        'Google committed $185B in AI infrastructure - Broadcom supplies custom TPU chips',
        '$11B order from single customer + previous $10B order = massive backlog',
        'Cathie Wood\'s ARK invested $27M (87,148 shares) in early Feb',
        '48 analysts Strong Buy rating with $456 median target (40% upside)'
      ],
      tradeSetup: {
        entry: '$320-335',
        stopLoss: '$295',
        target1: '$380',
        target2: '$430',
        target3: '$500',
        positionSize: '25% of portfolio',
        timeframe: '3-6 months'
      },
      catalyst: 'AI infrastructure spending + Google TPU chips',
      risk: 'Medium',
      priceHistory: [
        { date: 'Feb 1', price: 340, rsi: 52 },
        { date: 'Feb 4', price: 335, rsi: 48 },
        { date: 'Feb 7', price: 330, rsi: 46 },
        { date: 'Feb 10', price: 328, rsi: 44 },
        { date: 'Feb 13', price: 332, rsi: 46 },
        { date: 'Feb 16', price: 325.17, rsi: 45 }
      ],
      earnings: 'Reported Q4 FY2025',
      nextEarnings: 'Q1 FY2026 (March 2026)'
    },
    {
      symbol: 'META',
      name: 'Meta Platforms',
      price: 638.64,
      change: -30.08,
      changePercent: -4.50,
      recommendation: 'BUY',
      rating: 4,
      targetPrice: 840,
      upside: 31.5,
      rsi: 52,
      pe: 28,
      marketCap: '1.62T',
      keyPoints: [
        'Bill Ackman took 10% position - calls it "deeply discounted" with AI upside',
        '$115-135B capex in 2026 (73% increase) - massive AI infrastructure bet',
        'Building 1-gigawatt Indiana data center for $10B+ (operational late 2027)',
        '67 analysts Buy rating, $840 median target (32% upside)'
      ],
      tradeSetup: {
        entry: '$630-660',
        stopLoss: '$600',
        target1: '$720',
        target2: '$790',
        target3: '$840',
        positionSize: '15% of portfolio',
        timeframe: '3-6 months'
      },
      catalyst: 'AI monetization + massive infrastructure investment',
      risk: 'Medium',
      priceHistory: [
        { date: 'Feb 1', price: 720, rsi: 68 },
        { date: 'Feb 4', price: 710, rsi: 62 },
        { date: 'Feb 7', price: 690, rsi: 58 },
        { date: 'Feb 10', price: 670, rsi: 54 },
        { date: 'Feb 13', price: 668, rsi: 53 },
        { date: 'Feb 16', price: 638.64, rsi: 52 }
      ],
      earnings: 'Reported Jan 28',
      nextEarnings: 'Apr 23, 2026'
    },
    {
      symbol: 'PANW',
      name: 'Palo Alto Networks',
      price: 167.12,
      change: -15.89,
      changePercent: -9.50,
      recommendation: 'BUY',
      rating: 4,
      targetPrice: 224,
      upside: 34.0,
      rsi: 38,
      pe: 85,
      marketCap: '116.36B',
      keyPoints: [
        'Earnings Feb 17 after close - down 9.5% creates beat opportunity',
        'NGS ARR grew 29% to $5.85B - platformization driving growth',
        'Beat estimates last 4 quarters with 5.1% average surprise',
        '36 analysts Buy rating, $224 target (34% upside from current)'
      ],
      tradeSetup: {
        entry: '$165-175',
        stopLoss: '$155',
        target1: '$190',
        target2: '$210',
        target3: '$224',
        positionSize: '15% of portfolio',
        timeframe: '2-4 months'
      },
      catalyst: 'Feb 17 earnings + NGS ARR acceleration',
      risk: 'Medium-High',
      priceHistory: [
        { date: 'Feb 1', price: 188, rsi: 52 },
        { date: 'Feb 4', price: 182, rsi: 48 },
        { date: 'Feb 7', price: 178, rsi: 44 },
        { date: 'Feb 10', price: 172, rsi: 40 },
        { date: 'Feb 13', price: 170, rsi: 39 },
        { date: 'Feb 16', price: 167.12, rsi: 38 }
      ],
      earnings: 'Feb 17, 2026 (after close)',
      nextEarnings: 'Feb 17, 2026'
    },
    {
      symbol: 'NVDA',
      name: 'Nvidia',
      price: 182.88,
      change: -4.60,
      changePercent: -2.45,
      recommendation: 'BUY',
      rating: 4,
      targetPrice: 257,
      upside: 40.5,
      rsi: 47,
      pe: 45,
      marketCap: '4.5T',
      keyPoints: [
        'China conditionally approved DeepSeek for H200 chips - market reopening potential',
        '90% AI chip market share - $550B+ hyperscaler capex flows to NVDA',
        '37 analysts Buy, $257 avg target (41% upside)',
        'Earnings Feb 25 - critical catalyst for entire AI sector'
      ],
      tradeSetup: {
        entry: '$180-190',
        stopLoss: '$170',
        target1: '$215',
        target2: '$240',
        target3: '$257',
        positionSize: '25% of portfolio',
        timeframe: '2-4 months'
      },
      catalyst: 'Feb 25 earnings + China H200 approval',
      risk: 'Medium',
      priceHistory: [
        { date: 'Feb 1', price: 205, rsi: 62 },
        { date: 'Feb 4', price: 198, rsi: 55 },
        { date: 'Feb 7', price: 192, rsi: 51 },
        { date: 'Feb 10', price: 188, rsi: 48 },
        { date: 'Feb 13', price: 187, rsi: 49 },
        { date: 'Feb 16', price: 182.88, rsi: 47 }
      ],
      earnings: 'Feb 25, 2026 (after close)',
      nextEarnings: 'Feb 25, 2026'
    },
    {
      symbol: 'GOOG',
      name: 'Alphabet',
      price: 305.81,
      change: -14.38,
      changePercent: -4.70,
      recommendation: 'HOLD',
      rating: 3,
      targetPrice: 359,
      upside: 17.4,
      rsi: 48,
      pe: 28,
      marketCap: '3.7T',
      keyPoints: [
        'DOJ and 35 states appealed antitrust ruling Feb 3 - regulatory overhang',
        'Hit all-time high $350 on Feb 3, now down 13% - pullback from peak',
        'Separate ad-tech monopoly case pending remedies',
        'Analyst target $359 (17% upside) but regulatory risk looms'
      ],
      tradeSetup: {
        entry: '$285-295 (wait for dip)',
        stopLoss: '$270',
        target1: '$325',
        target2: '$345',
        target3: '$365',
        positionSize: '10% of portfolio',
        timeframe: '6-12 months'
      },
      catalyst: 'Antitrust resolution clarity',
      risk: 'Medium',
      priceHistory: [
        { date: 'Feb 1', price: 340, rsi: 68 },
        { date: 'Feb 4', price: 350, rsi: 72 },
        { date: 'Feb 7', price: 330, rsi: 62 },
        { date: 'Feb 10', price: 318, rsi: 54 },
        { date: 'Feb 13', price: 310, rsi: 50 },
        { date: 'Feb 16', price: 305.81, rsi: 48 }
      ],
      earnings: 'Reported Feb 4',
      nextEarnings: 'Apr 22, 2026'
    }
  ];

  const portfolioAllocation = [
    { name: 'AVGO', value: 25, color: '#FF6B35' },
    { name: 'NVDA', value: 25, color: '#76B900' },
    { name: 'META', value: 15, color: '#0668E1' },
    { name: 'PANW', value: 15, color: '#E31837' },
    { name: 'GOOG', value: 10, color: '#4285F4' },
    { name: 'Cash', value: 10, color: '#666' }
  ];

  const marketOverview = [
    { metric: 'S&P 500', value: 5892, change: +0.3 },
    { metric: 'NASDAQ', value: 18850, change: -0.2 },
    { metric: 'VIX', value: 15.2, change: -2.1 },
    { metric: 'DXY', value: 103.4, change: +0.1 }
  ];

  const getRecommendationColor = (rec) => {
    if (rec.includes('STRONG BUY')) return '#00ff88';
    if (rec.includes('BUY')) return '#00cc66';
    if (rec.includes('HOLD')) return '#ffaa00';
    if (rec.includes('WAIT')) return '#ff6600';
    return '#ff4444';
  };

  const getRatingStars = (rating) => {
    return '⭐'.repeat(rating) + '☆'.repeat(5 - rating);
  };

  const getRiskColor = (risk) => {
    if (risk === 'Low') return '#00ff88';
    if (risk === 'Low-Medium') return '#88ff00';
    if (risk === 'Medium') return '#ffaa00';
    if (risk === 'Medium-High') return '#ff8800';
    return '#ff4444';
  };

  return (
    <div style={{ padding: '10px', maxWidth: '1600px', margin: '0 auto', color: '#fff' }}>
      {/* Header */}
      <div style={{ marginBottom: '30px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '48px', margin: '0 0 10px 0', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          📊 Stock Analysis Dashboard
        </h1>
        <p style={{ color: '#888', fontSize: '14px', margin: '0 0 10px 0' }}>
          Last Updated: {lastUpdated}
        </p>
        <a href="/updates" style={{ color: '#667eea', textDecoration: 'none', fontSize: '14px', display: 'inline-block', padding: '8px 16px', background: 'rgba(102, 126, 234, 0.1)', borderRadius: '6px', border: '1px solid rgba(102, 126, 234, 0.3)' }}>
          📚 View Updates Archive
        </a>
      </div>

      {/* Market Overview */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '15px', marginBottom: '30px' }}>
        {marketOverview.map((item) => (
          <div key={item.metric} style={{ background: 'linear-gradient(135deg, #1e1e1e 0%, #2a2a2a 100%)', padding: '20px', borderRadius: '12px', border: '1px solid #333' }}>
            <div style={{ fontSize: '12px', color: '#888', marginBottom: '5px' }}>{item.metric}</div>
            <div style={{ fontSize: '24px', fontWeight: 'bold' }}>{item.value.toLocaleString()}</div>
            <div style={{ fontSize: '14px', color: item.change >= 0 ? '#00ff88' : '#ff4444' }}>
              {item.change >= 0 ? '↑' : '↓'} {Math.abs(item.change)}%
            </div>
          </div>
        ))}
      </div>

      {/* Portfolio Allocation */}
      <div style={{ background: 'linear-gradient(135deg, #1e1e1e 0%, #2a2a2a 100%)', padding: '30px', borderRadius: '16px', marginBottom: '30px', border: '1px solid #333' }}>
        <h2 style={{ margin: '0 0 20px 0', fontSize: '24px' }}>💼 Recommended Portfolio Allocation</h2>
        <div style={{ display: 'flex', alignItems: 'center', gap: '30px', flexWrap: 'wrap' }}>
          <div style={{ flex: '1', minWidth: '300px', height: '250px' }}>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={portfolioAllocation}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {portfolioAllocation.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{ background: '#1e1e1e', border: '1px solid #333', borderRadius: '8px' }}
                  formatter={(value) => `${value}%`}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div style={{ flex: '1', minWidth: '300px' }}>
            {portfolioAllocation.map((item) => (
              <div key={item.name} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                <div style={{ width: '20px', height: '20px', borderRadius: '4px', background: item.color }}></div>
                <div style={{ flex: 1 }}>{item.name}</div>
                <div style={{ fontWeight: 'bold' }}>{item.value}%</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stock Cards */}
      {stocks.map((stock) => (
        <div key={stock.symbol} style={{
          background: 'linear-gradient(135deg, #1e1e1e 0%, #2a2a2a 100%)',
          padding: '30px',
          borderRadius: '16px',
          marginBottom: '30px',
          border: '1px solid #333',
          boxShadow: stock.rating === 5 ? '0 0 30px rgba(0, 255, 136, 0.2)' : 'none'
        }}>
          {/* Stock Header */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '25px', flexWrap: 'wrap', gap: '20px' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '5px' }}>
                <h2 style={{ margin: 0, fontSize: '32px' }}>{stock.symbol}</h2>
                <span style={{ fontSize: '18px', color: '#888' }}>{stock.name}</span>
              </div>
              <div style={{ fontSize: '14px', color: '#888', marginBottom: '10px' }}>{stock.marketCap} • P/E {stock.pe}</div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '15px' }}>
                <span style={{ fontSize: '42px', fontWeight: 'bold' }}>${stock.price.toFixed(2)}</span>
                <span style={{ fontSize: '20px', color: stock.change >= 0 ? '#00ff88' : '#ff4444' }}>
                  {stock.change >= 0 ? '↑' : '↓'} ${Math.abs(stock.change).toFixed(2)} ({stock.changePercent >= 0 ? '+' : ''}{stock.changePercent}%)
                </span>
              </div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{
                display: 'inline-block',
                padding: '10px 20px',
                borderRadius: '8px',
                background: getRecommendationColor(stock.recommendation),
                color: '#000',
                fontWeight: 'bold',
                fontSize: '18px',
                marginBottom: '10px'
              }}>
                {stock.recommendation}
              </div>
              <div style={{ fontSize: '24px', marginBottom: '5px' }}>{getRatingStars(stock.rating)}</div>
              <div style={{ fontSize: '14px', color: '#888' }}>Target: ${stock.targetPrice} ({stock.upside}% upside)</div>
              <div style={{ fontSize: '14px', marginTop: '5px' }}>
                <span style={{ color: '#888' }}>Risk: </span>
                <span style={{ color: getRiskColor(stock.risk), fontWeight: 'bold' }}>{stock.risk}</span>
              </div>
            </div>
          </div>

          {/* Charts Row */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))', gap: '20px', marginBottom: '25px' }}>
            {/* Price Chart */}
            <div style={{ minWidth: 0, overflow: 'hidden' }}>
              <h3 style={{ margin: '0 0 15px 0', fontSize: '16px', color: '#888' }}>📈 Price Trend (6D)</h3>
              <ResponsiveContainer width="100%" height={200}>
                <AreaChart data={stock.priceHistory}>
                  <defs>
                    <linearGradient id={`colorPrice-${stock.symbol}`} x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor={stock.change >= 0 ? '#00ff88' : '#ff4444'} stopOpacity={0.3}/>
                      <stop offset="95%" stopColor={stock.change >= 0 ? '#00ff88' : '#ff4444'} stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                  <XAxis dataKey="date" stroke="#666" style={{ fontSize: '12px' }} />
                  <YAxis stroke="#666" style={{ fontSize: '12px' }} />
                  <Tooltip
                    contentStyle={{ background: '#1e1e1e', border: '1px solid #333', borderRadius: '8px' }}
                    formatter={(value) => `$${value.toFixed(2)}`}
                  />
                  <Area type="monotone" dataKey="price" stroke={stock.change >= 0 ? '#00ff88' : '#ff4444'} fill={`url(#colorPrice-${stock.symbol})`} strokeWidth={2} />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            {/* RSI Chart */}
            <div style={{ minWidth: 0, overflow: 'hidden' }}>
              <h3 style={{ margin: '0 0 15px 0', fontSize: '16px', color: '#888' }}>📊 RSI Indicator (Current: {stock.rsi})</h3>
              <ResponsiveContainer width="100%" height={200}>
                <LineChart data={stock.priceHistory}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                  <XAxis dataKey="date" stroke="#666" style={{ fontSize: '12px' }} />
                  <YAxis domain={[0, 100]} stroke="#666" style={{ fontSize: '12px' }} />
                  <Tooltip
                    contentStyle={{ background: '#1e1e1e', border: '1px solid #333', borderRadius: '8px' }}
                  />
                  <Line type="monotone" dataKey="rsi" stroke="#667eea" strokeWidth={2} dot={{ fill: '#667eea', r: 4 }} />
                  <Line type="monotone" dataKey={() => 70} stroke="#ff4444" strokeDasharray="5 5" strokeWidth={1} />
                  <Line type="monotone" dataKey={() => 30} stroke="#00ff88" strokeDasharray="5 5" strokeWidth={1} />
                </LineChart>
              </ResponsiveContainer>
              <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '10px', fontSize: '12px' }}>
                <span style={{ color: '#ff4444' }}>Overbought (70+)</span>
                <span style={{ color: '#ffaa00' }}>Neutral (30-70)</span>
                <span style={{ color: '#00ff88' }}>Oversold (&lt;30)</span>
              </div>
            </div>
          </div>

          {/* Key Points */}
          <div style={{ marginBottom: '25px' }}>
            <h3 style={{ margin: '0 0 15px 0', fontSize: '18px' }}>🎯 Key Investment Points</h3>
            <div style={{ display: 'grid', gap: '10px' }}>
              {stock.keyPoints.map((point, idx) => (
                <div key={idx} style={{
                  padding: '12px 15px',
                  background: '#2a2a2a',
                  borderRadius: '8px',
                  borderLeft: '3px solid #667eea'
                }}>
                  {point}
                </div>
              ))}
            </div>
          </div>

          {/* Trade Setup */}
          <div style={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            padding: '25px',
            borderRadius: '12px',
            marginBottom: '20px'
          }}>
            <h3 style={{ margin: '0 0 20px 0', fontSize: '20px' }}>⚡ Trade Setup</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '15px' }}>
              <div>
                <div style={{ fontSize: '12px', opacity: 0.8, marginBottom: '5px' }}>Entry Zone</div>
                <div style={{ fontSize: '18px', fontWeight: 'bold' }}>{stock.tradeSetup.entry}</div>
              </div>
              <div>
                <div style={{ fontSize: '12px', opacity: 0.8, marginBottom: '5px' }}>Stop Loss</div>
                <div style={{ fontSize: '18px', fontWeight: 'bold', color: '#ff4444' }}>{stock.tradeSetup.stopLoss}</div>
              </div>
              <div>
                <div style={{ fontSize: '12px', opacity: 0.8, marginBottom: '5px' }}>Target 1</div>
                <div style={{ fontSize: '18px', fontWeight: 'bold', color: '#00ff88' }}>{stock.tradeSetup.target1}</div>
              </div>
              <div>
                <div style={{ fontSize: '12px', opacity: 0.8, marginBottom: '5px' }}>Target 2</div>
                <div style={{ fontSize: '18px', fontWeight: 'bold', color: '#00ff88' }}>{stock.tradeSetup.target2}</div>
              </div>
              <div>
                <div style={{ fontSize: '12px', opacity: 0.8, marginBottom: '5px' }}>Target 3</div>
                <div style={{ fontSize: '18px', fontWeight: 'bold', color: '#00ff88' }}>{stock.tradeSetup.target3}</div>
              </div>
              <div>
                <div style={{ fontSize: '12px', opacity: 0.8, marginBottom: '5px' }}>Position Size</div>
                <div style={{ fontSize: '18px', fontWeight: 'bold' }}>{stock.tradeSetup.positionSize}</div>
              </div>
            </div>
            <div style={{ marginTop: '15px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
              <div>
                <div style={{ fontSize: '12px', opacity: 0.8, marginBottom: '5px' }}>Timeframe</div>
                <div style={{ fontSize: '16px', fontWeight: 'bold' }}>{stock.tradeSetup.timeframe}</div>
              </div>
              <div>
                <div style={{ fontSize: '12px', opacity: 0.8, marginBottom: '5px' }}>Catalyst</div>
                <div style={{ fontSize: '16px', fontWeight: 'bold' }}>{stock.catalyst}</div>
              </div>
            </div>
          </div>

          {/* Earnings Info */}
          <div style={{ display: 'flex', gap: '20px', fontSize: '14px', color: '#888' }}>
            <div>📅 Last Earnings: {stock.earnings}</div>
            <div>📅 Next Earnings: {stock.nextEarnings}</div>
          </div>
        </div>
      ))}

      {/* Footer */}
      <div style={{ textAlign: 'center', padding: '40px 0', color: '#666', fontSize: '14px' }}>
        <p>⚠️ This is not financial advice. Always do your own research before investing.</p>
        <p style={{ marginTop: '10px' }}>Built with ❤️ by Amika • Data sourced from comprehensive market analysis</p>
      </div>
    </div>
  );
}
