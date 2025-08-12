"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Calendar, Clock, User, Tag } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function Blog() {
  const [selectedTag, setSelectedTag] = useState<string | null>(null)

  const blogPosts = [
    {
      id: 1,
      title: "Getting Started with AI and Machine Learning",
      excerpt: "A beginner's guide to understanding artificial intelligence and machine learning concepts, with practical examples and resources for getting started in the field.",
      author: "Sobia Naveed",
      date: "August 9, 2025",
      readTime: "5 min read",
      tags: ["Learning", "AI", "Machine Learning", "Tutorial"],
      slug: "getting-started-with-ai-ml"
    },
    {
      id: 2,
      title: "Building My Portfolio with Next.js - Part 1: Setup",
      excerpt: "Follow along as I build my portfolio website from scratch using Next.js, TypeScript, and Tailwind CSS. This is the first part covering initial setup and project structure.",
      author: "Sobia Naveed", 
      date: "August 7, 2025",
      readTime: "8 min read",
      tags: ["Project Journey", "Next.js", "React", "Web Development"],
      slug: "building-portfolio-nextjs-part1"
    },
    {
      id: 3,
      title: "What I Learned from My First AI Project",
      excerpt: "Reflections on building an AI customer support chatbot and the key lessons learned about prompt engineering, API integration, and user experience design.",
      author: "Sobia Naveed",
      date: "August 5, 2025", 
      readTime: "6 min read",
      tags: ["Project Journey", "AI", "Tech Insights", "OpenAI"],
      slug: "first-ai-project-lessons"
    },
    {
      id: 4,
      title: "Understanding React Hooks: A Deep Dive",
      excerpt: "Exploring React hooks beyond the basics, including custom hooks, performance optimization, and common pitfalls to avoid.",
      author: "Sobia Naveed",
      date: "August 3, 2025",
      readTime: "10 min read", 
      tags: ["Learning", "React", "JavaScript", "Tutorial"],
      slug: "react-hooks-deep-dive"
    },
    {
      id: 5,
      title: "The Future of Cloud Computing",
      excerpt: "Exploring emerging trends in cloud computing and how they're shaping the future of software development and deployment.",
      author: "Sobia Naveed",
      date: "August 1, 2025",
      readTime: "6 min read",
      tags: ["Tech Insights", "Cloud", "Industry Trends"],
      slug: "future-of-cloud-computing"
    }
  ]

  // Get all unique tags
  const allTags = Array.from(new Set(blogPosts.flatMap(post => post.tags)))

  // Filter posts based on selected tag
  const filteredPosts = selectedTag 
    ? blogPosts.filter(post => post.tags.includes(selectedTag))
    : blogPosts

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-800 to-green-950 text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-green-900/90 backdrop-blur-sm border-b border-green-700">
        <div className="flex items-center justify-between p-6 lg:px-12">
          <div className="text-2xl font-bold">Sobia Naveed</div>
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="hover:text-green-300 transition-colors cursor-pointer">
              Home
            </Link>
            <Link href="/blog" className="text-green-300 font-semibold">
              Blog
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-24 px-6 lg:px-12 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <div className="mb-8">
            <Link href="/">
              <Button variant="ghost" className="text-green-200 hover:text-white">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Portfolio
              </Button>
            </Link>
          </div>

          {/* Blog Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Blog</h1>
            <p className="text-xl text-green-200 max-w-2xl mx-auto">
              Thoughts on technology, development, and the future of computing
            </p>
          </div>

          {/* Tag Filter */}
          <div className="mb-12">
            <div className="flex flex-wrap gap-3 justify-center">
              <Button
                variant={selectedTag === null ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedTag(null)}
                className={selectedTag === null 
                  ? "bg-green-600 hover:bg-green-700" 
                  : "border-green-400 text-green-400 hover:bg-green-400 hover:text-green-900"
                }
              >
                All Posts
              </Button>
              {allTags.map((tag) => (
                <Button
                  key={tag}
                  variant={selectedTag === tag ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedTag(tag)}
                  className={selectedTag === tag 
                    ? "bg-green-600 hover:bg-green-700" 
                    : "border-green-400 text-green-400 hover:bg-green-400 hover:text-green-900"
                  }
                >
                  {tag}
                </Button>
              ))}
            </div>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid gap-8">
            {filteredPosts.map((post) => (
              <Card key={post.id} className="bg-green-800/60 border-green-600 text-white hover:bg-green-800/80 transition-colors">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <span key={tag} className="px-3 py-1 bg-green-700 rounded-full text-sm font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-green-200">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {post.date}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                  </div>
                  <CardTitle className="text-2xl mb-3 hover:text-green-300 transition-colors cursor-pointer">
                    {post.title}
                  </CardTitle>
                  <div className="flex items-center text-sm text-green-200">
                    <User className="w-4 h-4 mr-2" />
                    {post.author}
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-green-100 text-base mb-4">
                    {post.excerpt}
                  </CardDescription>
                  <Button 
                    variant="outline" 
                    className="border-green-400 text-green-400 hover:bg-green-400 hover:text-green-900"
                  >
                    Read More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Newsletter Signup */}
          <div className="mt-16">
            <Card className="bg-green-800/60 border-green-600 text-white">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Stay Updated</CardTitle>
                <CardDescription className="text-green-200">
                  Get notified when I publish new posts about technology and development
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-2 bg-green-700/50 border border-green-600 rounded-lg focus:outline-none focus:border-green-400 text-white placeholder-green-300"
                  />
                  <Button className="bg-green-600 hover:bg-green-700 text-white">
                    Subscribe
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      {/* Mobile Navigation */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-green-900 border-t border-green-700 p-4">
        <div className="flex justify-around">
          <Link href="/" className="flex flex-col items-center text-xs">
            <ArrowLeft className="w-5 h-5 mb-1" />
            Home
          </Link>
          <div className="flex flex-col items-center text-xs text-green-300 font-semibold">
            <User className="w-5 h-5 mb-1" />
            Blog
          </div>
        </div>
      </div>
    </div>
  )
}
