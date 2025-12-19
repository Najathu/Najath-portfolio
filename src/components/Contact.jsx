import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Mail, MapPin, Send, Linkedin, Github, CheckCircle2, AlertCircle } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const contactSchema = z.object({
    name: z.string().min(2, 'Name must be at least 2 characters'),
    email: z.string().email('Please enter a valid email'),
    message: z.string().min(10, 'Message must be at least 10 characters'),
});

export default function Contact() {
    const { personal, cta } = portfolioData;
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });
    const [submitStatus, setSubmitStatus] = useState(null);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm({
        resolver: zodResolver(contactSchema),
    });

    const onSubmit = async (data) => {
        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    access_key: '22511428-e6bc-4663-ae66-edbd7521c177',
                    name: data.name,
                    email: data.email,
                    message: data.message,
                    subject: `New message from ${data.name} via Portfolio`,
                })
            });

            const result = await response.json();

            if (result.success) {
                setSubmitStatus('success');
                reset();
            } else {
                setSubmitStatus('error');
            }
            setTimeout(() => setSubmitStatus(null), 5000);
        } catch {
            setSubmitStatus('error');
            setTimeout(() => setSubmitStatus(null), 5000);
        }
    };

    return (
        <section id="contact" className="py-24 relative">
            <div className="absolute inset-0 bg-[var(--color-bg-secondary)]" />

            <motion.div
                ref={ref}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                className="relative z-10 section-container"
            >
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    className="text-center mb-16"
                >
                    <h2 className="section-title gradient-text">Get in Touch</h2>
                    <p className="section-subtitle mx-auto">{cta}</p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.2 }}
                    >
                        <div className="glass-card p-8 h-full">
                            <h3 className="text-xl font-semibold mb-6">Contact Information</h3>

                            <div className="space-y-6">
                                {/* Email */}
                                <motion.a
                                    href={`mailto:${personal.email}`}
                                    className="flex items-center gap-4 text-[var(--color-text-secondary)] hover:text-white transition-colors group"
                                    whileHover={{ x: 4 }}
                                >
                                    <div className="w-12 h-12 rounded-xl bg-[var(--color-accent)]/20 flex items-center justify-center group-hover:bg-[var(--color-accent)]/30 transition-colors">
                                        <Mail size={20} className="text-[var(--color-accent)]" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-[var(--color-text-muted)]">Email</p>
                                        <p>{personal.email}</p>
                                    </div>
                                </motion.a>

                                {/* Location */}
                                <div className="flex items-center gap-4 text-[var(--color-text-secondary)]">
                                    <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center">
                                        <MapPin size={20} className="text-purple-400" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-[var(--color-text-muted)]">Location</p>
                                        <p>{personal.location}</p>
                                    </div>
                                </div>

                                {/* Social Links */}
                                <div className="pt-6 border-t border-[var(--color-border)]">
                                    <p className="text-sm text-[var(--color-text-muted)] mb-4">Connect with me</p>
                                    <div className="flex gap-3">
                                        <motion.a
                                            href={personal.linkedin}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-12 h-12 rounded-xl bg-[var(--color-bg-tertiary)] flex items-center justify-center text-[var(--color-text-secondary)] hover:text-white hover:bg-blue-600/20 transition-colors"
                                            whileHover={{ y: -4 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <Linkedin size={20} />
                                        </motion.a>
                                        <motion.a
                                            href={personal.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-12 h-12 rounded-xl bg-[var(--color-bg-tertiary)] flex items-center justify-center text-[var(--color-text-secondary)] hover:text-white hover:bg-gray-600/20 transition-colors"
                                            whileHover={{ y: -4 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <Github size={20} />
                                        </motion.a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.3 }}
                    >
                        <form onSubmit={handleSubmit(onSubmit)} className="glass-card p-8 border-t border-white/10">
                            <div className="flex items-center gap-3 mb-8">
                                <div className="p-3 rounded-full bg-blue-500/10">
                                    <Send size={24} className="text-blue-400" />
                                </div>
                                <h3 className="text-2xl font-semibold">Send a Message</h3>
                            </div>

                            <div className="space-y-5">
                                {/* Name */}
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium mb-2 text-[var(--color-text-secondary)] pl-1">
                                        Your Name
                                    </label>
                                    <input
                                        id="name"
                                        {...register('name')}
                                        className="form-input"
                                        placeholder="John Doe"
                                    />
                                    {errors.name && (
                                        <p className="form-error">{errors.name.message}</p>
                                    )}
                                </div>

                                {/* Email */}
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium mb-2 text-[var(--color-text-secondary)] pl-1">
                                        Email Address
                                    </label>
                                    <input
                                        id="email"
                                        type="email"
                                        {...register('email')}
                                        className="form-input"
                                        placeholder="john@example.com"
                                    />
                                    {errors.email && (
                                        <p className="form-error">{errors.email.message}</p>
                                    )}
                                </div>

                                {/* Message */}
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium mb-2 text-[var(--color-text-secondary)] pl-1">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        {...register('message')}
                                        rows={5}
                                        className="form-input resize-none"
                                        placeholder="How can I help you?"
                                    />
                                    {errors.message && (
                                        <p className="form-error">{errors.message.message}</p>
                                    )}
                                </div>

                                {/* Submit Button */}
                                <motion.button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="btn-primary w-full justify-center text-lg h-14 mt-2"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    {isSubmitting ? (
                                        <span className="flex items-center gap-3">
                                            <motion.div
                                                animate={{ rotate: 360 }}
                                                transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                                                className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                                            />
                                            Sending...
                                        </span>
                                    ) : (
                                        <span className="flex items-center gap-2">
                                            Send Message
                                            <Send size={18} className="ml-1" />
                                        </span>
                                    )}
                                </motion.button>

                                <p className="text-xs text-center text-slate-500 mt-4">
                                    I usually respond within 24 hours.
                                </p>

                                {/* Submit Status */}
                                {submitStatus && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className={`flex items-center gap-3 p-4 rounded-xl mt-4 border ${submitStatus === 'success'
                                            ? 'bg-green-500/10 text-green-400 border-green-500/20'
                                            : 'bg-red-500/10 text-red-400 border-red-500/20'
                                            }`}
                                    >
                                        {submitStatus === 'success' ? (
                                            <>
                                                <CheckCircle2 size={24} />
                                                <span className="font-medium">Message sent successfully!</span>
                                            </>
                                        ) : (
                                            <>
                                                <AlertCircle size={24} />
                                                <span className="font-medium">Failed to send message.</span>
                                            </>
                                        )}
                                    </motion.div>
                                )}
                            </div>
                        </form>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}
