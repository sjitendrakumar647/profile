"use client"

import { motion } from "framer-motion"
import { useAnimateInView } from "@/hooks/use-animation"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

export function Projects() {
  const { ref, controls, variants } = useAnimateInView()

  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce platform built with the MERN stack. Features include user authentication, product catalog, shopping cart, and payment integration.",
      image: "/placeholder.svg?height=400&width=600&text=E-Commerce",
      tags: ["React", "Node.js", "MongoDB", "Express"],
      github: "#",
      demo: "#",
    },
    {
      title: "Task Management System",
      description:
        "A Java-based task management application with a responsive UI. Allows users to create, assign, and track tasks with deadline notifications.",
      image: "/placeholder.svg?height=400&width=600&text=Task+Manager",
      tags: ["Java", "Spring Boot", "MySQL", "Thymeleaf"],
      github: "#",
      demo: "#",
    },
    {
      title: "Weather Forecast App",
      description:
        "A Python-based weather application that fetches real-time weather data from an API and displays forecasts with interactive visualizations.",
      image: "/placeholder.svg?height=400&width=600&text=Weather+App",
      tags: ["Python", "Flask", "API Integration", "Chart.js"],
      github: "#",
      demo: "#",
    },
    {
      title: "Blog Platform",
      description:
        "A PHP-based blogging platform with user authentication, content management, and commenting system. Features responsive design and SEO optimization.",
      image: "/placeholder.svg?height=400&width=600&text=Blog+Platform",
      tags: ["PHP", "MySQL", "JavaScript", "Bootstrap"],
      github: "#",
      demo: "#",
    },
    {
      title: "Chat Application",
      description:
        "Real-time chat application built with Socket.io and React. Features include private messaging, group chats, and message notifications.",
      image: "/placeholder.svg?height=400&width=600&text=Chat+App",
      tags: ["React", "Node.js", "Socket.io", "MongoDB"],
      github: "#",
      demo: "#",
    },
    {
      title: "Portfolio Website",
      description:
        "A responsive portfolio website built with Three.js and Tailwind CSS. Features animated transitions and interactive elements.",
      image: "/placeholder.svg?height=400&width=600&text=Portfolio",
      tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
      github: "#",
      demo: "#",
    },
  ]

  return (
    <section id="projects" className="py-20 bg-background/50">
      <div className="container mx-auto px-4">
        <motion.div ref={ref} initial="hidden" animate={controls} variants={variants} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-8"></div>
          <p className="text-foreground/70 max-w-3xl mx-auto text-lg">
            Check out some of my recent projects that showcase my skills and expertise.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="h-full"
            >
              <Card className="overflow-hidden border border-foreground/10 bg-foreground/5 h-full flex flex-col">
                <div className="overflow-hidden">
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <CardContent className="p-6 flex-grow">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-foreground/70 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-1 rounded-full bg-purple-500/10 text-purple-500 border border-purple-500/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="p-6 pt-0 flex justify-between">
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" className="bg-gradient-to-r from-purple-500 to-pink-500" asChild>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button size="lg" variant="outline" className="border-purple-500 text-purple-500 hover:bg-purple-500/10">
            View All Projects
            <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

