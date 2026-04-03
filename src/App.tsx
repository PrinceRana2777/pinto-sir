import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Phone, 
  MessageCircle, 
  MapPin, 
  Clock, 
  BookOpen, 
  Users, 
  CheckCircle2, 
  GraduationCap, 
  Menu, 
  X, 
  ChevronRight,
  Star,
  Quote
} from 'lucide-react';

const CONTACT_NUMBER = "+919987148080";
const WHATSAPP_MESSAGE = encodeURIComponent("I want to enroll in Omkar Tutorials");
const WHATSAPP_URL = `https://wa.me/${CONTACT_NUMBER}?text=${WHATSAPP_MESSAGE}`;

const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Courses', href: '#courses' },
  { name: 'Why Us', href: '#why-us' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Contact', href: '#contact' },
];

const COURSES = [
  {
    title: "Mathematics",
    description: "Comprehensive coverage of algebra, geometry, and arithmetic with simplified problem-solving techniques.",
    icon: <BookOpen className="w-8 h-8 text-blue-600" />
  },
  {
    title: "Science",
    description: "In-depth understanding of Physics, Chemistry, and Biology with practical examples and regular experiments.",
    icon: <GraduationCap className="w-8 h-8 text-blue-600" />
  },
  {
    title: "English",
    description: "Focus on grammar, vocabulary, and literature to build strong communication and writing skills.",
    icon: <MessageCircle className="w-8 h-8 text-blue-600" />
  },
  {
    title: "Social Studies",
    description: "Engaging lessons in History, Geography, and Civics to broaden students' global perspective.",
    icon: <Users className="w-8 h-8 text-blue-600" />
  }
];

const WHY_CHOOSE_US = [
  { title: "Experienced Teachers", desc: "Our faculty consists of subject matter experts with years of teaching experience." },
  { title: "Small Batch Size", desc: "We maintain limited students per batch to ensure individual attention to every student." },
  { title: "Regular Tests", desc: "Weekly and monthly assessments to track progress and identify areas for improvement." },
  { title: "Personal Attention", desc: "Dedicated doubt-solving sessions and personalized guidance for every learner." }
];

const TESTIMONIALS = [
  {
    name: "Rahul Sharma",
    role: "Student (Class 10)",
    text: "Omkar Tutorials helped me clear my concepts in Maths and Science. The teachers are very supportive and the regular tests built my confidence.",
    rating: 5
  },
  {
    name: "Priya Patel",
    role: "Parent",
    text: "I've seen a significant improvement in my daughter's grades. The small batch size really makes a difference in how she learns.",
    rating: 5
  },
  {
    name: "Amit Verma",
    role: "Student (Class 9)",
    text: "The best coaching classes in Naigaon! The teaching method is very interactive and easy to understand.",
    rating: 5
  }
];

const GALLERY_IMAGES = [
  "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80",
  "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800&q=80",
  "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80",
  "https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?w=800&q=80",
  "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80",
  "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80"
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass-nav py-3' : 'bg-transparent py-5'}`}>
        <div className="container-custom flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            <div className="bg-blue-600 p-2 rounded-lg">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-blue-900 leading-none">Omkar Tutorials</span>
              <span className="text-[10px] font-medium text-blue-600 tracking-widest uppercase">Building Foundations</span>
            </div>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a 
              href={WHATSAPP_URL} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200"
            >
              Enroll Now
            </a>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden p-2 text-gray-700" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
            >
              <div className="container-custom py-6 flex flex-col gap-4">
                {NAV_LINKS.map((link) => (
                  <a 
                    key={link.name} 
                    href={link.href} 
                    className="text-lg font-medium text-gray-700"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                ))}
                <a 
                  href={WHATSAPP_URL} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white py-3 rounded-xl text-center font-semibold"
                >
                  Enroll Now
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-blue-50/50 rounded-bl-[100px] hidden lg:block" />
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-sm font-bold mb-6">
                Admission Open 2026-27
              </span>
              <h1 className="text-4xl md:text-6xl font-bold text-blue-900 leading-tight mb-6">
                Welcome to <br />
                <span className="text-blue-600">Omkar Tutorials</span>
              </h1>
              <p className="text-lg text-gray-600 mb-10 max-w-lg leading-relaxed">
                Building Strong Foundations for High School Students. We provide quality education with personal attention to help every student excel.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href={`tel:${CONTACT_NUMBER}`}
                  className="flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-200"
                >
                  <Phone className="w-5 h-5" />
                  Call Now
                </a>
                <a 
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-white text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-blue-50 transition-all"
                >
                  <MessageCircle className="w-5 h-5" />
                  Enroll Now
                </a>
              </div>
              <div className="mt-12 flex items-center gap-6">
                <div className="flex -space-x-3">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                      <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="Student" referrerPolicy="no-referrer" />
                    </div>
                  ))}
                </div>
                <p className="text-sm text-gray-500 font-medium">
                  <span className="text-blue-600 font-bold">500+</span> Students Trusted Us
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80" 
                  alt="Students Studying" 
                  className="w-full h-auto"
                  referrerPolicy="no-referrer"
                />
              </div>
              {/* Floating Cards */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-6 -left-6 z-20 bg-white p-4 rounded-2xl shadow-xl hidden sm:flex items-center gap-3"
              >
                <div className="bg-orange-100 p-2 rounded-lg">
                  <Star className="w-6 h-6 text-orange-500 fill-orange-500" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">Top Rated</p>
                  <p className="text-sm font-bold text-gray-900">Best in Naigaon</p>
                </div>
              </motion.div>
              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                className="absolute -bottom-6 -right-6 z-20 bg-white p-4 rounded-2xl shadow-xl hidden sm:flex items-center gap-3"
              >
                <div className="bg-green-100 p-2 rounded-lg">
                  <CheckCircle2 className="w-6 h-6 text-green-500" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">Success Rate</p>
                  <p className="text-sm font-bold text-gray-900">98% Pass Results</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <img 
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80" 
                alt="Teacher" 
                className="rounded-3xl shadow-xl"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="order-1 md:order-2">
              <span className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4 block">About Us</span>
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">Empowering Students to Achieve Excellence</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Omkar Tutorials has been a beacon of quality education in Naigaon East for several years. We believe that every student has the potential to succeed if given the right guidance and environment.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Our mission is to build strong academic foundations, foster critical thinking, and instill a love for learning. With our expert faculty and student-centric approach, we ensure that every child receives the personal attention they deserve.
              </p>
              <div className="space-y-4">
                {[
                  "Expert & Dedicated Faculty",
                  "Comprehensive Study Material",
                  "Interactive Learning Environment",
                  "Regular Performance Tracking"
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="bg-blue-100 p-1 rounded-full">
                      <CheckCircle2 className="w-5 h-5 text-blue-600" />
                    </div>
                    <span className="font-medium text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="section-padding">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4 block">Our Courses</span>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">Subjects We Specialize In</h2>
            <p className="text-gray-600">We offer specialized coaching for high school students across all major boards, focusing on core subjects that form the basis of future careers.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {COURSES.map((course, index) => (
              <motion.div
                key={course.title}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all"
              >
                <div className="bg-blue-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  {course.icon}
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-4">{course.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{course.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why-us" className="section-padding bg-blue-900 text-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-blue-400 font-bold uppercase tracking-widest text-sm mb-4 block">Why Choose Us</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-8">The Omkar Tutorials Advantage</h2>
              <div className="grid sm:grid-cols-2 gap-8">
                {WHY_CHOOSE_US.map((item) => (
                  <div key={item.title}>
                    <h4 className="text-lg font-bold text-blue-300 mb-2">{item.title}</h4>
                    <p className="text-blue-100/80 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
              <div className="mt-12">
                <a 
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white text-blue-900 px-8 py-4 rounded-2xl font-bold hover:bg-blue-50 transition-all"
                >
                  Get Started Today
                  <ChevronRight className="w-5 h-5" />
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4 pt-12">
                  <img src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400&q=80" alt="Classroom" className="rounded-2xl shadow-lg" referrerPolicy="no-referrer" />
                  <img src="https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?w=400&q=80" alt="Student" className="rounded-2xl shadow-lg" referrerPolicy="no-referrer" />
                </div>
                <div className="space-y-4">
                  <img src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=400&q=80" alt="Study" className="rounded-2xl shadow-lg" referrerPolicy="no-referrer" />
                  <img src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&q=80" alt="Learning" className="rounded-2xl shadow-lg" referrerPolicy="no-referrer" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-gray-50 overflow-hidden">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4 block">Testimonials</span>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">What Parents & Students Say</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, index) => (
              <motion.div 
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 relative"
              >
                <Quote className="absolute top-6 right-8 w-10 h-10 text-blue-50" />
                <div className="flex gap-1 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-orange-400 fill-orange-400" />
                  ))}
                </div>
                <p className="text-gray-600 italic mb-8 leading-relaxed">"{t.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
                    {t.name[0]}
                  </div>
                  <div>
                    <h4 className="font-bold text-blue-900">{t.name}</h4>
                    <p className="text-xs text-gray-500 font-medium">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="section-padding">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4 block">Gallery</span>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">Life at Omkar Tutorials</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {GALLERY_IMAGES.map((img, index) => (
              <motion.div 
                key={index}
                whileHover={{ scale: 1.02 }}
                className="aspect-square rounded-2xl overflow-hidden shadow-md"
              >
                <img src={img} alt="Gallery" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding bg-blue-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <span className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4 block">Contact Us</span>
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-8">Get in Touch with Us</h2>
              
              <div className="space-y-8 mb-12">
                <div className="flex gap-4">
                  <div className="bg-blue-600 p-3 rounded-xl h-fit">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-blue-900 mb-1">Our Address</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      301, Vishnu Apartment, B Wing, Above Ishaan Multi-Speciality Hospital, <br />
                      Near Navkar City, Naigaon East, Vasai-Virar, Maharashtra – 401208
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-blue-600 p-3 rounded-xl h-fit">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-blue-900 mb-1">Call Us</h4>
                    <a href={`tel:${CONTACT_NUMBER}`} className="text-gray-600 text-sm hover:text-blue-600 transition-colors">+91 9987148080</a>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-blue-600 p-3 rounded-xl h-fit">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-blue-900 mb-1">Working Hours</h4>
                    <p className="text-gray-600 text-sm">Mon - Sat: 10:00 AM - 08:00 PM</p>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl overflow-hidden h-64 shadow-lg border-4 border-white">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3763.564757304212!2d72.8488!3d19.3456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDIwJzQ0LjIiTiA3MsKwNTAnNTUuNyJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy"
                  title="Omkar Tutorials Location"
                ></iframe>
              </div>
            </div>

            <div className="bg-white p-8 md:p-12 rounded-[40px] shadow-xl shadow-blue-100">
              <h3 className="text-2xl font-bold text-blue-900 mb-8">Send us a Message</h3>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Full Name</label>
                    <input type="text" placeholder="John Doe" className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:border-blue-600 transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Phone Number</label>
                    <input type="tel" placeholder="+91 00000 00000" className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:border-blue-600 transition-colors" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Message</label>
                  <textarea rows={4} placeholder="How can we help you?" className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:border-blue-600 transition-colors resize-none"></textarea>
                </div>
                <button className="w-full bg-blue-600 text-white py-5 rounded-2xl font-bold text-lg hover:bg-blue-700 transition-all shadow-lg shadow-blue-200">
                  Send Message
                </button>
              </form>
              
              <div className="mt-10 pt-10 border-t border-gray-100 grid grid-cols-2 gap-4">
                <a 
                  href={`tel:${CONTACT_NUMBER}`}
                  className="flex items-center justify-center gap-2 bg-blue-50 text-blue-600 py-4 rounded-2xl font-bold text-sm hover:bg-blue-100 transition-all"
                >
                  <Phone className="w-4 h-4" />
                  Call Now
                </a>
                <a 
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-green-50 text-green-600 py-4 rounded-2xl font-bold text-sm hover:bg-green-100 transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-950 text-white pt-20 pb-10">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="lg:col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <div className="bg-blue-600 p-2 rounded-lg">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold">Omkar Tutorials</span>
              </div>
              <p className="text-blue-100/70 text-sm leading-relaxed mb-8">
                Building strong academic foundations for high school students in Naigaon East. Quality education with personal attention.
              </p>
              <div className="flex gap-4">
                {['facebook', 'instagram', 'twitter', 'youtube'].map(social => (
                  <a key={social} href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-blue-600 transition-all">
                    <span className="sr-only">{social}</span>
                    <div className="w-5 h-5 bg-white/20 rounded-sm" />
                  </a>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-6">Quick Links</h4>
              <ul className="space-y-4">
                {NAV_LINKS.map(link => (
                  <li key={link.name}>
                    <a href={link.href} className="text-blue-100/70 hover:text-white transition-colors text-sm">{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-6">Courses</h4>
              <ul className="space-y-4">
                {COURSES.map(course => (
                  <li key={course.title}>
                    <a href="#courses" className="text-blue-100/70 hover:text-white transition-colors text-sm">{course.title}</a>
                  </li>
                ))}
                <li><a href="#courses" className="text-blue-100/70 hover:text-white transition-colors text-sm">English Speaking</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-6">Contact Info</h4>
              <ul className="space-y-4">
                <li className="flex gap-3 text-sm text-blue-100/70">
                  <MapPin className="w-5 h-5 text-blue-400 shrink-0" />
                  <span>301, Vishnu Apartment, B Wing, Naigaon East, Vasai-Virar, 401208</span>
                </li>
                <li className="flex gap-3 text-sm text-blue-100/70">
                  <Phone className="w-5 h-5 text-blue-400 shrink-0" />
                  <a href={`tel:${CONTACT_NUMBER}`} className="hover:text-white">+91 9987148080</a>
                </li>
                <li className="flex gap-3 text-sm text-blue-100/70">
                  <MessageCircle className="w-5 h-5 text-blue-400 shrink-0" />
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white">WhatsApp Us</a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="pt-10 border-t border-white/10 text-center text-sm text-blue-100/50">
            <p>© {new Date().getFullYear()} Omkar Tutorials. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
