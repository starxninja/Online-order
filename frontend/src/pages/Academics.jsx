import React, { useState } from 'react';
import AcademicCard from '../components/AcademicCard';
import AcademicModal from '../components/AcademicModal';
import CallToAction from '../components/CallToAction';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const categories = [
  { key: 'all', label: 'All Services' },
  { key: 'management', label: 'Management' },
  { key: 'finance', label: 'Finance' },
  { key: 'it', label: 'Information Technology' },
  // Thesis filter removed
];

const academics = [
  // IT
  {
    category: 'it',
    title: 'Software Development',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80',
    description: 'Expert writing support for software development topics and documentation.',
    details: {
      price: '$30/page',
      benefits: ['Code documentation', 'Project reports', 'Best practices', 'Modern tech stack'],
      description: 'Comprehensive writing and documentation for software development projects, including code explanations, project reports, and more.'
    },
    demoUrl: 'https://with-andy.com/',
    demoLabel: 'Live Demo',
  },
  {
    category: 'it',
    title: 'Software Testing',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80',
    description: 'Professional writing services for software testing and QA projects.',
    details: {
      price: '$32/page',
      benefits: ['Test plans', 'Automation', 'Bug reports', 'QA documentation'],
      description: 'Expert writing for software testing projects, including test plans, automation, and bug reporting.'
    },
    demoUrl: 'https://drive.google.com/file/d/1RQiFcVas_B0DiJ75xCat2YV6Z1XVqE-V/view?usp=drive_link',
    demoLabel: 'Live Demo',
    highlight: true
  },
  {
    category: 'it',
    title: 'Cybersecurity',
    image: 'https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=600&q=80',
    description: 'Expert writing support for cybersecurity topics and analysis.',
    details: {
      price: '$35/page',
      benefits: ['Security analysis', 'Threat reports', 'Best practices', 'Case studies'],
      description: 'In-depth writing for cybersecurity topics, including threat analysis, security best practices, and more.'
    },
    demoUrl: 'https://drive.google.com/file/d/1aAhDha2ZMMVSGKO60TlOmh9Xbk8RIvo6/view?usp=drive_link',
    demoLabel: 'Live Demo',
    highlight: true
  },
  {
    category: 'it',
    title: 'Cloud Computing Solutions',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
    description: 'Comprehensive support for cloud architecture and migration.',
    details: {
      price: '$28/page',
      benefits: ['Cloud migration', 'Architecture design', 'Cost optimization'],
      description: 'Writing and consulting for cloud computing projects, including migration, architecture, and optimization.'
    },
    demoUrl: 'https://resilient-moonbeam-529a27.netlify.app/',
    demoLabel: 'Open Demo',
  },
  {
    category: 'it',
    title: 'IT Consulting',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80',
    description: 'Strategic IT consulting to align technology with business objectives.',
    details: {
      price: '$30/page',
      benefits: ['IT strategy', 'Business alignment', 'Tech roadmaps'],
      description: 'Consulting and writing for IT strategy, business alignment, and technology roadmaps.'
    },
    demoUrl: 'https://drive.google.com/file/d/1mOa6XMR4HIJA_5AW1G9kVPBNbZGVZbj4/view?usp=drive_link',
    demoLabel: 'Live Demo',
  },
  {
    category: 'it',
    title: 'Network Infrastructure Optimization',
    image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80',
    description: 'Enhance and optimize your network infrastructure for peak performance.',
    details: {
      price: '$29/page',
      benefits: ['Network design', 'Performance tuning', 'Security'],
      description: 'Writing and consulting for network infrastructure, including design, optimization, and security.'
    }
  },
  // Management
  {
    category: 'management',
    title: 'Business Strategy Analysis',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80',
    description: 'Expert analysis and writing support for business strategy cases and reports.',
    details: {
      price: '$25/page',
      benefits: ['Expert business analysts', 'Strategic frameworks', 'Real-world case studies', 'Industry analysis'],
      description: 'Comprehensive support for developing and analyzing business cases, strategic management reports, and organizational studies.'
    },
    demoUrl: 'https://drive.google.com/file/d/12LIFFyUYPVpAWY-dXJhftbHaNztioMwc/view?usp=drive_link',
    demoLabel: 'Live Demo',
  },
  {
    category: 'management',
    title: 'Operations Management',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
    description: 'Comprehensive analysis of operations management concepts and practices.',
    details: {
      price: '$27/page',
      benefits: ['Process optimization', 'Supply chain', 'Lean management'],
      description: 'Writing and analysis for operations management, including process optimization and supply chain.'
    },
    highlight: true
  },
  {
    category: 'management',
    title: 'Project Management',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80',
    description: 'Professional writing support for project management assignments and case studies.',
    details: {
      price: '$26/page',
      benefits: ['Project planning', 'Case studies', 'Agile/Scrum'],
      description: 'Support for project management assignments, including planning, case studies, and agile methodologies.'
    }
  },
  {
    category: 'management',
    title: 'Change Management Consulting',
    image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80',
    description: 'Guidance on implementing effective change management initiatives.',
    details: {
      price: '$28/page',
      benefits: ['Change frameworks', 'Stakeholder management', 'Implementation plans'],
      description: 'Consulting and writing for change management, including frameworks and stakeholder management.'
    }
  },
  {
    category: 'management',
    title: 'Leadership Development Program',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80',
    description: 'Tailored programs to enhance leadership skills and competencies.',
    details: {
      price: '$29/page',
      benefits: ['Leadership skills', 'Competency development', 'Workshops'],
      description: 'Programs and writing for leadership development, including skills, competencies, and workshops.'
    },
    demoUrl: 'https://docs.google.com/document/d/1QsXgjv-Mh_O7dN4ebibsS5-btXcFPM-h/edit?tab=t.0#heading=h.715vutkcvww7',
    demoLabel: 'Live Demo',
  },
  {
    category: 'management',
    title: 'Organizational Behavior Analysis',
    image: 'https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=600&q=80',
    description: 'Insightful analysis of organizational dynamics and culture.',
    details: {
      price: '$27/page',
      benefits: ['Culture analysis', 'Team dynamics', 'Organizational change'],
      description: 'Writing and analysis for organizational behavior, including culture and team dynamics.'
    }
  },
  // Finance
  {
    category: 'finance',
    title: 'Financial Analysis',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80',
    description: 'In-depth financial analysis and reporting services.',
    details: {
      price: '$28/page',
      benefits: ['Financial modeling', 'Reporting', 'Forecasting'],
      description: 'Writing and analysis for financial analysis, including modeling, reporting, and forecasting.'
    },
    demoUrl: 'https://drive.google.com/file/d/1MTJlf7t47fwbZxRi9JylgRFUuoF4Y1e2/view?usp=drive_link',
    demoLabel: 'Live Demo',
  },
  {
    category: 'finance',
    title: 'Investment Banking',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
    description: 'Expert writing support for investment banking topics and analysis.',
    details: {
      price: '$32/page',
      benefits: ['M&A', 'Valuation', 'Deal structuring'],
      description: 'Support for investment banking topics, including M&A, valuation, and deal structuring.'
    }
  },
  {
    category: 'finance',
    title: 'Corporate Finance',
    image: 'https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=600&q=80',
    description: 'Comprehensive corporate finance writing and analysis services.',
    details: {
      price: '$30/page',
      benefits: ['Capital budgeting', 'Financial planning', 'Risk analysis'],
      description: 'Writing and analysis for corporate finance, including budgeting, planning, and risk analysis.'
    },
    highlight: true
  },
  {
    category: 'finance',
    title: 'Tax Consulting',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
    description: 'Expert guidance on tax planning and compliance.',
    details: {
      price: '$27/page',
      benefits: ['Tax planning', 'Compliance', 'Filing support'],
      description: 'Consulting and writing for tax planning, compliance, and filing support.'
    }
  },
  {
    category: 'finance',
    title: 'Audit and Assurance',
    image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80',
    description: 'Professional audit services to ensure financial integrity and transparency.',
    details: {
      price: '$29/page',
      benefits: ['Audit reports', 'Internal controls', 'Transparency'],
      description: 'Writing and consulting for audit and assurance, including reports and internal controls.'
    }
  },
  {
    category: 'finance',
    title: 'Financial Forecasting',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80',
    description: 'Data-driven forecasting models to predict future financial performance.',
    details: {
      price: '$30/page',
      benefits: ['Forecasting models', 'Data analysis', 'Scenario planning'],
      description: 'Writing and analysis for financial forecasting, including models, data analysis, and scenario planning.'
    }
  },
  // Thesis (only one entry)
  {
    category: 'thesis',
    title: 'Dissertation/Thesis Writing',
    image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80',
    description: 'Professional dissertation and thesis writing services for all academic levels.',
    details: {
      price: '$40/page',
      benefits: ['Original research', 'Expert guidance', 'Formatting & editing', 'Plagiarism-free'],
      description: 'Comprehensive support for dissertation and thesis writing, including research, writing, formatting, and editing for all academic levels.'
    },
    demoUrl: 'https://docs.google.com/document/d/1v68-F8XJKRDbHicRP02XGySCmll3kD8K/edit?usp=drive_web&ouid=111743877213374431791&rtpof=true',
    demoLabel: 'Live Demo',
    highlight: true
  },
];

const Academics = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [modalData, setModalData] = useState(null);

  const filtered = selectedCategory === 'all'
    ? academics
    : academics.filter(a => a.category === selectedCategory);

  // For the main heading (e.g., Information Technology, Management, etc.)
  const mainCategory = selectedCategory === 'all' ? '' : categories.find(c => c.key === selectedCategory)?.label;

  return (
    <div className="bg-white w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-secondary text-white py-20 relative">
        <div className="max-w-7xl mx-auto px-4 flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Academics</h1>
          <p className="text-xl md:text-2xl font-medium">Our categories of academic writing services</p>
        </div>
      </section>

      {/* Filter Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
        className="max-w-7xl mx-auto px-4 py-8 flex flex-wrap gap-4 justify-center"
      >
        {categories.map(cat => (
          <motion.button
            key={cat.key}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.97 }}
            className={`px-6 py-3 rounded-full font-semibold text-lg shadow transition-colors duration-300 ${selectedCategory === cat.key ? 'bg-gradient-to-r from-primary to-accent text-white' : 'bg-gray-100 text-gray-800 hover:bg-accent/10'}`}
            onClick={() => setSelectedCategory(cat.key)}
          >
            {cat.label}
          </motion.button>
        ))}
      </motion.div>

      {/* Main Category Heading */}
      {mainCategory && (
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl font-bold text-center mb-8"
        >
          {mainCategory}
        </motion.h2>
      )}

      {/* Cards Carousel/Stack */}
      <div className="max-w-7xl mx-auto px-4 pb-16">
        {/* Carousel for md and up */}
        <div className="hidden md:block">
          <Slider
            dots={true}
            infinite={true}
            speed={500}
            slidesToShow={3}
            slidesToScroll={1}
            responsive={[
              { breakpoint: 1024, settings: { slidesToShow: 2 } },
              { breakpoint: 768, settings: { slidesToShow: 1 } },
            ]}
            arrows={false}
            autoplay={true}
            autoplaySpeed={6000}
          >
            {filtered.map((item, idx) => (
              <div key={item.title} className="px-4">
                <AcademicCard
                  image={item.image}
                  title={item.title}
                  description={item.description}
                  highlight={item.highlight}
                  onReadMore={() => setModalData(item)}
                />
              </div>
            ))}
          </Slider>
        </div>
        {/* Vertical stack for mobile */}
        <div className="block md:hidden space-y-8">
          {filtered.map((item, idx) => (
            <AcademicCard
              key={item.title}
              image={item.image}
              title={item.title}
              description={item.description}
              highlight={item.highlight}
              onReadMore={() => setModalData(item)}
            />
          ))}
        </div>
      </div>

      {/* Modal */}
      <AcademicModal
        open={!!modalData}
        onClose={() => setModalData(null)}
        title={modalData?.title}
        image={modalData?.image}
        description={modalData?.details?.description}
        price={modalData?.details?.price}
        benefits={modalData?.details?.benefits}
        demoUrl={modalData?.demoUrl}
        demoLabel={modalData?.demoLabel}
      />

      {/* Call to Action (reuse) */}
      <CallToAction />
    </div>
  );
};

export default Academics; 