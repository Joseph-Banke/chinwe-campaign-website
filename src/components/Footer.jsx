const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Platform', href: '#platform' },
  { label: 'Achievements', href: '#achievements' },
]

const contactInfo = [
  { icon: 'fa-location-dot', text: 'Babcock University' },
  { icon: 'fa-envelope', text: 'Igweonup1215@student.babcock.edu.ng' },
  { icon: 'fa-phone', text: '+234 807 476 8983' },
]

const socialLinks = [
  { icon: 'fa-instagram', href: '#', label: 'Instagram' },
  { icon: 'fa-twitter', href: '#', label: 'Twitter' },
  { icon: 'fa-linkedin', href: '#', label: 'LinkedIn' },
  { icon: 'fa-whatsapp', href: '#', label: 'WhatsApp' },
  { icon: 'fa-facebook', href: '#', label: 'Facebook' },
]

export default function Footer() {
  const handleClick = (e, href) => {
    e.preventDefault()
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="bg-navy pt-12 sm:pt-16 pb-6 sm:pb-8 px-4 sm:px-6 md:px-10">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 mb-8 sm:mb-10">
          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-sm font-bold uppercase text-golden mb-4 tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-1">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleClick(e, link.href)}
                    className="font-body text-[15px] text-subtle hover:text-golden transition-colors leading-[2] block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading text-sm font-bold uppercase text-golden mb-4 tracking-wider">
              Contact Info
            </h4>
            <ul className="space-y-3">
              {contactInfo.map((item, i) => (
                <li key={i} className="flex items-start gap-3 font-body text-sm sm:text-[15px] text-subtle break-all sm:break-normal">
                  <i className={`fas ${item.icon} text-golden mt-1 shrink-0`}></i>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Social / Follow */}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-5 text-center">
          <p className="font-body text-sm text-[#999]">
            &copy; 2026 Igweonu Chinwe Praise Campaign. All rights reserved.
          </p>
          <p className="font-body text-xs text-[#777] mt-1">
            Made by her Boyfriend 😎
          </p>
        </div>
      </div>
    </footer>
  )
}
