"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";

// Define Particle interface for TypeScript
interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
}

export default function CommitmentMessage() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 1, 0.5]);

  // Particle animation effect
  useEffect(() => {
    const canvas = document.createElement("canvas");
    canvas.className = "absolute inset-0 z-0";
    const section = document.querySelector(".commitment-section");
    if (section) {
      section.prepend(canvas);
    }
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Particle[] = [];
    const particleCount = 50;
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        radius: Math.random() * 2 + 1,
      });
    }

    function animate() {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(16, 185, 129, 0.4)";
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (dist < 80) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(16, 185, 129, ${1 - dist / 80})`;
            ctx.stroke();
          }
        }
      });
      requestAnimationFrame(animate);
    }
    animate();

    return () => {
      canvas.remove();
    };
  }, []);

  return (
    <section
      ref={ref}
      className="relative py-20 px-6 md:px-12 overflow-hidden commitment-section"
    >
      {/* Parallax background */}
      <motion.div
        style={{ y: backgroundY, opacity }}
        className="absolute inset-0 bg-gradient-to-br from-emerald-100 via-teal-50 to-emerald-200 bg-[radial-gradient(circle_at_center,_rgba(16,185,129,0.3)_0%,_transparent_70%)] -z-10"
      />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="bg-white/30 backdrop-blur-lg py-12 px-8 md:px-16 rounded-3xl shadow-2xl border border-emerald-200/50 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 relative z-10"
      >
        {/* Image Section */}
        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0, rotate: 5 }}
          whileInView={{ opacity: 1, rotate: 0 }}
          whileHover={{ scale: 1.05, rotate: -2 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Image
            src="/tm.jpg" // Ensure this image exists in /public/
            alt="Support and Guidance"
            width={500}
            height={400}
            className="rounded-2xl shadow-xl border border-emerald-300/30"
          />
        </motion.div>

        {/* Text Section */}
        <motion.div
          className="w-full md:w-1/2 text-center md:text-left"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-200 to-teal-900 mb-6">
            Our Commitment
          </h2>
          <p className="text-lg md:text-xl text-gray-900 leading-relaxed">
            We’re dedicated to fueling your marketing success with{" "}
            <span className="text-emerald-200 font-bold animate-pulse">
              unparalleled support
            </span>{" "}
            and{" "}
            <span className="text-emerald-200 font-bold animate-pulse">
              expert guidance
            </span>
            , guiding you every step of the way.
          </p>
        </motion.div>
      </motion.div>

      {/* Decorative Elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.2, scale: 1 }}
        transition={{ duration: 2, delay: 1 }}
        className="absolute top-10 left-10 w-32 h-32 bg-emerald-400 rounded-full blur-3xl -z-5"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.2, scale: 1 }}
        transition={{ duration: 2, delay: 1.2 }}
        className="absolute bottom-10 right-10 w-40 h-40 bg-teal-500 rounded-full blur-3xl -z-5"
      />
    </section>
  );
}