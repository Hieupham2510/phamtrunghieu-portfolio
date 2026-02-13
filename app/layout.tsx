import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers";
import { TransitionProvider } from "@/contexts/TransitionContext";
import CustomCursor from "@/components/ui/CustomCursor";
import RouteTransition from "@/components/animations/RouteTransition";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL('https://phamtrunghieu.com'),
  title: {
    default: "Pham Trung Hieu | Senior Software Engineer Portfolio",
    template: "%s | Pham Trung Hieu"
  },
  description: "Senior Software Engineer specializing in React, Next.js, TypeScript, and scalable web applications. 4+ years of experience building high-performance digital solutions.",
  keywords: ["Pham Trung Hieu", "Software Engineer", "React Developer", "Next.js", "TypeScript", "Frontend Developer", "Full Stack Developer", "Web Development", "Portfolio"],
  authors: [{ name: "Pham Trung Hieu" }],
  creator: "Pham Trung Hieu",
  publisher: "Pham Trung Hieu",
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: "https://phamtrunghieu.com",
    siteName: "Pham Trung Hieu Portfolio",
    title: "Pham Trung Hieu | Senior Software Engineer",
    description: "Senior Software Engineer specializing in React, Next.js, TypeScript, and scalable web applications. 4+ years of experience building high-performance digital solutions.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Pham Trung Hieu - Senior Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pham Trung Hieu | Senior Software Engineer",
    description: "Senior Software Engineer specializing in React, Next.js, TypeScript, and scalable web applications.",
    images: ["/opengraph-image"],
    creator: "@phamtrunghieu",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "google-site-verification-code", // Replace with actual code
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Pham Trung Hieu',
    jobTitle: 'Senior Software Engineer',
    url: 'https://phamtrunghieu.com',
    sameAs: [
      'https://github.com/phamtrunghieu',
      'https://linkedin.com/in/phamtrunghieu',
    ],
    knowsAbout: [
      'React',
      'Next.js',
      'TypeScript',
      'Node.js',
      'System Design',
      'Cloud Architecture',
      'Frontend Development',
      'Full Stack Development',
    ],
    description: 'Senior Software Engineer specializing in React, Next.js, TypeScript, and scalable web applications with 4+ years of experience.',
  };

  return (
    <html lang="vi" suppressHydrationWarning>
      <body
        className={`${inter.variable} antialiased noise`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <TransitionProvider>
            <CustomCursor />
            <RouteTransition />
            {children}
          </TransitionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
