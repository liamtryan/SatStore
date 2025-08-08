export default function Home() {
  return (
    <main style={{fontFamily:'Inter, Arial, sans-serif', padding:'2rem'}}>
      <h1>SatStore – SMSF Tracker</h1>
      <p>Secure. Bitcoin-native. ATO-compliant.</p>
      <ul>
        <li>BTC wallets via xpub (read-only)</li>
        <li>Contributions + audit evidence uploads</li>
        <li>Compliance checklist + score</li>
      </ul>
      <p>Next steps: hook up Firebase Auth, Firestore, and mempool.space API.</p>
    </main>
  )
}