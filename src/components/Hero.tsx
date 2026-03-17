"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowRight, Download, Sparkles } from "lucide-react";
import { Button } from "@/components/Buttons";

const easeOut: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: easeOut } },
};

export default function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-64px)] flex items-center overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-brand/8 rounded-full blur-3xl" />
      </div>

      {/* Subtle grid */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand/10 border border-brand/20 text-brand-light text-xs font-medium">
              <Sparkles className="w-3 h-3" />
              Available for new opportunities
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-zinc-50 leading-tight tracking-tight mb-2"
          >
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-brand to-brand-light bg-clip-text text-transparent">
              Marlou Amada
            </span>
          </motion.h1>

          {/* Role */}
          <motion.h2
            variants={itemVariants}
            className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-zinc-400 mb-6"
          >
            Senior Full Stack Developer
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-zinc-400 text-lg leading-relaxed mb-8 max-w-2xl"
          >
            Building{" "}
            <span className="text-zinc-200 font-medium">
              scalable backend systems
            </span>
            ,{" "}
            <span className="text-zinc-200 font-medium">
              cloud-native applications
            </span>
            , and{" "}
            <span className="text-zinc-200 font-medium">
              AI-powered solutions
            </span>
            .
          </motion.p>

          {/* Tech pills */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-2 mb-10"
          >
            {[
              "Node.js",
              "MERN",
              "AWS",
              "NestJS",
              "Serverless",
              "TypeScript",
            ].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs font-mono font-medium rounded-md bg-zinc-900 border border-zinc-800 text-zinc-400"
              >
                {tech}
              </span>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-3">
            <Button href="/projects" size="lg" className="group">
              View Projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Button>
            <Button href="/contact" variant="outline" size="lg">
              Contact Me
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
