import Navbar from "@/components/Navbar"
import "./global.css"
import Footer from "@/components/Footer"
export const metadata = {
  title: 'Flexi-Share',
  description: 'Get a peek into awesome developer projects with flexi-share',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
