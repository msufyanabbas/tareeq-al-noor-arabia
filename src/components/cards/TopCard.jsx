import React from "react";

const AboutUs = ({text}) => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat min-h-[70vh] flex items-center px-6 sm:px-12"
      style={{
        backgroundImage:
          "url('https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1920,fit=crop/m6LDMak1J9CoP5xw/midjourneypakistan_a_modern_abstract_architectural_structure__18feecb1-771c-4cd5-a16e-7c9535219dcd_2-AVLae1KwQ1hxJOoX.png')",
      }}
    >
      <div className="max-w-6xl mx-auto w-full flex justify-start">
        <div className="text-left max-w-lg">
          <h2 className="text-white text-3xl sm:text-4xl font-bold mb-4">
            {text.toUpperCase()}
          </h2>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
