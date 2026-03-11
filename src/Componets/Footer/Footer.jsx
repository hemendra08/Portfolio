import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaHeart } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: FaGithub,
      name: "GitHub",
      url: "https://github.com/hemendra08",
      color: "hover:text-pearl-aqua",
    },
    {
      icon: FaLinkedin,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/hemendra-singh-parihar-7900a1274",
      color: "hover:text-tangerine-dream",
    },

  ];

  const quickLinks = [
    { name: "Home", href: "#dashboard" },
    { name: "Skills", href: "#techstack" },
    { name: "Projects", href: "#project" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer
      className="border-t"
      style={{
        backgroundColor: "#0a1929",
        borderColor: "rgba(131, 197, 190, 0.1)",
      }}
    >
      <div className="container-premium py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 rounded-xl overflow-hidden shadow-premium border border-zinc-700">
                <img
                  src="logo.png"
                  alt="logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-xl font-bold text-gradient-premium">
                Hemendra Singh Parihar
              </span>
            </div>
            <p className="text-zinc-300 mb-6 max-w-md">
              Full-stack web developer passionate about creating exceptional
              digital experiences.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 rounded-lg bg-zinc-800 shadow-premium border border-zinc-700 flex items-center justify-center text-zinc-300 transition-all duration-300 hover:scale-110 ${social.color}`}
                >
                  <social.icon className="text-lg" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-zinc-300 hover:text-white transition-colors duration-200"
                    onClick={(e) => {
                      e.preventDefault();
                      const element = document.getElementById(
                        link.href.substring(1),
                      );
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="font-semibold text-white mb-4">Contact</h3>
            <div className="space-y-2 text-zinc-300">
              <p>hemendraparihar67@gmail.com</p>
              <p>Rajasthan, India</p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          className="border-t border-zinc-800 mt-12 pt-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-zinc-400 text-sm">
              © {currentYear} Hemsa. All rights reserved.
            </p>
            <div className="flex items-center space-x-2 text-zinc-400 text-sm">
              <span>Made with</span>
              <FaHeart className="text-red-400 animate-pulse" />
              <span>by Hemsa</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
