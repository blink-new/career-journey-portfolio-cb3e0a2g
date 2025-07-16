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
  Star,
  Shield,
  BookOpen,
  Zap,
  Database,
  Server,
  Globe,
  Settings,
  CheckCircle,
  Brain,
  Target,
  Lightbulb,
  Layers,
  Terminal,
  Smartphone,
  Monitor,
  GitBranch,
  Package,
  Cpu,
  HardDrive,
  Network,
  Lock,
  BarChart3,
  FileText,
  Presentation,
  MessageSquare,
  PieChart,
  Workflow,
  Gauge,
  CloudCog,
  Container,
  Activity,
  ArrowRight,
  Building,
  Rocket
} from 'lucide-react'
import { Button } from './components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card'
import { Badge } from './components/ui/badge'
import { Progress } from './components/ui/progress'

const careerTimeline = [
  {
    id: 1,
    period: "2018-2020",
    role: "Web Developer",
    company: "TechStart Solutions",
    icon: Code,
    color: "bg-blue-500",
    gradient: "from-blue-500 to-blue-600",
    description: "Started my journey building responsive websites and learning the fundamentals of web development.",
    achievements: [
      "Built 15+ responsive websites using HTML, CSS, and JavaScript",
      "Learned React and modern frontend frameworks",
      "Collaborated with design teams to implement pixel-perfect UIs",
      "Gained experience with version control and team workflows"
    ],
    skills: ["HTML5", "CSS3", "JavaScript", "React", "Bootstrap", "jQuery", "Git", "Responsive Design"]
  },
  {
    id: 2,
    period: "2020-2022",
    role: "Software Engineer",
    company: "InnovateTech Corp",
    icon: Terminal,
    color: "bg-green-500",
    gradient: "from-green-500 to-green-600",
    description: "Evolved into full-stack development, building scalable applications and learning backend technologies.",
    achievements: [
      "Developed 20+ full-stack applications using modern frameworks",
      "Implemented microservices architecture for better scalability",
      "Reduced application load times by 45% through optimization",
      "Mentored 3 junior developers and led code reviews"
    ],
    skills: ["Node.js", "Python", "PostgreSQL", "MongoDB", "Docker", "REST APIs", "GraphQL", "AWS Basics"]
  },
  {
    id: 3,
    period: "2022-2023",
    role: "Cloud Developer",
    company: "CloudScale Systems",
    icon: Cloud,
    color: "bg-purple-500",
    gradient: "from-purple-500 to-purple-600",
    description: "Specialized in cloud infrastructure, DevOps practices, and scalable system architecture.",
    achievements: [
      "Migrated 25+ applications to AWS cloud infrastructure",
      "Reduced infrastructure costs by 40% through optimization",
      "Achieved 99.9% uptime across all managed services",
      "Implemented CI/CD pipelines for automated deployments"
    ],
    skills: ["AWS", "Kubernetes", "Terraform", "Jenkins", "Docker", "DevOps", "Infrastructure as Code", "Monitoring"]
  },
  {
    id: 4,
    period: "2023-Present",
    role: "Chief Operating Officer (COO)",
    company: "TechVision Enterprises",
    icon: Building,
    color: "bg-orange-500",
    gradient: "from-orange-500 to-orange-600",
    description: "Leading strategic operations, managing cross-functional teams, and driving organizational growth.",
    achievements: [
      "Increased operational efficiency by 35% through process optimization",
      "Led digital transformation initiatives across the organization",
      "Managed teams of 50+ professionals across multiple departments",
      "Drove revenue growth of 60% through strategic partnerships"
    ],
    skills: ["Strategic Planning", "Team Leadership", "Operations Management", "Digital Transformation", "P&L Management", "Stakeholder Relations"]
  }
]

const skillCategories = [
  {
    category: "Frontend Development",
    icon: Monitor,
    color: "bg-blue-500",
    percentage: 95,
    skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Vue.js", "HTML5/CSS3"]
  },
  {
    category: "Backend Development", 
    icon: Server,
    color: "bg-green-500",
    percentage: 92,
    skills: ["Node.js", "Python", "Express.js", "GraphQL", "REST APIs", "Microservices"]
  },
  {
    category: "Cloud & DevOps",
    icon: Cloud,
    color: "bg-purple-500", 
    percentage: 88,
    skills: ["AWS", "Docker", "Kubernetes", "Terraform", "Jenkins", "CI/CD"]
  },
  {
    category: "Database Management",
    icon: Database,
    color: "bg-indigo-500",
    percentage: 90,
    skills: ["PostgreSQL", "MongoDB", "Redis", "MySQL", "Database Design", "Query Optimization"]
  },
  {
    category: "Leadership & Management",
    icon: Users,
    color: "bg-orange-500",
    percentage: 85,
    skills: ["Team Leadership", "Strategic Planning", "Project Management", "Agile/Scrum", "Performance Management"]
  },
  {
    category: "Business Operations",
    icon: BarChart3,
    color: "bg-red-500",
    percentage: 82,
    skills: ["Operations Management", "Process Optimization", "Digital Transformation", "P&L Management", "Stakeholder Relations"]
  }
]

const projects = [
  {
    title: "E-commerce Platform Redesign",
    description: "Led the complete redesign and development of a multi-vendor e-commerce platform serving 10,000+ users",
    tech: ["React", "Node.js", "PostgreSQL", "AWS"],
    impact: "40% increase in conversion rate",
    period: "2021"
  },
  {
    title: "Cloud Migration Initiative", 
    description: "Orchestrated the migration of legacy systems to AWS cloud infrastructure for improved scalability",
    tech: ["AWS", "Docker", "Kubernetes", "Terraform"],
    impact: "60% reduction in infrastructure costs",
    period: "2022"
  },
  {
    title: "Digital Transformation Program",
    description: "Spearheaded company-wide digital transformation, implementing modern workflows and tools",
    tech: ["Process Automation", "Team Training", "Technology Integration"],
    impact: "35% improvement in operational efficiency",
    period: "2023"
  }
]

function App() {
  const [activeTimelineItem, setActiveTimelineItem] = useState(0)
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '-50%'])

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTimelineItem((prev) => (prev + 1) % careerTimeline.length)
    }, 5000)
    return () => clearInterval(interval)
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
            <motion.div 
              className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-4xl font-bold shadow-2xl"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              JD
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-4">
              John Doe
            </h1>
            <motion.p 
              className="text-xl md:text-2xl text-gray-600 mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              From Web Developer to COO
            </motion.p>
            <motion.p 
              className="text-lg text-gray-500 max-w-2xl mx-auto mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              A journey through technology leadership, from crafting code to driving organizational success
            </motion.p>
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
              john.doe@email.com
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex justify-center space-x-6"
          >
            <motion.a 
              href="#" 
              className="text-gray-600 hover:text-primary transition-colors"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <Linkedin className="h-6 w-6" />
            </motion.a>
            <motion.a 
              href="#" 
              className="text-gray-600 hover:text-primary transition-colors"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <Github className="h-6 w-6" />
            </motion.a>
            <motion.a 
              href="mailto:john.doe@email.com" 
              className="text-gray-600 hover:text-primary transition-colors"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <Mail className="h-6 w-6" />
            </motion.a>
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
              From building my first website to leading organizational transformation - 
              a story of continuous growth and evolving expertise
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            {/* Timeline */}
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 via-green-500 via-purple-500 to-orange-500 rounded-full" />
              
              {careerTimeline.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`relative flex items-center mb-16 ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  {/* Content */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4"
                      style={{ borderLeftColor: item.color.replace('bg-', '#') }}
                    >
                      <div className={`flex items-center mb-4 ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
                        <Badge variant="secondary" className="text-sm font-medium">
                          {item.period}
                        </Badge>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{item.role}</h3>
                      <p className="text-lg text-gray-600 mb-4 flex items-center">
                        <Building className="h-4 w-4 mr-2" />
                        {item.company}
                      </p>
                      <p className="text-gray-700 mb-6 leading-relaxed">{item.description}</p>
                      
                      {/* Key Achievements */}
                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                          <Award className="h-4 w-4 mr-2 text-accent" />
                          Key Achievements
                        </h4>
                        <ul className="space-y-2">
                          {item.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start text-sm">
                              <CheckCircle className="h-3 w-3 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-700">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Skills */}
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                          <Zap className="h-4 w-4 mr-2 text-accent" />
                          Technologies & Skills
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {item.skills.map((skill, skillIndex) => (
                            <Badge key={skill} variant="outline" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Timeline node */}
                  <motion.div
                    className={`absolute left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full ${item.color} flex items-center justify-center shadow-lg z-10`}
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <item.icon className="h-8 w-8 text-white" />
                  </motion.div>

                  {/* Empty space for opposite side */}
                  <div className="w-5/12" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Evolution */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
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
              How my technical and leadership capabilities have grown throughout my career journey
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <motion.div 
                    className={`w-12 h-12 rounded-lg ${category.color} flex items-center justify-center mr-4`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <category.icon className="h-6 w-6 text-white" />
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900">{category.category}</h3>
                    <div className="flex items-center mt-2">
                      <div className="flex-1 bg-gray-200 rounded-full h-2 mr-3">
                        <motion.div
                          className={`h-2 rounded-full ${category.color}`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${category.percentage}%` }}
                          transition={{ duration: 1.2, delay: index * 0.1 }}
                        />
                      </div>
                      <span className="text-sm font-semibold text-gray-600">{category.percentage}%</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: skillIndex * 0.05 }}
                    >
                      <Badge variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Key projects that showcase the evolution from technical implementation to strategic leadership
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary">{project.period}</Badge>
                      <Rocket className="h-5 w-5 text-accent" />
                    </div>
                    <CardTitle className="text-xl text-gray-900 group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                        <Settings className="h-4 w-4 mr-2 text-gray-500" />
                        Technologies
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <Badge key={tech} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center text-sm font-medium text-green-600">
                      <TrendingUp className="h-4 w-4 mr-2" />
                      {project.impact}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Philosophy */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-blue-900 text-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 flex items-center justify-center">
              <Lightbulb className="h-10 w-10 mr-4 text-accent" />
              Leadership Philosophy
            </h2>
            <div className="text-lg space-y-6 leading-relaxed">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-blue-100"
              >
                "My journey from writing my first line of code to leading organizational transformation has taught me that 
                technology is only as powerful as the people who wield it and the problems it solves."
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-blue-100"
              >
                "As a COO with deep technical roots, I bridge the gap between innovation and execution, 
                ensuring that our technological capabilities align with business objectives and create real value for our stakeholders."
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="text-blue-100"
              >
                "Leadership in the digital age requires both technical fluency and human empathy. 
                I believe in empowering teams, fostering continuous learning, and building systems that scale not just technically, but culturally."
              </motion.p>
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
              Let's Build Something Great
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Whether you need technical expertise, strategic leadership, or operational excellence, 
              I'm ready to help drive your organization forward.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" variant="secondary">
                  <Mail className="mr-2 h-4 w-4" />
                  john.doe@email.com
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                  <Linkedin className="mr-2 h-4 w-4" />
                  Connect on LinkedIn
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 text-gray-400 text-center">
        <div className="container mx-auto px-6">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            &copy; 2024 John Doe. From code to leadership - a journey of continuous growth.
          </motion.p>
        </div>
      </footer>
    </div>
  )
}

export default App