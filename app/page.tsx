"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Mail,
  Linkedin,
  Github,
  FileText,
  Phone,
  User,
  Briefcase,
  ExternalLink,
  Download,
  Play,
  BookOpen,
  Award,
} from "lucide-react"
import Link from "next/link"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-800 to-green-950 text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-green-900/90 backdrop-blur-sm border-b border-green-700">
        <div className="flex items-center justify-between p-6 lg:px-12">
          <div className="text-2xl font-bold">Sobia Naveed</div>
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="hover:text-green-300 transition-colors cursor-pointer"
            >
              Contact
            </button>
            <button
              onClick={() => document.getElementById("media")?.scrollIntoView({ behavior: "smooth" })}
              className="hover:text-green-300 transition-colors cursor-pointer"
            >
              Media
            </button>
            <button
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              className="hover:text-green-300 transition-colors cursor-pointer"
            >
              Projects
            </button>
            <button
              onClick={() => document.getElementById("resume")?.scrollIntoView({ behavior: "smooth" })}
              className="hover:text-green-300 transition-colors cursor-pointer"
            >
              Resume
            </button>
            <button
              onClick={() => document.getElementById("resources")?.scrollIntoView({ behavior: "smooth" })}
              className="hover:text-green-300 transition-colors cursor-pointer"
            >
              Resources
            </button>
            <div className="flex items-center space-x-3">
              <Link href="mailto:sobia.naveed@placeholder.edu" className="hover:text-green-300 transition-colors">
                <Mail className="w-5 h-5" />
              </Link>
              <Link
                href="https://linkedin.com/in/placeholder"
                target="_blank"
                className="hover:text-green-300 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link
                href="https://github.com/placeholder"
                target="_blank"
                className="hover:text-green-300 transition-colors"
              >
                <Github className="w-5 h-5" />
              </Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <main className="pt-24 px-6 lg:px-12 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Profile Image */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative">
                <Image
                  src="/professional-headshot.png"
                  alt="Sobia Naveed"
                  width={400}
                  height={400}
                  className="rounded-full object-cover border-4 border-green-400"
                />
              </div>
            </div>

            {/* Hero Text */}
            <div className="text-center lg:text-left">
              <h1 className="text-3xl lg:text-5xl font-bold leading-tight mb-6">
                Computer Science Junior at Rutgerrrrrss University
              </h1>
              <p className="text-lg lg:text-xl text-green-200 leading-relaxed">
                Passionate about technology, innovation, and making a positive impact through code.
              </p>
            </div>
          </div>

          {/* Intro Section */}
          <div className="grid lg:grid-cols-3 gap-12 mb-20">
            <div className="lg:col-span-1">
              <div className="w-16 h-1 bg-green-400 mb-6"></div>
              <h2 className="text-2xl font-bold mb-4">Intro</h2>
            </div>
            <div className="lg:col-span-2">
              <p className="text-lg leading-relaxed text-green-100">
                I was born and raised in New Jersey where I developed a passion for technology and problem-solving from
                an early age. These interests in computer science, mathematics, and innovation have shaped my academic
                journey and career aspirations. Currently pursuing my Bachelor's degree in Computer Science at Rutgers
                University, I'm focused on building skills in software development, data structures, and algorithms
                while exploring opportunities in tech, research, and entrepreneurship.
              </p>
            </div>
          </div>

          {/* Projects Section */}
          <section id="projects" className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Projects</h2>
              <p className="text-green-200 text-lg">Some of my recent work and personal projects</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="bg-green-800/60 border-green-600 text-white">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    E-Commerce Platform
                    <ExternalLink className="w-5 h-5" />
                  </CardTitle>
                  <CardDescription className="text-green-200">
                    Full-stack web application built with React and Node.js
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-green-100 mb-4">
                    A complete e-commerce solution with user authentication, payment processing, and inventory
                    management.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-green-700 rounded text-xs">React</span>
                    <span className="px-2 py-1 bg-green-700 rounded text-xs">Node.js</span>
                    <span className="px-2 py-1 bg-green-700 rounded text-xs">MongoDB</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-green-800/60 border-green-600 text-white">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    Data Visualization Tool
                    <ExternalLink className="w-5 h-5" />
                  </CardTitle>
                  <CardDescription className="text-green-200">
                    Interactive dashboard for analyzing student performance data
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-green-100 mb-4">
                    Built with Python and D3.js to help educators visualize and understand student learning patterns.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-green-700 rounded text-xs">Python</span>
                    <span className="px-2 py-1 bg-green-700 rounded text-xs">D3.js</span>
                    <span className="px-2 py-1 bg-green-700 rounded text-xs">Flask</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-green-800/60 border-green-600 text-white">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    Mobile Weather App
                    <ExternalLink className="w-5 h-5" />
                  </CardTitle>
                  <CardDescription className="text-green-200">
                    Cross-platform mobile app with real-time weather updates
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-green-100 mb-4">
                    React Native application featuring location-based weather forecasts and severe weather alerts.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-green-700 rounded text-xs">React Native</span>
                    <span className="px-2 py-1 bg-green-700 rounded text-xs">API Integration</span>
                    <span className="px-2 py-1 bg-green-700 rounded text-xs">Firebase</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Resume Section */}
          <section id="resume" className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Resume</h2>
              <p className="text-green-200 text-lg">My academic and professional experience</p>
            </div>
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-6 flex items-center">
                  <Award className="w-6 h-6 mr-2" />
                  Education
                </h3>
                <div className="space-y-6">
                  <div className="border-l-4 border-green-400 pl-6">
                    <h4 className="text-xl font-semibold">Bachelor of Science in Computer Science</h4>
                    <p className="text-green-200">Rutgers University • 2022 - 2026 (Expected)</p>
                    <p className="text-green-100 mt-2">
                      Relevant Coursework: Data Structures, Algorithms, Software Engineering, Database Systems
                    </p>
                  </div>
                  <div className="border-l-4 border-green-400 pl-6">
                    <h4 className="text-xl font-semibold">High School Diploma</h4>
                    <p className="text-green-200">Placeholder High School • 2018 - 2022</p>
                    <p className="text-green-100 mt-2">
                      Valedictorian, National Honor Society, Computer Science Club President
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-6 flex items-center">
                  <Briefcase className="w-6 h-6 mr-2" />
                  Experience
                </h3>
                <div className="space-y-6">
                  <div className="border-l-4 border-green-400 pl-6">
                    <h4 className="text-xl font-semibold">Software Development Intern</h4>
                    <p className="text-green-200">Tech Company Inc. • Summer 2024</p>
                    <p className="text-green-100 mt-2">
                      Developed web applications using React and contributed to backend API development
                    </p>
                  </div>
                  <div className="border-l-4 border-green-400 pl-6">
                    <h4 className="text-xl font-semibold">Teaching Assistant</h4>
                    <p className="text-green-200">Rutgers University • Fall 2023 - Present</p>
                    <p className="text-green-100 mt-2">
                      Assist students with programming assignments and hold office hours for CS101
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center mt-8">
              <Button className="bg-green-700 hover:bg-green-800 text-white">
                <Download className="w-4 h-4 mr-2" />
                Download Full Resume
              </Button>
            </div>
          </section>

          {/* Media Section */}
          <section id="media" className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Media</h2>
              <p className="text-green-200 text-lg">Talks, interviews, and featured content</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="bg-green-800/60 border-green-600 text-white">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    Tech Talk: Future of AI
                    <Play className="w-5 h-5" />
                  </CardTitle>
                  <CardDescription className="text-green-200">Rutgers Tech Conference 2024</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-green-100">
                    Presented on the ethical implications of artificial intelligence in modern software development.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-green-800/60 border-green-600 text-white">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    Podcast Interview
                    <Play className="w-5 h-5" />
                  </CardTitle>
                  <CardDescription className="text-green-200">Student Spotlight Podcast</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-green-100">
                    Discussed my journey in computer science and advice for aspiring developers.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-green-800/60 border-green-600 text-white">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    Featured Article
                    <ExternalLink className="w-5 h-5" />
                  </CardTitle>
                  <CardDescription className="text-green-200">University Newsletter</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-green-100">
                    Featured as "Student of the Month" for academic excellence and community involvement.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Resources Section */}
          <section id="resources" className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Resources</h2>
              <p className="text-green-200 text-lg">Helpful tools and materials I recommend</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-green-800/60 border-green-600 text-white">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BookOpen className="w-5 h-5 mr-2" />
                    Learning Resources
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-green-100">
                    <li>• Introduction to Algorithms (CLRS)</li>
                    <li>• Clean Code by Robert Martin</li>
                    <li>• LeetCode for coding practice</li>
                    <li>• MIT OpenCourseWare</li>
                    <li>• FreeCodeCamp tutorials</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-green-800/60 border-green-600 text-white">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Briefcase className="w-5 h-5 mr-2" />
                    Tools & Technologies
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-green-100">
                    <li>• Visual Studio Code</li>
                    <li>• Git & GitHub</li>
                    <li>• Docker for containerization</li>
                    <li>• Postman for API testing</li>
                    <li>• Figma for UI/UX design</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Contact</h2>
              <p className="text-green-200 text-lg">Let's connect and collaborate</p>
            </div>
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 mr-3 text-green-400" />
                    <span>sobia.naveed@placeholder.edu</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 mr-3 text-green-400" />
                    <span>(555) 123-4567</span>
                  </div>
                  <div className="flex items-center">
                    <Linkedin className="w-5 h-5 mr-3 text-green-400" />
                    <span>linkedin.com/in/sobia-naveed</span>
                  </div>
                  <div className="flex items-center">
                    <Github className="w-5 h-5 mr-3 text-green-400" />
                    <span>github.com/sobia-naveed</span>
                  </div>
                </div>
              </div>
              <div>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 bg-green-700/50 border border-green-600 rounded-lg focus:outline-none focus:border-green-400"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-2 bg-green-700/50 border border-green-600 rounded-lg focus:outline-none focus:border-green-400"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-2 bg-green-700/50 border border-green-600 rounded-lg focus:outline-none focus:border-green-400"
                      placeholder="Your message..."
                    ></textarea>
                  </div>
                  <Button className="w-full bg-green-700 hover:bg-green-800 text-white">Send Message</Button>
                </form>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Mobile Navigation */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-green-900 border-t border-green-700 p-4">
        <div className="flex justify-around">
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="flex flex-col items-center text-xs"
          >
            <Phone className="w-5 h-5 mb-1" />
            Contact
          </button>
          <button
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            className="flex flex-col items-center text-xs"
          >
            <Briefcase className="w-5 h-5 mb-1" />
            Projects
          </button>
          <button
            onClick={() => document.getElementById("resume")?.scrollIntoView({ behavior: "smooth" })}
            className="flex flex-col items-center text-xs"
          >
            <FileText className="w-5 h-5 mb-1" />
            Resume
          </button>
          <button
            onClick={() => document.getElementById("media")?.scrollIntoView({ behavior: "smooth" })}
            className="flex flex-col items-center text-xs"
          >
            <User className="w-5 h-5 mb-1" />
            Media
          </button>
        </div>
      </div>
    </div>
  )
}
