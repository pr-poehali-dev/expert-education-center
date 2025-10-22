import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const HeroSection = () => {
  return (
    <section id="hero" className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-brand-blue via-brand-white to-brand-beige">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-brand-teal rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand-green rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <div className="inline-flex items-center space-x-2 bg-brand-teal/10 px-6 py-2 rounded-full mb-6">
            <Icon name="Award" size={20} className="text-brand-teal" />
            <span className="text-brand-dark font-opensans font-semibold">Школа «Кадровик Профи»</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-montserrat font-bold text-brand-dark mb-6 leading-tight">
            Управляйте персоналом<br />
            <span className="text-brand-teal">профессионально и уверенно!</span>
          </h1>

          <p className="text-xl md:text-2xl text-brand-dark/80 font-opensans mb-8 max-w-2xl mx-auto">
            💼 Освойте современные технологии управления персоналом!
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button 
              size="lg" 
              className="bg-brand-teal hover:bg-brand-green text-white font-montserrat font-semibold px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Icon name="Rocket" size={24} className="mr-2" />
              Записаться на обучение
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-brand-teal text-brand-teal hover:bg-brand-teal hover:text-white font-montserrat font-semibold px-8 py-6 text-lg rounded-xl transition-all"
              onClick={() => document.getElementById('programs')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Узнать подробности
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto mt-16">
            {[
              { icon: 'Users', label: '1000+ выпускников' },
              { icon: 'Award', label: '15 лет опыта' },
              { icon: 'BookOpen', label: '8 программ' },
              { icon: 'Star', label: '95% трудоустройство' }
            ].map((stat, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow">
                <Icon name={stat.icon} size={32} className="text-brand-teal mx-auto mb-2" />
                <p className="text-sm font-opensans font-semibold text-brand-dark">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
