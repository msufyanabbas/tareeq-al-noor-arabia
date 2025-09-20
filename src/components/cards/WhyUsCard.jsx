// src/components/cards/WhyUsCard.jsx
import { useTranslation } from "@/utils/i18n";
import React from "react";

const WhyUsCard = () => {
  const { t } = useTranslation();
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat min-h-[70vh] flex items-center px-6 sm:px-12"
      style={{
        backgroundImage:
          "url('https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1920,fit=crop/m6LDMak1J9CoP5xw/midjourneypakistan_abstract_modern_architecture_sharp_angles__212a6513-31ba-4b30-846a-1b1d82bc6899_2-AGBbD5JxzETWowR7.png')",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative max-w-3xl text-left">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          {t('whyChooseUs.title')}
        </h2>
        <p className="text-base md:text-lg leading-relaxed text-white font-medium">
         {t('whyChooseUs.description')}
        </p>
      </div>
    </section>
  );
};

export default WhyUsCard;
