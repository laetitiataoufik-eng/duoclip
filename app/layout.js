export const metadata = {
  title: "DuoClip",
  description: "Enregistre, monte et partage tes vidéos de réaction.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
