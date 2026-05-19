import { Orbitron, Rajdhani } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const rajdhani = Rajdhani({
  variable: "--font-rajdhani",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "NextLevel E-Sport - Rejoignez la compétition",
  description: "Affrontez les meilleurs joueurs, participez à des tournois épiques et devenez une légende de l'e-sport.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={`${orbitron.variable} ${rajdhani.variable}`}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
