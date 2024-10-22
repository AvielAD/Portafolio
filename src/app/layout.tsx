import "./globals.css";
import 'bootstrap-icons/font/bootstrap-icons.css'
import HeaderTop from '@/components/HeaderTop'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <title>Proyectos</title>

      <body>
        <HeaderTop></HeaderTop>
        {children}
      </body>

    </html>
  );
}
