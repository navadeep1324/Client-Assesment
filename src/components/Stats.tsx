import { TrendingUp, Users, Clock, Target, Zap, BarChart } from "lucide-react";
import { Card } from "@/components/ui/card";

const Stats = () => {
  return (
    <section className="py-12 md:py-24 stats-gradient-section relative overflow-hidden">
      <div className="container relative z-10 stat-section">
        {/* Header Section */}
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Key benefits
          </h2>
          <p className="text-lg md:text-xl text-foreground max-w-4xl mx-auto">
            Go beyond features and experience disruption-free operations with CareSmartz360, the award-winning all-in-one solution for home care agencies.
          </p>
        </div>

        {/* Benefits Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 - Open APIs & integrations */}
          <div className="bg-white rounded-2xl p-8 flex flex-col space-y-4">
            <h3 className="text-xl md:text-2xl font-semibold text-primary">
              Open APIs & integrations
            </h3>
            <p className="text-base text-gray-700 leading-relaxed">
              Our software is equipped with multiple APIs & integrates top-of-the-line tools & vendors to run a home care agency.
            </p>
          </div>

          {/* Card 2 - 24/7 software uptime */}
          <div className="bg-white rounded-2xl p-8 flex flex-col space-y-4">
            <h3 className="text-xl md:text-2xl font-semibold text-primary">
              24/7 software uptime
            </h3>
            <p className="text-base text-gray-700 leading-relaxed">
              Uninterrupted operations are a guarantee with CareSmartz360. Experience zero downtime, at all times.
            </p>
          </div>

          {/* Card 3 - 360° data security */}
          <div className="bg-white rounded-2xl p-8 flex flex-col space-y-4">
            <h3 className="text-xl md:text-2xl font-semibold text-primary">
              360° data security
            </h3>
            <p className="text-base text-gray-700 leading-relaxed">
              Our 360° approach to security safeguards your data against unauthorized access, breaches, and other security threats.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
