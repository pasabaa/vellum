import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import { motion } from 'framer-motion';
import { animationModal } from "@/data/animation";

export const NextStep = ({name, url}) => {
  return (
    <motion.div {...animationModal} className="flex items-center gap-4">
      <hr className="w-full mt-4" />
      <Link
        className="px-3 py-1.5 bg-white text-black font-medium mt-4 uppercase flex items-center max-w-max"
        href={url}
      >
        {name} <ChevronRight />
      </Link>
    </motion.div>
  );
};
