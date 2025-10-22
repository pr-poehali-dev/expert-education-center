import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
    <footer className="bg-brand-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/logo-expert.svg" 
                alt="ДВЦКТ Эксперт" 
                className="h-12 w-12 object-contain"
              />
              <div>
                <h3 className="font-montserrat font-bold">ДВЦКТ "Эксперт"</h3>
                <p className="text-xs text-white/70">Учебный центр</p>
              </div>
            </div>
            <p className="text-sm text-white/70 font-opensans mb-4">
              Дальневосточный центр кадровых технологий - лидер в предоставлении образовательных услуг в области управления персоналом
            </p>
          </div>

          <div>
            <h4 className="font-montserrat font-bold mb-4">Контакты</h4>
            <div className="space-y-3 text-sm font-opensans">
              <a href="tel:+74232001512" className="flex items-center space-x-2 text-white/70 hover:text-brand-teal transition-colors">
                <Icon name="Phone" size={16} />
                <span>+7 (423) 200-15-12</span>
              </a>
              <a href="mailto:dv-expert@yandex.ru" className="flex items-center space-x-2 text-white/70 hover:text-brand-teal transition-colors">
                <Icon name="Mail" size={16} />
                <span>dv-expert@yandex.ru</span>
              </a>
              <div className="flex items-start space-x-2 text-white/70">
                <Icon name="MapPin" size={16} className="flex-shrink-0 mt-0.5" />
                <span>г. Владивосток, ул. Светланская, д. 167, офис 310</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-montserrat font-bold mb-4">Режим работы</h4>
            <div className="space-y-2 text-sm font-opensans text-white/70">
              <div className="flex items-center space-x-2">
                <Icon name="Clock" size={16} />
                <span>Понедельник-пятница: 8:00 - 18:00</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Clock" size={16} />
                <span>Суббота-воскресенье: Выходной</span>
              </div>
            </div>

            <div className="mt-6">
              <h4 className="font-montserrat font-bold mb-3">Мы в соцсетях</h4>
              <div className="flex space-x-3">
                {['Facebook', 'Instagram', 'Linkedin'].map((social, index) => (
                  <a
                    key={index}
                    href="#"
                    className="w-10 h-10 bg-white/10 hover:bg-brand-teal rounded-lg flex items-center justify-center transition-colors"
                  >
                    <Icon name={social} size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-white/60 font-opensans">
              © 2024 ООО «Дальневосточный центр кадровых технологий «Эксперт». Все права защищены.
            </p>
            <div className="flex space-x-6 text-sm font-opensans">
              <a href="#" className="text-white/60 hover:text-brand-teal transition-colors">
                Политика конфиденциальности
              </a>
              <a href="#" className="text-white/60 hover:text-brand-teal transition-colors">
                Пользовательское соглашение
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;