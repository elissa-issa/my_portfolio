"use client";

import { motion } from "framer-motion";

interface LanguageProgressBarProps {
  name: string;
  level: string;
  percentage: number;
  delay?: number;
}

export function LanguageProgressBar({
  name,
  level,
  percentage,
  delay = 0,
}: LanguageProgressBarProps) {
  return (
    <div className="w-full">
      <div className="mb-2 flex items-baseline justify-between">
        <span className="font-medium text-foreground">{name}</span>
        <span className="text-sm text-muted-foreground">{level}</span>
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
        <motion.div
          className="h-full rounded-full bg-primary"
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1, ease: "easeOut", delay }}
        />
      </div>
    </div>
  );
}
