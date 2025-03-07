import Image from 'next/image'

export default function LogoSection() {
  const logos = [
    "/aquasystem_logo.svg",
    "/bestflow_logo.svg",
    "/calpeda_logo.svg",
    "/dreno_logo.svg",
    "/flowmak_logo.svg",
    "/harvin_logo.svg",
    "/leo_logo.svg",
    "/pedrollo_logo.svg",
    "/reggio_logo.svg",
    "/stairs_logo.svg",
    "/subline_logo.svg",
    "/varem_logo.svg",
    "/zenit_logo.svg",
  ]

  // Duplicate logos for seamless scrolling
  const duplicatedLogos = [...logos, ...logos]

  return (
    <div className="bg-black py-16 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="slider">
          <div className="slide-track">
            {duplicatedLogos.map((logo, index) => (
              <div key={index} className="slide">
                <Image
                  src={logo}
                  alt="Partner Logo"
                  width={120}
                  height={60}
                  className="w-auto h-12 opacity-70 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 