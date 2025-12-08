import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useLocation } from "wouter";

export default function Media() {
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
                {t('media.title')}
              </h1>
              <p className="text-lg text-muted-foreground">
                {t('media.desc')}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Media Content Section */}
        <section className="py-20">
          <div className="container">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* YouTube Video */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="lg:col-span-3"
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

              {/* Facebook Video */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="lg:col-span-3"
              >
                <Card className="h-full hover:shadow-lg transition-shadow overflow-hidden">
                  <CardContent className="p-0">
                    <div className="aspect-video w-full">
                      <iframe 
                        src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fmagyariskolatokio%2Fvideos%2F475340220724257%2F&show_text=false&width=560&t=0" 
                        width="100%" 
                        height="100%" 
                        style={{border: "none", overflow: "hidden"}} 
                        scrolling="no" 
                        frameBorder="0" 
                        allowFullScreen={true} 
                        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                      ></iframe>
                    </div>
                    <div className="p-6">
                      <div className="text-sm text-primary font-bold mb-2">{t('news.fbvideo.tag')}</div>
                      <h3 className="text-xl font-bold text-foreground mb-2">{t('news.fbvideo.title')}</h3>
                      <p className="text-muted-foreground">
                        {t('news.fbvideo.desc')}
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
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow flex flex-col">
                  <CardContent className="p-6 flex flex-col flex-1">
                    <div className="text-sm text-muted-foreground mb-2">{t('news.article1.date')}</div>
                    <h3 className="text-lg font-bold text-foreground mb-3 flex-1">{t('news.article1.title')}</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      {t('news.article1.desc')}
                    </p>
                    <Button variant="outline" size="sm" className="w-full">
                      {t('news.readMore')}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Article 2 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow flex flex-col">
                  <CardContent className="p-6 flex flex-col flex-1">
                    <div className="text-sm text-muted-foreground mb-2">{t('news.article2.date')}</div>
                    <h3 className="text-lg font-bold text-foreground mb-3 flex-1">{t('news.article2.title')}</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      {t('news.article2.desc')}
                    </p>
                    <Button variant="outline" size="sm" className="w-full">
                      {t('news.readMore')}
                    </Button>
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
