import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail, Smartphone } from 'lucide-react';
import { portfolioData } from '../data/portfolio';
import Lottie from 'lottie-react';
// Using a remote Lottie URL for "Flutter/Developer" animation
// Note: In a real scenario, we'd import a local JSON or fetch URL.
// For now we will just use the import to avoid errors, but we won't actually use it if it doesn't exist.
// To prevent build errors if the file is missing, I will remove the import and just use a placeholder overlay.

export default function Hero() {
    const { personal, heroTags } = portfolioData;

    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Animated Background is handled in index.css */}

            <div className="section-container relative z-10 w-full grid lg:grid-cols-2 gap-12 items-center">

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-left order-2 lg:order-1"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="inline-block px-4 py-2 rounded-full glass-card mb-6 border-blue-500/30"
                    >
                        <span className="gradient-text-accent font-medium tracking-wide">{personal.title}</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-white"
                    >
                        {personal.name}
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-xl text-[var(--color-text-secondary)] mb-8 max-w-lg leading-relaxed"
                    >
                        {personal.subtitle}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="flex flex-wrap gap-3 mb-10"
                    >
                        {heroTags.map((tag, index) => (
                            <span
                                key={tag}
                                className="px-4 py-2 rounded-full text-sm font-medium bg-[#02569B]/10 text-blue-200 border border-blue-500/20 shadow-[0_0_10px_rgba(2,86,155,0.1)]"
                            >
                                {tag}
                            </span>
                        ))}
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="flex items-center gap-6"
                    >
                        <a href="#projects" className="btn-primary flex items-center gap-2 group">
                            View Work <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </a>
                        <div className="flex items-center gap-4">
                            {[
                                { icon: Github, href: personal.github },
                                { icon: Linkedin, href: personal.linkedin },
                                { icon: Mail, href: `mailto:${personal.email}` },
                            ].map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    className="p-3 rounded-full hover:bg-white/10 transition-colors text-[var(--color-text-secondary)] hover:text-white border border-transparent hover:border-white/10"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <social.icon size={22} />
                                </a>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                        className="mt-8 flex items-center gap-2 text-[var(--color-text-muted)]"
                    >
                        <Smartphone size={18} />
                        <span>{personal.phone}</span>
                    </motion.div>

                </motion.div>

                {/* Profile Image with Lottie Overlay */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    className="relative order-1 lg:order-2 profile-image-large-container group"
                >
                    {/* Lottie Animation (Simulated via a background orb or overlay for now as I don't have a JSON file) 
                         In a real implementation we would fetch:
                         <Lottie animationData={animationData} className="absolute inset-0 z-0 opacity-50" />
                     */}

                    <div className="absolute top-1/4 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-[80px] animate-pulse" />

                    <img
                        src="/najath.png"
                        alt={personal.name}
                        className="profile-image-large relative z-10"
                    />

                    {/* Floating Tech Icons / Lottie Placeholder */}
                    <div className="absolute bottom-20 left-10 glass-card p-3 rounded-xl border-blue-500/30 animate-bounce delay-700 md:block hidden">
                        <span className="text-2xl">⚡</span>
                    </div>
                    <div className="absolute top-20 right-10 glass-card p-3 rounded-xl border-blue-500/30 animate-bounce delay-1000 md:block hidden">
                        <span className="text-2xl">🤖</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
