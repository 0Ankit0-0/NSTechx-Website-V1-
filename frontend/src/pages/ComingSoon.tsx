import { motion } from "framer-motion";
import { Rocket, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

interface ComingSoonProps {
  title: string;
}

export default function ComingSoon({ title }: ComingSoonProps) {
  return (
    <section className="min-h-[80vh] flex items-center justify-center bg-gradient-blue-light">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-24 h-24 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl"
          >
            <Rocket className="w-12 h-12 text-white" />
          </motion.div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            {title}
          </h1>
          
          <p className="text-xl text-muted-foreground mb-4">
            Coming Soon
          </p>
          
          <p className="text-muted-foreground leading-relaxed mb-10 max-w-lg mx-auto">
            We're working hard to bring you this feature. Stay tuned for updates on our latest innovations in RegTech solutions.
          </p>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 bg-orange-500 text-white px-6 py-3 rounded-lg font-medium hover:shadow-xl transition-all duration-300"
            >
              <ArrowLeft size={18} />
              Back to Home
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}