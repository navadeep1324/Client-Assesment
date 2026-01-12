import { Button } from "@/components/ui/button";
import group64 from "@/assets/Group 64.png";
import group65 from "@/assets/Group 65.png";

const Solutions = () => {
  return (
    <section className="py-12 md:py-24 px-4 lg:px-8 bg-[#F2F2F7]">
      <div className="container mx-auto max-w-8xl space-y-16 md:space-y-24">
        
        {/* Top Section - Simplify data collection */}
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold text-primary solutions-heading">
           Simplify your Client Assessment <br></br>with Customized Features 
          </h2> 
          <p className="text-lg md:text-xl text-foreground max-w-4xl mx-auto">
Here’s how our app helps you capture every detail, track progress, and stay organized.           </p>
        </div>

        {/* First Section - Unified Assessment Dashboard */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-6 md:px-12 lg:px-24 rounded-3xl py-8 md:py-12" style={{ background: 'radial-gradient(circle at top right, #DBF9FF 0%, #ffffff 70%)' }}>
          {/* Left Column - Content */}
          <div className="space-y-6">
            <h3 className="text-3xl md:text-5xl font-bold text-foreground">
              Client Assessment Dashboard
            </h3>
            
            <p className="text-lg text-foreground leading-relaxed">
Capture every client’s detail in one place and track the <br></br>assessment process from start to finish.             </p>

            <ul className="list-disc list-inside space-y-2 ">
              <li className="text-lg text-foreground">User-friendly assessment tools</li>
              <li className="text-lg text-foreground">Capture Every Inquiry</li>
              <li className="text-lg text-foreground">Seamless Assessment Tracking</li>
              <li className="text-lg text-foreground">Make informed care decisions</li>
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
          <div className="flex justify-center lg:justify-end px-0 md:px-6">
            <img 
              src={group64} 
              alt="Unified Assessment Dashboard" 
              className="w-full max-w-2xl object-contain"
            />
          </div>
        </div>

        {/* Second Section - Identify What's Driving Growth */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-6 md:px-12 lg:px-16 rounded-3xl py-8 md:py-12" style={{ background: 'radial-gradient(circle at top left, #DBF9FF 0%, #ffffff 70%)' }}>
          {/* Left Column - Image */}
          <div className="flex justify-center lg:justify-start order-2 lg:order-1 px-0 md:px-12">
            <img 
              src={group65} 
              alt="Growth Analytics" 
              className="w-full max-w-2xl object-contain"
            />
          </div>

          {/* Right Column - Content */}
          <div className="space-y-6 order-1 lg:order-2 pl-0 md:pl-12">
            <h3 className="text-3xl md:text-5xl font-bold text-foreground">
Forms That Are Convenient & Accessible             </h3>
            
            <p className="text-lg text-foreground leading-relaxed">
             Smart forms that adapt to your client's needs, fit into your workflow and share care forms with ease. 
            </p>

            <ul className="list-disc list-inside space-y-2 ">
              <li className="text-lg text-foreground">Ready-to-use and pre-built templates </li>
              <li className="text-lg text-foreground">Adapt forms to match each client’s unique needs </li>
              <li className="text-lg text-foreground">Export care plans and forms as PDFs instantly. </li>
              <li className="text-lg text-foreground">Access and fill forms anytime, from any device </li>
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
