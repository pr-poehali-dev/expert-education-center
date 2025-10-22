import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const AdvantagesSection = () => {
  const advantages = [
    {
      icon: 'UserCheck',
      title: 'Индивидуальный подход',
      description: 'Мы создаем комфортные условия для качественного усвоения материала каждым учащимся.'
    },
    {
      icon: 'Users',
      title: 'Ведущие специалисты',
      description: 'Обучение проводят эксперты отрасли. Получайте практические советы от профессионалов.'
    },
    {
      icon: 'Clock',
      title: 'Удобный график',
      description: 'Гибкое расписание позволит совмещать учебу с основной занятостью.'
    },
    {
      icon: 'FileText',
      title: 'Официальные документы',
      description: 'Диплом или удостоверение о повышении квалификации, признанные работодателями.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-brand-dark mb-4">
            Ключевые преимущества нашего центра
          </h2>
          <p className="text-lg text-brand-dark/70 font-opensans max-w-2xl mx-auto">
            Мы создаем условия для вашего профессионального роста
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {advantages.map((advantage, index) => (
            <Card 
              key={index} 
              className="border-2 border-brand-blue/20 hover:border-brand-teal hover:shadow-xl transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="w-14 h-14 bg-gradient-to-br from-brand-teal to-brand-green rounded-lg flex items-center justify-center mb-4">
                  <Icon name={advantage.icon} size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-montserrat font-bold text-brand-dark mb-3">
                  {advantage.title}
                </h3>
                <p className="text-brand-dark/70 font-opensans leading-relaxed">
                  {advantage.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-brand-teal to-brand-green rounded-2xl p-8 md:p-12 text-white">
          <h3 className="text-2xl md:text-3xl font-montserrat font-bold mb-6">Почему стоит выбрать нас?</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex items-start space-x-3">
              <Icon name="CheckCircle2" size={24} className="flex-shrink-0 mt-1" />
              <p className="font-opensans">Получить современную специализацию и обеспечить себе стабильную карьеру</p>
            </div>
            <div className="flex items-start space-x-3">
              <Icon name="CheckCircle2" size={24} className="flex-shrink-0 mt-1" />
              <p className="font-opensans">Освоить ключевые навыки и приобрести реальные профессиональные компетенции</p>
            </div>
            <div className="flex items-start space-x-3">
              <Icon name="CheckCircle2" size={24} className="flex-shrink-0 mt-1" />
              <p className="font-opensans">Укрепить репутацию и стать востребованным специалистом на рынке труда</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
