// src/components/cards/ServiceHistory.jsx
import React from "react";

const ServiceHistory = () => {
  return (
    <section className="px-6 sm:px-12 py-16 max-w-6xl mx-auto space-y-16">
      {/* Top Row - 3 Columns */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="font-bold text-xl sm:text-2xl text-white">
          Tariq Al Nur Services and History
        </div>
        <div className="text-white text-base sm:text-lg leading-relaxed">
          Tariq Al Nur started as a statement against the sloppy professional standards
          that dominated the field of construction services 20 years ago. We wanted to
          set a new, high standard and work as consultants, solving our clients’ problems.
        </div>
        <div className="text-white text-base sm:text-lg leading-relaxed">
          The company quickly grew and cemented itself as the new golden standard in
          commercial construction. Today we continue to build on that legacy and strive
          for excellence at everything we do.
        </div>
      </div>

      {/* Middle Row - 2 Images */}
      <div className="grid grid-cols-1 md:grid-cols-10 gap-6 items-center">
        <div className="md:col-span-7">
          <img
            src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1024,h=384,fit=crop/m6LDMak1J9CoP5xw/midjourneypakistan_modern_architectural_structure_with_clean__62938cff-ee74-44a7-8e5d-71ee70297ce1_3-YBgbv3X2nJcBE8WP.png"
            alt="Main Structure"
            className="w-full h-auto rounded-xl shadow-lg object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
        <div className="md:col-span-3">
          <img
            src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=584,fit=crop/m6LDMak1J9CoP5xw/midjourneypakistan_modern_architectural_structure_with_clean__62938cff-ee74-44a7-8e5d-71ee70297ce1_3-YBgbv3X2nJcBE8WP.png"
            alt="Side Structure"
            className="w-full h-auto rounded-xl shadow-lg object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>

      {/* Bottom Row - 3 Columns */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="font-bold text-xl sm:text-2xl text-white">
          Tariq Al Nur People and Culture
        </div>
        <div className="text-white text-base sm:text-lg leading-relaxed">
          Our people are what make us unique. Rather than outsourcing our construction
          engineers from questionable outsourcing establishments, we provide them with
          an environment that supports professional growth.
        </div>
        <div className="text-white text-base sm:text-lg leading-relaxed">
          At Tariq Al Nur, we are strong believers in giving our employees a voice. Our
          teams are put together with the help of our resident psychologist to ensure
          maximum productivity and engagement.
        </div>
      </div>
    </section>
  );
};

export default ServiceHistory;
