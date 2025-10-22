import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import Icon from '@/components/ui/icon';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время.",
    });

    setFormData({ name: '', phone: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white to-brand-beige/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-brand-dark mb-4">
            Заявка на консультацию
          </h2>
          <p className="text-lg text-brand-dark/70 font-opensans max-w-2xl mx-auto">
            Оставьте заявку, и наш специалист свяжется с вами для подробной консультации
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <Card className="border-2 border-brand-blue/20 shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl font-montserrat font-bold text-brand-dark">
                Свяжитесь с нами
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name" className="font-opensans font-semibold text-brand-dark">
                    ФИО *
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Введите ваше полное имя"
                    required
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="phone" className="font-opensans font-semibold text-brand-dark">
                    Телефон *
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+7 (___) ___-__-__"
                    required
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="font-opensans font-semibold text-brand-dark">
                    Email *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.ru"
                    required
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="font-opensans font-semibold text-brand-dark">
                    Ваши пожелания
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Укажите удобное время для встречи или другие пожелания"
                    className="mt-1"
                    rows={4}
                  />
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-brand-teal hover:bg-brand-green text-white font-montserrat font-semibold py-6 text-lg rounded-lg"
                >
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить заявку
                </Button>

                <p className="text-xs text-brand-dark/60 font-opensans text-center mt-2">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card className="border-2 border-brand-blue/20 bg-gradient-to-br from-brand-teal to-brand-green text-white">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" size={24} />
                  </div>
                  <div>
                    <h3 className="font-montserrat font-bold text-lg mb-2">Горячая линия</h3>
                    <a href="tel:+74232001512" className="text-xl font-opensans font-semibold hover:text-white/80 transition-colors">
                      +7 (423) 200-15-12
                    </a>
                    <p className="text-sm text-white/80 mt-1">Понедельник-пятница, 8:00-18:00</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-brand-blue/20">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-brand-teal to-brand-green rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-montserrat font-bold text-brand-dark text-lg mb-2">Email</h3>
                    <a href="mailto:dv-expert@yandex.ru" className="text-brand-teal font-opensans font-semibold hover:text-brand-green transition-colors">
                      dv-expert@yandex.ru
                    </a>
                    <p className="text-sm text-brand-dark/60 mt-1">Ответим в течение 24 часов</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-brand-blue/20">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-brand-teal to-brand-green rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-montserrat font-bold text-brand-dark text-lg mb-2">Адрес</h3>
                    <p className="text-brand-dark font-opensans">
                      г. Владивосток<br />
                      ул. Светланская, д. 167, офис 310
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
