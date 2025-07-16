import React from 'react';
import WhyChooseUs from '../components/WhyChooseUs';
import CallToAction from '../components/CallToAction';
import { motion } from 'framer-motion';
import heroBg from '../assets/book-bg.jpg'; // Updated image

const stats = [
  { icon: (
      <svg className="w-10 h-10 mx-auto mb-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
    ), label: '50+', desc: 'Expert Writers' },
  { icon: (
      <svg className="w-10 h-10 mx-auto mb-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 19.5A2.5 2.5 0 0 0 6.5 22h11a2.5 2.5 0 0 0 2.5-2.5V6a2 2 0 0 0-2-2h-1V2h-2v2H9V2H7v2H6a2 2 0 0 0-2 2v13.5z"/></svg>
    ), label: '10K+', desc: 'Projects Completed' },
  { icon: (
      <svg className="w-10 h-10 mx-auto mb-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 17.75l-6.16 3.24 1.18-6.88L2 9.76l6.92-1L12 2.5l3.08 6.26 6.92 1-5.02 4.35 1.18 6.88z"/></svg>
    ), label: '98%', desc: 'Client Satisfaction' },
  { icon: (
      <svg className="w-10 h-10 mx-auto mb-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 8v4l3 3"/><circle cx="12" cy="12" r="10"/></svg>
    ), label: '24/7', desc: 'Support Available' },
];

const team = [
  {
    name: 'Dr. Sarah Johnson',
    role: 'Academic Director',
    desc: 'Ph.D. in Literature with 15+ years of academic writing experience.',
    img: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    name: 'Prof. Michael Chen',
    role: 'Research Head',
    desc: 'Expert in research methodology with numerous published papers.',
    img: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    name: 'Dr. Emily Brown',
    role: 'Quality Assurance',
    desc: 'Ensures the highest standards of academic writing across all projects.',
    img: 'https://randomuser.me/api/portraits/women/65.jpg',
  },
  {
    name: 'Prof. David Wilson',
    role: 'Subject Expert',
    desc: 'Specializes in multiple academic disciplines with 12+ years experience.',
    img: 'https://randomuser.me/api/portraits/men/41.jpg',
  },
];

// Timeline data
const timeline = [
  { year: '2015', event: 'Founded as a small team of academic writers.' },
  { year: '2017', event: 'Expanded services to include research and thesis writing.' },
  { year: '2019', event: 'Reached 5,000+ completed projects.' },
  { year: '2021', event: 'Launched 24/7 support and global operations.' },
  { year: '2023', event: 'Rebranded as Globalassigntech with a new digital platform.' },
];

// Timeline component (inline for now)
const Timeline = () => (
  <div className="relative max-w-3xl mx-auto my-16">
    <div className="border-l-4 border-accent absolute h-full left-6 top-0"></div>
    <ul className="space-y-12 pl-16">
      {timeline.map((item, i) => (
        <motion.li
          key={i}
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: i * 0.15 }}
          className="relative"
        >
          <div className="absolute left-[-2.25rem] top-1.5 w-8 h-8 rounded-full bg-white border-4 border-accent flex items-center justify-center font-bold text-primary text-lg shadow-md">
            {item.year}
          </div>
          <div className="bg-white rounded-xl shadow p-6 ml-2 text-gray-800 font-medium text-base">
            {item.event}
          </div>
        </motion.li>
      ))}
    </ul>
  </div>
);

const AboutUs = () => {
  return (
    <div className="bg-white w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-secondary text-white py-20 relative">
        <img src={heroBg} alt="Books background" className="absolute inset-0 w-full h-full object-cover opacity-30 z-0" />
        {/* Make the overlay semi-transparent to reveal the background image */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-secondary/70 z-0"></div>
        <div className="max-w-7xl mx-auto px-4 flex flex-col items-center justify-center text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Globalassigntech</h1>
          <p className="text-xl md:text-2xl font-medium">Your Trusted Partner in Academic Excellence</p>
        </div>
      </section>

      {/* Our Story */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
        className="py-16 bg-white"
      >
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">Our Story</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Founded in 2015, Grade Boost Digitals has grown from a small team of dedicated academic writers to a comprehensive academic writing service trusted by students worldwide. Our journey began with a simple mission: to help students achieve academic excellence through quality writing support.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Over the years, we've assembled a team of highly qualified academic professionals, each bringing unique expertise and experience to our services. Our writers hold advanced degrees from prestigious universities and have extensive experience in academic writing across various disciplines.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Today, we pride ourselves on maintaining the highest standards of academic integrity while providing personalized support to each student. Our commitment to quality, originality, and timely delivery has made us a trusted partner in academic success.
          </p>
        </div>
      </motion.section>

      {/* Timeline Section */}
      <Timeline />

      {/* Stats Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="bg-gradient-to-br from-primary to-accent py-12"
      >
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="flex flex-col items-center justify-center text-white"
            >
              {stat.icon}
              <div className="text-3xl font-bold mb-1">{stat.label}</div>
              <div className="text-lg font-medium">{stat.desc}</div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Our Values (reuse component) */}
      <WhyChooseUs />

      {/* Leadership Team */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-gray-800">Our Leadership Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {team.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                whileHover={{ scale: 1.07, boxShadow: '0 8px 32px 0 rgba(16,185,129,0.15)' }}
                className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center border-2 border-transparent hover:border-accent hover:shadow-xl transition-all duration-300 group"
              >
                <img src={member.img} alt={member.name} className="w-28 h-28 rounded-full object-cover mb-4 border-4 border-accent/20 group-hover:border-accent transition-all duration-300" />
                <div className="text-lg font-semibold text-gray-900">{member.name}</div>
                <div className="text-accent font-medium mb-2">{member.role}</div>
                <div className="text-gray-600 text-sm">{member.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action (reuse component) */}
      <CallToAction />
    </div>
  );
};

export default AboutUs; 