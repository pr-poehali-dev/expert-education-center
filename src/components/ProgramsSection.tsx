import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const ProgramsSection = () => {
  const programs = [
    {
      id: '6A',
      title: 'Специалист по кадровому делопроизводству',
      level: 'Профессиональная переподготовка',
      hours: '250 часов',
      education: 'Среднее профессиональное образование',
      target: 'Начинающим специалистам и сотрудникам кадровой службы',
      description: 'Освойте грамотное оформление документации, ведение учета и минимизацию рисков штрафных санкций',
      badge: 'ДИПЛОМ',
      color: 'from-brand-teal to-brand-green'
    },
    {
      id: '6B',
      title: 'Специалист по подбору персонала',
      level: 'Повышение квалификации',
      hours: '64 часа',
      education: 'Высшее образование-бакалавриат',
      target: 'Специалистам, занимающимся набором сотрудников',
      description: 'Применяйте передовые технологии рекрутинга, проводите эффективные собеседования',
      badge: 'УДОСТОВЕРЕНИЕ',
      color: 'from-brand-green to-brand-blue'
    },
    {
      id: '6C',
      title: 'Специалист по оценке персонала',
      level: 'Повышение квалификации',
      hours: '64 часа',
      education: 'Высшее образование-бакалавриат',
      target: 'Специалистам по оценке сотрудников',
      description: 'Используйте современные методы оценки, проводите ассессмент и разрабатывайте системы мотивации',
      badge: 'УДОСТОВЕРЕНИЕ',
      color: 'from-brand-blue to-brand-teal'
    },
    {
      id: '6D',
      title: 'Специалист по развитию и обучению персонала',
      level: 'Повышение квалификации',
      hours: '64 часа',
      education: 'Высшее',
      target: 'Специалистам по развитию сотрудников',
      description: 'Создавайте и внедряйте программы обучения, формируйте кадровый резерв',
      badge: 'УДОСТОВЕРЕНИЕ',
      color: 'from-brand-teal to-brand-beige'
    },
    {
      id: '6E',
      title: 'Специалист по льготам и компенсациям',
      level: 'Профессиональная переподготовка',
      hours: '64 часа',
      education: 'Высшее',
      target: 'Специалистам по оплате труда и компенсациям',
      description: 'Разрабатывайте системы оплаты труда, внедряйте программы льгот и управляйте бюджетами',
      badge: 'УДОСТОВЕРЕНИЕ',
      color: 'from-brand-beige to-brand-green'
    },
    {
      id: '6F',
      title: 'Менеджер по персоналу',
      level: 'Профессиональная переподготовка',
      hours: '72 часа + 250 часов',
      education: 'Высшее',
      target: 'Специалистам по комплексному управлению персоналом',
      description: 'Управляйте всеми аспектами кадровой работы: подбор, оценка, развитие и мотивация',
      badge: 'ДИПЛОМ',
      color: 'from-brand-green to-brand-teal'
    },
    {
      id: '7G',
      title: 'Руководитель отдела кадров',
      level: 'Профессиональная переподготовка',
      hours: '72 часа + 250 часов',
      education: 'Высшее',
      target: 'Будущим руководителям кадровых служб',
      description: 'Управляйте отделом кадров, разрабатывайте стратегии кадровой политики и проводите аудит',
      badge: 'ДИПЛОМ',
      color: 'from-brand-teal to-brand-blue'
    },
    {
      id: '7H',
      title: 'Директор по персоналу',
      level: 'Профессиональная переподготовка',
      hours: '72 часа + 250 часов',
      education: 'Высшее',
      target: 'Директорам по управлению персоналом',
      description: 'Разрабатывайте и реализовывайте стратегические планы, управляйте бюджетами и внедряйте инновации',
      badge: 'ДИПЛОМ',
      color: 'from-brand-blue to-brand-green'
    }
  ];

  return (
    <section id="programs" className="py-20 bg-gradient-to-b from-brand-beige/20 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-brand-dark mb-4">
            Программы Школы «Кадровик Профи»
          </h2>
          <p className="text-lg text-brand-dark/70 font-opensans max-w-2xl mx-auto">
            Выберите программу обучения, соответствующую вашим целям и уровню подготовки
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program, index) => (
            <Card 
              key={program.id}
              className="relative overflow-hidden border-2 border-brand-blue/20 hover:border-brand-teal hover:shadow-2xl transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${program.color}`}></div>
              
              <CardHeader>
                <div className="flex items-start justify-between mb-3">
                  <Badge className="bg-brand-teal text-white font-opensans text-xs">
                    {program.id}
                  </Badge>
                  <Badge variant="outline" className="border-brand-green text-brand-green font-opensans text-xs">
                    {program.badge}
                  </Badge>
                </div>
                <CardTitle className="text-lg font-montserrat font-bold text-brand-dark leading-tight">
                  {program.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="space-y-2 text-sm font-opensans">
                  <div className="flex items-start space-x-2">
                    <Icon name="Clock" size={16} className="text-brand-teal flex-shrink-0 mt-0.5" />
                    <span className="text-brand-dark/70">{program.hours}</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Icon name="GraduationCap" size={16} className="text-brand-teal flex-shrink-0 mt-0.5" />
                    <span className="text-brand-dark/70">{program.education}</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Icon name="Users" size={16} className="text-brand-teal flex-shrink-0 mt-0.5" />
                    <span className="text-brand-dark/70">{program.target}</span>
                  </div>
                </div>

                <p className="text-sm text-brand-dark/80 font-opensans leading-relaxed">
                  {program.description}
                </p>

                <div className="pt-2">
                  <Button 
                    className="w-full bg-brand-teal hover:bg-brand-green text-white font-opensans font-semibold rounded-lg"
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Подробнее
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto border-2 border-brand-blue/20">
            <h3 className="text-2xl font-montserrat font-bold text-brand-dark mb-6">
              Что входит в программу?
            </h3>
            <div className="grid md:grid-cols-2 gap-4 text-left">
              {[
                'Совершенствование навыков работы с документацией',
                'Оптимизация процесса подбора персонала',
                'Оценка и развитие сотрудников',
                'Эффективная мотивация и материальное поощрение',
                'Планирование карьерного роста и создание резервов',
                'Профессиональное администрирование отдела кадров'
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <Icon name="CheckCircle2" size={20} className="text-brand-teal flex-shrink-0 mt-0.5" />
                  <span className="font-opensans text-brand-dark/80">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;