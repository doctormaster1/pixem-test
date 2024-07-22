import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PopupWidget } from "@/components/PopupWidget";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Web Tasarım, E-Ticaret, Yazılım Geliştirme | Pixem",
  description:
    "Profesyonel web tasarım ve dijital çözümlerle işinizi öne çıkarın.",
  keywords:
    "pixem, web tasarım, profesyonel web tasarım, mobil uyumlu web tasarım, kurumsal web tasarım, yaratıcı web tasarım, e-ticaret web tasarım, özel web sitesi geliştirme, dinamik web siteleri, hızlı web sitesi geliştirme, güvenli web sitesi geliştirme, SEO uyumlu web sitesi geliştirme, b2b e-ticaret çözümleri, b2b yazılım entegrasyonu, b2b platform geliştirme, kurumsal b2b çözümleri, b2b e-ticaret siteleri, özel API geliştirme, API entegrasyon hizmetleri, RESTful API geliştirme, API güvenlik hizmetleri, üçüncü parti API entegrasyonu, özel yazılım geliştirme, kurumsal yazılım çözümleri, yazılım danışmanlık hizmetleri, mobil yazılım geliştirme, masaüstü yazılım çözümleri, güvenli hosting çözümleri, hızlı web hosting, kurumsal hosting hizmetleri, yönetilen hosting hizmetleri, bulut hosting çözümleri, yazılım entegrasyon çözümleri, sistem entegrasyonu, e-ticaret entegrasyonları, CRM entegrasyonu, ERP entegrasyonu, profesyonel e-ticaret siteleri, e-ticaret yazılımı, e-ticaret platform geliştirme, e-ticaret SEO hizmetleri, e-ticaret pazarlama çözümleri",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://pixem.org/" />

        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-5CTSDXRB');
            `,
          }}
        />
        {/* End Google Tag Manager */}
      </head>
      <body className={inter.className}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5CTSDXRB"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <ThemeProvider attribute="class">
          <Navbar />
          <div>{children}</div>
          <Footer />
          <PopupWidget />
        </ThemeProvider>
      </body>
    </html>
  );
}
