import { useState, useEffect, useCallback } from 'react'

const slides = [
  {
    headline: ['CREATING A FUTURE', 'FOR ', 'EVERY', ' STUDENT RESEARCHER'],
    text: 'Committed to building a vibrant research ecosystem where every law student has the tools, mentorship, and platform to produce impactful scholarly work.',
  },
  {
    headline: ['EXCELLENCE THROUGH', 'COLLABORATIVE ', 'RESEARCH', ''],
    text: 'Fostering partnerships between students, faculty, and legal practitioners to elevate the quality and reach of student-led research initiatives.',
  },
  {
    headline: ['EMPOWERING LAW', 'STUDENTS WITH ', 'RESEARCH', ' SKILLS'],
    text: 'Introducing comprehensive training programs, workshops, and resources to equip every law student with world-class research capabilities.',
  },
  {
    headline: ['BUILDING BRIDGES', 'TO ', 'ACADEMIC', ' SUCCESS'],
    text: 'Creating pathways for publication, recognition, and professional growth through structured research mentorship and support systems.',
  },
]

export default function Hero() {
  const [current, setCurrent] = useState(0)

  const next = useCallback(() => setCurrent((c) => (c + 1) % slides.length), [])
  const prev = useCallback(() => setCurrent((c) => (c - 1 + slides.length) % slides.length), [])

  useEffect(() => {
    const interval = setInterval(next, 6000)
    return () => clearInterval(interval)
  }, [next])

  const slide = slides[current]

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center md:bg-fixed"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1920&q=80')`,
        }}
      />
      <div className="absolute inset-0 bg-navy/[0.88]" />

      {/* Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 md:px-10 w-full pt-20 pb-12 sm:pt-24 sm:pb-16 md:pt-0 md:pb-0">
        <div className="flex flex-col md:flex-row items-center gap-8 sm:gap-10 md:gap-16">
          {/* Left: Photo */}
          <div className="w-full md:w-[40%] flex flex-col items-center" data-aos="fade-right" data-aos-duration="1000">
            <div className="relative max-w-[280px] sm:max-w-[350px] md:max-w-[450px] w-full">
              <div className="border-[10px] sm:border-[15px] border-white shadow-[0_20px_60px_rgba(0,0,0,0.3)] aspect-[4/5] bg-royal/30 overflow-hidden">
                <img
                  src="/images/candidate-photo.jpg"
                  alt="Igweonu Chinwe Praise - LAWSAN Research Committee Candidate"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
            {/* Accent Bar */}
            <div
              className="w-full max-w-[280px] sm:max-w-[350px] md:max-w-[450px] py-4 sm:py-5 px-3 sm:px-4 text-center"
              style={{ background: 'linear-gradient(135deg, #ff5722 0%, #f4a025 100%)' }}
            >
              <p className="font-heading text-white font-bold uppercase text-xs sm:text-sm md:text-base tracking-[0.1em] sm:tracking-[0.15em]">
                Publishing Success
              </p>
            </div>
          </div>

          {/* Right: Text */}
          <div className="w-full md:w-[60%]" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200">
            <div className="min-h-[180px] sm:min-h-[200px] md:min-h-[280px]">
              <h1
                key={current}
                className="font-display text-[28px] sm:text-4xl md:text-5xl lg:text-[64px] font-bold text-white leading-[1.2] animate-[fadeInUp_0.6s_ease]"
              >
                {slide.headline[0]}
                <br />
                {slide.headline[1]}
                <span className="text-golden">{slide.headline[2]}</span>
                {slide.headline[3]}
              </h1>
              <p
                key={`text-${current}`}
                className="font-body text-white/90 text-sm sm:text-base md:text-lg leading-[1.7] sm:leading-[1.8] mt-4 sm:mt-6 md:mt-8 max-w-[600px] animate-[fadeInUp_0.6s_ease_0.15s_both]"
              >
                {slide.text}
              </p>
            </div>

            {/* Navigation Arrows */}
            <div className="flex items-center gap-3 sm:gap-4 mt-6 sm:mt-8" data-aos="fade-up" data-aos-delay="400">
              <button
                onClick={prev}
                className="w-10 h-10 sm:w-[50px] sm:h-[50px] flex items-center justify-center bg-white/20 hover:bg-white/40 text-white rounded-full transition-all duration-300 cursor-pointer"
                aria-label="Previous slide"
              >
                <i className="fas fa-chevron-left"></i>
              </button>
              <button
                onClick={next}
                className="w-10 h-10 sm:w-[50px] sm:h-[50px] flex items-center justify-center bg-white/20 hover:bg-white/40 text-white rounded-full transition-all duration-300 cursor-pointer"
                aria-label="Next slide"
              >
                <i className="fas fa-chevron-right"></i>
              </button>
              <div className="flex gap-2 ml-4">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
                      i === current ? 'bg-golden scale-125' : 'bg-white/40'
                    }`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Keyframes */}
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  )
}
