import { ApplicationForm } from "@/components/ApplicationForm";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { Calendar, Heart, MapPin, Users } from "lucide-react";
import { useLocation } from "wouter";

export default function Home() {
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
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl text-primary">
            <img src="/images/school_logo.png" alt="Logo" className="h-12 w-12 rounded-full object-cover border-2 border-primary hover:scale-110 transition-transform duration-300" />
            <span>{t('hero.title')}</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden md:flex gap-6 text-sm font-medium text-muted-foreground">
              <button onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-primary transition-colors">{t('nav.about')}</button>
              <button onClick={() => document.getElementById('programs')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-primary transition-colors">{t('nav.programs')}</button>
              <button onClick={() => document.getElementById('news')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-primary transition-colors">{t('nav.news')}</button>
              <button onClick={() => navigate('/media')} className="hover:text-primary transition-colors">{t('nav.media')}</button>
              <button onClick={() => navigate('/participation')} className="hover:text-primary transition-colors">{t('nav.participation')}</button>
              <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-primary transition-colors">{t('nav.contact')}</button>
            </div>
            <div className="flex gap-2">
              <Button variant={language === 'hu' ? 'default' : 'ghost'} size="sm" onClick={() => setLanguage('hu')}>HU</Button>
              <Button variant={language === 'en' ? 'default' : 'ghost'} size="sm" onClick={() => setLanguage('en')}>EN</Button>
              <Button variant={language === 'jp' ? 'default' : 'ghost'} size="sm" onClick={() => setLanguage('jp')}>JP</Button>
            </div>
          </div>
        </div>
      </nav>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="/images/hero_banner.png" 
              alt="Hero Banner" 
              className="w-full h-full object-cover opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/10 to-background/80" />
          </div>
          
          <div className="container relative z-10 text-center">
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{ duration: 0.8 }}
              className="max-w-3xl mx-auto space-y-6 p-8 bg-background/80 backdrop-blur-sm rounded-2xl shadow-xl border border-primary/10"
            >
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-primary font-serif">
                {t('hero.title')}
              </h1>
              <p className="text-xl text-muted-foreground font-medium">
                {t('hero.subtitle')}
              </p>
              <ApplicationForm />
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-secondary/5">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <img 
                  src="/images/fireflybemutatkozas.png" 
                  alt="Community Learning" 
                  className="rounded-2xl shadow-2xl border-4 border-white rotate-2 hover:rotate-0 transition-transform duration-500"
                />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-6"
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                  <Heart className="w-4 h-4" />
                  <span>{t('about.mission')}</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground font-serif">{t('about.title')}</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {t('about.desc')}
                </p>
                <div className="grid grid-cols-2 gap-4 pt-4">
                  <Card className="bg-background border-none shadow-md hover:shadow-lg transition-shadow">
                    <CardContent className="p-4 flex flex-col items-center text-center gap-2">
                      <Users className="w-8 h-8 text-secondary" />
                      <span className="font-bold text-xl text-foreground">30+</span>
                      <span className="text-sm text-muted-foreground">Diák</span>
                    </CardContent>
                  </Card>
                  <Card className="bg-background border-none shadow-md hover:shadow-lg transition-shadow">
                    <CardContent className="p-4 flex flex-col items-center text-center gap-2">
                      <Calendar className="w-8 h-8 text-secondary" />
                      <span className="font-bold text-xl text-foreground">2020</span>
                      <span className="text-sm text-muted-foreground">Óta</span>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Programs Section */}
        <section id="programs" className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 pointer-events-none">
             <img src="/images/folk_pattern.png" className="w-full h-full object-cover" alt="pattern" />
          </div>
          <div className="container relative z-10">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-serif">{t('programs.title')}</h2>
              <p className="text-lg text-muted-foreground">{t('programs.desc')}</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: "🎨", title: t('programs.creative.title'), desc: t('programs.creative.desc') },
                { icon: "📚", title: t('programs.language.title'), desc: t('programs.language.desc') },
                { icon: "🎉", title: t('programs.community.title'), desc: t('programs.community.desc') }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-xl transition-all duration-300 border-t-4 border-t-primary">
                    <CardContent className="p-6 text-center space-y-4">
                      <div className="text-4xl mb-2">{item.icon}</div>
                      <h3 className="text-xl font-bold text-foreground">{item.title}</h3>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* News Section */}
        <section id="news" className="py-20 bg-secondary/5">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-serif">{t('news.title')}</h2>
              <p className="text-lg text-muted-foreground">{t('news.desc')}</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Video News Item */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="lg:col-span-1"
              >
                <Card className="h-full hover:shadow-lg transition-shadow overflow-hidden">
                  <CardContent className="p-0">
                    <div className="aspect-video w-full">
                      <iframe 
                        width="100%" 
                        height="100%" 
                        src="https://www.youtube.com/embed/GCKAdqQKtts" 
                        title="YouTube video player" 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        allowFullScreen
                      ></iframe>
                    </div>
                    <div className="p-6">
                      <div className="text-sm text-primary font-bold mb-2">{t('news.video.tag')}</div>
                      <h3 className="text-xl font-bold text-foreground mb-2">{t('news.video.title')}</h3>
                      <p className="text-muted-foreground">
                        {t('news.video.desc')}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Article 1 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="lg:col-span-1"
              >
                <Card className="h-full hover:shadow-lg transition-shadow overflow-hidden flex flex-col">
                  <CardContent className="p-6 flex flex-col flex-1">
                    <div className="text-sm text-primary font-bold mb-2">{t('news.article1.date')}</div>
                    <h3 className="text-xl font-bold text-foreground mb-3">{t('news.article1.title')}</h3>
                    <p className="text-muted-foreground flex-1">
                      {t('news.article1.desc')}
                    </p>
                    <Button variant="ghost" className="w-full mt-4 text-primary hover:bg-primary/10">
                      {t('news.readMore')} →
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Article 2 - New School Year */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="lg:col-span-1"
              >
                <Card className="h-full hover:shadow-lg transition-shadow overflow-hidden flex flex-col">
                  <CardContent className="p-6 flex flex-col flex-1">
                    <div className="text-sm text-primary font-bold mb-2">{t('news.article2.date')}</div>
                    <h3 className="text-xl font-bold text-foreground mb-3">{t('news.article2.title')}</h3>
                    <p className="text-muted-foreground flex-1">
                      {t('news.article2.desc')}
                    </p>
                    <Button variant="ghost" className="w-full mt-4 text-primary hover:bg-primary/10" onClick={() => navigate('/contact')}>
                      {t('news.contactUs')} →
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-serif">{t('contact.title')}</h2>
                  <p className="text-lg text-muted-foreground">
                    {t('contact.desc')}
                  </p>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-primary/10 text-primary">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-1">{t('contact.location')}</h3>
                      <p className="text-muted-foreground">{t('contact.address')}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-primary/10 text-primary">
                      <Users className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-1">{t('contact.email')}</h3>
                      <p className="text-muted-foreground">magyariskolatokio@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <Card className="p-6">
                <CardContent className="space-y-4 pt-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">{t('contact.form.name')}</label>
                      <input type="text" className="w-full p-2 rounded-md border bg-background" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">{t('contact.form.email')}</label>
                      <input type="email" className="w-full p-2 rounded-md border bg-background" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">{t('contact.form.message')}</label>
                    <textarea className="w-full p-2 rounded-md border bg-background min-h-[150px]"></textarea>
                  </div>
                  <Button className="w-full" onClick={() => window.location.href = 'mailto:magyariskolatokio@gmail.com'}>
                    {t('contact.form.send')}
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-8 bg-secondary/10 border-t">
        <div className="container text-center text-muted-foreground">
          <p>&copy; 2024 Magyar Iskola Tokió. {t('footer.rights')}</p>
          <p className="text-sm mt-2">{t('footer.creator')}</p>
        </div>
      </footer>
    </div>
  );
}
