import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import {Manrope} from 'next/font/google'


const manrope = Manrope({
  subsets: ['latin'], // Ensure the correct character subsets are used
  weight: ['400', '500', '700'], // Choose the font weights you need
});

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "AirBnb | Vacations rentals,cabins,beach Houses & More",
  description: "Airbnb is an online marketplace that connects travelers with unique accommodations, ranging from private homes to boutique hotels, offering a personalized experience.",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body className={`${manrope.className}`}>
        <div className="max-w-[1780px] mx-auto bg-white">
          <Navbar />
        </div>
        <div className="max-w-[1780px] mx-auto min-h-screen bg-white">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
