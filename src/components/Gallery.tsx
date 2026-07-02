import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";

const imgs = [g1, g2, g3, g4, g5, g6];

export function Gallery() {
  const [active, setActive] = useState<string | null>(null);
  return (
    <section id="galeria" className="relative px-4 py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <div className="text-xs tracking-[0.4em] text-primary uppercase">Galeria</div>
          <h2 className="text-gradient mt-3 text-5xl font-bold md:text-6xl">Nasi pupile</h2>
        </div>

        <div className="columns-2 gap-4 md:columns-3 [&>*]:mb-4">
          {imgs.map((src, i) => (
            <motion.button
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.1 }}
              onClick={() => setActive(src)}
              data-hover
              className="group relative block w-full overflow-hidden rounded-2xl glass-strong"
            >
              <img
                src={src}
                alt={`Pupil ${i + 1}`}
                loading="lazy"
                className="w-full transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="absolute bottom-3 left-3 text-sm font-semibold opacity-0 transition-opacity group-hover:opacity-100">
                Zobacz ↗
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-background/90 p-4 backdrop-blur-xl"
          >
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={active}
              alt=""
              className="max-h-[90vh] max-w-[90vw] rounded-2xl object-contain glow-teal"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
