import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';

const PopupOffer = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const hasSeenPopup = sessionStorage.getItem('hasSeenPopup');
      if (!hasSeenPopup) {
        setIsOpen(true);
        sessionStorage.setItem('hasSeenPopup', 'true');
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleAction = () => {
    setIsOpen(false);
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <div className="w-16 h-16 bg-gradient-to-br from-brand-teal to-brand-green rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Icon name="Gift" size={32} className="text-white" />
          </div>
          <DialogTitle className="text-2xl font-montserrat font-bold text-brand-dark text-center">
            Специальное предложение!
          </DialogTitle>
          <DialogDescription className="text-center font-opensans text-base">
            Успейте забронировать одно из последних мест на обучение и воспользуйтесь выгодной ценой!
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          <div className="bg-gradient-to-r from-brand-teal to-brand-green rounded-xl p-6 text-white text-center">
            <div className="text-5xl font-montserrat font-bold mb-2">15%</div>
            <p className="text-lg font-opensans">Скидка при раннем бронировании</p>
          </div>

          <div className="space-y-2 text-sm font-opensans text-brand-dark/70">
            <div className="flex items-center space-x-2">
              <Icon name="CheckCircle2" size={16} className="text-brand-teal" />
              <span>Только для первых 10 участников</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="CheckCircle2" size={16} className="text-brand-teal" />
              <span>Дополнительные методические материалы в подарок</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="CheckCircle2" size={16} className="text-brand-teal" />
              <span>Доступ к закрытым вебинарам</span>
            </div>
          </div>

          <div className="flex space-x-3">
            <Button
              onClick={handleAction}
              className="flex-1 bg-brand-teal hover:bg-brand-green text-white font-montserrat font-semibold py-6"
            >
              Забронировать место
            </Button>
            <Button
              onClick={handleClose}
              variant="outline"
              className="border-2 border-brand-teal text-brand-teal hover:bg-brand-teal hover:text-white"
            >
              <Icon name="X" size={20} />
            </Button>
          </div>

          <p className="text-xs text-center text-brand-dark/50 font-opensans">
            Предложение действует ограниченное время
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PopupOffer;
