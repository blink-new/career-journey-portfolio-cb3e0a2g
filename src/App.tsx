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
  Lightbulb
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

const skillsOverview = [
  { category: "Technical Skills", percentage: 95, color: "bg-blue-500" },
  { category: "Cloud & DevOps", percentage: 90, color: "bg-purple-500" },
  { category: "Leadership", percentage: 85, color: "bg-orange-500" },
  { category: "Education", percentage: 88, color: "bg-green-500" },
  { category: "Compliance", percentage: 82, color: "bg-red-500" },
  { category: "Communication", percentage: 92, color: "bg-indigo-500" }
]

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
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center flex items-center justify-center">
              <Brain className="h-6 w-6 mr-3 text-primary" />
              Comprehensive Skill Matrix
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skillsOverview.map((skill, index) => (
                <motion.div
                  key={skill.category}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-lg p-4 shadow-md"
                >
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-medium text-gray-900">{skill.category}</h4>
                    <span className="text-sm font-semibold text-gray-600">{skill.percentage}%</span>
                  </div>
                  <div className="relative">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <motion.div
                        className={`h-2 rounded-full ${skill.color}`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.percentage}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
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