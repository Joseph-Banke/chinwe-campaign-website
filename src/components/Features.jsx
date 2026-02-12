const features = [
  {
    icon: 'fa-trophy',
    title: ['WHY ', 'CHINWE'],
    description:
      'A proven track record of academic excellence, research leadership, and a passion for empowering fellow students to reach their full potential.',
    link: '#about',
  },
  {
    icon: 'fa-briefcase',
    title: ['THE ', 'PLATFORM'],
    description:
      'Explore the key initiatives and policies that will transform research culture, support student publications, and build collaborative networks.',
    link: '#platform',
  },
  {
    icon: 'fa-bullseye',
    title: ['OUR ', 'MISSION'],
    description:
      'Discover the vision for LAWSAN research excellence — a future where every law student has the tools and support to produce impactful scholarly work.',
    link: '#about',
  },
]

export default function Features() {
  return (
    <section className="bg-navy py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-10">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
        {features.map((feature, i) => (
          <div
            key={i}
            className="text-center md:text-left group"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay={i * 100}
          >
            <i className={`fas ${feature.icon} text-white text-4xl sm:text-5xl md:text-6xl mb-4 sm:mb-5 block`}></i>
            <h3 className="font-heading text-lg sm:text-xl md:text-2xl font-bold uppercase text-white mb-3 sm:mb-4">
              {feature.title[0]}
              <span className="text-golden">{feature.title[1]}</span>
            </h3>
            <p className="font-body text-subtle text-sm sm:text-base leading-[1.7] max-w-[350px] mx-auto md:mx-0 mb-5">
              {feature.description}
            </p>
            <a
              href={feature.link}
              className="font-heading text-sm uppercase text-white hover:text-golden transition-colors duration-300 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-golden after:transition-all after:duration-300 hover:after:w-full inline-block"
            >
              Read More <span className="ml-1">&rarr;</span>
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}
