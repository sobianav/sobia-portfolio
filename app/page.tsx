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
              onClick={() => document.getElementById("leadership")?.scrollIntoView({ behavior: "smooth" })}
              className="hover:text-green-300 transition-colors cursor-pointer"
            >
              Leadership
            </button>
            <button
              onClick={() => document.getElementById("resources")?.scrollIntoView({ behavior: "smooth" })}
              className="hover:text-green-300 transition-colors cursor-pointer"
            >
              Resources
            </button>
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="hover:text-green-300 transition-colors cursor-pointer"
            >
              Contact
            </button>
            <div className="flex items-center space-x-3">
              <Link href="mailto:sobianaveed05@gmail.com" className="hover:text-green-300 transition-colors">
                <Mail className="w-5 h-5" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/sobianaveed/"
                target="_blank"
                className="hover:text-green-300 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link
                href="https://github.com/sobianav"
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
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-0 items-center mb-16">
            {/* Profile Image */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative">
                <Image
                  src="https://media.licdn.com/dms/image/v2/D4E03AQHf22YnjAFNQA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1725555823623?e=1757548800&v=beta&t=RZA4xCALQRljbNSGEZ3GtBL3agyG3RtpZ3yiWQKXez8"
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
                Computer Science Junior at Rutgers University
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
                    Modest Fashion Finder
                    <ExternalLink className="w-5 h-5" />
                  </CardTitle>
                  <CardDescription className="text-green-200">
                    Personal Project
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-green-100 mb-4">
                  Built a responsive web app for discovering modest clothing, featuring personalized user profiles, filterable product categories
                  (sleeve length, fit, opacity), and an intuitive UI using HTML, CSS, and JavaScript.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-green-700 rounded text-xs">React</span>
                    <span className="px-2 py-1 bg-green-700 rounded text-xs">HTML</span>
                    <span className="px-2 py-1 bg-green-700 rounded text-xs">CSS</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-green-800/60 border-green-600 text-white">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    Noor.net
                    <ExternalLink className="w-5 h-5" />
                  </CardTitle>
                  <CardDescription className="text-green-200">
                  Collaborative Project
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-green-100 mb-4">
                  Co-developing a centralized mobile app that streamlines access to prayer times, event listings, and donation tools for
mosques in New Jersey. The platform fosters community engagement through features like mosque subscriptions, synced
calendars, and ethical fundraising campaigns.                  </p>
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
                    AI Customer Support
                    <ExternalLink className="w-5 h-5" />
                  </CardTitle>
                  <CardDescription className="text-green-200">
                  Headstarter AI
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-green-100 mb-4">
                  Created a chatbot that leverages the power of OpenAi’s GPT models to engage in natural language conversations by
                  providing intelligent and responsive support to users.                  </p>
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
                    <p className="text-green-200">Rutgers University • 2023 - 2027 (Expected) • GPA: 3.5</p>
                    <p className="text-green-100 mt-2">
                      Relevant Coursework: Intro to Computer Science, Data Structures, Linear Algebra, Discrete Structures, Computer Architecture, Linear
                      Optimization, Technical Writing
                    </p>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-6 mt-10 flex items-center">
                  <Award className="w-6 h-6 mr-2" />
                  Certifications
                </h3>
                <div className="space-y-6">
                  <div className="border-l-4 border-green-400 pl-6">
                    <h4 className="text-xl font-semibold">Certified Cloud Practitioner</h4>
                    <p className="text-green-200">AWS • 2025</p>
                  </div>
                  <div className="border-l-4 border-green-400 pl-6">
                    <h4 className="text-xl font-semibold">Intermediate Technical Interview Prep</h4>
                    <p className="text-green-200">CodePath • 2025</p>
                  </div>
                  <div className="border-l-4 border-green-400 pl-6">
                    <h4 className="text-xl font-semibold">Vibe
                    Coding 101</h4>
                    <p className="text-green-200">DeepLearning.AI • 2025</p>
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
                    <h4 className="text-xl font-semibold">Outamation AI-Powered Workflow Automation Externship</h4>
                    <p className="text-green-200">Extern • August 2025 - Present</p>
                    <p className="text-green-100 mt-2">
                    AI model testing, data extraction from documents, building AI-powered search pipelines, and improving automation
solutions. Contributed to advanced RAG pipelines by testing and refining open-source LLM frameworks to improve response accuracy,
retrieval quality, and system latency.                    </p>
                  </div>
                  <div className="border-l-4 border-green-400 pl-6">
                    <h4 className="text-xl font-semibold">CodePath Technical Interview Prep Fellow</h4>
                    <p className="text-green-200">CodePath • Jan. 2025 - May 2025</p>
                    <p className="text-green-100 mt-2">
                    Selected for a competitive technical fellowship focused on advanced data structures, algorithms, and interview prep through
                    weekly LeetCode sessions, mock interviews, and peer mentorship.                    </p>
                  </div>
                  <div className="border-l-4 border-green-400 pl-6">
                    <h4 className="text-xl font-semibold">Extern for ‘Puratos’ via MBS Externship Exchange</h4>
                    <p className="text-green-200">Puratos • Sep. 2024 - Dec. 2024</p>
                    <p className="text-green-100 mt-2">
                    Performed market and sustainability research for a global food company. Completed life cycle assessments to identify more
sustainable supply chain practices and packaging methods.                   </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center mt-8">
              <Button asChild className="bg-green-700 hover:bg-green-800 text-white">
                <a href="/2025%20July%20Resume%202%20%20%281%29.pdf" download="2025 July Resume 2 (1).pdf">
                  <Download className="w-4 h-4 mr-2" />
                  Download Full Resume
                </a>
              </Button>
            </div>
          </section>

          {/* Leadership Section */}
          <section id="leadership" className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Leadership</h2>
              <p className="text-green-200 text-lg">Organizations and community involvement</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-green-800/60 border-green-600 text-white">
                <CardHeader>
                  <CardTitle className="flex items-center">MTC (Tech Collaborative)</CardTitle>
                  <CardDescription className="text-green-200">Community Team</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-green-100">
                  Co-organized speaker panels and technical workshops, increasing engagement by 30% and built outreach pipelines to connect
                  students with industry mentors in backend/data fields.                  </p>
                </CardContent>
              </Card>

              <Card className="bg-green-800/60 border-green-600 text-white">
                <CardHeader>
                  <CardTitle className="flex items-center">Thaakat Foundation</CardTitle>
                  <CardDescription className="text-green-200">Marketing Lead</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-green-100">
                  Led campus-wide marketing efforts and designed digital content to promote events raising $10K+ and managed social media
                  growth and collaborated cross-functionally with logistics and finance teams.                  </p>
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
                    <span>sobianaveed05@gmail.com</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 mr-3 text-green-400" />
                    <span>(848) 223-2726</span>
                  </div>
                  <div className="flex items-center">
                    <Linkedin className="w-5 h-5 mr-3 text-green-400" />
                    <a
                      href="https://www.linkedin.com/in/sobianaveed/"
                      target="_blank"
                      rel="noreferrer"
                      className="no-underline text-current"
                    >
                      linkedin.com/in/sobianaveed
                    </a>
                  </div>
                  <div className="flex items-center">
                    <Github className="w-5 h-5 mr-3 text-green-400" />
                    <a
                      href="https://github.com/sobianav"
                      target="_blank"
                      rel="noreferrer"
                      className="no-underline text-current"
                    >
                      github.com/sobianav
                    </a>
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
            onClick={() => document.getElementById("leadership")?.scrollIntoView({ behavior: "smooth" })}
            className="flex flex-col items-center text-xs"
          >
            <User className="w-5 h-5 mb-1" />
            Leadership
          </button>
          <button
            onClick={() => document.getElementById("resources")?.scrollIntoView({ behavior: "smooth" })}
            className="flex flex-col items-center text-xs"
          >
            <BookOpen className="w-5 h-5 mb-1" />
            Resources
          </button>
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="flex flex-col items-center text-xs"
          >
            <Phone className="w-5 h-5 mb-1" />
            Contact
          </button>
        </div>
      </div>
    </div>
  )
}
