import { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import ContactHero from '@/components/contact/ContactHero'
import ContactForm from '@/components/contact/ContactForm'
import ContactFooter from '@/components/contact/ContactFooter'

export const metadata: Metadata = {
    title: 'Contact | Pham Trung Hieu',
    description: 'Get in touch regarding your project or just say hi.',
}

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-background">
            <Header />
            <main>
                <ContactHero />
                <ContactForm />
            </main>
            <ContactFooter />
            <Footer />
        </div>
    )
}
