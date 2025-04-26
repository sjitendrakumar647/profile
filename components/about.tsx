"use client"

import { motion } from "framer-motion"
import { User, GraduationCap, Briefcase } from "lucide-react"
import Image from "next/image"
import { useAnimateInView, staggerVariants, itemVariants } from "@/hooks/use-animation"
// import { Card, CardContent } from "@/components/ui/card"

export function About() {
  const { ref, controls, variants } = useAnimateInView()

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center">
            <User className="mr-2 text-indigo-400" size={28} />
            About Me
          </h2>
          <div className="h-1 w-20 bg-indigo-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative w-full h-[400px] rounded-lg overflow-hidden border border-indigo-500/20">
              <Image src="/placeholder.svg?height=400&width=400" alt="Profile" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
            </div>
            <div className="absolute -bottom-5 -right-5 w-32 h-32 bg-indigo-500/10 rounded-full border border-indigo-500/20 backdrop-blur-sm"></div>
            <div className="absolute -top-5 -left-5 w-24 h-24 bg-purple-500/10 rounded-full border border-purple-500/20 backdrop-blur-sm"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4 text-indigo-400">Software Engineer & Full-Stack Developer</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              I am a passionate Software Engineer with an MCA degree and expertise in full-stack development. With a
              strong foundation in computer science principles and a knack for problem-solving, I create efficient,
              scalable, and user-friendly applications.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <GraduationCap className="mt-1 mr-3 text-indigo-400" size={20} />
                <div>
                  <h4 className="font-semibold">Master of Computer Applications (MCA)</h4>
                  <p className="text-gray-400">Trident Academy of Technology | 2023 - 2025</p>
                </div>
              </div>
              <div className="flex items-start">
                <Briefcase className="mt-1 mr-3 text-indigo-400" size={20} />
                <div>
                  <h4 className="font-semibold">Start career as a fresher</h4>
                  <p className="text-gray-400">
                    Working with enterprise-level applications and modern web technologies
                  </p>
                </div>
              </div>
            </div>

            <button className="px-6 py-2 border border-indigo-500 text-indigo-400 rounded-full hover:bg-indigo-500/10 transition-colors duration-300">
              Download Resume
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

