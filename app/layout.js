export const metadata = {
  title: 'Stock Analysis Dashboard',
  description: 'Daily stock analysis with charts and trade recommendations',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=5',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body style={{ margin: 0, fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif', backgroundColor: '#0f0f0f', overflowX: 'hidden' }}>
        {children}
      </body>
    </html>
  )
}
