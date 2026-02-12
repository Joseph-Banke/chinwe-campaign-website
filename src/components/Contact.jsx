const socials = [
  { icon: 'fas fa-envelope', label: 'Email', href: 'mailto:chinwepraise@email.com' },
  { icon: 'fa-brands fa-instagram', label: 'Instagram', href: '#' },
  { icon: 'fa-brands fa-twitter', label: 'Twitter', href: '#' },
  { icon: 'fa-brands fa-linkedin', label: 'LinkedIn', href: '#' },
  { icon: 'fa-brands fa-whatsapp', label: 'WhatsApp', href: '#' },
]

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-16 md:py-20 px-6 md:px-10 text-center text-white"
      style={{ background: 'linear-gradient(135deg, #ff5722 0%, #f4a025 100%)' }}
    >
      <div className="max-w-[700px] mx-auto" data-aos="fade-up">
        <h2 className="font-display text-4xl md:text-[42px] font-bold mb-5">Get In Touch</h2>
        <p className="font-body text-lg md:text-xl text-white/95 leading-[1.7] mb-10">
          Ready to support the campaign? Have questions? Let&rsquo;s connect and build a stronger
          research community together!
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-10">
          <a
            href="#home"
            className="inline-block font-heading text-base font-semibold uppercase bg-white text-orange px-12 py-4 rounded-full shadow-[0_5px_20px_rgba(0,0,0,0.15)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.25)]"
          >
            Vote Now
          </a>
          <a
            href="mailto:chinwepraise@email.com"
            className="inline-block font-heading text-base font-semibold uppercase bg-transparent border-[3px] border-white text-white px-12 py-[13px] rounded-full transition-all duration-300 hover:bg-white hover:text-orange"
          >
            Contact Me
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex items-center justify-center gap-5">
          {socials.map((s, i) => (
            <a
              key={i}
              href={s.href}
              aria-label={s.label}
              className="w-10 h-10 flex items-center justify-center rounded-full text-white text-lg transition-all duration-300 hover:bg-white/20 hover:scale-115"
            >
              <i className={s.icon}></i>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
