import "./globals.css";
import Head from 'next/head'
import UpperNav from '@/components/UpperNav'
/*const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
*/

export const metadata = {
  title: "ecommerce",
  description: "Dewangonj morden fashion"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bn">
      <Head>
        <meta charSet="UTF-8" />
      </Head>
      <body>
       <header className='w-auto xs:w-[448px] sm:w-[992px] lg:w-[1448px] bg-black text-white p-2'>
         <UpperNav />
       </header>
      <main>
        {children}
        </main>
      </body>
    </html>
  );
}