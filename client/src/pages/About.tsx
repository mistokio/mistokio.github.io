import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useLocation } from "wouter";
import SupporterLogos from "@/components/SupporterLogos";

export default function About() {
  const { t, language, setLanguage } = useLanguage();
  const [, navigate] = useLocation();

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

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
            <Button variant="ghost" size="sm" onClick={() => navigate("/")}>{t('nav.news')}</Button>
            <Button variant="ghost" size="sm" onClick={() => navigate("/")}>{t('nav.contact')}</Button>
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
        <section className="py-20 bg-secondary/5" data-version="2">
          <div className="container">
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{ duration: 0.8 }}
              className="max-w-3xl mx-auto text-center"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-primary font-serif">
                {t('nav.about')}
              </h1>
            </motion.div>
          </div>
        </section>

        {/* History Section */}
        <section className="py-20">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 font-serif">
                  {t('doc.history.title')}
                </h2>

                <div className="space-y-6">
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>{t('doc.history.p1')}</p>
                    <p>{t('doc.history.p2')}</p>
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="rounded-xl overflow-hidden shadow-md">
                      <img src="/images/mis1.jpg" alt="School" className="w-full h-full object-cover" />
                    </div>
                    <div className="rounded-xl overflow-hidden shadow-md">
                      <img src="/images/mis4.jpg" alt="School" className="w-full h-full object-cover" />
                    </div>
                    <div className="rounded-xl overflow-hidden shadow-md">
                      <img src="/images/mis5.jpg" alt="School" className="w-full h-full object-cover" />
                    </div>
                    <div className="rounded-xl overflow-hidden shadow-md">
                      <img src="/images/mis6.jpg" alt="School" className="w-full h-full object-cover" />
                    </div>
                  </div>

                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>{t('doc.history.p3')}</p>
                    <p>{t('doc.history.p4')}</p>
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <div className="rounded-xl overflow-hidden shadow-md">
                      <img src="/images/mis2.jpg" alt="Classes" className="w-full h-full object-cover" />
                    </div>
                    <div className="rounded-xl overflow-hidden shadow-md">
                      <img src="/images/mis7.jpg" alt="Classes" className="w-full h-full object-cover" />
                    </div>
                    <div className="rounded-xl overflow-hidden shadow-md">
                      <img src="/images/mis8.jpg" alt="Classes" className="w-full h-full object-cover" />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Organization Section */}
        <section className="py-20 bg-secondary/5">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 font-serif">
                  {t('doc.org.title')}
                </h2>

                <div className="space-y-6">
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>{t('doc.org.p1')}</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>{t('doc.org.nameHu')}</li>
                      <li>{t('doc.org.nameEn')}</li>
                      <li>{t('doc.org.nameJp')}</li>
                      <li>{t('doc.org.email')}</li>
                      <li>{t('doc.org.tax')}</li>
                      <li>{t('doc.org.registry')}</li>
                    </ul>
                    <p>{t('doc.org.p2')}</p>
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="rounded-xl overflow-hidden shadow-md">
                      <img src="/images/mis3.jpg" alt="Organization" className="w-full h-full object-cover" />
                    </div>
                    <div className="rounded-xl overflow-hidden shadow-md">
                      <img src="/images/mis9.jpg" alt="Organization" className="w-full h-full object-cover" />
                    </div>
                    <div className="rounded-xl overflow-hidden shadow-md">
                      <img src="/images/mis10.jpg" alt="Organization" className="w-full h-full object-cover" />
                    </div>
                    <div className="rounded-xl overflow-hidden shadow-md">
                      <img src="/images/mis11.jpg" alt="Organization" className="w-full h-full object-cover" />
                    </div>
                  </div>
                </div>
              </motion.div>
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
