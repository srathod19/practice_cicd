import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  User, 
  Code, 
  Database, 
  Mail, 
  Phone, 
  Linkedin, 
  Download, 
  ExternalLink,
  CheckCircle,
  Calendar,
  GraduationCap,
  Menu,
  X
} from 'lucide-react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'experience', 'education', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const downloadResume = async () => {
    try {
      const response = await fetch('/api/download-resume');
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'Sachin_Rathod_Resume.pdf';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error downloading resume:', error);
    }
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    alert('Thank you for your message! I will get back to you soon.');
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <h1 className="text-xl font-bold text-slate-800">Sachin Rathod</h1>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {['home', 'about', 'skills', 'experience', 'education', 'contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className={`px-3 py-2 text-sm font-medium transition-colors capitalize ${
                      activeSection === item 
                        ? 'text-blue-600' 
                        : 'text-gray-700 hover:text-blue-600'
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-blue-600"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
          
          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden pb-4">
              <div className="flex flex-col space-y-2">
                {['home', 'about', 'skills', 'experience', 'education', 'contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className={`px-3 py-2 text-sm font-medium transition-colors capitalize text-left ${
                      activeSection === item 
                        ? 'text-blue-600' 
                        : 'text-gray-700 hover:text-blue-600'
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative pt-16 pb-32 bg-gradient-to-br from-slate-800 via-slate-700 to-gray-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center pt-20">
            <div className="mb-8">
              <div className="w-32 h-32 bg-white/10 rounded-full mx-auto mb-6 flex items-center justify-center backdrop-blur-sm">
                <User className="w-16 h-16 text-white" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-4">Sachin Rathod</h1>
              <p className="text-xl md:text-2xl text-blue-200 mb-6">Backend Developer</p>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
                Software Engineer with 2.5+ years' experience designing and building scalable data reporting systems, 
                RESTful APIs, and AI-powered automation bots using Python, Django, React, and Node.js.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Button 
                onClick={() => scrollToSection('contact')}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium"
              >
                Get In Touch
              </Button>
              <Button 
                onClick={downloadResume}
                variant="outline"
                className="bg-white/10 hover:bg-white/20 text-white border-white/20 px-8 py-3 rounded-lg font-medium backdrop-blur-sm"
              >
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">About Me</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-slate-800 mb-6">Professional Background</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                I'm a dedicated Software Engineer with over 2.5 years of hands-on experience in backend development. 
                I specialize in creating scalable data reporting systems, building robust RESTful APIs, and developing 
                AI-powered automation solutions.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                My expertise spans across Python (Django/DRF, FastAPI), React, and Node.js, with a strong focus on 
                database optimization, secure authentication, and real-time data visualization. I'm passionate about 
                delivering high-performance, user-centric applications that solve real-world problems.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center text-gray-600">
                  <Code className="w-5 h-5 text-blue-600 mr-2" />
                  <span>2.5+ Years Experience</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Database className="w-5 h-5 text-blue-600 mr-2" />
                  <span>5+ Major Projects</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-blue-600 mr-2" />
                  <span>Full Stack Development</span>
                </div>
              </div>
            </div>
            <Card className="bg-gradient-to-br from-blue-50 to-slate-50">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-slate-800 mb-4">Core Competencies</h3>
                <ul className="space-y-3">
                  {[
                    'Scalable Backend Architecture',
                    'RESTful API Development',
                    'Database Optimization',
                    'AI Integration & Automation',
                    'Real-time Data Visualization',
                    'Security & Authentication'
                  ].map((item) => (
                    <li key={item} className="flex items-center text-gray-600">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Technical Skills</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Code className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-800">Backend Development</h3>
                </div>
                <div className="space-y-4">
                  {[
                    { name: 'Python', level: 5 },
                    { name: 'Django/DRF', level: 4 },
                    { name: 'FastAPI', level: 4 },
                    { name: 'Node.js', level: 4 }
                  ].map((skill) => (
                    <div key={skill.name} className="flex items-center justify-between">
                      <span className="text-gray-600">{skill.name}</span>
                      <div className="flex space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <div
                            key={i}
                            className={`w-3 h-3 rounded-full ${
                              i < skill.level ? 'bg-blue-600' : 'bg-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Database className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-800">Database & Storage</h3>
                </div>
                <div className="space-y-4">
                  {[
                    { name: 'PostgreSQL', level: 4 },
                    { name: 'MySQL', level: 4 },
                    { name: 'Query Optimization', level: 4 }
                  ].map((skill) => (
                    <div key={skill.name} className="flex items-center justify-between">
                      <span className="text-gray-600">{skill.name}</span>
                      <div className="flex space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <div
                            key={i}
                            className={`w-3 h-3 rounded-full ${
                              i < skill.level ? 'bg-blue-600' : 'bg-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Code className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-800">Frontend & Tools</h3>
                </div>
                <div className="space-y-4">
                  {[
                    { name: 'React.js', level: 4 },
                    { name: 'JavaScript', level: 4 },
                    { name: 'HTML/CSS', level: 5 }
                  ].map((skill) => (
                    <div key={skill.name} className="flex items-center justify-between">
                      <span className="text-gray-600">{skill.name}</span>
                      <div className="flex space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <div
                            key={i}
                            className={`w-3 h-3 rounded-full ${
                              i < skill.level ? 'bg-blue-600' : 'bg-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Work Experience</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>
          <div className="space-y-12">
            {/* Current Position */}
            <div className="relative">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-4 h-4 bg-blue-600 rounded-full mt-2"></div>
                <div className="flex-1">
                  <Card className="bg-gray-50">
                    <CardContent className="p-6">
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-semibold text-slate-800">Software Engineer I</h3>
                          <p className="text-blue-600 font-medium">Calidad Infotech</p>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <Calendar className="w-4 h-4 mr-2" />
                          2024 - Present
                        </div>
                      </div>
                      <div className="space-y-6">
                        <div className="border-l-4 border-blue-600 pl-4">
                          <h4 className="font-semibold text-slate-800 mb-2">Router Data Reporting System for Juniper Networks</h4>
                          <ul className="text-gray-600 space-y-1">
                            <li>• Developed a report generation system to analyze and visualize router data</li>
                            <li>• Designed frontend using HTML, CSS, and JavaScript for real-time network insights</li>
                            <li>• Utilized Python to process large datasets and generate detailed reports</li>
                            <li>• Optimized database queries to enhance system performance and scalability</li>
                          </ul>
                        </div>
                        <div className="border-l-4 border-blue-600 pl-4">
                          <h4 className="font-semibold text-slate-800 mb-2">REST API Development Using Django Rest Framework</h4>
                          <ul className="text-gray-600 space-y-1">
                            <li>• Designed and developed scalable APIs using Django Rest Framework (DRF)</li>
                            <li>• Integrated PostgreSQL ensuring optimized query performance and data integrity</li>
                            <li>• Implemented authentication and authorization mechanisms for secure API access</li>
                            <li>• Followed RESTful best practices improving frontend-backend communication</li>
                          </ul>
                        </div>
                        <div className="border-l-4 border-blue-600 pl-4">
                          <h4 className="font-semibold text-slate-800 mb-2">AI-Powered Interview Automation Bot</h4>
                          <ul className="text-gray-600 space-y-1">
                            <li>• Developed AI-driven chatbot for automating interviews using OpenAI API</li>
                            <li>• Built interactive frontend using React.js for user-friendly experience</li>
                            <li>• Implemented FastAPI/Django backend to handle requests efficiently</li>
                            <li>• Integrated real-time voice chat capabilities for dynamic conversations</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>

            {/* Previous Position */}
            <div className="relative">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-4 h-4 bg-gray-400 rounded-full mt-2"></div>
                <div className="flex-1">
                  <Card className="bg-gray-50">
                    <CardContent className="p-6">
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-semibold text-slate-800">Software Engineer I</h3>
                          <p className="text-blue-600 font-medium">Hyperlink Infosystem</p>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <Calendar className="w-4 h-4 mr-2" />
                          2022 - 2023
                        </div>
                      </div>
                      <div className="border-l-4 border-gray-400 pl-4">
                        <h4 className="font-semibold text-slate-800 mb-2">Inventory Management System</h4>
                        <ul className="text-gray-600 space-y-1">
                          <li>• Developed RESTful APIs using Node.js with MySQL database</li>
                          <li>• Designed and implemented admin panel using CodeIgniter</li>
                          <li>• Enabled administrators to track, update, and manage inventory data seamlessly</li>
                          <li>• Ensured secure authentication and role-based access control</li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Education</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <GraduationCap className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-800">Master of Computer Applications</h3>
                    <p className="text-gray-600">2019 - 2022</p>
                  </div>
                </div>
                <p className="text-gray-600 font-medium">R.B Institute of Management</p>
                <p className="text-gray-500 mt-2">Comprehensive program covering advanced computer science concepts, software engineering, and management principles.</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <GraduationCap className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-800">Bachelor of Computer Application</h3>
                    <p className="text-gray-600">2017 - 2019</p>
                  </div>
                </div>
                <p className="text-gray-600 font-medium">Umiya BCA College</p>
                <p className="text-gray-500 mt-2">Foundation program in computer applications, programming languages, and software development fundamentals.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
            <p className="text-gray-300 mt-4">Let's discuss your next project or opportunity</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-600/20 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-gray-300">+91 99240 36116</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-600/20 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-gray-300">sachin.rathod.sr904@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-600/20 rounded-full flex items-center justify-center">
                    <Linkedin className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <p className="font-medium">LinkedIn</p>
                    <a 
                      href="https://www.linkedin.com/in/sachin-r-56479b123" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-blue-400 transition-colors flex items-center"
                    >
                      linkedin.com/in/sachin-r-56479b123
                      <ExternalLink className="w-4 h-4 ml-1" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-6">Send Message</h3>
              <form onSubmit={handleContactSubmit} className="space-y-4">
                <div>
                  <Input 
                    type="text" 
                    placeholder="Your Name" 
                    className="bg-white/10 border-white/20 text-white placeholder-gray-400"
                    required
                  />
                </div>
                <div>
                  <Input 
                    type="email" 
                    placeholder="Your Email" 
                    className="bg-white/10 border-white/20 text-white placeholder-gray-400"
                    required
                  />
                </div>
                <div>
                  <Textarea 
                    rows={4} 
                    placeholder="Your Message" 
                    className="bg-white/10 border-white/20 text-white placeholder-gray-400 resize-none"
                    required
                  />
                </div>
                <Button 
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p>&copy; 2024 Sachin Rathod. All rights reserved.</p>
            </div>
            <div className="flex space-x-6">
              <a 
                href="https://www.linkedin.com/in/sachin-r-56479b123" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="mailto:sachin.rathod.sr904@gmail.com" 
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a 
                href="tel:+919924036116" 
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
