"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const [typedText, setTypedText] = useState("");
  const fullText = "Supercharge Your ";

  // Typing effect
  useEffect(() => {
    let i = 0;
    let mounted = true;

    const typing = setInterval(() => {
      if (!mounted) return;
      setTypedText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(typing);
    }, 100);

    return () => {
      mounted = false;
      clearInterval(typing);
    };
  }, []);

  // Particle background canvas
  useEffect(() => {
    if (!ref.current || typeof window === "undefined") return;

    const canvas = document.createElement("canvas");
    canvas.className = "absolute inset-0 z-0";
    ref.current.prepend(canvas);

    const ctx = canvas.getContext("2d");
    if (!ctx) {
      canvas.remove();
      return;
    }

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = Array.from({ length: 60 }).map(() => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 2,
      vy: (Math.random() - 0.5) * 2,
      radius: Math.random() * 3 + 1,
    }));

    let animationFrameId: number;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(34, 197, 94, 0.5)";
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(34, 197, 94, ${1 - dist / 100})`;
            ctx.stroke();
          }
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      canvas.remove();
    };
  }, []);
  

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-green-50 via-white to-green-100 text-center px-4 overflow-hidden"
    >
      {/* Parallax radial background */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(74,222,128,0.3)_0%,_transparent_70%)] -z-10"
      />

      {/* Animated Blob */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: 0.15,
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="absolute w-[1200px] h-[1200px] bg-green-200 rounded-full blur-3xl -z-10"
      />

      {/* Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="z-10"
      >
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="text-5xl md:text-7xl font-extrabold text-green-900 mb-6 leading-tight drop-shadow-xl"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-green-800">
            {typedText || "Supercharge Your"}
          </span>{" "}
          WhatsApp Marketing
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-10 font-medium"
        >
          INTRODUCING AN
          <span className="text-green-600 font-semibold"> AMAZING WHATSAPP</span>{" "}
           MARKETING SOFTWARE THAT OFFERS YOU THE BENEFIT OF SENDING MESSAGES WITHOUT ANY COST, ALONG WITH THE ABILITY TO SEND BULK MESSAGES EFFORTLESSLY, AND A VARIETY OF EXCITING FEATURES TO ENHANCE YOUR MARKETING EXPERIENCE!
        </motion.p>

      <div className="flex gap-6 justify-center">
      <motion.a
        href="https://wa.me/917067330134"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.15, rotate: 2 }}
        whileTap={{ scale: 0.95 }}
        className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-8 py-4 rounded-full font-bold shadow-xl flex items-center gap-3 text-lg"
      >
        <FaWhatsapp className="text-2xl animate-pulse" /> Try Free Demo
      </motion.a>

      <motion.button
        whileHover={{ scale: 1.15, rotate: -2 }}
        whileTap={{ scale: 0.95 }}
        className="border-2 border-green-600 text-green-700 hover:bg-green-50 px-8 py-4 rounded-full font-bold shadow-md text-lg"
      >
        Learn More
      </motion.button>
    </div>
      </motion.div>

      {/* Decorative Glows */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.2, scale: 1 }}
        transition={{ duration: 2, delay: 0.8 }}
        className="absolute top-10 left-10 w-24 h-24 bg-green-400 rounded-full blur-xl"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.2, scale: 1 }}
        transition={{ duration: 2, delay: 1 }}
        className="absolute bottom-10 right-10 w-32 h-32 bg-green-500 rounded-full blur-xl"
      />
    </section>
  );
}