import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <head>
        <title>Quartz</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
