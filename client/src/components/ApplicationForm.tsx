import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState } from "react";

export function ApplicationForm() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    childName: "",
    birthDate: "",
    parentName: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const subject = encodeURIComponent(`Jelentkezés: ${formData.childName}`);
    const body = encodeURIComponent(
      `Gyermek neve: ${formData.childName}\n` +
      `Születési dátum: ${formData.birthDate}\n` +
      `Szülő neve: ${formData.parentName}\n` +
      `Email: ${formData.email}\n` +
      `Telefonszám: ${formData.phone}\n\n` +
      `Megjegyzés:\n${formData.message}`
    );

    window.location.href = `mailto:magyariskolatokio@gmail.com?subject=${subject}&body=${body}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="lg" className="mt-4 text-lg px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
          {t('hero.cta')}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-serif text-primary">{t('form.title')}</DialogTitle>
          <DialogDescription>
            {t('form.desc')}
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="grid gap-2">
            <Label htmlFor="childName">{t('form.childName')}</Label>
            <Input 
              id="childName" 
              name="childName" 
              required 
              value={formData.childName}
              onChange={handleChange}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="birthDate">{t('form.birthDate')}</Label>
            <Input 
              id="birthDate" 
              name="birthDate" 
              type="date" 
              required 
              value={formData.birthDate}
              onChange={handleChange}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="parentName">{t('form.parentName')}</Label>
            <Input 
              id="parentName" 
              name="parentName" 
              required 
              value={formData.parentName}
              onChange={handleChange}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">{t('form.email')}</Label>
            <Input 
              id="email" 
              name="email" 
              type="email" 
              required 
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="phone">{t('form.phone')}</Label>
            <Input 
              id="phone" 
              name="phone" 
              type="tel" 
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="message">{t('form.message')}</Label>
            <Textarea 
              id="message" 
              name="message" 
              value={formData.message}
              onChange={handleChange}
            />
          </div>
          <Button type="submit" className="w-full text-lg font-bold">
            {t('form.submit')}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
