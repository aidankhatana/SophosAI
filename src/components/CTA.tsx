'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function CTA() {
  return (
    <section className="py-20 bg-sunset-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Ready to start your learning journey?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Create your personalized learning roadmap today and transform your educational experience with AI-powered guidance tailored specifically to you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/assessment" 
                className="btn-primary bg-sunset-600 hover:bg-sunset-700 dark:bg-sunset-700 dark:hover:bg-sunset-600 text-center"
              >
                Start Free Assessment
              </Link>
              <Link 
                href="/roadmaps" 
                className="btn-secondary text-center"
              >
                Explore Roadmaps
              </Link>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 relative"
          >
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="/images/guitarist-mountains.jpg" 
                alt="Person with guitar in the mountains" 
                className="w-full h-auto"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 