import "./globals.css";

export const metadata = {
  title: "Zen Posers — Community Meditation in Nashville, TN",
  description:
    "Zen Posers is a community meditation practice group based in Nashville, TN. We sit Saturdays at 9AM at DRKMTTR Collective and online.",
  openGraph: {
    title: "Zen Posers",
    description: "Community meditation practice in Nashville, TN",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
