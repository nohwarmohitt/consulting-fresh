export const metadata = {
  title: "Yukti Security Consulting | VAPT & Red Team",
  description: "VAPT, red teaming, and incident response services for enterprises."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "system-ui, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
