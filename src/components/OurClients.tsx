const OurClients = () => {
  return (
    <section className="py-16 md:py-20 bg-[#003D82] relative overflow-hidden">
      <div className="container px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
           Ready to <span className="text-gradient">simplify assessments</span> and improve care outcomes? 

          </h2>

          {/* Subheading */}
          <p className="text-base md:text-xl text-white/90 max-w-3xl mx-auto">
Get started with our team and deliver better care while keeping everyone aligned.          </p>

          <div className="flex justify-center items-center mt-8">
            <button
              className="px-8 py-3 text-[#003D82] font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:opacity-90"
              style={{ background: 'linear-gradient(90deg, #65FFF0 13%, #17D7FF 100%)' }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Book Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurClients;
