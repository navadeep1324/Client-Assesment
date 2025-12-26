import { Button } from "@/components/ui/button";
import group64 from "@/assets/Group 64.png";
import group65 from "@/assets/Group 65.png";

const Solutions = () => {
  return (
    <section className="py-12 md:py-24 px-4 lg:px-8 bg-[#F2F2F7]">
      <div className="container mx-auto max-w-7xl space-y-16 md:space-y-24">
        
        {/* Top Section - Simplify data collection */}
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold text-primary">
            Simplify data collection with custom forms
          </h2>
          <p className="text-lg md:text-xl text-foreground max-w-4xl mx-auto">
            Experience the Advantage That Transforms Business Performance Experience the Advantage That Transforms Business Performance
          </p>
        </div>

        {/* First Section - Unified Assessment Dashboard */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-6">
            <h3 className="text-3xl md:text-5xl font-bold text-foreground">
              Unified Assessment dashboard
            </h3>
            
            <p className="text-lg text-foreground leading-relaxed">
              Monitor every step of the prospect journey, from initial contact to conversion
            </p>

            <ul className="space-y-4 pt-4">
              <li className="flex items-start gap-3">
                <span className="text-foreground text-xl mt-1">•</span>
                <span className="text-lg text-foreground">Capture Every Inquiry</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-foreground text-xl mt-1">•</span>
                <span className="text-lg text-foreground">Seamless Assessment Tracking</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-foreground text-xl mt-1">•</span>
                <span className="text-lg text-foreground">Conversion Insights</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-foreground text-xl mt-1">•</span>
                <span className="text-lg text-foreground">Performance Analytics</span>
              </li>
            </ul>

            <div className="pt-4">
              <Button 
                className="button-item"
                size="lg"
              >
                Learn more
              </Button>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="flex justify-center lg:justify-end">
            <img 
              src={group64} 
              alt="Unified Assessment Dashboard" 
              className="w-full max-w-2xl object-contain"
            />
          </div>
        </div>

        {/* Second Section - Identify What's Driving Growth */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <div className="flex justify-center lg:justify-start order-2 lg:order-1">
            <img 
              src={group65} 
              alt="Growth Analytics" 
              className="w-full max-w-2xl object-contain"
            />
          </div>

          {/* Right Column - Content */}
          <div className="space-y-6 order-1 lg:order-2">
            <h3 className="text-3xl md:text-5xl font-bold text-foreground">
              Identify What's Driving Growth, Instantly
            </h3>
            
            <p className="text-lg text-foreground leading-relaxed">
              Track what works, identify trends, and optimize your strategy
            </p>

            <ul className="space-y-4 pt-4">
              <li className="flex items-start gap-3">
                <span className="text-foreground text-xl mt-1">•</span>
                <span className="text-lg text-foreground">Track Conversions in Real Time</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-foreground text-xl mt-1">•</span>
                <span className="text-lg text-foreground">Identify Top Sources</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-foreground text-xl mt-1">•</span>
                <span className="text-lg text-foreground">Optimize Marketing Efforts</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-foreground text-xl mt-1">•</span>
                <span className="text-lg text-foreground">Make Data-Driven Decisions</span>
              </li>
            </ul>

            <div className="pt-4">
              <Button 
                className="button-item"
                size="lg"
              >
                Learn more
              </Button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Solutions;
