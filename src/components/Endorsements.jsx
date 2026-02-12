const endorsements = [
  {
    name: 'Temilade Ogunsanya',
    title: '500 Level Course Rep',
    quote:
      'Chinwe is one of the most dedicated and intellectually curious students I have encountered. Her research acumen and leadership qualities make her the ideal candidate for the Research Committee.',
    initials: 'TO',
  },
  {
    name: 'Tobena Igweonu',
    title: 'Binance — Legal Member',
    quote:
      'Chinwe\'s passion for academic excellence is infectious. She doesn\'t just talk about change — she drives it. I wholeheartedly endorse her candidacy for this critical position.',
    initials: 'TI',
  },
  {
    name: 'Joseph Shodunke',
    title: 'OpenAI Engineer',
    quote:
      'Having seen Chinwe\'s growth and contributions firsthand, I can confidently say she possesses the vision, discipline, and collaborative spirit to transform LAWSAN\'s research landscape.',
    initials: 'JS',
  },
]

export default function Endorsements() {
  return (
    <section className="bg-white py-12 sm:py-16 md:py-[100px] px-4 sm:px-6 md:px-10">
      <div className="max-w-[1200px] mx-auto">
        {/* Section Title */}
        <div className="text-center mb-14" data-aos="fade-up">
          <h2 className="font-display text-3xl sm:text-4xl md:text-[48px] font-bold text-navy mb-4">
            Endorsements
          </h2>
          <div className="w-[100px] h-1 bg-golden mx-auto"></div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {endorsements.map((item, i) => (
            <div
              key={i}
              className="bg-light p-6 sm:p-8 md:p-10 rounded-xl sm:rounded-[15px] text-center shadow-[0_5px_15px_rgba(0,0,0,0.08)]"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay={i * 100}
            >
              {/* Avatar placeholder */}
              <div className="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] rounded-full border-4 border-white shadow-[0_4px_10px_rgba(0,0,0,0.1)] mx-auto mb-4 sm:mb-5 bg-gradient-to-br from-royal to-navy flex items-center justify-center">
                <span className="font-heading text-xl sm:text-2xl font-bold text-white">{item.initials}</span>
              </div>

              <h4 className="font-heading text-lg font-bold text-navy mb-1">{item.name}</h4>
              <p className="font-body text-sm text-orange mb-4">{item.title}</p>
              <p className="font-body text-sm sm:text-base italic text-muted leading-[1.7]">
                &ldquo;{item.quote}&rdquo;
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
