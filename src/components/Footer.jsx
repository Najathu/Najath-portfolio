import { motion } from 'framer-motion';
import { ArrowUp, Heart } from 'lucide-react';

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const currentYear = new Date().getFullYear();

    const footerLinks = [
        { name: 'About', href: '#about' },
        { name: 'Experience', href: '#experience' },
        { name: 'Projects', href: '#projects' },
        { name: 'Skills', href: '#skills' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <footer className="relative py-12 border-t border-[var(--color-border)]">
            <div className="absolute inset-0 bg-[var(--color-bg-primary)]" />

            <div className="relative z-10 section-container">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    {/* Logo & Copyright */}
                    <div className="text-center md:text-left">
                        <motion.a
                            href="#"
                            className="text-xl font-bold tracking-tight inline-block mb-2"
                            whileHover={{ scale: 1.05 }}
                            onClick={(e) => {
                                e.preventDefault();
                                scrollToTop();
                            }}
                        >
                            <span className="gradient-text-accent">NT</span>
                        </motion.a>
                        <p className="text-sm text-[var(--color-text-muted)] flex items-center gap-1 justify-center md:justify-start">
                            © {currentYear} Made with <Heart size={14} className="text-red-500" /> by Najath Thekkeyil
                        </p>
                    </div>

                    {/* Quick Links */}
                    <nav className="flex flex-wrap justify-center gap-6">
                        {footerLinks.map((link) => (
                            <motion.a
                                key={link.name}
                                href={link.href}
                                className="text-sm text-[var(--color-text-muted)] hover:text-white transition-colors"
                                whileHover={{ y: -2 }}
                                onClick={(e) => {
                                    e.preventDefault();
                                    document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                                }}
                            >
                                {link.name}
                            </motion.a>
                        ))}
                    </nav>

                    {/* Scroll to Top Button */}
                    <motion.button
                        onClick={scrollToTop}
                        className="w-10 h-10 rounded-full bg-[var(--color-accent)]/20 flex items-center justify-center text-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:text-white transition-colors"
                        whileHover={{ y: -4 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <ArrowUp size={20} />
                    </motion.button>
                </div>
            </div>
        </footer>
    );
}
