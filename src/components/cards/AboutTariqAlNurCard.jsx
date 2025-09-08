import { useTranslation } from "@/utils/i18n";
import React from "react";

const AboutTariqAlNur = () => {
  const { t } = useTranslation();
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat min-h-[70vh] flex items-center justify-center px-6 sm:px-12"
      style={{
        backgroundImage:
          "url('https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1920,fit=crop/m6LDMak1J9CoP5xw/midjourneypakistan_modern_architectural_structure_with_clean__80a2967a-a0db-4e3e-aaa4-cf686b05cff7_3-YD0wP3bgzot4411j.png')",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative max-w-3xl text-center">
        <h2
          className="text-3xl md:text-4xl font-bold mb-6"
          style={{ color: "#fff" }}
        >
          {t("nav.about")} {t("footer.company")}
        </h2>
        <p
          className="text-base md:text-lg leading-relaxed font-medium"
          style={{ color: "#fff" }}
        >
          {t("aboutCompany.description")}
        </p>
      </div>
    </section>
  );
};

export default AboutTariqAlNur;
