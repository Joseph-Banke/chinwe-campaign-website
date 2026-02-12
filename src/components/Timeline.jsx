const events = [
  {
    year: '2025',
    title: 'Published Research — African Clean Up Initiative',
    description:
      'Authored and published research under the African Clean Up Initiative, contributing original findings on environmental policy and sustainable development across the continent.',
  },
  {
    year: '2024',
    title: 'SAT Score: 1570 / 1600',
    description:
      'Achieved a near-perfect SAT score of 1570, placing in the 99th percentile nationally and demonstrating exceptional aptitude in critical reading, writing, and mathematics.',
  },
  {
    year: '2024',
    title: 'Multiple Ivy League Scholarships',
    description:
      'Earned prestigious scholarships to multiple top-tier universities including Ivy League institutions such as Dartmouth College — a testament to outstanding academic merit and leadership potential.',
  },
  {
    year: '2024',
    title: 'Scholarship Mentorship & Advocacy',
    description:
      'Guided and mentored friends through the scholarship application process, helping them secure full-ride offers to Ivy League universities including Dartmouth and other elite institutions.',
  },
  {
    year: '2023',
    title: 'Self-Taught Machine Learning Engineer',
    description:
      'Independently mastered machine learning and artificial intelligence, building real-world projects and producing multiple educational video tutorials that have helped aspiring engineers learn the field.',
  },
  {
    year: '2023',
    title: 'Research-Driven Career Achievements',
    description:
      'Leveraged a strong research background to secure multiple competitive positions and awarded roles, demonstrating that rigorous academic inquiry translates directly into professional excellence.',
  },
]

export default function Timeline() {
  return (
    <section id="achievements" className="bg-navy py-12 sm:py-16 md:py-[100px] px-4 sm:px-6 md:px-10">
      <div className="max-w-[900px] mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="font-display text-3xl sm:text-4xl md:text-[48px] font-bold text-white mb-4">
            Achievements &amp; Experience
          </h2>
          <div className="w-[100px] h-1 bg-golden mx-auto"></div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <div className="absolute left-5 md:left-1/2 top-0 bottom-0 w-1 bg-golden md:-translate-x-1/2"></div>

          {events.map((event, i) => {
            const isRight = i % 2 === 0
            return (
              <div
                key={i}
                className={`relative mb-8 sm:mb-12 flex ${
                  isRight ? 'md:justify-end' : 'md:justify-start'
                } pl-12 sm:pl-14 md:pl-0`}
                data-aos={isRight ? 'fade-left' : 'fade-right'}
                data-aos-duration="800"
              >
                {/* Dot */}
                <div
                  className={`absolute left-5 md:left-1/2 top-6 sm:top-8 w-4 h-4 sm:w-6 sm:h-6 bg-orange border-[3px] sm:border-4 border-white rounded-full shadow-[0_0_0_4px_rgba(244,160,37,0.3)] -translate-x-1/2 z-10`}
                  data-aos="zoom-in"
                  data-aos-duration="500"
                ></div>

                {/* Card */}
                <div
                  className={`w-full md:w-[45%] ${
                    isRight ? 'md:mr-[55%]' : 'md:ml-[55%]'
                  } bg-white/10 backdrop-blur-sm p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-[15px] shadow-[0_5px_20px_rgba(0,0,0,0.2)] border border-white/10`}
                >
                  <h3 className="font-heading text-base sm:text-lg md:text-xl font-bold text-white mb-2">
                    {event.title}
                  </h3>
                  <p className="font-body text-sm sm:text-base text-subtle leading-[1.6]">
                    {event.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
