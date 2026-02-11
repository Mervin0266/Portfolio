"use client";

import { motion } from "motion/react";
import Link from "next/link";

const DURATION = 0.25;
const STAGGER = 0.025;

interface Props {
  children: string;
  href: string;
}

const FlipLink = ({ children, href }: Props) => {
  return (
    <Link
      href={href}
      className="relative block overflow-hidden whitespace-nowrap font-light text-sm"
    >
      <motion.div
        initial="initial"
        whileHover="hovered"
        className="relative block"
      >
        <div>
          {children.split("").map((l, i) => (
            <motion.span
              variants={{
                initial: {
                  y: 0,
                },
                hovered: {
                  y: "-100%",
                },
              }}
              transition={{
                duration: DURATION,
                ease: "easeInOut",
                delay: STAGGER * i,
              }}
              className="inline-block"
              key={i}
            >
              {l}
            </motion.span>
          ))}
        </div>
        <div className="absolute inset-0">
          {children.split("").map((l, i) => (
            <motion.span
              variants={{
                initial: {
                  y: "100%",
                },
                hovered: {
                  y: 0,
                },
              }}
              transition={{
                duration: DURATION,
                ease: "easeInOut",
                delay: STAGGER * i,
              }}
              className="inline-block"
              key={i}
            >
              {l}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </Link>
  );
};

export default FlipLink;
