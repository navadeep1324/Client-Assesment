import assured from "@/assets/Assured.png";
import interim from "@/assets/Interim.jpg";
import rah from "@/assets/RAH.png";
import homeInstead from "@/assets/home instead.png";
import heroElement from "@/assets/hero-element.png";

const VideoSection = () => {
  const logos = [
    { src: rah, alt: "Right at Home" },
    { src: assured, alt: "Assured Home Nursing" },
    { src: homeInstead, alt: "Home Instead" },
    { src: interim, alt: "Interim" },

  ];

  return (
    <>
      {/* Header Section */}
      {/* <section className="py-6 md:py-8 relative overflow-hidden">
        <div className="container px-4 relative z-10">
          <div className="text-center space-y-3">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">
              Our Valued <span className="text-gradient">Partners</span>
            </h2>
            <p className="text-xl text-black-700 max-w-3xl mx-auto">
              Proudly serving clients who value efficiency, insights, and results.
            </p>
          </div>
        </div>
        
      </section> */}
       

      {/* Client Logos Section - Full Width with Gradient */}
      <section className="py-10 md:py-16 relative overflow-hidden clients-bg mb-16">
         <div className="absolute left-0 bottom-0 z-0 pointer-events-none">
        <img src={heroElement} alt="" className="hero-element-image" />
      </div>
        <div className="container px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Desktop: Grid Layout (hidden on mobile) */}
            <div className="hidden md:grid grid-cols-4 gap-6">
              {logos.map((logo, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 flex items-center justify-center">
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="w-full h-auto object-contain max-h-16"
                  />
                </div>
              ))}
            </div>

            {/* Mobile: Infinite Scroll (visible only on mobile) */}
            <div className="md:hidden relative overflow-hidden">
              <div className="flex items-center">
                <div className="animate-infinite-scroll flex gap-6">
                  {/* First set of logos */}
                  {logos.map((logo, index) => (
                    <div key={`first-${index}`} className="flex-shrink-0 w-[200px]">
                      <div className="bg-white rounded-2xl p-6 flex items-center justify-center h-[120px]">
                        <img
                          src={logo.src}
                          alt={logo.alt}
                          className="w-full h-auto object-contain max-h-16"
                        />
                      </div>
                    </div>
                  ))}
                  {/* Duplicate set for seamless loop */}
                  {logos.map((logo, index) => (
                    <div key={`second-${index}`} className="flex-shrink-0 w-[200px]">
                      <div className="bg-white rounded-2xl p-6 flex items-center justify-center h-[120px]">
                        <img
                          src={logo.src}
                          alt={logo.alt}
                          className="w-full h-auto object-contain max-h-16"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes infinite-scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        .animate-infinite-scroll {
          animation: infinite-scroll 20s linear infinite;
        }

        .animate-infinite-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </>
  );
};

export default VideoSection;
