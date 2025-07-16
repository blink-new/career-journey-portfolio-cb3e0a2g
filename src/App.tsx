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
  Activity
} from 'lucide-react'
import { Button } from './components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card'
import { Badge } from './components/ui/badge'
import { Progress } from './components/ui/progress'

const roleCategories = [
  {
    id: 1,
    title: "Software Engineer",
    icon: Code,
    color: "bg-blue-500",
    gradient: "from-blue-500 to-blue-600",
    description: "Building robust applications and scalable systems",
    skills: [
      "JavaScript", "TypeScript", "Python", "Java", "React", "Node.js", 
      "Express.js", "MongoDB", "PostgreSQL", "Git", "Docker", "REST APIs",
      "GraphQL", "Microservices", "Test-Driven Development", "Agile"
    ],
    achievements: [
      "Developed 20+ full-stack applications",
      "Reduced system response time by 45%",
      "Led migration to microservices architecture",
      "Mentored 5+ junior developers"
    ]
  },
  {
    id: 2,
    title: "Cloud Engineer",
    icon: Cloud,
    color: "bg-purple-500",
    gradient: "from-purple-500 to-purple-600",
    description: "Designing and managing cloud infrastructure at scale",
    skills: [
      "AWS", "Azure", "Google Cloud", "Kubernetes", "Docker", "Terraform",
      "Jenkins", "CI/CD", "DevOps", "Infrastructure as Code", "Monitoring",
      "Auto-scaling", "Load Balancing", "Security", "Cost Optimization"
    ],
    achievements: [
      "Migrated 15+ applications to cloud",
      "Reduced infrastructure costs by 40%",
      "Achieved 99.9% uptime across all services",
      "Implemented automated deployment pipelines"
    ]
  },
  {
    id: 3,
    title: "Educator",
    icon: GraduationCap,
    color: "bg-green-500",
    gradient: "from-green-500 to-green-600",
    description: "Teaching and mentoring the next generation of developers",
    skills: [
      "Curriculum Development", "Teaching", "Mentoring", "Public Speaking",
      "Workshop Design", "Educational Technology", "Assessment Design",
      "Learning Management Systems", "Student Engagement", "Communication"
    ],
    achievements: [
      "Trained 500+ students in programming",
      "Developed 10+ comprehensive courses",
      "Achieved 95% student satisfaction rate",
      "Created innovative learning methodologies"
    ]
  },
  {
    id: 4,
    title: "Manager",
    icon: Users,
    color: "bg-orange-500",
    gradient: "from-orange-500 to-orange-600",
    description: "Leading teams and driving strategic initiatives",
    skills: [
      "Team Leadership", "Project Management", "Strategic Planning",
      "Performance Management", "Budget Management", "Stakeholder Management",
      "Agile Methodologies", "Risk Management", "Decision Making", "Communication"
    ],
    achievements: [
      "Managed teams of 15+ professionals",
      "Delivered 25+ projects on time and budget",
      "Increased team productivity by 35%",
      "Implemented effective performance systems"
    ]
  },
  {
    id: 5,
    title: "Compliance Officer",
    icon: Shield,
    color: "bg-red-500",
    gradient: "from-red-500 to-red-600",
    description: "Ensuring regulatory compliance and risk management",
    skills: [
      "Regulatory Compliance", "Risk Assessment", "Policy Development",
      "Audit Management", "Legal Framework", "Data Protection", "GDPR",
      "Security Standards", "Documentation", "Training", "Reporting"
    ],
    achievements: [
      "Implemented compliance frameworks",
      "Reduced compliance violations by 90%",
      "Conducted 50+ successful audits",
      "Developed comprehensive policy documentation"
    ]
  }
]

const detailedSkills = [
  {
    category: "Frontend Development",
    icon: Monitor,
    color: "bg-blue-500",
    gradient: "from-blue-500 to-blue-600",
    percentage: 95,
    description: "Creating responsive, interactive user interfaces with modern frameworks and best practices",
    tools: [
      { name: "React", icon: Code, level: 95 },
      { name: "TypeScript", icon: Terminal, level: 90 },
      { name: "Next.js", icon: Layers, level: 88 },
      { name: "Tailwind CSS", icon: Smartphone, level: 92 },
      { name: "Vue.js", icon: Code, level: 85 },
      { name: "HTML5/CSS3", icon: Globe, level: 98 }
    ],
    projects: ["E-commerce Platform", "Dashboard Analytics", "Mobile-First Web Apps"]
  },
  {
    category: "Backend Development",
    icon: Server,
    color: "bg-green-500",
    gradient: "from-green-500 to-green-600",
    percentage: 92,
    description: "Building scalable server-side applications, APIs, and microservices architecture",
    tools: [
      { name: "Node.js", icon: Terminal, level: 93 },
      { name: "Python", icon: Code, level: 90 },
      { name: "Express.js", icon: Server, level: 95 },
      { name: "GraphQL", icon: Network, level: 87 },
      { name: "REST APIs", icon: Globe, level: 96 },
      { name: "Microservices", icon: Package, level: 89 }
    ],
    projects: ["Payment Processing System", "Real-time Chat API", "Inventory Management"]
  },
  {
    category: "Database & Storage",
    icon: Database,
    color: "bg-purple-500",
    gradient: "from-purple-500 to-purple-600",
    percentage: 90,
    description: "Designing and optimizing database systems for performance and scalability",
    tools: [
      { name: "PostgreSQL", icon: Database, level: 92 },
      { name: "MongoDB", icon: HardDrive, level: 88 },
      { name: "Redis", icon: Zap, level: 85 },
      { name: "MySQL", icon: Database, level: 90 },
      { name: "Elasticsearch", icon: Globe, level: 82 },
      { name: "Firebase", icon: Cloud, level: 87 }
    ],
    projects: ["Data Warehouse Design", "Real-time Analytics", "Multi-tenant Architecture"]
  },
  {
    category: "Cloud & DevOps",
    icon: Cloud,
    color: "bg-indigo-500",
    gradient: "from-indigo-500 to-indigo-600",
    percentage: 88,
    description: "Implementing cloud infrastructure, CI/CD pipelines, and automated deployment strategies",
    tools: [
      { name: "AWS", icon: CloudCog, level: 90 },
      { name: "Docker", icon: Container, level: 92 },
      { name: "Kubernetes", icon: Settings, level: 85 },
      { name: "Terraform", icon: Workflow, level: 87 },
      { name: "Jenkins", icon: GitBranch, level: 83 },
      { name: "Azure", icon: Cloud, level: 80 }
    ],
    projects: ["Auto-scaling Infrastructure", "Multi-region Deployment", "Cost Optimization"]
  },
  {
    category: "Leadership & Management",
    icon: Users,
    color: "bg-orange-500",
    gradient: "from-orange-500 to-orange-600",
    percentage: 85,
    description: "Leading cross-functional teams, strategic planning, and driving organizational growth",
    tools: [
      { name: "Agile/Scrum", icon: Workflow, level: 92 },
      { name: "Team Building", icon: Users, level: 88 },
      { name: "Project Management", icon: Target, level: 90 },
      { name: "Strategic Planning", icon: BarChart3, level: 85 },
      { name: "Performance Management", icon: Gauge, level: 87 },
      { name: "Stakeholder Management", icon: MessageSquare, level: 89 }
    ],
    projects: ["Team Restructuring", "Process Optimization", "Digital Transformation"]
  },
  {
    category: "Education & Training",
    icon: GraduationCap,
    color: "bg-green-600",
    gradient: "from-green-600 to-green-700",
    percentage: 88,
    description: "Developing curricula, mentoring professionals, and creating engaging learning experiences",
    tools: [
      { name: "Curriculum Design", icon: BookOpen, level: 90 },
      { name: "Public Speaking", icon: Presentation, level: 92 },
      { name: "Mentoring", icon: Users, level: 95 },
      { name: "Workshop Facilitation", icon: MessageSquare, level: 88 },
      { name: "E-learning Platforms", icon: Monitor, level: 85 },
      { name: "Assessment Design", icon: FileText, level: 87 }
    ],
    projects: ["Full-Stack Bootcamp", "Corporate Training Program", "Online Course Platform"]
  },
  {
    category: "Compliance & Security",
    icon: Shield,
    color: "bg-red-500",
    gradient: "from-red-500 to-red-600",
    percentage: 82,
    description: "Ensuring regulatory compliance, risk management, and implementing security best practices",
    tools: [
      { name: "GDPR Compliance", icon: Lock, level: 88 },
      { name: "Risk Assessment", icon: Activity, level: 85 },
      { name: "Security Auditing", icon: Shield, level: 83 },
      { name: "Policy Development", icon: FileText, level: 90 },
      { name: "ISO Standards", icon: CheckCircle, level: 80 },
      { name: "Data Protection", icon: Database, level: 87 }
    ],
    projects: ["Compliance Framework", "Security Assessment", "Policy Documentation"]
  },
  {
    category: "Analytics & Monitoring",
    icon: BarChart3,
    color: "bg-teal-500",
    gradient: "from-teal-500 to-teal-600",
    percentage: 86,
    description: "Implementing monitoring solutions, data analysis, and performance optimization",
    tools: [
      { name: "Google Analytics", icon: PieChart, level: 90 },
      { name: "Prometheus", icon: Activity, level: 85 },
      { name: "Grafana", icon: BarChart3, level: 88 },
      { name: "New Relic", icon: Gauge, level: 82 },
      { name: "DataDog", icon: Activity, level: 80 },
      { name: "Custom Dashboards", icon: Monitor, level: 92 }
    ],
    projects: ["Performance Monitoring", "Business Intelligence", "Real-time Dashboards"]
  }
]

const skillsOverview = detailedSkills.map(skill => ({
  category: skill.category,
  percentage: skill.percentage,
  color: skill.color
}))

function App() {
  const [activeRole, setActiveRole] = useState(0)
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '-50%'])

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveRole((prev) => (prev + 1) % roleCategories.length)
    }, 4000)
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
              HF
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-4">
              Honore Fred
            </h1>
            <motion.p 
              className="text-xl md:text-2xl text-gray-600 mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Multi-Disciplinary Technology Professional
            </motion.p>
            <motion.p 
              className="text-lg text-gray-500 max-w-2xl mx-auto mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Software Engineer • Cloud Architect • Educator • Manager • Compliance Expert
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
              honorefred@gmail.com
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
              href="mailto:honorefred@gmail.com" 
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

      {/* Role Categories Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Professional Expertise
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A diverse skill set spanning multiple domains of technology and leadership, 
              each role contributing to a comprehensive understanding of modern business and technology.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {roleCategories.map((role, index) => (
              <motion.div
                key={role.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden">
                  <div className={`h-2 bg-gradient-to-r ${role.gradient}`} />
                  
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-4">
                      <motion.div 
                        className={`w-12 h-12 rounded-lg ${role.color} flex items-center justify-center shadow-lg`}
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <role.icon className="h-6 w-6 text-white" />
                      </motion.div>
                      <Badge variant="secondary" className="text-xs">
                        Expert Level
                      </Badge>
                    </div>
                    <CardTitle className="text-xl text-gray-900 group-hover:text-primary transition-colors">
                      {role.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600">
                      {role.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent>
                    {/* Skills */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                        <Zap className="h-4 w-4 mr-2 text-accent" />
                        Core Skills
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {role.skills.slice(0, 8).map((skill, skillIndex) => (
                          <motion.div
                            key={skill}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: skillIndex * 0.05 }}
                          >
                            <Badge variant="outline" className="text-xs hover:bg-primary hover:text-white transition-colors">
                              {skill}
                            </Badge>
                          </motion.div>
                        ))}
                        {role.skills.length > 8 && (
                          <Badge variant="secondary" className="text-xs">
                            +{role.skills.length - 8} more
                          </Badge>
                        )}
                      </div>
                    </div>

                    {/* Key Achievements */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                        <Target className="h-4 w-4 mr-2 text-accent" />
                        Key Achievements
                      </h4>
                      <ul className="space-y-2">
                        {role.achievements.slice(0, 3).map((achievement, i) => (
                          <motion.li 
                            key={i} 
                            className="flex items-start text-sm"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                          >
                            <CheckCircle className="h-3 w-3 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">{achievement}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Detailed Skills Showcase */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8"
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-4 text-center flex items-center justify-center">
              <Brain className="h-8 w-8 mr-3 text-primary" />
              Technical Expertise & Skills
            </h3>
            <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              A comprehensive overview of technical skills, tools, and methodologies mastered across different domains
            </p>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {detailedSkills.map((skillCategory, categoryIndex) => (
                <motion.div
                  key={skillCategory.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  {/* Category Header */}
                  <div className="flex items-center mb-4">
                    <motion.div 
                      className={`w-12 h-12 rounded-lg ${skillCategory.color} flex items-center justify-center mr-4`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <skillCategory.icon className="h-6 w-6 text-white" />
                    </motion.div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-gray-900">{skillCategory.category}</h4>
                      <div className="flex items-center mt-1">
                        <div className="flex-1 bg-gray-200 rounded-full h-2 mr-3">
                          <motion.div
                            className={`h-2 rounded-full bg-gradient-to-r ${skillCategory.gradient}`}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skillCategory.percentage}%` }}
                            transition={{ duration: 1.2, delay: categoryIndex * 0.1 }}
                          />
                        </div>
                        <span className="text-sm font-semibold text-gray-600">{skillCategory.percentage}%</span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                    {skillCategory.description}
                  </p>

                  {/* Tools & Technologies */}
                  <div className="mb-6">
                    <h5 className="font-semibold text-gray-900 mb-3 flex items-center text-sm">
                      <Settings className="h-4 w-4 mr-2 text-gray-500" />
                      Tools & Technologies
                    </h5>
                    <div className="grid grid-cols-2 gap-2">
                      {skillCategory.tools.map((tool, toolIndex) => (
                        <motion.div
                          key={tool.name}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: toolIndex * 0.05 }}
                          className="flex items-center justify-between bg-gray-50 rounded-lg px-3 py-2 hover:bg-gray-100 transition-colors"
                        >
                          <div className="flex items-center">
                            <tool.icon className="h-3 w-3 text-gray-500 mr-2" />
                            <span className="text-xs font-medium text-gray-700">{tool.name}</span>
                          </div>
                          <div className="flex items-center">
                            <div className="w-8 bg-gray-200 rounded-full h-1 mr-1">
                              <motion.div
                                className={`h-1 rounded-full ${skillCategory.color}`}
                                initial={{ width: 0 }}
                                whileInView={{ width: `${tool.level}%` }}
                                transition={{ duration: 0.8, delay: toolIndex * 0.05 }}
                              />
                            </div>
                            <span className="text-xs text-gray-500">{tool.level}%</span>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Notable Projects */}
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-3 flex items-center text-sm">
                      <Briefcase className="h-4 w-4 mr-2 text-gray-500" />
                      Notable Projects
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {skillCategory.projects.map((project, projectIndex) => (
                        <motion.div
                          key={project}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: projectIndex * 0.1 }}
                        >
                          <Badge 
                            variant="secondary" 
                            className="text-xs hover:bg-primary hover:text-white transition-colors cursor-default"
                          >
                            {project}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Skills Summary */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-12 bg-white rounded-xl p-6 shadow-lg"
            >
              <h4 className="text-xl font-bold text-gray-900 mb-6 text-center flex items-center justify-center">
                <TrendingUp className="h-5 w-5 mr-2 text-primary" />
                Skills Overview
              </h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {skillsOverview.map((skill, index) => (
                  <motion.div
                    key={skill.category}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    className="text-center"
                  >
                    <div className="relative w-16 h-16 mx-auto mb-2">
                      <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 36 36">
                        <path
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke="#e5e7eb"
                          strokeWidth="2"
                        />
                        <motion.path
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeDasharray={`${skill.percentage}, 100`}
                          className={skill.color.replace('bg-', 'text-')}
                          initial={{ strokeDasharray: "0, 100" }}
                          whileInView={{ strokeDasharray: `${skill.percentage}, 100` }}
                          transition={{ duration: 1.5, delay: index * 0.1 }}
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-xs font-bold text-gray-700">{skill.percentage}%</span>
                      </div>
                    </div>
                    <h5 className="text-xs font-medium text-gray-700 text-center leading-tight">
                      {skill.category}
                    </h5>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Interactive Role Spotlight */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-blue-900 text-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Role Spotlight
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Explore the depth of expertise in each professional domain
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {/* Role Navigation */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {roleCategories.map((role, index) => (
                <motion.button
                  key={role.id}
                  onClick={() => setActiveRole(index)}
                  className={`flex items-center px-4 py-2 rounded-lg transition-all duration-300 ${
                    activeRole === index 
                      ? `${role.color} text-white shadow-lg` 
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <role.icon className="h-4 w-4 mr-2" />
                  {role.title}
                </motion.button>
              ))}
            </div>

            {/* Active Role Details */}
            <motion.div
              key={activeRole}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8"
            >
              <div className="flex items-center mb-6">
                <div className={`w-16 h-16 rounded-xl ${roleCategories[activeRole].color} flex items-center justify-center mr-6`}>
                  <roleCategories[activeRole].icon className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">{roleCategories[activeRole].title}</h3>
                  <p className="text-blue-100">{roleCategories[activeRole].description}</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold mb-4 flex items-center">
                    <Settings className="h-5 w-5 mr-2 text-accent" />
                    Technical Skills
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {roleCategories[activeRole].skills.map((skill, index) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className="bg-white/10 rounded-lg px-3 py-2 text-sm"
                      >
                        {skill}
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-4 flex items-center">
                    <Award className="h-5 w-5 mr-2 text-accent" />
                    Major Achievements
                  </h4>
                  <ul className="space-y-3">
                    {roleCategories[activeRole].achievements.map((achievement, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-start"
                      >
                        <Star className="h-4 w-4 text-accent mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-blue-100">{achievement}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Professional Philosophy */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 flex items-center justify-center">
              <Lightbulb className="h-10 w-10 mr-4 text-accent" />
              Professional Philosophy
            </h2>
            <div className="text-lg text-gray-700 space-y-6 leading-relaxed">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                "Technology is a powerful enabler, but its true value lies in how we apply it to solve real-world problems. 
                My diverse experience across software engineering, cloud architecture, education, management, and compliance 
                has taught me that the best solutions emerge from understanding both technical possibilities and human needs."
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                "Whether I'm architecting scalable cloud solutions, mentoring the next generation of developers, 
                leading cross-functional teams, or ensuring regulatory compliance, I believe in the power of 
                continuous learning, ethical practices, and collaborative innovation."
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                "In our rapidly evolving digital landscape, adaptability and integrity are not just advantages — 
                they're essential. I strive to build bridges between technical excellence and business value, 
                always keeping the end user and organizational goals at the center of every decision."
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
              Let's Collaborate
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Ready to tackle complex challenges together? Whether you need technical expertise, 
              strategic guidance, or educational support, I'm here to help.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" variant="secondary">
                  <Mail className="mr-2 h-4 w-4" />
                  honorefred@gmail.com
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
            &copy; 2024 Honore Fred. Crafted with passion for technology and innovation.
          </motion.p>
        </div>
      </footer>
    </div>
  )
}

export default App