import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Toaster } from "sonner";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "YSET GPA Calculator — SGPA & CGPA Calculator",
    template: "%s | YSET GPA Calculator",
  },
  description:
    "Free SGPA and CGPA calculator for Yenepoya School of Engineering & Technology (YSET) students. Upload marksheet PDF, enter credits, get instant results. Supports all semesters and branches.",
  keywords: [
    "YSET CGPA calculator",
    "YSET SGPA calculator",
    "Yenepoya GPA calculator",
    "Yenepoya School of Engineering",
    "YSET GPA",
    "SGPA calculator online",
    "CGPA calculator online",
    "B.Tech GPA calculator",
    "Yenepoya University GPA",
    "semester GPA calculator",
    "credit point calculator",
    "yenepoya engineering marks calculator",
    "yset marks to gpa",
    "yset grade calculator",
    "yenepoya deemed university cgpa",
  ],
  authors: [{ name: "YSET Students" }],
  creator: "YSET",
  publisher: "Yenepoya School of Engineering & Technology",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "YSET GPA Calculator",
    title: "YSET GPA Calculator — SGPA & CGPA Calculator",
    description:
      "Free SGPA and CGPA calculator for YSET students. Upload marksheet, enter credits, get results instantly.",
  },
  twitter: {
    card: "summary_large_image",
    title: "YSET GPA Calculator",
    description: "Calculate SGPA and CGPA for Yenepoya School of Engineering & Technology",
  },
  metadataBase: new URL("https://yset-gpa.vercel.app"),
  verification: {
    google: "WWvBKuiRI7HKlC0kRQuwcPk5GQ5NvmHkTUeA9mZE9Hs",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://yset-gpa.vercel.app" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#16a34a" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "YSET GPA Calculator",
              description: "Free SGPA and CGPA calculator for Yenepoya School of Engineering & Technology students",
              url: "https://yset-gpa.vercel.app",
              applicationCategory: "EducationalApplication",
              operatingSystem: "Any",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "INR",
              },
              author: {
                "@type": "Organization",
                name: "Yenepoya School of Engineering & Technology",
                url: "https://yset.yenepoya.edu.in",
              },
            }),
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <Toaster richColors position="top-center" />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
