"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

// Predefined animation variants
export const variants: Record<string, any> = {
    fadeInUp: {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    },
    fadeInLeft: {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
    },
    fadeInRight: {
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
    },
    // Stagger containers
    staggerContainer: {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.1,
            },
        },
    },
    staggerItem: {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
    },
};

interface AnimatedSectionProps {
    children: ReactNode;
    className?: string;
    variant?: keyof typeof variants;
    delay?: number;
    viewportAmount?: number;
}

export default function AnimatedSection({
    children,
    className = "",
    variant = "fadeInUp",
    delay = 0,
    viewportAmount = 0.2, // Trigger when 20% is in view
}: AnimatedSectionProps) {
    // If a delay is provided, we merge it into the specific variant
    const customVariant = delay
        ? {
              ...variants[variant],
              visible: {
                  ...variants[variant].visible,
                  transition: { ...variants[variant].visible.transition, delay },
              },
          }
        : variants[variant];

    return (
        <motion.div
            className={className}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: viewportAmount }}
            variants={customVariant}
        >
            {children}
        </motion.div>
    );
}

// Staggered Container specifically for grids/lists
export function AnimatedStaggerContainer({
    children,
    className = "",
    viewportAmount = 0.1,
}: {
    children: ReactNode;
    className?: string;
    viewportAmount?: number;
}) {
    return (
        <motion.div
            className={className}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: viewportAmount }}
            variants={variants.staggerContainer}
        >
            {children}
        </motion.div>
    );
}

// Staggered item for lists
export function AnimatedStaggerItem({
    children,
    className = "",
}: {
    children: ReactNode;
    className?: string;
}) {
    return (
        <motion.div className={className} variants={variants.staggerItem}>
            {children}
        </motion.div>
    );
}
