// src/components/Products.jsx
import React from "react";
import Image from "next/image";
import { Ruler, Cog, Package, Truck } from "lucide-react";
import { useTranslation } from "@/utils/i18n";
import { useLanguage } from "@/contexts/LanguageContext";

const Products = () => {
  const { t } = useTranslation();
  const { isRTL } = useLanguage();
  
  const residentialProducts = [
    { 
      name: t("residentialProducts.aluminiumWindows"), 
      image: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=466,fit=crop/m6LDMak1J9CoP5xw/chatgpt-image-apr-6-2025-03_29_57-pm-AR0LVl6n5oHNb9Bv.png"
    },
    { 
      name: t("residentialProducts.aluminiumDoors"), 
      image: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=366,fit=crop/m6LDMak1J9CoP5xw/chatgpt-image-apr-6-2025-10_45_07-am-YX4lzZBEGrh5M4Gq.png" 
    },
    { 
      name: t("residentialProducts.aluminiumShutters"), 
      image: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=366,fit=crop/m6LDMak1J9CoP5xw/chatgpt-image-apr-7-2025-05_52_48-pm-d951rERPRai6evGg.png" 
    },
    { 
      name: t("residentialProducts.claddingDoors"), 
      image: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=366,fit=crop/m6LDMak1J9CoP5xw/chatgpt-image-apr-6-2025-11_10_35-am-m6LZr437EbuQ5qrZ.png" 
    },
    { 
      name: t("residentialProducts.steelDoors"), 
      image: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=366,fit=crop/m6LDMak1J9CoP5xw/chatgpt-image-apr-6-2025-10_58_43-am-m6LZr437kxUKNEQ4.png" 
    },
    { 
      name: t("residentialProducts.railingGlass"), 
      image: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=366,fit=crop/m6LDMak1J9CoP5xw/chatgpt-image-apr-6-2025-03_43_34-pm-mv0WlxEkwDSvwb4G.png" 
    },
    { 
      name: t("residentialProducts.exteriorGates"), 
      image: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=375,fit=crop/m6LDMak1J9CoP5xw/chatgpt-image-apr-7-2025-06_06_50-pm-YleW52N4O5uggoPV.png" 
    },
    { 
      name: t("residentialProducts.showerGlass"), 
      image: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=366,fit=crop/m6LDMak1J9CoP5xw/chatgpt-image-apr-6-2025-03_51_50-pm-YX4lzZQLMgtwyBkx.png" 
    },
  ];

  const commercialProducts = [
    { 
      name: t("commercialProducts.emergencyFireRatedDoors"), 
      image: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=554,fit=crop/m6LDMak1J9CoP5xw/chatgpt-image-apr-6-2025-11_35_55-am-YBg7yovbq8ULOQeZ.png" 
    },
    { 
      name: t("commercialProducts.emergencyStaircases"), 
      image: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=366,fit=crop/m6LDMak1J9CoP5xw/chatgpt-image-apr-6-2025-02_59_37-pm-YX4lzZqNozhX5WBZ.png" 
    },
    { 
      name: t("commercialProducts.cageLadders"), 
      image: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=366,fit=crop/m6LDMak1J9CoP5xw/chatgpt-image-apr-6-2025-02_55_46-pm-YKb3No5P24f1M9nR.png" 
    },
    { 
      name: t("commercialProducts.industrialGates"), 
      image: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=366,fit=crop/m6LDMak1J9CoP5xw/chatgpt-image-apr-11-2025-06_07_58-pm-Yyv9779JBwFNz30R.png" 
    },
    { 
      name: t("commercialProducts.stainlessSteelRailing"), 
      image: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=366,fit=crop/m6LDMak1J9CoP5xw/chatgpt-image-apr-6-2025-11_27_05-am-AMq1pX9ZrXI4pWr9.png" 
    },
    { 
      name: t("commercialProducts.sandTrapLouvers"), 
      image: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=366,fit=crop/m6LDMak1J9CoP5xw/chatgpt-image-apr-12-2025-09_38_42-am-YD0l4KjV4vtZrRpr.png" 
    },
    { 
      name: t("commercialProducts.metalBoundaryFence"), 
      image: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=366,fit=crop/m6LDMak1J9CoP5xw/chatgpt-image-apr-6-2025-03_08_23-pm-AGB2vrO74wc6V3Rp.png" 
    },
  ];

  const services = [
    {
      image: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=378,fit=crop/m6LDMak1J9CoP5xw/icon-1-eng-d954b90PeyhkGkRq.png"
    },
    {
      image: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=365,fit=crop/m6LDMak1J9CoP5xw/icon-2-eng-m6Lb69pVXbT5EKr6.png"
    },
    {
      image: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=365,fit=crop/m6LDMak1J9CoP5xw/icon-3-eng-Y4Lvq2V26ytn40xW.png"
    },
    {
      image: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=364,fit=crop/m6LDMak1J9CoP5xw/icon-4-eng-AoPJOQvyLMcbOyZ6.png"
    },
  ];

  const renderSection = (titleKey, products) => (
    <div className="mb-12">
      <h2 className={`text-3xl font-bold text-[#eaae07] text-center py-2 rounded ${isRTL ? 'text-right' : 'text-left'}`}>
        {t(titleKey)}
      </h2>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <div
            key={`${product.name}-${index}`}
            className="flex flex-col items-center bg-white rounded-lg shadow hover:shadow-lg transition p-4"
          >
            <div className="relative w-full h-48 flex items-center justify-center bg-[#035678] rounded-lg overflow-hidden">
              <Image
                src={product.image}
                alt={product.name}
                width={200}
                height={200}
                className="object-contain"
              />
            </div>
            <p
              className={`mt-3 text-center font-medium ${isRTL ? 'text-right' : 'text-left'}`}
              style={{
                color: "#eaae07",
                lineHeight: "1.3",
                fontSize: "20px",
              }}
            >
              {product.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section className={`max-w-full mx-auto px-4 py-12 ${isRTL ? 'text-right' : 'text-left'}`}>
      {renderSection("residentialProducts.title", residentialProducts)}
      {renderSection("commercialProducts.title", commercialProducts)}

      {/* Services Section */}
      <div>
        <h2 className={`text-3xl font-bold text-[#eaae07] text-center ${isRTL ? 'text-right' : 'text-left'}`}>
          {t("nav.services")}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={`service-${index}`}
              className="flex flex-col items-center p-4"
            >
              <img 
                src={service.image} 
                alt={t("nav.services")} 
                className="w-full h-full mb-4" 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;