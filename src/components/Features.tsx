import mobileImage from "@/assets/mobile.png";
import heroElement from "@/assets/hero-element.png";

const Features = () => {
  return (
    <section id="features" className="py-12 md:py-24 relative overflow-hidden" style={{ background: 'linear-gradient(to bottom, #DDF9FF 0%, #DDF9FF 70%, #ffffff 70%, #ffffff 100%)' }}>
      <div className="container px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          
          {/* Left Column - Mobile/Tablet Image */}
          <div className="flex justify-center lg:justify-start relative">
            {/* Decorative hero element background */}
            <div className="absolute right-[-50px] top-40 -translate-y-1/2 translate-x-1/4 z-0 pointer-events-none">
              <img 
                src={heroElement} 
                alt="" 
                className="w-96 h-96 object-contain opacity-80"
                style={{ transform: 'rotate(90deg)'}}
              />
            </div>
            
            <img 
              src={mobileImage} 
              alt="Dashboard on mobile and tablet devices" 
              className="w-full object-contain relative z-10"
            />
          </div>

          {/* Right Column - Content */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold text-primary features-txt">
             Replace Manual Work <br></br>with a Smarter Digital Process 
            </h2>
            
            {/* <p className="text-lg md:text-xl text-foreground leading-relaxed">
              Experience the Advantage That Transforms Business Performance Experience the Advantage That Transforms Business Performance
            </p> */}

            <ul className="list-disc list-inside space-y-2 pt-2">
              <li className="text-lg  text-foreground">Faster Client Onboarding</li>
              <li className="text-lg  text-foreground">Less Administrative Work</li>
              <li className="text-lg  text-foreground">Standardized Assessment Forms</li>
              <li className="text-lg  text-foreground">Secure Digital Records</li>
              <li className="text-lg  text-foreground">Quick Access for Care Teams</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Features;
