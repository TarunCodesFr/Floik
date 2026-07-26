import Image from "next/image";

const FOOTER_LINKS = {
  Product: [
    { label: "Features", href: "#features" },
    { label: "FAQ", href: "#faq" },
    { label: "Changelog", href: "https://github.com/floik" },
  ],
  Resources: [
    { label: "Documentation", href: "https://github.com/floik" },
    { label: "GitHub", href: "https://github.com/floik" },
    { label: "Community", href: "https://discord.gg/floik" },
  ],
  Company: [
    { label: "About", href: "/about" },
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/tos" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#0B0D14] border-t border-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-16 lg:py-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
            {/* Brand Column */}
            <div className="sm:col-span-2 lg:col-span-1">
              <a href="/" className="inline-flex items-center gap-3">
                <Image
                  src="/assets/floik.png"
                  alt="Floik"
                  width={32}
                  height={32}
                  className="object-contain"
                />
                <span className="text-xl font-semibold text-white">
                  floik
                </span>
              </a>
              <p className="mt-5 text-sm text-gray-400 leading-relaxed max-w-xs">
                The open-source platform for modern community operations.
                Manage, automate, and scale with confidence.
              </p>
            </div>

            {/* Link Sections */}
            {Object.entries(FOOTER_LINKS).map(([title, links]) => (
              <div key={title}>
                <h3 className="text-sm font-semibold text-white mb-5">
                  {title}
                </h3>
                <ul className="space-y-3.5">
                  {links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-gray-800/50">
          <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-500">
              &copy; 2026 Floik. All rights reserved.
            </p>
            <div className="flex items-center gap-2">
              <Image
                src="/assets/floik.png"
                alt="Floik"
                width={14}
                height={14}
                className="opacity-60"
              />
              <span className="text-sm text-gray-500">
                Powered by Floik
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}