import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import Icon from '@/components/ui/icon';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Елена Соколова',
      position: 'HR-менеджер, ООО "Восток"',
      text: 'Прошла курс "Специалист по подбору персонала". Программа максимально практичная, все инструменты применяю в работе ежедневно. Через 3 месяца после обучения получила повышение!',
      rating: 5,
      initials: 'ЕС'
    },
    {
      name: 'Дмитрий Волков',
      position: 'Директор по персоналу, АО "Приморье"',
      text: 'Обучение в центре "Эксперт" - это инвестиция в карьеру. Программа переподготовки дала системное понимание управления персоналом. Преподаватели - практики с огромным опытом.',
      rating: 5,
      initials: 'ДВ'
    },
    {
      name: 'Анна Петрова',
      position: 'Специалист по кадрам, ИП Морозов',
      text: 'Начинала с нуля. Курс по кадровому делопроизводству дал всё необходимое для уверенной работы. Удобный график занятий позволил не отрываться от основной работы. Рекомендую!',
      rating: 5,
      initials: 'АП'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-brand-dark mb-4">
            История успеха наших выпускников
          </h2>
          <p className="text-lg text-brand-dark/70 font-opensans max-w-2xl mx-auto">
            Реальные результаты после обучения в Учебном центре «Эксперт»
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="border-2 border-brand-blue/20 hover:border-brand-teal hover:shadow-xl transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <Avatar className="w-14 h-14 bg-gradient-to-br from-brand-teal to-brand-green">
                    <AvatarFallback className="text-white font-montserrat font-bold">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h4 className="font-montserrat font-bold text-brand-dark">{testimonial.name}</h4>
                    <p className="text-sm text-brand-dark/60 font-opensans">{testimonial.position}</p>
                  </div>
                </div>

                <div className="flex space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Icon key={i} name="Star" size={16} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>

                <p className="text-brand-dark/80 font-opensans leading-relaxed">
                  "{testimonial.text}"
                </p>

                <div className="mt-4 pt-4 border-t border-brand-blue/20">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-brand-teal font-opensans font-semibold">Выпускник 2024</span>
                    <Icon name="Award" size={20} className="text-brand-teal" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
