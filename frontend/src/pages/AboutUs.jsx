import React from 'react';
import CallToAction from '../components/CallToAction';

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
    // name: 'Dr. Sarah Johnson',
    // role: 'Academic Director',
    // desc: 'Ph.D. in Literature with 15+ years of academic writing experience.',
    // img: 'https://randomuser.me/api/portraits/women/44.jpg',
    name: 'Elsa Jeans',
    role: 'Academic Director',
    desc: 'Ph.D. in porn with 15+ years of academic writing experience.',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsFKtnyqC3l54wrjAVXgj39hlC-3n7-d44_g&s',
  },
  {
    // name: 'Prof. Michael Chen',
    // role: 'Research Head',
    // desc: 'Expert in research methodology with numerous published papers.',
    // img: 'https://randomuser.me/api/portraits/men/32.jpg',
    name: 'Mia Malkova',
    role: 'Music Director',
    desc: 'Ph.D. in porn with 10+ years of academic writing experience.',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd9h_jFuf447IFw_FhbjcQTPfAmBTGxIsUeg&s',
  },
  {
    // name: 'Dr. Emily Brown',
    // role: 'Quality Assurance',
    // desc: 'Ensures the highest standards of academic writing across all projects.',
    // img: 'https://randomuser.me/api/portraits/women/65.jpg',
     name: 'Molly Little',
    role: 'Movie Director',
    desc: 'Ph.D. in porn with 4+ years of academic writing experience.',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUBpcSQuB5jxwEyVy9gq14T-skNQ3F7HWFwQ&s',
  },
  {
    // name: 'Prof. David Wilson',
    // role: 'Subject Expert',
    // desc: 'Specializes in multiple academic disciplines with 12+ years experience.',
    // img: 'https://randomuser.me/api/portraits/men/41.jpg',
     name: 'Comatozze',
    role: 'Freshie',
    desc: 'Graduate From Fast Nuces',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROMOLesQBVwKDj9V4_bECyKh9AXnuchNuCeg&s',
  },
];

const values = [
  {
    icon: (
      <svg className="w-8 h-8 mx-auto mb-2 text-red-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>
    ),
    title: 'Excellence',
    desc: 'We strive for academic excellence in every project we undertake, ensuring the highest quality standards.'
  },
  {
    icon: (
      <svg className="w-8 h-8 mx-auto mb-2 text-red-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
    ),
    title: 'Timeliness',
    desc: 'Meeting deadlines is crucial in academia. We ensure punctual delivery without compromising quality.'
  },
  {
    icon: (
      <svg className="w-8 h-8 mx-auto mb-2 text-red-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 12l2 2l4-4"/><circle cx="12" cy="12" r="10"/></svg>
    ),
    title: 'Integrity',
    desc: 'Our work is original, plagiarism-free, and adheres to academic integrity standards.'
  },
  {
    icon: (
      <svg className="w-8 h-8 mx-auto mb-2 text-red-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 2l2 7h7l-5.5 4 2 7-5.5-4-5.5 4 2-7L3 9h7z"/></svg>
    ),
    title: 'Expertise',
    desc: 'Our team consists of PhD-qualified experts across various academic disciplines.'
  },
];

const AboutUs = () => {
  return (
    <div className="bg-white w-full">
      {/* Hero Section */}
      <section className="bg-red-600 text-white py-20 relative">
        <div className="max-w-7xl mx-auto px-4 flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Grade Boost Digitals</h1>
          <p className="text-xl md:text-2xl font-medium">Your Trusted Partner in Academic Excellence</p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
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
      </section>

      {/* Stats Section */}
      <section className="bg-red-600 py-12">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center justify-center text-white">
              {stat.icon}
              <div className="text-3xl font-bold mb-1">{stat.label}</div>
              <div className="text-lg font-medium">{stat.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-gray-800">Our Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {values.map((value, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-8 text-center shadow-sm">
                <div>{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-gray-800">Our Leadership Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {team.map((member, i) => (
              <div key={i} className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center">
                <img src={member.img} alt={member.name} className="w-28 h-28 rounded-full object-cover mb-4" />
                <div className="text-lg font-semibold text-gray-900">{member.name}</div>
                <div className="text-red-600 font-medium mb-2">{member.role}</div>
                <div className="text-gray-600 text-sm">{member.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <CallToAction />
    </div>
  );
};

export default AboutUs; 