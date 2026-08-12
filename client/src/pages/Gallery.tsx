import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useLocation } from "wouter";
import SupporterLogos from "@/components/SupporterLogos";

export default function Gallery() {
  const { t, language, setLanguage } = useLanguage();
  const [, navigate] = useLocation();

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const galleryImages = [
    "mis23.jpg", "mis24.jpg", "mis25.jpg", "mis26.jpg", "mis27.jpg"
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2 font-bold text-xl text-primary cursor-pointer" onClick={() => navigate("/")}>
              <img src="/images/school_logo.png" alt="Logo" className="h-12 w-12 rounded-full object-cover border-2 border-primary" />
              <span>{t('hero.title')}</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" onClick={() => navigate("/about")}>{t('nav.about')}</Button>
            <Button variant="ghost" size="sm" onClick={() => navigate("/programs")}>{t('nav.programs')}</Button>
            <Button variant="ghost" size="sm" onClick={() => navigate("/gallery")}>{t('nav.gallery')}</Button>
            <Button variant="ghost" size="sm" onClick={() => { navigate("/"); setTimeout(() => { const newsSection = document.getElementById('news'); if (newsSection) newsSection.scrollIntoView({ behavior: 'smooth' }); }, 100); }}>{t('nav.news')}</Button>
            <Button variant="ghost" size="sm" onClick={() => { navigate("/"); setTimeout(() => { const contactSection = document.getElementById('contact'); if (contactSection) contactSection.scrollIntoView({ behavior: 'smooth' }); }, 100); }}>{t('nav.contact')}</Button>
          </div>
          <div className="flex gap-2">
            <Button variant={language === 'hu' ? 'default' : 'ghost'} size="sm" onClick={() => setLanguage('hu')}>HU</Button>
            <Button variant={language === 'en' ? 'default' : 'ghost'} size="sm" onClick={() => setLanguage('en')}>EN</Button>
            <Button variant={language === 'jp' ? 'default' : 'ghost'} size="sm" onClick={() => setLanguage('jp')}>JP</Button>
          </div>
        </div>
      </nav>

      <main className="flex-1">
        {/* Header Section */}
        <section className="py-20 bg-secondary/5">
          <div className="container">
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{ duration: 0.8 }}
              className="max-w-3xl mx-auto text-center space-y-6"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-primary font-serif">
                {t('gallery.title')}
              </h1>
              <div className="flex items-center justify-center gap-4">
                <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary/50"></div>
                <div className="w-2 h-2 rounded-full bg-primary/70"></div>
                <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary/50"></div>
              </div>
              <p className="text-xl md:text-2xl text-muted-foreground/80 italic font-light leading-relaxed">
                {t('gallery.desc')}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-20">
          <div className="container">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
              {galleryImages.map((img, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <img
                    src={`/images/${img}`}
                    alt={`Gallery ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <SupporterLogos />
      
      {/* Footer */}
      <footer className="border-t bg-secondary/5 py-8">
        <div className="container text-center text-sm text-muted-foreground">
          <p>{t('footer.rights')}</p>
          <p className="text-xs mt-1">{t('footer.creator')}</p>
        </div>
      </footer>
    </div>
  );
}
