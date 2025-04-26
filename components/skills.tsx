"use client"

import { motion } from "framer-motion"
import { Code, Database, Layers } from "lucide-react"
import { useAnimateInView } from "@/hooks/use-animation"

export function Skills() {
  const { ref, controls, variants } = useAnimateInView()

  const skills = [
    {
      category: "Programming Languages",
      icon: <Code className="text-indigo-400" size={24} />,
      items: [
        { name: "Java", level: 90 },
        { name: "Python", level: 85 },
        { name: "PHP", level: 80 },
        { name: "SAP ABAP", level: 75 },
        { name: "JavaScript", level: 90 },
      ],
    },
    {
      category: "Databases",
      icon: <Database className="text-indigo-400" size={24} />,
      items: [
        { name: "MySQL", level: 90 },
        { name: "Oracle", level: 85 },
        { name: "MongoDB", level: 75 },
      ],
    },
    {
      category: "Frameworks & Libraries",
      icon: <Layers className="text-indigo-400" size={24} />,
      items: [
        { name: "React", level: 90 },
        { name: "Node.js", level: 85 },
        { name: "Three.js", level: 80 },
        { name: "Express.js", level: 75 },
        { name: "Bootstrap", level: 70 },
      ],
    },
  ]

  return (
    <section id="skills" className="py-20 p-0 m-0 bg-background">
      <div className="container mx-auto px-4">
        <motion.div ref={ref} initial="hidden" animate={controls} variants={variants} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-8"></div>
          <p className="text-foreground/70 max-w-3xl mx-auto text-lg">
            Here are the technologies and tools I work with to bring ideas to life.
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center">
            <Code className="mr-2 text-indigo-400" size={28} />
            Skills & Expertise
          </h2>
          <div className="h-1 w-20 bg-indigo-500 mx-auto rounded-full"></div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          // variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skills.map((skillGroup, index) => (
            <motion.div
              key={index}
              // variants={itemVariants}
              className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-indigo-500/50 transition-colors duration-300"
            >
              <div className="flex items-center mb-6">
                {skillGroup.icon}
                <h3 className="text-xl font-semibold ml-2">{skillGroup.category}</h3>
              </div>

              <div className="space-y-5">
                {skillGroup.items.map((skill, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.3 }}
                        viewport={{ once: true }}
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        
      </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8"
        >
          {[
            "React",
            "Node.js",
            "MongoDB",
            "Express",
            "Java",
            "Python",
            "PHP",
            "MySQL",
            "Git",
            "Docker",
            "HTML5",
            "CSS3",
          ].map((tech, index) => (
            <motion.div
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="flex flex-col items-center justify-center p-4 bg-foreground/5 rounded-lg border border-foreground/10 hover:border-purple-500/50 transition-all"
            >
              <div className="w-12 h-12 mb-3 flex items-center justify-center">
                <img
                  src={`/placeholder.svg?height=48&width=48&text=${tech}`}
                  alt={tech}
                  className="max-w-full max-h-full"
                />
              </div>
              <span className="text-sm font-medium">{tech}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

