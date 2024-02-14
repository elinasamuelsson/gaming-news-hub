import "../assets/css/globals.css";
import Header from "../components/Header.js";
import Footer from "../components/Footer.js";

export const metadata = {
  title: "e Gamer News",
  description: "elsa0047's JSR200 finals project created using React/Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
