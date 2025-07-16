import React, { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { 
  Code, 
  Cloud, 
  Users, 
  Award, 
  Download, 
  Mail, 
  Linkedin, 
  Github,
  ChevronDown,
  MapPin,
  Calendar,
  TrendingUp,
  Briefcase,
  GraduationCap,
  Star
} from 'lucide-react'
import { Button } from './components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card'
import { Badge } from './components/ui/badge'
import { Progress } from './components/ui/progress'

const careerStages = [
  {
    id: 1,
    title: "Educator",
    period: "2016-2018",
    company: "Seven Kidscode",
    location: "Remote",
    description: "Taught programming fundamentals to children and teenagers, developing curriculum and fostering young minds in technology education.",
    skills: ["Teaching", "Curriculum Development", "Scratch", "Python", "JavaScript", "Communication", "Mentoring", "Educational Technology"],
    achievements: [
      "Developed interactive coding curriculum for 200+ students aged 8-16",
      "Achieved 95% student retention rate across all programs",
      "Created engaging project-based learning modules",
      "Mentored students who went on to win regional coding competitions"
    ],
    projects: [
      {
        name: "Interactive Coding Games",
        description: "Gamified learning platform to teach programming concepts",
        tech: ["Scratch", "JavaScript", "HTML5"]
      },
      {
        name: "Student Portfolio System",
        description: "Platform for students to showcase their coding projects",
        tech: ["Python", "Flask", "SQLite"]
      }
    ],
    icon: GraduationCap,
    color: "bg-emerald-500"
  },
  {
    id: 2,
    title: "Web Developer",
    period: "2018-2020",
    company: "TechStart Solutions",
    location: "San Francisco, CA",
    description: "Started my journey building responsive websites and web applications using modern frontend technologies.",
    skills: ["HTML5", "CSS3", "JavaScript", "React", "Vue.js", "SASS", "Bootstrap", "jQuery"],
    achievements: [
      "Built 15+ responsive websites with 99% client satisfaction",
      "Reduced page load times by 40% through optimization",
      "Mentored 3 junior developers"
    ],
    projects: [
      {
        name: "E-commerce Platform",
        description: "Full-featured online store with payment integration",
        tech: ["React", "Node.js", "MongoDB"]
      },
      {
        name: "Portfolio CMS",
        description: "Content management system for creative professionals",
        tech: ["Vue.js", "Express", "MySQL"]
      }
    ],
    icon: Code,
    color: "bg-blue-500"
  },
  {
    id: 3,
    title: "Software Engineer",
    period: "2020-2022",
    company: "InnovateTech Corp",
    location: "Seattle, WA",
    description: "Evolved into full-stack development, working on complex applications and microservices architecture.",
    skills: ["Python", "Java", "Node.js", "React", "PostgreSQL", "Docker", "Git", "REST APIs", "GraphQL"],
    achievements: [
      "Architected microservices handling 1M+ daily requests",
      "Improved system performance by 60% through optimization",
      "Led a team of 4 developers on critical projects",
      "Implemented CI/CD pipelines reducing deployment time by 75%"
    ],
    projects: [
      {
        name: "Real-time Analytics Dashboard",
        description: "Live data visualization platform for business intelligence",
        tech: ["React", "Python", "PostgreSQL", "WebSocket"]
      },
      {
        name: "API Gateway Service",
        description: "Centralized API management and authentication system",
        tech: ["Node.js", "Docker", "Redis", "JWT"]
      }
    ],
    icon: Briefcase,
    color: "bg-green-500"
  },
  {
    id: 4,
    title: "Cloud Developer",
    period: "2022-2024",
    company: "CloudScale Technologies",
    location: "Austin, TX",
    description: "Specialized in cloud-native applications, DevOps practices, and scalable infrastructure solutions.",
    skills: ["AWS", "Azure", "Kubernetes", "Terraform", "Python", "Go", "Docker", "Jenkins", "Monitoring"],
    achievements: [
      "Migrated legacy systems to cloud, reducing costs by 45%",
      "Designed auto-scaling infrastructure serving 10M+ users",
      "Achieved 99.9% uptime across all production systems",
      "Established DevOps best practices across 3 teams"
    ],
    projects: [
      {
        name: "Multi-Cloud Infrastructure",
        description: "Hybrid cloud solution with disaster recovery",
        tech: ["AWS", "Terraform", "Kubernetes", "Prometheus"]
      },
      {
        name: "Serverless Data Pipeline",
        description: "Event-driven data processing at scale",
        tech: ["AWS Lambda", "Python", "DynamoDB", "SQS"]
      }
    ],
    icon: Cloud,
    color: "bg-purple-500"
  },
  {
    id: 5,
    title: "Chief Operating Officer",
    period: "2024-Present",
    company: "NextGen Solutions",
    location: "New York, NY",
    description: "Leading operations and technology strategy, driving digital transformation and team growth.",
    skills: ["Leadership", "Strategy", "Operations", "Team Building", "Product Management", "Agile", "Budgeting"],
    achievements: [
      "Scaled engineering team from 15 to 50+ members",
      "Increased company revenue by 120% year-over-year",
      "Launched 3 successful products reaching 500K+ users",
      "Established remote-first culture with 95% retention rate"
    ],
    projects: [
      {
        name: "Digital Transformation Initiative",
        description: "Company-wide modernization of systems and processes",
        tech: ["Cloud Migration", "Automation", "Analytics"]
      },
      {
        name: "Product Innovation Lab",
        description: "R&D division for emerging technologies",
        tech: ["AI/ML", "Blockchain", "IoT"]
      }
    ],
    icon: Users,
    color: "bg-orange-500"
  }
]

const skillsEvolution = [
  { skill: "Frontend Development", levels: [30, 90, 95, 85, 70] },
  { skill: "Backend Development", levels: [20, 60, 90, 95, 80] },
  { skill: "Cloud & DevOps", levels: [5, 20, 40, 95, 85] },
  { skill: "Leadership & Management", levels: [85, 10, 30, 60, 95] },
  { skill: "System Architecture", levels: [10, 30, 70, 90, 95] },
  { skill: "Team Collaboration", levels: [95, 70, 80, 85, 95] }
]

function App() {
  const [activeStage, setActiveStage] = useState(0)
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '-50%'])

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.career-stage')
      const scrollPosition = window.scrollY + window.innerHeight / 2

      sections.forEach((section, index) => {
        const sectionTop = (section as HTMLElement).offsetTop
        const sectionBottom = sectionTop + (section as HTMLElement).offsetHeight

        if (scrollPosition >= sectionTop && scrollPosition <= sectionBottom) {
          setActiveStage(index)
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <motion.div 
          style={{ y }}
          className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-orange-500 opacity-10"
        />
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-4xl font-bold shadow-2xl">
              AK
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-4">
              Alex Kim
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-6">
              Chief Operating Officer & Technology Leader
            </p>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-8">
              From crafting pixels to leading teams — a journey through the evolution of technology and leadership
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </Button>
            <Button variant="outline" size="lg">
              <Mail className="mr-2 h-4 w-4" />
              Get In Touch
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex justify-center space-x-6"
          >
            <a href="#" className="text-gray-600 hover:text-primary transition-colors">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-600 hover:text-primary transition-colors">
              <Github className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-600 hover:text-primary transition-colors">
              <Mail className="h-6 w-6" />
            </a>
          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown className="h-8 w-8 text-gray-400" />
        </motion.div>
      </section>

      {/* Career Timeline */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Career Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A progression from hands-on development to strategic leadership, 
              each role building upon the last to create a comprehensive understanding of technology and business.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-emerald-500 via-blue-500 via-green-500 via-purple-500 to-orange-500 h-full hidden md:block" />

            {careerStages.map((stage, index) => (
              <motion.div
                key={stage.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`career-stage mb-16 md:mb-24 ${
                  index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2 md:ml-1/2'
                }`}
              >
                <Card className={`relative ${
                  activeStage === index ? 'ring-2 ring-primary shadow-xl' : 'shadow-lg'
                } transition-all duration-300 hover:shadow-xl`}>
                  {/* Timeline Dot */}
                  <div className={`absolute top-8 ${
                    index % 2 === 0 ? 'md:-right-6' : 'md:-left-6'
                  } hidden md:block`}>
                    <div className={`w-12 h-12 rounded-full ${stage.color} flex items-center justify-center shadow-lg`}>
                      <stage.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>

                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary" className="text-sm">
                        {stage.period}
                      </Badge>
                      <div className={`w-8 h-8 rounded-full ${stage.color} flex items-center justify-center md:hidden`}>
                        <stage.icon className="h-4 w-4 text-white" />
                      </div>
                    </div>
                    <CardTitle className="text-2xl text-gray-900">{stage.title}</CardTitle>
                    <CardDescription className="text-lg">
                      <div className="flex items-center text-gray-600 mb-1">
                        <Briefcase className="h-4 w-4 mr-2" />
                        {stage.company}
                      </div>
                      <div className="flex items-center text-gray-500">
                        <MapPin className="h-4 w-4 mr-2" />
                        {stage.location}
                      </div>
                    </CardDescription>
                  </CardHeader>

                  <CardContent>
                    <p className="text-gray-700 mb-6">{stage.description}</p>

                    {/* Skills */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Key Technologies & Skills</h4>
                      <div className="flex flex-wrap gap-2">
                        {stage.skills.map((skill) => (
                          <Badge key={skill} variant="outline" className="text-sm">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Achievements */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Key Achievements</h4>
                      <ul className="space-y-2">
                        {stage.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start">
                            <Star className="h-4 w-4 text-accent mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Projects */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Notable Projects</h4>
                      <div className="space-y-3">
                        {stage.projects.map((project, i) => (
                          <div key={i} className="border-l-4 border-primary/20 pl-4">
                            <h5 className="font-medium text-gray-900">{project.name}</h5>
                            <p className="text-sm text-gray-600 mb-2">{project.description}</p>
                            <div className="flex flex-wrap gap-1">
                              {project.tech.map((tech) => (
                                <Badge key={tech} variant="secondary" className="text-xs">
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Evolution */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Skills Evolution
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              How my expertise has grown and shifted across different domains throughout my career journey.
            </p>
          </motion.div>

          <div className="grid gap-8 max-w-4xl mx-auto">
            {skillsEvolution.map((skillData, index) => (
              <motion.div
                key={skillData.skill}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-lg p-6 shadow-lg"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-4">{skillData.skill}</h3>
                <div className="grid grid-cols-5 gap-4">
                  {skillData.levels.map((level, stageIndex) => (
                    <div key={stageIndex} className="text-center">
                      <div className="text-sm text-gray-600 mb-2">
                        {careerStages[stageIndex].title.split(' ')[0]}
                      </div>
                      <div className="relative">
                        <Progress value={level} className="h-3" />
                        <div className="text-xs text-gray-500 mt-1">{level}%</div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Philosophy */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              Leadership Philosophy
            </h2>
            <div className="text-lg text-gray-700 space-y-6 leading-relaxed">
              <p>
                "Technology is only as powerful as the people who wield it. My journey from writing code to leading teams 
                has taught me that the most impactful solutions come from empowering others to do their best work."
              </p>
              <p>
                "I believe in servant leadership — creating environments where innovation thrives, where failure is a 
                learning opportunity, and where every team member feels valued and heard. The best leaders don't just 
                direct; they inspire, mentor, and clear the path for others to succeed."
              </p>
              <p>
                "In our rapidly evolving tech landscape, adaptability isn't just an advantage — it's essential. 
                I've learned to embrace change, foster continuous learning, and build resilient teams that can 
                navigate uncertainty while maintaining focus on delivering value."
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-purple-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Let's Build Something Amazing
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Whether you're looking for technical leadership, strategic guidance, or just want to connect, 
              I'd love to hear from you.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="secondary">
                <Mail className="mr-2 h-4 w-4" />
                alex.kim@email.com
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                <Linkedin className="mr-2 h-4 w-4" />
                Connect on LinkedIn
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 text-gray-400 text-center">
        <div className="container mx-auto px-6">
          <p>&copy; 2024 Alex Kim. Crafted with passion and precision.</p>
        </div>
      </footer>
    </div>
  )
}

export default App