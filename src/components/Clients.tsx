import doc1 from "@/assets/doc.jpg";
import doc2 from "@/assets/doc 2.jpg";
import doc3 from "@/assets/doc 3.jpg";
import heroElement from "@/assets/hero-element.png";

const Clients = () => {
  return (
    <section id="solutions" className="py-16 md:py-24 px-4 lg:px-8 relative overflow-hidden">
      {/* Decorative hero element background - right side */}
      <div className="absolute right-[50px] top-1/2 -translate-y-1/2 translate-x-1/4 z-0 pointer-events-none">
        <img 
          src={heroElement} 
          alt="" 
          className="w-[800px] h-[800px] object-contain"
          style={{ transform: 'rotate(150deg) scaleY(-1)' }}
        />
      </div>
      
      <div className="container mx-auto max-w-7xl relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold text-primary">
           The Difference You Can Experience 
          </h2>
          {/* <p className="text-lg md:text-xl text-foreground max-w-4xl mx-auto">
            Experience the Advantage That Transforms Business Performance Experience the Advantage That Transforms Business Performance
          </p> */}
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          
          {/* Card 1 */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="aspect-video overflow-hidden">
              <img 
                src={doc1} 
                alt="Advanced analytics" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8 space-y-4 text-center">
              <h3 className="card-h-text font-medium text-black">
2x Faster Decision-making with instant access to client info 
              </h3>
              {/* <p className="text-base text-gray-700 leading-relaxed">
                Custom data reporting with 100+ reports to gain rich insights for better decision-making.
              </p>
              <a 
                href="#" 
                className="inline-block text-primary font-semibold hover:underline"
              >
                Learn More
              </a> */}
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="aspect-video overflow-hidden">
              <img 
                src={doc2} 
                alt="Advanced analytics" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8 space-y-4 text-center">
              <h3 className="card-h-text font-medium text-black">
             Higher caregiver–client match accuracy 
              </h3>
              {/* <p className="text-base text-gray-700 leading-relaxed">
                Custom data reporting with 100+ reports to gain rich insights for better decision-making.
              </p>
              <a 
                href="#" 
                className="inline-block text-primary font-semibold hover:underline"
              >
                Learn More
              </a> */}
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="aspect-video overflow-hidden">
              <img 
                src={doc3} 
                alt="Advanced analytics" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8 space-y-4 text-center">
              <h3 className="card-h-text font-medium text-black">
              Stronger client trust through transparent documentation  
              </h3>
              {/* <p className="text-base text-gray-700 leading-relaxed">
                Custom data reporting with 100+ reports to gain rich insights for better decision-making.
              </p>
              <a 
                href="#" 
                className="inline-block text-primary font-semibold hover:underline"
              >
                Learn More
              </a> */}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Clients;
