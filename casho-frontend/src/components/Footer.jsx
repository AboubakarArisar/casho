import React from "react";

const Footer = () => {
  const sections = [
    {
      title: "Product",
      links: ["Features", "Security", "Mobile App", "Pricing"],
    },
    {
      title: "Company",
      links: ["About Us", "Careers", "Press", "Contact"],
    },
    {
      title: "Legal",
      links: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
    },
  ];

  return (
    <footer className="relative bg-slate-950 pt-28 pb-12 border-t border-white/5">

      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute bottom-0 left-1/3 h-96 w-96 bg-indigo-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/3 h-96 w-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-10">

        {/* Top Grid */}
        <div className="grid grid-cols-1 gap-16 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">

          {/* Brand */}
          <div className="lg:col-span-2">

            <div className="flex items-center gap-3 mb-6">

              <h2 className="text-2xl font-extrabold text-white">
                Bachat
              </h2>

            </div>

            <p className="max-w-sm text-slate-400 leading-relaxed text-sm">
              Empowering communities to save smarter and grow wealth together
              through transparent, digital-first financial circles.
            </p>

            {/* Social Links */}
            <div className="mt-8 flex gap-4">

              {["facebook", "twitter", "linkedin", "instagram"].map((platform) => (
                <a
                  key={platform}
                  href="#"
                  className="text-slate-400 hover:text-indigo-400 transition-colors"
                >
                  <span className="material-symbols-outlined text-lg">
                    {platform === "facebook" && "facebook"}
                    {platform === "twitter" && "twitter"}
                    {platform === "linkedin" && "linkedin"}
                    {platform === "instagram" && "instagram"}
                  </span>
                  
                </a>
              ))}

            </div>

          </div>

          {/* Navigation Sections */}
          {sections.map((section) => (
            <div key={section.title}>

              <h4
                className="
                  mb-6 text-xs font-semibold uppercase tracking-widest
                  text-slate-300
                "
              >
                {section.title}
              </h4>

              <ul className="space-y-4 text-sm">

                {section.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="
                        text-slate-400
                        hover:text-indigo-400
                        transition-colors
                      "
                    >
                      {link}
                    </a>
                  </li>
                ))}

              </ul>

            </div>
          ))}

        </div>

        {/* Bottom Bar */}
        <div
          className="
            mt-24 pt-8 border-t border-white/5

            flex flex-col gap-6
            items-center justify-between
            md:flex-row
          "
        >

          <p className="text-xs text-slate-500 font-medium text-center md:text-left">
            © 2026 Bachat Fintech Solutions. All rights reserved.
          </p>

          {/* Trust Badges */}
          <div className="flex flex-wrap items-center justify-center gap-6">

            <span
              className="
                flex items-center gap-2 text-[11px] font-semibold
                uppercase tracking-widest text-slate-500
              "
            >
              <span className="material-symbols-outlined text-sm text-indigo-400">
                verified
              </span>
              Verified Secure
            </span>

            <span
              className="
                flex items-center gap-2 text-[11px] font-semibold
                uppercase tracking-widest text-slate-500
              "
            >
              <span className="material-symbols-outlined text-sm text-indigo-400">
                cloud_done
              </span>
              Cloud Hosted
            </span>

            <span
              className="
                flex items-center gap-2 text-[11px] font-semibold
                uppercase tracking-widest text-slate-500
              "
            >
              <span className="material-symbols-outlined text-sm text-indigo-400">
                lock
              </span>
              Data Encrypted
            </span>

          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;
