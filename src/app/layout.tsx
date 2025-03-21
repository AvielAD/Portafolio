import "./globals.css";
import 'bootstrap-icons/font/bootstrap-icons.css'
import TopSection from "@/components/ComponentsTailwind/TopBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <title>Proyectos</title>
      <body>
        <div className="md:border-b">
          <TopSection ></TopSection>      
        </div>

        {children}

      </body>

    </html>
  );
}
