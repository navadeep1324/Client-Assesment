import { TrendingUp, Users, Clock, Target, Zap, BarChart } from "lucide-react";
import { Card } from "@/components/ui/card";

const Stats = () => {
  return (
    <section className="py-12 md:py-24 stats-gradient-section relative overflow-hidden">
      <div className="container relative z-10 stat-section">
        {/* Header Section */}
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold text-[#003796]">
           Benefits That Transform Client Care 
          </h2>
          <p className="text-lg md:text-xl text-foreground max-w-4xl mx-auto">
Manual assessments are time-consuming and prone to errors. Our app makes the process faster, easier, and helps you provide the best care. Here’s why it matters           </p>
        </div>

        {/* Benefits Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: '0.8rem' }}>
          {/* Card 1 - Open APIs & integrations */}
          <div className="bg-white px-12 py-6 flex flex-col space-y-4 text-center items-center stats-card">
            <h3 className="text-xl md:text-2xl font-semibold text-primary">
            Save Time and Improve Care Outcomes
            </h3>
            <p className="text-base text-gray-700 leading-relaxed">
No more paperwork, manual signatures, or repeated documentation, everything is digital, fast, and easy.            </p>
          </div>

          {/* Card 2 - 24/7 software uptime */}
          <div className="bg-white px-12 py-6 flex flex-col space-y-4 text-center items-center stats-card">
            <h3 className="text-xl md:text-2xl font-semibold text-primary">
            Clear Collaboration and Communication 
            </h3>
            <p className="text-base text-gray-700 leading-relaxed">
Keep caregivers, care teams, and families informed with documents and updates all in one place.             </p>
          </div>

          {/* Card 3 - 360° data security */}
          <div className="bg-white px-12 py-6 flex flex-col space-y-4 text-center items-center stats-card">
            <h3 className="text-xl md:text-2xl font-semibold text-primary">
             Accurate & Personalized Care Plans 
            </h3>
            <p className="text-base text-gray-700 leading-relaxed">
Capture every client's detail correctly to create care plans that truly match <br></br>their needs.             </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
