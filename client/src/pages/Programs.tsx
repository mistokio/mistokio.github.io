import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useLocation } from "wouter";

export default function Programs() {
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
        <section className="py-20 bg-secondary/5">
          <div className="container">
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{ duration: 0.8 }}
              className="max-w-3xl mx-auto text-center"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-primary font-serif">
                {t('programs.title')}
              </h1>
            </motion.div>
          </div>
        </section>

        {/* Groups Section */}
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
                  {t('doc.groups.title')}
                </h2>

                <p className="text-muted-foreground mb-8 text-lg">{t('doc.groups.p1')}</p>

                {/* Preschool Group */}
                <div className="mb-12">
                  <Card className="overflow-hidden border-t-4 border-t-primary">
                    <CardContent className="p-0">
                      <div className="grid md:grid-cols-2 gap-0">
                        <div className="p-8 flex flex-col justify-center">
                          <div className="text-4xl mb-4">🎨</div>
                          <h3 className="text-2xl font-bold text-foreground mb-4">
                            {t('programs.creative.title')}
                          </h3>
                          <p className="text-muted-foreground mb-4">
                            {t('doc.groups.p2')}
                          </p>
                        </div>
                        <div className="grid grid-cols-2 gap-2 p-2">
                          <img src="/images/mis15.jpg" alt="Preschool 1" className="w-full h-48 object-cover rounded-lg" />
                          <img src="/images/mis22.jpg" alt="Preschool 2" className="w-full h-48 object-cover rounded-lg" />
                          <img src="/images/mis23.jpg" alt="Preschool 3" className="w-full h-48 object-cover rounded-lg" />
                          <img src="/images/mis27.jpg" alt="Preschool 4" className="w-full h-48 object-cover rounded-lg" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* School Age Group 6-8 */}
                <div className="mb-12">
                  <Card className="overflow-hidden border-t-4 border-t-secondary">
                    <CardContent className="p-0">
                      <div className="grid md:grid-cols-2 gap-0">
                        <div className="grid grid-cols-2 gap-2 p-2 order-2 md:order-1">
                          <img src="/images/mis10.jpg" alt="School 6-8 1" className="w-full h-48 object-cover rounded-lg" />
                          <img src="/images/mis19.jpg" alt="School 6-8 2" className="w-full h-48 object-cover rounded-lg" />
                          <img src="/images/mis25.jpg" alt="School 6-8 3" className="w-full h-48 object-cover rounded-lg" />
                          <img src="/images/mis14.jpg" alt="School 6-8 4" className="w-full h-48 object-cover rounded-lg" />
                        </div>
                        <div className="p-8 flex flex-col justify-center order-1 md:order-2">
                          <div className="text-4xl mb-4">📚</div>
                          <h3 className="text-2xl font-bold text-foreground mb-4">
                            {t('programs.language.title')}
                          </h3>
                          <p className="text-muted-foreground mb-4">
                            {t('doc.groups.p3')}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* School Age Group 8-12 */}
                <div className="mb-12">
                  <Card className="overflow-hidden border-t-4 border-t-primary">
                    <CardContent className="p-0">
                      <div className="grid md:grid-cols-2 gap-0">
                        <div className="p-8 flex flex-col justify-center">
                          <div className="text-4xl mb-4">🎉</div>
                          <h3 className="text-2xl font-bold text-foreground mb-4">
                            {t('programs.community.title')}
                          </h3>
                          <p className="text-muted-foreground mb-4">
                            {t('doc.groups.p4')}
                          </p>
                        </div>
                        <div className="grid grid-cols-2 gap-2 p-2">
                          <img src="/images/mis21.jpg" alt="School 8-12 1" className="w-full h-48 object-cover rounded-lg" />
                          <img src="/images/mis3.jpg" alt="School 8-12 2" className="w-full h-48 object-cover rounded-lg" />
                          <img src="/images/mis16.jpg" alt="School 8-12 3" className="w-full h-48 object-cover rounded-lg" />
                          <img src="/images/mis24.jpg" alt="School 8-12 4" className="w-full h-48 object-cover rounded-lg" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <p className="text-muted-foreground text-center text-lg italic">
                  {t('doc.groups.p5')}
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Extra Programs Section */}
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
                  {t('doc.extra.title')}
                </h2>

                <div className="space-y-6">
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>{t('doc.extra.p1')}</p>
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    <img src="/images/mistabor1.jpg" alt="Camp 1" className="w-full h-40 object-cover rounded-lg" />
                    <img src="/images/mis16.jpg" alt="Camp 2" className="w-full h-40 object-cover rounded-lg" />
                    <img src="/images/mis17.jpg" alt="Workshop 1" className="w-full h-40 object-cover rounded-lg" />
                    <img src="/images/mis18.jpg" alt="Workshop 2" className="w-full h-40 object-cover rounded-lg" />
                  </div>

                  <div className="space-y-4 text-muted-foreground leading-relaxed mt-6">
                    <ul className="list-disc pl-6 space-y-2">
                      <li>{t('doc.extra.p2')}</li>
                      <li>{t('doc.extra.p3')}</li>
                    </ul>
                    <p>{t('doc.extra.p4')}</p>
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    <img src="/images/mis19.jpg" alt="Folk dance 1" className="w-full h-40 object-cover rounded-lg" />
                    <img src="/images/mis20.jpg" alt="Folk dance 2" className="w-full h-40 object-cover rounded-lg" />
                    <img src="/images/mis21.jpg" alt="Picnic 1" className="w-full h-40 object-cover rounded-lg" />
                    <img src="/images/mis22.jpg" alt="Picnic 2" className="w-full h-40 object-cover rounded-lg" />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

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
