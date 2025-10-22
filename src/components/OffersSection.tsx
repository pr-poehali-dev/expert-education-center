import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const OffersSection = () => {
  const offers = [
    {
      icon: 'Package',
      title: 'Комплексное обучение',
      discount: 'до 30%',
      description: 'Приобретайте сразу несколько программ и получите значительную скидку на весь пакет',
      badge: 'Выгодно'
    },
    {
      icon: 'Gift',
      title: 'Для первых зарегистрированных',
      discount: 'Бонусы',
      description: 'Первые 10 слушателей получат дополнительные методические материалы и доступ к вебинарам',
      badge: 'Ограничено'
    },
    {
      icon: 'Tag',
      title: 'Скидка на первый курс',
      discount: '10%',
      description: 'Для тех, кто только начинает свой путь в управлении кадрами',
      badge: 'Новичкам'
    },
    {
      icon: 'Users',
      title: 'Корпоративным клиентам',
      discount: 'до 25%',
      description: 'Обучите своих сотрудников и получите выгодные условия для вашей компании',
      badge: 'B2B'
    },
    {
      icon: 'Calendar',
      title: 'Раннее бронирование',
      discount: '15%',
      description: 'Зарегистрируйтесь заранее и получите скидку на выбранный курс',
      badge: 'Выгода'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-brand-teal via-brand-green to-brand-blue relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-white mb-4">
            Акции и специальные предложения
          </h2>
          <p className="text-lg text-white/90 font-opensans max-w-2xl mx-auto">
            Воспользуйтесь выгодными условиями и начните обучение уже сегодня
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {offers.slice(0, 3).map((offer, index) => (
            <Card 
              key={index}
              className="bg-white/95 backdrop-blur-sm border-2 border-white/50 hover:border-white hover:shadow-2xl transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-start justify-between mb-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-brand-teal to-brand-green rounded-lg flex items-center justify-center">
                    <Icon name={offer.icon} size={24} className="text-white" />
                  </div>
                  <Badge className="bg-brand-teal text-white font-opensans text-xs">
                    {offer.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-montserrat font-bold text-brand-dark">
                  {offer.title}
                </CardTitle>
              </CardHeader>

              <CardContent>
                <div className="text-3xl font-montserrat font-bold text-brand-teal mb-3">
                  {offer.discount}
                </div>
                <p className="text-brand-dark/70 font-opensans leading-relaxed">
                  {offer.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {offers.slice(3).map((offer, index) => (
            <Card 
              key={index}
              className="bg-white/95 backdrop-blur-sm border-2 border-white/50 hover:border-white hover:shadow-2xl transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${(index + 3) * 0.1}s` }}
            >
              <CardContent className="p-6 flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-brand-teal to-brand-green rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon name={offer.icon} size={28} className="text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-montserrat font-bold text-brand-dark">{offer.title}</h3>
                    <Badge className="bg-brand-teal text-white font-opensans text-xs">
                      {offer.badge}
                    </Badge>
                  </div>
                  <div className="text-2xl font-montserrat font-bold text-brand-teal mb-2">
                    {offer.discount}
                  </div>
                  <p className="text-sm text-brand-dark/70 font-opensans">
                    {offer.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
            <Icon name="Clock" size={20} className="text-white" />
            <span className="text-white font-opensans font-semibold">
              Успейте воспользоваться выгодными предложениями! Количество мест ограничено
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OffersSection;
