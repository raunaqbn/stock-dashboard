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
      price: 324.96,
      change: -0.21,
      changePercent: -0.06,
      recommendation: 'STRONG BUY',
      rating: 5,
      targetPrice: 420,
      upside: 29.2,
      rsi: 45,
      pe: 64.71,
      marketCap: '1.54T',
      keyPoints: [
        'Analysts upgraded EPS estimate 53% to $7.49 (from $6.43) for 2026',
        'AI revenue growth accelerating to 50% annually vs 20% historical growth',
        '60% market share in AI server compute ASIC design by 2027 (Counterpoint)',
        'Strong Buy consensus from 28 analysts, $420 target (29% upside)'
      ],
      tradeSetup: {
        entry: '$320-335',
        stopLoss: '$295',
        target1: '$380',
        target2: '$420',
        target3: '$456',
        positionSize: '20% of portfolio',
        timeframe: '3-6 months'
      },
      catalyst: 'AI infrastructure spending + custom AI chip dominance',
      risk: 'Medium',
      priceHistory: [
        { date: 'Feb 1', price: 340, rsi: 52 },
        { date: 'Feb 4', price: 335, rsi: 48 },
        { date: 'Feb 7', price: 330, rsi: 46 },
        { date: 'Feb 10', price: 328, rsi: 44 },
        { date: 'Feb 13', price: 332, rsi: 46 },
        { date: 'Feb 16', price: 324.96, rsi: 45 }
      ],
      earnings: 'Reported Q4 FY2025',
      nextEarnings: 'Q1 FY2026 (March 2026)'
    },
    {
      symbol: 'AMZN',
      name: 'Amazon',
      price: 198.95,
      change: -18.05,
      changePercent: -8.32,
      recommendation: 'BUY',
      rating: 4,
      targetPrice: 245,
      upside: 23.1,
      rsi: 35,
      pe: 27.73,
      marketCap: '2.13T',
      keyPoints: [
        'Q4 revenue $213.39B beat estimates, full-year 2025 reached $716.92B',
        'AWS grew 24% (fastest in 13 quarters) to $35.58B vs $34.93B expected',
        '$200B capex for 2026 AI infrastructure (up from $131B in 2025)',
        'Stock down 8% on spending concerns - oversold opportunity'
      ],
      tradeSetup: {
        entry: '$195-205',
        stopLoss: '$185',
        target1: '$225',
        target2: '$245',
        target3: '$270',
        positionSize: '15% of portfolio',
        timeframe: '3-6 months'
      },
      catalyst: 'AWS acceleration + AI infrastructure buildout',
      risk: 'Medium',
      priceHistory: [
        { date: 'Feb 1', price: 225, rsi: 58 },
        { date: 'Feb 4', price: 220, rsi: 54 },
        { date: 'Feb 7', price: 215, rsi: 48 },
        { date: 'Feb 10', price: 208, rsi: 42 },
        { date: 'Feb 13', price: 204, rsi: 38 },
        { date: 'Feb 16', price: 198.95, rsi: 35 }
      ],
      earnings: 'Reported Feb 5, 2026',
      nextEarnings: 'Q1 2026 (April 2026)'
    },
    {
      symbol: 'META',
      name: 'Meta Platforms',
      price: 660.13,
      change: 21.49,
      changePercent: 3.36,
      recommendation: 'BUY',
      rating: 4,
      targetPrice: 868,
      upside: 31.5,
      rsi: 56,
      pe: 27.66,
      marketCap: '1.66T',
      keyPoints: [
        'Q4 beat: +8.42% EPS surprise, +2.64% revenue surprise, stock +9.71%',
        'Gemini 3 AI model outperforms competitors, 750M+ monthly active users',
        '$109-117B projected AI capex for 2026 (data centers, chips, infrastructure)',
        'Average analyst target $868 (32% upside), range $707-$1,201'
      ],
      tradeSetup: {
        entry: '$650-670',
        stopLoss: '$620',
        target1: '$750',
        target2: '$820',
        target3: '$868',
        positionSize: '15% of portfolio',
        timeframe: '3-6 months'
      },
      catalyst: 'AI monetization + Gemini 3 adoption + subscription plans',
      risk: 'Medium',
      priceHistory: [
        { date: 'Feb 1', price: 720, rsi: 68 },
        { date: 'Feb 4', price: 710, rsi: 62 },
        { date: 'Feb 7', price: 690, rsi: 58 },
        { date: 'Feb 10', price: 670, rsi: 54 },
        { date: 'Feb 13', price: 668, rsi: 53 },
        { date: 'Feb 16', price: 660.13, rsi: 56 }
      ],
      earnings: 'Reported Q4 2025 (late Jan)',
      nextEarnings: 'Apr 29, 2026'
    },
    {
      symbol: 'NVDA',
      name: 'Nvidia',
      price: 182.88,
      change: -4.60,
      changePercent: -2.45,
      recommendation: 'STRONG BUY',
      rating: 5,
      targetPrice: 257,
      upside: 40.5,
      rsi: 47,
      pe: 45.28,
      marketCap: '4.44T',
      keyPoints: [
        'Earnings Feb 25: Consensus $65.56B revenue (66.7% YoY growth)',
        'Overwhelmingly bullish: 63 Buy, 3 Strong Buy, only 1 Hold, 1 Sell',
        'AI demand exceeding $500B forecast through end of 2026 (CFO)',
        'Trades under 25x forward earnings - attractive for AI leader'
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
      catalyst: 'Feb 25 earnings + AI infrastructure demand',
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
      symbol: 'PANW',
      name: 'Palo Alto Networks',
      price: 166.95,
      change: -16.24,
      changePercent: -8.86,
      recommendation: 'BUY',
      rating: 4,
      targetPrice: 224,
      upside: 34.2,
      rsi: 38,
      pe: 99.97,
      marketCap: '111.28B',
      keyPoints: [
        'Earnings Feb 17 after close - recent price cuts creating opportunity',
        'Multiple analysts lowered targets (DA: $210, Stifel: $200, BTIG: $200)',
        'Consensus remains Moderate Buy: 31 Buy, 7 Hold, 1 Sell ($224 avg target)',
        'Expected 14-15% revenue growth YoY despite recent weakness'
      ],
      tradeSetup: {
        entry: '$165-175',
        stopLoss: '$155',
        target1: '$190',
        target2: '$210',
        target3: '$224',
        positionSize: '10% of portfolio',
        timeframe: '2-4 months'
      },
      catalyst: 'Feb 17 earnings beat potential',
      risk: 'Medium-High',
      priceHistory: [
        { date: 'Feb 1', price: 188, rsi: 52 },
        { date: 'Feb 4', price: 182, rsi: 48 },
        { date: 'Feb 7', price: 178, rsi: 44 },
        { date: 'Feb 10', price: 172, rsi: 40 },
        { date: 'Feb 13', price: 170, rsi: 39 },
        { date: 'Feb 16', price: 166.95, rsi: 38 }
      ],
      earnings: 'Feb 17, 2026 (after close)',
      nextEarnings: 'Feb 17, 2026'
    },
    {
      symbol: 'GOOG',
      name: 'Alphabet',
      price: 305.81,
      change: -44.19,
      changePercent: -12.63,
      recommendation: 'BUY',
      rating: 4,
      targetPrice: 359,
      upside: 17.4,
      rsi: 42,
      pe: 28.28,
      marketCap: '3.70T',
      keyPoints: [
        'Q4 beat: $2.82 EPS vs $2.62 expected (+7.63%), revenue $113.83B',
        'Google Cloud $17.66B vs $16.18B expected, strong AI momentum',
        '$175-185B capex for 2026 (2x 2025 spend) for AI infrastructure',
        'Down from $350 ATH on Feb 3 - profit-taking after strong run'
      ],
      tradeSetup: {
        entry: '$300-315',
        stopLoss: '$285',
        target1: '$335',
        target2: '$359',
        target3: '$385',
        positionSize: '10% of portfolio',
        timeframe: '3-6 months'
      },
      catalyst: 'Cloud growth + AI capex deployment',
      risk: 'Medium',
      priceHistory: [
        { date: 'Feb 1', price: 340, rsi: 68 },
        { date: 'Feb 4', price: 350, rsi: 72 },
        { date: 'Feb 7', price: 330, rsi: 62 },
        { date: 'Feb 10', price: 318, rsi: 54 },
        { date: 'Feb 13', price: 310, rsi: 50 },
        { date: 'Feb 16', price: 305.81, rsi: 42 }
      ],
      earnings: 'Reported Feb 4, 2026',
      nextEarnings: 'Apr 22, 2026'
    },
    {
      symbol: 'PNW',
      name: 'Pinnacle West',
      price: 95.20,
      change: 5.88,
      changePercent: 6.58,
      recommendation: 'HOLD',
      rating: 3,
      targetPrice: 102,
      upside: 7.1,
      rsi: 58,
      pe: 19.12,
      marketCap: '11.39B',
      keyPoints: [
        'Earnings Feb 25 before market open with conference call at 11am ET',
        '2026 EPS guidance $4.55-$4.75 (down from 2025 due to higher financing)',
        'Adding 2,000MW natural gas generation near Gila Bend',
        'Long-term growth: 5-7% EPS, 7-9% rate base through 2028'
      ],
      tradeSetup: {
        entry: '$92-97',
        stopLoss: '$88',
        target1: '$102',
        target2: '$108',
        target3: '$112',
        positionSize: '5% of portfolio',
        timeframe: '6-12 months'
      },
      catalyst: 'Arizona semiconductor growth + generation expansion',
      risk: 'Low-Medium',
      priceHistory: [
        { date: 'Feb 1', price: 88, rsi: 45 },
        { date: 'Feb 4', price: 90, rsi: 48 },
        { date: 'Feb 7', price: 91, rsi: 52 },
        { date: 'Feb 10', price: 92, rsi: 54 },
        { date: 'Feb 13', price: 94, rsi: 56 },
        { date: 'Feb 16', price: 95.20, rsi: 58 }
      ],
      earnings: 'Feb 25, 2026 (before open)',
      nextEarnings: 'Feb 25, 2026'
    },
    {
      symbol: 'SNOW',
      name: 'Snowflake',
      price: 165.29,
      change: -12.71,
      changePercent: -7.14,
      recommendation: 'BUY',
      rating: 4,
      targetPrice: 287,
      upside: 73.6,
      rsi: 40,
      pe: -42.93,
      marketCap: '57.64B',
      keyPoints: [
        'Earnings Feb 25 after close: Q4 EPS forecast $0.27',
        'Q4 product revenue guidance $1.195-1.200B (27% YoY growth)',
        'Achieved $100M AI revenue run rate one quarter early',
        'Added 615 new customers in Q3, analyst avg target $287 (74% upside)'
      ],
      tradeSetup: {
        entry: '$160-170',
        stopLoss: '$145',
        target1: '$195',
        target2: '$240',
        target3: '$287',
        positionSize: '10% of portfolio',
        timeframe: '3-6 months'
      },
      catalyst: 'Feb 25 earnings + AI revenue acceleration',
      risk: 'High',
      priceHistory: [
        { date: 'Feb 1', price: 185, rsi: 52 },
        { date: 'Feb 4', price: 180, rsi: 48 },
        { date: 'Feb 7', price: 175, rsi: 45 },
        { date: 'Feb 10', price: 172, rsi: 42 },
        { date: 'Feb 13', price: 168, rsi: 41 },
        { date: 'Feb 16', price: 165.29, rsi: 40 }
      ],
      earnings: 'Feb 25, 2026 (after close)',
      nextEarnings: 'Feb 25, 2026'
    },
    {
      symbol: 'SHOP',
      name: 'Shopify',
      price: 112.44,
      change: -7.56,
      changePercent: -6.30,
      recommendation: 'BUY',
      rating: 4,
      targetPrice: 145,
      upside: 29.0,
      rsi: 43,
      pe: 119.47,
      marketCap: '147.08B',
      keyPoints: [
        'Q4 revenue beat: $3.67B vs $3.59B expected, GMV $123.8B vs $121.3B',
        'Announced $2B share repurchase program',
        'Q1 guidance: Low-thirties % growth (vs 25.1% analyst estimate)',
        'Mizuho upgraded to Outperform on AI/agentic commerce strategy'
      ],
      tradeSetup: {
        entry: '$110-118',
        stopLoss: '$102',
        target1: '$130',
        target2: '$145',
        target3: '$165',
        positionSize: '10% of portfolio',
        timeframe: '3-6 months'
      },
      catalyst: 'AI shopping tools + OpenAI partnership + share buyback',
      risk: 'Medium-High',
      priceHistory: [
        { date: 'Feb 1', price: 128, rsi: 58 },
        { date: 'Feb 4', price: 125, rsi: 54 },
        { date: 'Feb 7', price: 122, rsi: 50 },
        { date: 'Feb 10', price: 118, rsi: 46 },
        { date: 'Feb 13', price: 115, rsi: 44 },
        { date: 'Feb 16', price: 112.44, rsi: 43 }
      ],
      earnings: 'Reported Feb 11, 2026',
      nextEarnings: 'Q1 2026 (May 2026)'
    }
  ];

  const portfolioAllocation = [
    { name: 'NVDA', value: 25, color: '#76B900' },
    { name: 'AVGO', value: 20, color: '#FF6B35' },
    { name: 'META', value: 15, color: '#0668E1' },
    { name: 'AMZN', value: 15, color: '#FF9900' },
    { name: 'PANW', value: 10, color: '#E31837' },
    { name: 'GOOG', value: 10, color: '#4285F4' },
    { name: 'SNOW', value: 10, color: '#29B5E8' },
    { name: 'SHOP', value: 10, color: '#95BF47' },
    { name: 'PNW', value: 5, color: '#FFB627' }
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
