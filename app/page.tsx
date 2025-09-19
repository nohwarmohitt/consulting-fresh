export default function Home() {
  return (
    <main style={{ maxWidth: 960, margin: "0 auto", padding: "2rem" }}>
      <header style={{ display: "flex", justifyContent: "space-between", marginBottom: "2rem" }}>
        <div>
          <h1 style={{ margin: 0 }}>Yukti Security Consulting</h1>
          <p style={{ margin: 0, opacity: 0.8 }}>VAPT • Red Team • Incident Response</p>
        </div>
        <a href="mailto:hello@yourdomain.com">hello@yourdomain.com</a>
      </header>

      <section style={{ padding: "1rem", border: "1px solid #eee", borderRadius: "12px", background: "#fafafa" }}>
        <h2>What we do</h2>
        <ul>
          <li>Vulnerability Assessment & Penetration Testing</li>
          <li>Red Team exercises & adversary simulations</li>
          <li>Incident Response, DFIR, ransomware readiness</li>
        </ul>
      </section>

      <footer style={{ marginTop: "2rem", textAlign: "center", opacity: 0.6 }}>
        © {new Date().getFullYear()} Yukti Security Consulting
      </footer>
    </main>
  );
}
