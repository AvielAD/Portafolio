import "./globals.css";
import 'bootstrap-icons/font/bootstrap-icons.css'
import HeaderTop from '@/app/components/HeaderTop'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <HeaderTop></HeaderTop>
        {children}
      </body>

    </html>
  );
}
