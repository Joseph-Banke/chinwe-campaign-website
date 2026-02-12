export default function Video() {
  return (
    <section className="bg-light py-12 sm:py-16 md:py-[100px] px-4 sm:px-6 md:px-10">
      <div className="max-w-[1000px] mx-auto">
        {/* Section Title */}
        <div className="text-center mb-14" data-aos="fade-up">
          <h2 className="font-display text-3xl sm:text-4xl md:text-[48px] font-bold text-navy mb-4">
            A Message From Chinwe
          </h2>
          <div className="w-[100px] h-1 bg-golden mx-auto"></div>
        </div>

        {/* Video Container */}
        <div
          className="max-w-[900px] mx-auto rounded-xl sm:rounded-[20px] shadow-[0_10px_30px_rgba(0,0,0,0.15)] sm:shadow-[0_15px_50px_rgba(0,0,0,0.2)] overflow-hidden"
          data-aos="fade-in"
          data-aos-duration="1000"
        >
          <video
            className="w-full aspect-video bg-black"
            controls
            preload="metadata"
            poster="/images/candidate-photo.jpg"
          >
            <source src="/videos/campaign-message.mp4" type="video/mp4" />
            <source src="/videos/campaign-message.mov" type="video/quicktime" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Caption */}
        <p className="font-body text-base sm:text-lg italic text-muted text-center mt-6 sm:mt-8 max-w-[700px] mx-auto px-2">
          A message from Chinwe
        </p>
      </div>
    </section>
  )
}
