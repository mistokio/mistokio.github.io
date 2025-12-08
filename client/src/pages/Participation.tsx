import { ApplicationForm } from "@/components/ApplicationForm";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { ArrowLeft, Heart } from "lucide-react";
import { useLocation } from "wouter";

export default function Participation() {
  const { t, language, setLanguage } = useLanguage();
  const [, navigate] = useLocation();

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const ageGroups = [
    {
      title: t('participation.group1.title'),
      age: t('participation.group1.age'),
      desc: t('participation.group1.desc'),
      icon: '👶'
    },
    {
      title: t('participation.group2.title'),
      age: t('participation.group2.age'),
      desc: t('participation.group2.desc'),
      icon: '📚'
    },
    {
      title: t('participation.group3.title'),
      age: t('participation.group3.age'),
      desc: t('participation.group3.desc'),
      icon: '🎓'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-4">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => navigate("/")}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              {t('nav.home')}
            </Button>
            <div className="flex items-center gap-2 font-bold text-xl text-primary">
              <img src="/images/school_logo.png" alt="Logo" className="h-12 w-12 rounded-full object-cover border-2 border-primary" />
              <span>{t('hero.title')}</span>
            </div>
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
              className="max-w-3xl mx-auto text-center space-y-4"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-primary font-serif">
                {t('participation.title')}
              </h1>
              <p className="text-lg text-muted-foreground">
                {t('participation.desc')}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Who We Welcome Section */}
        <section className="py-20">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-16"
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                  <Heart className="w-4 h-4" />
                  <span>{t('participation.welcome')}</span>
                </div>
                <p className="text-lg text-muted-foreground mb-8">
                  {t('participation.welcome.desc')}
                </p>

                {/* Age Groups */}
                <div className="grid md:grid-cols-3 gap-6 mb-12">
                  {ageGroups.map((group, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <Card className="h-full hover:shadow-xl transition-all duration-300 border-t-4 border-t-primary">
                        <CardContent className="p-6 text-center space-y-4">
                          <div className="text-4xl mb-2">{group.icon}</div>
                          <h3 className="text-xl font-bold text-foreground">{group.title}</h3>
                          <div className="text-sm font-semibold text-primary">{group.age}</div>
                          <p className="text-muted-foreground text-sm">{group.desc}</p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Membership Fee Section */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-secondary/5 rounded-2xl p-8 mb-12"
              >
                <h2 className="text-2xl font-bold text-foreground mb-4 font-serif">
                  {t('participation.membership')}
                </h2>
                <p className="text-lg text-primary font-semibold">
                  {t('participation.membership.desc')}
                </p>
              </motion.div>

              {/* Application Section */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="space-y-6"
              >
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-2 font-serif">
                    {t('participation.apply')}
                  </h2>
                  <p className="text-muted-foreground">
                    {t('participation.apply.desc')}
                  </p>
                </div>

                <Card className="bg-background border-primary/20">
                  <CardContent className="p-8">
                    <ApplicationForm />
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t bg-secondary/5 py-8">
        <div className="container text-center text-sm text-muted-foreground">
          <p>{t('footer.rights')}</p>
          <p>{t('footer.creator')}</p>
        </div>
      </footer>
    </div>
  );
}
