export default function About() {
  return (
    <section id="about" className="bg-light py-12 sm:py-16 md:py-[100px] px-4 sm:px-6 md:px-10">
      <div className="max-w-[1200px] mx-auto">
        {/* Section Title */}
        <div className="text-center mb-14" data-aos="fade-up">
          <h2 className="font-display text-3xl sm:text-4xl md:text-[48px] font-bold text-navy mb-4">
            About Chinwe
          </h2>
          <div className="w-[100px] h-1 bg-golden mx-auto"></div>
        </div>

        {/* Two columns */}
        <div className="flex flex-col md:flex-row items-start gap-8 sm:gap-10 md:gap-14">
          {/* Image */}
          <div className="w-full md:w-[40%]" data-aos="fade-right" data-aos-duration="1000">
            <div className="max-w-[280px] sm:max-w-[350px] md:max-w-[400px] mx-auto border-4 sm:border-[5px] border-white shadow-[0_10px_30px_rgba(0,0,0,0.15)] aspect-square bg-royal/20 overflow-hidden rounded-lg">
              <img
                src="/images/candidate-photo.jpg"
                alt="Igweonu Chinwe Praise"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>

          {/* Text */}
          <div className="w-full md:w-[60%]" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200">
            <p className="font-heading text-lg sm:text-xl font-bold text-orange mb-4 sm:mb-6">
              Dedicated &bull; Passionate &bull; Proven
            </p>
            <p className="font-body text-base sm:text-lg text-dark leading-[1.7] sm:leading-[1.8] mb-5 sm:mb-6">
              Igweonu Chinwe Praise is a committed law student with a proven track record of academic excellence and research leadership. With a deep passion for legal scholarship and a clear vision for transforming LAWSAN&rsquo;s research culture, Chinwe brings the dedication, innovation, and collaborative spirit needed to elevate student research to new heights.
            </p>
            <p className="font-body text-base sm:text-lg text-dark leading-[1.7] sm:leading-[1.8] mb-6 sm:mb-8">
              Throughout her academic journey, Chinwe has consistently demonstrated an unwavering commitment to advancing research quality, mentoring fellow students, and building bridges between academic theory and practical legal scholarship. Her leadership style is rooted in inclusivity, excellence, and a genuine desire to empower every student researcher.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
