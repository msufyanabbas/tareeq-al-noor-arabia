import { useTranslation } from "@/utils/i18n";
import React from "react";

const CareerCard = () => {
  const { t } = useTranslation();
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat min-h-[70vh] flex items-center px-6 sm:px-12"
      style={{
        backgroundImage:
          "url('https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1920,fit=crop/m6LDMak1J9CoP5xw/midjourneypakistan_a_high-resolution_image_of_a_modern_commer_ff1470be-4d76-4be2-9ec4-891abc463a35_3-YX4xqQNkBKCep01N.png')",
      }}
    >
      <div className="max-w-6xl mx-auto w-full flex justify-end">
        <div className="text-right max-w-lg">
          <h2 className="text-[#fff] xl sm:text-4xl font-bold mb-4">
            {t('careerCard.careers')}
          </h2>
          <p className="text-[#fff] text-lg leading-relaxed mb-6">
            {t('careerCard.description')}
          </p>
          <button className="text-white bg-[#035678] px-6 py-3 rounded-lg font-semibold hover:bg-[#eaae07] transition">
            {t('careerCard.openPositions')}
          </button>
        </div>
      </div>
    </section>
  );
};

export default CareerCard;
