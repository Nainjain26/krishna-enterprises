"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
}

const pricingPlans = [
  {
    name: "Basic Plan A",
    price: "₹999.00",
    period: "/ month",
    description:
      "Ideal for newcomers. Essential features to kickstart sales and marketing. Perfect for small teams.",
    features: [
      { text: "WhatsApp Marketing Software", included: true },
      { text: "WhatsApp Support", included: true },
      { text: "Graphics Design for Your Business (Monthly Posts)", included: false },
      { text: "Customer/Client Data", included: false },
      { text: "Flexible Contracts & Satisfaction Guaranteed", included: true },
    ],
    popular: false,
    color: "from-blue-400 to-indigo-500",
  },
  {
    name: "Premium",
    price: "₹2499.00",
    period: "/ month",
    description:
      "Tailored marketing solutions to elevate your brand. Enhance your visibility and engagement across all platforms.",
    features: [
      { text: "WhatsApp Marketing Software", included: true },
      { text: "Customer/Client Data", included: true },
      { text: "Graphics Design for Your Business (Monthly Posts)", included: true },
      { text: "WhatsApp & Call Support", included: true },
      { text: "Flexible Contracts & Satisfaction Guaranteed", included: true },
    ],
    popular: true,
    color: "from-blue-500 to-indigo-600",
  },
  {
    name: "Yearly Plan",
    price: "₹6999.00",
    period: "/ year",
    description:
      "Comprehensive solutions for businesses. Innovative features and dedicated support for optimal results.",
    features: [
      { text: "WhatsApp Marketing Software", included: true },
      { text: "Graphics Design for Your Business (12 Posts)", included: true},
      { text: "WhatsApp & Call Support", included: true },
      { text: "1 Year Subscription", included: true },
      { text: "Flexible Contracts & Satisfaction Guaranteed", included: true },
    ],
    popular: false,
    color: "from-blue-600 to-indigo-700",
  },
];

export default function Pricing() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.4, 1, 0.4]);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  useEffect(() => {
    const canvas = document.createElement("canvas");
    canvas.className = "absolute inset-0 z-0 w-full h-full";
    const section = document.querySelector(".pricing-section");
    if (section) {
      section.prepend(canvas);
    }
    const ctx = canvas.getContext("2d");

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = section?.clientHeight || window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const particles: Particle[] = [];
    const particleCount = 80;
    const colors = [
      "rgba(52, 152, 219, 0.6)",
      "rgba(59, 130, 246, 0.6)",
      "rgba(29, 78, 216, 0.6)",
      "rgba(96, 165, 250, 0.6)",
    ];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        radius: Math.random() * 3 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    function animate() {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw gradient background
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, "rgba(239, 246, 255, 0.8)");
      gradient.addColorStop(1, "rgba(219, 234, 254, 0.8)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        // Glow effect
        const glow = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius * 3);
        glow.addColorStop(0, p.color);
        glow.addColorStop(1, "rgba(255, 255, 255, 0)");

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius * 3, 0, Math.PI * 2);
        ctx.fillStyle = glow;
        ctx.fill();

        // Particle core
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();

        // Connections
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(52, 152, 219, ${1 - dist / 120})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      });
      requestAnimationFrame(animate);
    }
    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      canvas.remove();
    };
  }, []);

  return (
    <section
      ref={ref}
      className="relative py-28 px-6 bg-gradient-to-br from-blue-50 via-white to-blue-100 text-center overflow-hidden pricing-section"
    >
      {/* Parallax background */}
      <motion.div
        style={{ y: backgroundY, opacity }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(52,152,219,0.2)_0%,_transparent_70%)] -z-10"
      />

      {/* Floating bubbles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: Math.random() * 100 }}
          animate={{
            opacity: [0, 0.3, 0],
            y: Math.random() * 500,
            x: Math.random() * 100 - 50,
          }}
          transition={{
            duration: 20 + Math.random() * 20,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 5,
          }}
          className={`absolute rounded-full blur-xl -z-1 ${
            i % 3 === 0 ? "bg-blue-300" : i % 2 === 0 ? "bg-indigo-300" : "bg-blue-400"
          }`}
          style={{
            width: `${50 + Math.random() * 100}px`,
            height: `${50 + Math.random() * 100}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="mb-20 max-w-4xl mx-auto relative"
      >
        <div className="absolute -top-10 -left-10 w-32 h-32 bg-blue-300 rounded-full blur-3xl opacity-20 -z-10"></div>
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-400 rounded-full blur-3xl opacity-20 -z-10"></div>

        <motion.h2
          className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-indigo-900 mb-6"
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%"],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
          }}
          style={{
            backgroundSize: "200% 200%",
          }}
        >
          Competitive Pricing
        </motion.h2>
        <p className="text-lg md:text-xl text-gray-800 max-w-2xl mx-auto">
          Transparent pricing to help you choose the perfect plan that fits your budget and business needs.
        </p>
      </motion.div>

      {/* Pricing Cards */}
      <div className="grid gap-8 md:grid-cols-3 max-w-7xl mx-auto relative z-10">
        {pricingPlans.map((plan, index) => (
          <motion.div
            key={index}
            className={`relative bg-white/40 backdrop-blur-lg p-8 rounded-3xl shadow-xl border border-white/50 overflow-hidden transition-all duration-300 ${
              hoveredCard !== null && hoveredCard !== index ? "opacity-80 scale-95" : "opacity-100 scale-100"
            }`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{
              scale: 1.03,
              boxShadow: "0 25px 50px -12px rgba(52, 152, 219, 0.25)",
              borderColor: "rgba(52, 152, 219, 0.5)",
            }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onMouseEnter={() => setHoveredCard(index)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            {/* Popular badge */}
            {plan.popular && (
              <motion.div
                className="absolute top-0 right-6 bg-gradient-to-r from-yellow-400 to-amber-500 text-white text-xs font-bold px-4 py-1 rounded-b-lg shadow-md"
                initial={{ y: -20 }}
                animate={{ y: 0 }}
                transition={{ delay: 0.3 }}
              >
                MOST POPULAR
              </motion.div>
            )}

            {/* Card background gradient */}
            <div className={`absolute inset-0 bg-gradient-to-br ${plan.color} opacity-10 -z-10`} />

            {/* Sparkle effect */}
            {plan.popular && (
              <div className="absolute inset-0 overflow-hidden rounded-3xl">
                {[...Array(10)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute bg-white rounded-full"
                    initial={{
                      opacity: 0,
                      x: Math.random() * 100,
                      y: Math.random() * 100,
                      scale: 0,
                    }}
                    animate={{
                      opacity: [0, 0.8, 0],
                      scale: [0, 1, 0],
                      x: Math.random() * 100,
                      y: Math.random() * 100,
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatDelay: Math.random() * 5,
                      delay: Math.random() * 2,
                    }}
                    style={{
                      width: `${2 + Math.random() * 3}px`,
                      height: `${2 + Math.random() * 3}px`,
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                    }}
                  />
                ))}
              </div>
            )}

            <div className="relative z-10 h-full flex flex-col">
              <h3 className="text-2xl font-bold text-blue-900 mb-3">{plan.name}</h3>
              <div className="mb-6">
                <div className="text-5xl font-extrabold text-blue-700 mb-1">{plan.price}</div>
                <div className="text-lg font-medium text-gray-600">{plan.period}</div>
              </div>

              <p className="text-gray-700 mb-8 flex-grow-0">{plan.description}</p>

              <ul className="space-y-3 mb-8 flex-grow">
                {plan.features.map((feature, i) => (
                  <motion.li
                    key={i}
                    className="flex items-start gap-3 text-gray-800 text-left"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * i }}
                  >
                    <span
                      className={`text-xl ${
                        feature.included ? "text-green-500" : "text-red-500"
                      }`}
                    >
                      {feature.included ? "✔" : "✖"}
                    </span>
                    <span>{feature.text}</span>
                  </motion.li>
                ))}
              </ul>

              <motion.div
                whileHover={{
                  scale: 1.05,
                  background: `linear-gradient(to right, ${plan.color.replace("from-", "").replace("to-", "").replace(" ", ", ")})`,
                }}
                whileTap={{ scale: 0.95 }}
                className={`mt-auto bg-gradient-to-r ${plan.color} text-white px-6 py-3 rounded-full font-semibold shadow-md hover:shadow-lg transition-all duration-300 inline-block`}
              >
                <Link href="/">
                  <span className="block">Choose Plan</span>
                </Link>
              </motion.div>
            </div>

            {/* Animated Border Effect */}
            <motion.div
              className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-500"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            />
          </motion.div>
        ))}
      </div>

      {/* Floating decorative elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.2, scale: 1 }}
        transition={{ duration: 2, delay: 1.2 }}
        className="absolute top-10 left-10 w-36 h-36 bg-blue-400 rounded-full blur-3xl -z-10"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.2, scale: 1 }}
        transition={{ duration: 2, delay: 1.4 }}
        className="absolute bottom-10 right-10 w-48 h-48 bg-blue-500 rounded-full blur-3xl -z-10"
      />

      {/* Floating CTA */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-20 max-w-2xl mx-auto bg-white/50 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-white/70"
      >
        <h3 className="text-2xl font-bold text-blue-800 mb-3">Need a custom solution?</h3>
        <p className="text-gray-700 mb-4">We can tailor a plan specifically for your business needs.</p>
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-3 rounded-full font-semibold shadow-md hover:shadow-lg transition-all"
        >
          Contact Our Sales Team
        </motion.button>
      </motion.div>
    </section>
  );
}