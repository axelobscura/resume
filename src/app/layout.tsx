import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FULL STACK DEVELOPER | AXEL LAURENT OBSCURA SARZOTTI",
  description: "Based in Mexico, I'm a seasoned full stack web and mobile developer with a passion for crafting innovative, user-friendly, and scalable digital solutions. With 20 years of experience in the industry, I've honed my skills in designing and developing custom web applications that meet the unique needs of my clients.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
        <link rel="icon" type="image/png" href="favicon.png" />
      </head>
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}

