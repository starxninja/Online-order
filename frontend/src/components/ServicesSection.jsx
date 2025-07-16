import React from 'react';
import Slider from 'react-slick';
import { useInView } from 'react-intersection-observer';
import ServiceCard from './ServiceCard';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AcademicCapIcon, DocumentTextIcon, BeakerIcon, BookOpenIcon, ClipboardDocumentListIcon, PencilSquareIcon } from '@heroicons/react/24/outline';

const services = [
  {
    icon: <AcademicCapIcon className="w-8 h-8" />, title: 'Dissertation Writing', description: 'Expert guidance and writing support for your dissertation, from proposal to final submission.', price: 'Starting at $25/page'
  },
  {
    icon: <PencilSquareIcon className="w-8 h-8" />, title: 'Essay Writing', description: 'Professional essay writing services for all academic levels and subjects.', price: 'Starting at $15/page'
  },
  {
    icon: <BeakerIcon className="w-8 h-8" />, title: 'Research Papers', description: 'In-depth research and writing for academic papers with proper citations and formatting.', price: 'Starting at $20/page'
  },
  {
    icon: <ClipboardDocumentListIcon className="w-8 h-8" />, title: 'Literature Reviews', description: 'Comprehensive literature reviews with critical analysis and synthesis.', price: 'Starting at $22/page'
  },
  {
    icon: <BookOpenIcon className="w-8 h-8" />, title: 'Thesis Writing', description: 'Full thesis writing and editing services with expert academic writers.', price: 'Starting at $28/page'
  },
  {
    icon: <DocumentTextIcon className="w-8 h-8" />, title: 'Review Papers', description: 'Detailed review papers and article critiques across all disciplines.', price: 'Starting at $18/page'
  }
];

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 1200,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    { breakpoint: 1024, settings: { slidesToShow: 2 } },
    { breakpoint: 768, settings: { slidesToShow: 1 } },
  ],
  arrows: false,
  autoplay: true,
  autoplaySpeed: 1000,
};

const ServicesSection = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section ref={ref} className="py-20 bg-neutral w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">Our Creative Writing Services</h2>
          <p className="text-xl text-text max-w-3xl mx-auto">
            Discover a new level of academic excellence with our innovative, tailored writing solutions.
          </p>
        </div>
        {services.length === 0 ? (
          <div className="text-center text-text/60 py-12">No services available at the moment.</div>
        ) : (
          <>
            {/* Carousel for md and up */}
            <div className="hidden md:block">
              <Slider {...sliderSettings}>
                {services.map((service, index) => (
                  <div key={index} className="px-4">
                    <ServiceCard
                      icon={service.icon}
                      title={service.title}
                      description={service.description}
                      price={service.price}
                      inView={inView}
                      index={index}
                    />
                  </div>
                ))}
              </Slider>
            </div>
            {/* Vertical stack for mobile */}
            <div className="block md:hidden space-y-8">
              {services.map((service, index) => (
                <ServiceCard
                  key={index}
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  price={service.price}
                  inView={inView}
                  index={index}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default ServicesSection;