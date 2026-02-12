const platforms = [
  {
    icon: 'fa-bullseye',
    title: 'Enhanced Research Culture',
    description:
      'Foster a vibrant research environment by organizing regular seminars, peer review sessions, and research methodology workshops that inspire law students to pursue scholarly excellence.',
  },
  {
    icon: 'fa-book-open',
    title: 'Publication Support',
    description:
      'Streamline the publication process by creating mentorship pipelines, editorial support teams, and partnerships with legal journals to help students publish their research nationally and internationally.',
  },
  {
    icon: 'fa-handshake',
    title: 'Collaborative Networks',
    description:
      'Build strong partnerships with legal practitioners, academics, and research institutions to create opportunities for interdisciplinary collaboration and real-world research impact.',
  },
  {
    icon: 'fa-lightbulb',
    title: 'Innovation & Excellence',
    description:
      'Introduce innovative research tools, digital resource libraries, and recognition programs that reward outstanding student research and drive a culture of continuous academic improvement.',
  },
]

export default function Platform() {
  return (
    <section id="platform" className="bg-white py-12 sm:py-16 md:py-[100px] px-4 sm:px-6 md:px-10">
      <div className="max-w-[1200px] mx-auto">
        {/* Section Title */}
        <div className="text-center mb-14" data-aos="fade-up">
          <h2 className="font-display text-3xl sm:text-4xl md:text-[48px] font-bold text-navy mb-4">
            Vision &amp; Platform
          </h2>
          <div className="w-[100px] h-1 bg-golden mx-auto"></div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {platforms.slice(0, 3).map((item, i) => (
            <div
              key={i}
              className="bg-light p-6 sm:p-8 md:p-10 rounded-xl sm:rounded-[15px] shadow-[0_5px_20px_rgba(0,0,0,0.08)] transition-all duration-400 hover:-translate-y-2.5 hover:shadow-[0_15px_40px_rgba(0,0,0,0.15)]"
              data-aos="zoom-in"
              data-aos-duration="800"
              data-aos-delay={i * 150}
            >
              <i className={`fas ${item.icon} text-orange text-4xl sm:text-5xl mb-4 sm:mb-5 block`}></i>
              <h3 className="font-heading text-xl md:text-[22px] font-bold text-navy mb-4">
                {item.title}
              </h3>
              <p className="font-body text-base text-muted leading-[1.7]">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Fourth card centered */}
        <div className="mt-8 flex justify-center">
          <div
            className="bg-light p-6 sm:p-8 md:p-10 rounded-xl sm:rounded-[15px] shadow-[0_5px_20px_rgba(0,0,0,0.08)] transition-all duration-400 hover:-translate-y-2.5 hover:shadow-[0_15px_40px_rgba(0,0,0,0.15)] max-w-full sm:max-w-[400px] w-full"
            data-aos="zoom-in"
            data-aos-duration="800"
            data-aos-delay="450"
          >
            <i className={`fas ${platforms[3].icon} text-orange text-5xl mb-5 block`}></i>
            <h3 className="font-heading text-xl md:text-[22px] font-bold text-navy mb-4">
              {platforms[3].title}
            </h3>
            <p className="font-body text-base text-muted leading-[1.7]">{platforms[3].description}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
