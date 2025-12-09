import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
    Code, Layout, Server, Database, Wrench, Brain,
    FileCode2, Palette, Box, HardDrive, GitBranch, MessageSquare
} from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const skillCategories = [
    { key: 'languages', label: 'Languages', icon: Code, color: 'from-blue-500/20 to-cyan-500/20' },
    { key: 'architecture', label: 'Architecture', icon: Layout, color: 'from-purple-500/20 to-pink-500/20' },
    { key: 'ai_ml', label: 'AI & Machine Learning', icon: Brain, color: 'from-green-500/20 to-emerald-500/20' },
    { key: 'backend_cloud', label: 'Backend & Cloud', icon: Server, color: 'from-orange-500/20 to-yellow-500/20' },
    { key: 'tools', label: 'Tools', icon: Wrench, color: 'from-indigo-500/20 to-violet-500/20' },
    { key: 'soft', label: 'Soft Skills', icon: MessageSquare, color: 'from-teal-500/20 to-cyan-500/20' },
];

export default function Skills() {
    const { skills } = portfolioData;
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section id="skills" className="py-24 relative">
            <div className="absolute inset-0 bg-[var(--color-bg-primary)]" />

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
                    <h2 className="section-title gradient-text">Skills & Tools</h2>
                    <p className="section-subtitle mx-auto">
                        Technologies and tools I work with
                    </p>
                </motion.div>

                {/* Skills Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skillCategories.map((category, index) => {
                        const Icon = category.icon;
                        const categorySkills = skills[category.key] || [];

                        return (
                            <motion.div
                                key={category.key}
                                initial={{ opacity: 0, y: 30 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: index * 0.1 }}
                                className="glass-card p-6 glass-card-hover"
                            >
                                {/* Category Header */}
                                <div className="flex items-center gap-3 mb-4">
                                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center`}>
                                        <Icon size={20} className="text-[var(--color-text-primary)]" />
                                    </div>
                                    <h3 className="font-semibold text-[var(--color-text-primary)]">
                                        {category.label}
                                    </h3>
                                </div>

                                {/* Skills List */}
                                <div className="flex flex-wrap gap-2">
                                    {categorySkills.map((skill, skillIndex) => (
                                        <motion.span
                                            key={skill}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                            transition={{ delay: index * 0.1 + skillIndex * 0.05 }}
                                            whileHover={{ scale: 1.05, y: -2 }}
                                            className="tag cursor-default"
                                        >
                                            {skill}
                                        </motion.span>
                                    ))}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Skill Highlights */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.8 }}
                    className="mt-16 glass-card p-8"
                >
                    <h3 className="text-xl font-semibold text-center mb-8 gradient-text">
                        What I Bring to the Table
                    </h3>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-[var(--color-accent)]/20 flex items-center justify-center">
                                <FileCode2 size={32} className="text-[var(--color-accent)]" />
                            </div>
                            <h4 className="font-medium mb-2">Clean Code</h4>
                            <p className="text-sm text-[var(--color-text-muted)]">
                                Writing maintainable, readable, and efficient code
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-purple-500/20 flex items-center justify-center">
                                <Palette size={32} className="text-purple-400" />
                            </div>
                            <h4 className="font-medium mb-2">User-Centric Design</h4>
                            <p className="text-sm text-[var(--color-text-muted)]">
                                Building interfaces that are intuitive and accessible
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-green-500/20 flex items-center justify-center">
                                <HardDrive size={32} className="text-green-400" />
                            </div>
                            <h4 className="font-medium mb-2">Scalable Solutions</h4>
                            <p className="text-sm text-[var(--color-text-muted)]">
                                Architecting systems that grow with your needs
                            </p>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
}
