import React from 'react';
import DetailedServiceCard from './DetailedServiceCard';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const DetailedServicesSection = () => {
  const services = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-graduation-cap w-8 h-8 text-[#D32F2F]"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path><path d="M22 10v6"></path><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path></svg>
      ),
      title: "Dissertation Writing",
      description: "Expert guidance and writing support for your dissertation, from proposal to final submission.",
      price: "$25/page",
      features: [
        "In-depth research",
        "Professional formatting",
        "Free revisions",
        "Plagiarism check"
      ]
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pen-tool w-8 h-8 text-[#D32F2F]"><path d="m12 19 7-7 3 3-7 7-3-3z"></path><path d="m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="m2 2 7.586 7.586"></path><circle cx="11" cy="11" r="2"></circle></svg>
      ),
      title: "Essay Writing",
      description: "Professional essay writing services for all academic levels and subjects.",
      price: "$15/page",
      features: [
        "Original content",
        "Any subject",
        "24/7 support",
        "Quick delivery"
      ]
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-microscope w-8 h-8 text-[#D32F2F]"><path d="M6 18h8"></path><path d="M3 22h18"></path><path d="M14 22a7 7 0 1 0 0-14h-1"></path><path d="M9 14h2"></path><path d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z"></path><path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3"></path></svg>
      ),
      title: "Research Papers",
      description: "In-depth research and writing for academic papers with proper citations and formatting.",
      price: "$20/page",
      features: [
        "Thorough research",
        "APA/MLA formatting",
        "Expert writers",
        "Quality assured"
      ]
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-text w-8 h-8 text-[#D32F2F]"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
      ),
      title: "Literature Reviews",
      description: "Comprehensive literature reviews with critical analysis and synthesis.",
      price: "$22/page",
      features: [
        "Critical analysis",
        "Multiple sources",
        "Clear synthesis",
        "Expert insights"
      ]
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-text w-8 h-8 text-[#D32F2F]"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
      ),
      title: "Thesis Writing",
      description: "Full thesis writing and editing services with expert academic writers.",
      price: "$28/page",
      features: [
        "Original research",
        "Expert guidance",
        "Full support",
        "Quality guarantee"
      ]
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-book-open w-8 h-8 text-[#D32F2F]"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
      ),
      title: "Review Papers",
      description: "Detailed review papers and article critiques across all disciplines.",
      price: "$18/page",
      features: [
        "Detailed analysis",
        "Critical evaluation",
        "Clear structure",
        "Professional tone"
      ]
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-text w-8 h-8 text-[#D32F2F]"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
      ),
      title: "Case Studies",
      description: "In-depth case study analysis and writing services for various disciplines.",
      price: "$23/page",
      features: [
        "Thorough analysis",
        "Clear methodology",
        "Professional writing",
        "Expert review"
      ]
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-message-square w-8 h-8 text-[#D32F2F]"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
      ),
      title: "Editing & Proofreading",
      description: "Professional editing and proofreading services to perfect your academic work.",
      price: "$12/page",
      features: [
        "Grammar check",
        "Style improvement",
        "Format fixing",
        "Quality enhancement"
      ]
    }
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7 }}
      className="py-20 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Carousel for md and up */}
        <div className="hidden md:block">
          <Slider
            dots={true}
            infinite={true}
            speed={1200}
            slidesToShow={4}
            slidesToScroll={1}
            responsive={[
              { breakpoint: 1280, settings: { slidesToShow: 3 } },
              { breakpoint: 1024, settings: { slidesToShow: 2 } },
              { breakpoint: 768, settings: { slidesToShow: 1 } },
            ]}
            arrows={false}
            autoplay={true}
            autoplaySpeed={1000}
          >
            {services.map((service, index) => (
              <div key={index} className="px-4">
                <DetailedServiceCard
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  price={service.price}
                  features={service.features}
                  index={index}
                />
              </div>
            ))}
          </Slider>
        </div>
        {/* Vertical stack for mobile */}
        <div className="block md:hidden space-y-8">
          {services.map((service, index) => (
            <DetailedServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              price={service.price}
              features={service.features}
              index={index}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default DetailedServicesSection;