import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState<any>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  const programs = [
    {
      title: 'Спортивная гимнастика',
      age: '5-8 лет',
      description: 'Развитие координации, гибкости и силы через увлекательные упражнения',
      icon: 'Smile',
      color: 'bg-primary',
      fullDescription: 'Программа спортивной гимнастики разработана специально для детей 5-8 лет. Включает базовые упражнения на развитие гибкости, координации движений и силовых показателей.',
      benefits: [
        'Улучшение координации и баланса',
        'Развитие гибкости суставов',
        'Укрепление мышечного корсета',
        'Формирование правильной осанки'
      ],
      schedule: 'Понедельник, Среда 16:00-17:00',
      duration: '60 минут',
      groupSize: 'До 10 детей'
    },
    {
      title: 'Игровые тренировки',
      age: '6-10 лет',
      description: 'Командные игры для развития коммуникации и спортивного духа',
      icon: 'Users',
      color: 'bg-secondary',
      fullDescription: 'Тренировки в игровом формате помогают детям развивать командный дух, учиться взаимодействовать со сверстниками и получать удовольствие от движения.',
      benefits: [
        'Развитие коммуникативных навыков',
        'Формирование командного духа',
        'Повышение выносливости',
        'Социализация через игру'
      ],
      schedule: 'Суббота 10:00-11:00',
      duration: '60 минут',
      groupSize: 'До 15 детей'
    },
    {
      title: 'Индивидуальные занятия',
      age: '4-12 лет',
      description: 'Персональный подход к каждому ребёнку с учётом особенностей',
      icon: 'Target',
      color: 'bg-primary',
      fullDescription: 'Индивидуальные занятия позволяют максимально учесть особенности развития ребёнка и работать над конкретными целями в комфортном темпе.',
      benefits: [
        'Персональная программа тренировок',
        'Гибкий график занятий',
        'Максимальное внимание тренера',
        'Быстрое достижение результатов'
      ],
      schedule: 'Пятница 16:00-17:00 (по записи)',
      duration: '45-60 минут',
      groupSize: '1 ребёнок'
    }
  ];

  const schedule = [
    { day: 'Понедельник', time: '16:00 - 17:00', group: 'Младшая группа (5-7 лет)' },
    { day: 'Понедельник', time: '17:30 - 18:30', group: 'Старшая группа (8-10 лет)' },
    { day: 'Среда', time: '16:00 - 17:00', group: 'Младшая группа (5-7 лет)' },
    { day: 'Среда', time: '17:30 - 18:30', group: 'Старшая группа (8-10 лет)' },
    { day: 'Пятница', time: '16:00 - 17:00', group: 'Индивидуальные занятия' },
    { day: 'Суббота', time: '10:00 - 11:00', group: 'Игровые тренировки' },
  ];

  const achievements = [
    { year: '2020', title: 'Сертификат детского тренера', description: 'Российская академия спорта' },
    { year: '2021', title: '50+ довольных учеников', description: 'Успешные выпуски групп' },
    { year: '2022', title: 'Победы на соревнованиях', description: '15 призовых мест воспитанников' },
    { year: '2023', title: 'Методист года', description: 'Премия лучшего детского тренера' },
  ];

  const testimonials = [
    {
      name: 'Анна Петрова',
      role: 'Мама Даши, 7 лет',
      text: 'Дочка ходит на тренировки уже полгода и в восторге! Стала более уверенной в себе, улучшилась осанка. Тренер находит подход к каждому ребёнку.',
      rating: 5
    },
    {
      name: 'Михаил Соколов',
      role: 'Папа Артёма, 6 лет',
      text: 'Сын раньше был очень застенчивым, а теперь легко идёт на контакт с другими детьми. Спасибо за игровой формат тренировок!',
      rating: 5
    },
    {
      name: 'Елена Морозова',
      role: 'Мама Максима, 8 лет',
      text: 'Отличный тренер! Индивидуальный подход, профессионализм и искренняя любовь к детям. Максим с нетерпением ждёт каждого занятия.',
      rating: 5
    },
    {
      name: 'Дмитрий Волков',
      role: 'Папа Софии, 5 лет',
      text: 'София стала намного более активной и координированной. Программа тренировок продумана до мелочей. Рекомендую!',
      rating: 5
    }
  ];

  const gallery = [
    'https://cdn.poehali.dev/projects/477eef15-b0ab-4b5c-b48b-1c69e722a6bb/files/21d20902-30fe-46a2-958a-58c34f18fde7.jpg',
    'https://cdn.poehali.dev/projects/477eef15-b0ab-4b5c-b48b-1c69e722a6bb/files/3303ccd6-dd69-4099-822d-bcef54cc51cf.jpg',
    'https://cdn.poehali.dev/projects/477eef15-b0ab-4b5c-b48b-1c69e722a6bb/files/aba32b03-3c71-45b1-a9ec-fa6cb748b0f2.jpg',
    'https://cdn.poehali.dev/projects/477eef15-b0ab-4b5c-b48b-1c69e722a6bb/files/21d20902-30fe-46a2-958a-58c34f18fde7.jpg',
    'https://cdn.poehali.dev/projects/477eef15-b0ab-4b5c-b48b-1c69e722a6bb/files/3303ccd6-dd69-4099-822d-bcef54cc51cf.jpg',
    'https://cdn.poehali.dev/projects/477eef15-b0ab-4b5c-b48b-1c69e722a6bb/files/aba32b03-3c71-45b1-a9ec-fa6cb748b0f2.jpg',
  ];

  const handleProgramClick = (program: any) => {
    setSelectedProgram(program);
    setIsDialogOpen(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      <nav className="fixed top-0 w-full bg-card/80 backdrop-blur-md z-50 border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-primary">ДетСпорт</h1>
            <div className="hidden md:flex gap-6">
              {['home', 'about', 'programs', 'testimonials', 'gallery', 'schedule', 'contacts'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`transition-colors hover:text-primary ${
                    activeSection === section ? 'text-primary font-semibold' : 'text-foreground'
                  }`}
                >
                  {section === 'home' && 'Главная'}
                  {section === 'about' && 'Обо мне'}
                  {section === 'programs' && 'Программы'}
                  {section === 'testimonials' && 'Отзывы'}
                  {section === 'gallery' && 'Галерея'}
                  {section === 'schedule' && 'Расписание'}
                  {section === 'contacts' && 'Контакты'}
                </button>
              ))}
            </div>
            <Button size="sm" className="md:hidden">
              <Icon name="Menu" size={20} />
            </Button>
          </div>
        </div>
      </nav>

      <section id="home" className="min-h-screen flex items-center pt-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className={`space-y-6 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <Badge className="bg-secondary text-white">Детский тренер</Badge>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                Спорт для детей —{' '}
                <span className="text-primary">это весело!</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Развиваем физические способности и уверенность в себе через игру и движение. 
                Каждый ребёнок — маленький чемпион!
              </p>
              <div className="flex gap-4">
                <Button size="lg" onClick={() => scrollToSection('contacts')} className="hover-scale">
                  <Icon name="Phone" size={20} className="mr-2" />
                  Записаться на пробное занятие
                </Button>
                <Button size="lg" variant="outline" onClick={() => scrollToSection('programs')} className="hover-scale">
                  Программы
                </Button>
              </div>
              <div className="flex gap-8 pt-4">
                <div>
                  <div className="text-4xl font-bold text-primary">150+</div>
                  <div className="text-muted-foreground">Учеников</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary">5+</div>
                  <div className="text-muted-foreground">Лет опыта</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary">20+</div>
                  <div className="text-muted-foreground">Наград</div>
                </div>
              </div>
            </div>
            <div className={`${isVisible ? 'animate-scale-in' : 'opacity-0'} delay-200`}>
              <img
                src="https://cdn.poehali.dev/projects/477eef15-b0ab-4b5c-b48b-1c69e722a6bb/files/21d20902-30fe-46a2-958a-58c34f18fde7.jpg"
                alt="Детский тренер"
                className="rounded-3xl shadow-2xl hover-lift"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <Badge className="mb-4">Обо мне</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Создаю радость движения
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Я — детский тренер с многолетним опытом работы. Моя миссия — помочь каждому ребёнку 
              полюбить спорт и открыть свои таланты.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold">Мой подход</h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name="Heart" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Индивидуальный подход</h4>
                    <p className="text-muted-foreground">
                      Учитываю особенности каждого ребёнка, его темп развития и интересы
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                    <Icon name="Sparkles" size={24} className="text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Игровой формат</h4>
                    <p className="text-muted-foreground">
                      Тренировки проходят в форме увлекательных игр и квестов
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name="Trophy" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Достижение результатов</h4>
                    <p className="text-muted-foreground">
                      Развиваем не только тело, но и характер, уверенность в себе
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://cdn.poehali.dev/projects/477eef15-b0ab-4b5c-b48b-1c69e722a6bb/files/3303ccd6-dd69-4099-822d-bcef54cc51cf.jpg"
                alt="Тренировка"
                className="rounded-3xl shadow-xl hover-lift"
              />
            </div>
          </div>

          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-center mb-12">Мой путь</h3>
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary to-secondary"></div>
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className={`mb-12 flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } flex-col`}
                >
                  <div className={`md:w-5/12 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:pl-12'}`}>
                    <Card className="hover-lift animate-fade-in">
                      <CardContent className="p-6">
                        <div className="text-2xl font-bold text-primary mb-2">{achievement.year}</div>
                        <h4 className="text-xl font-semibold mb-2">{achievement.title}</h4>
                        <p className="text-muted-foreground">{achievement.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="md:w-2/12 flex justify-center my-4 md:my-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center shadow-lg z-10 animate-bounce-in">
                      <Icon name="Award" size={32} className="text-white" />
                    </div>
                  </div>
                  <div className="md:w-5/12"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="programs" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <Badge className="mb-4">Программы</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Тренировки для всех возрастов
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Разработанные программы с учётом возрастных особенностей и физического развития детей
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <Card
                key={index}
                className="hover-lift cursor-pointer group animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => handleProgramClick(program)}
              >
                <CardContent className="p-8">
                  <div className={`w-16 h-16 ${program.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <Icon name={program.icon as any} size={32} className="text-white" />
                  </div>
                  <Badge variant="outline" className="mb-4">{program.age}</Badge>
                  <h3 className="text-2xl font-bold mb-3">{program.title}</h3>
                  <p className="text-muted-foreground mb-6">{program.description}</p>
                  <Button variant="ghost" className="group-hover:text-primary transition-colors">
                    Подробнее
                    <Icon name="ArrowRight" size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <Badge className="mb-4">Отзывы</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Что говорят родители
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Честные отзывы о занятиях от родителей наших маленьких спортсменов
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <Carousel className="w-full">
              <CarouselContent>
                {testimonials.map((testimonial, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                    <Card className="h-full hover-lift">
                      <CardContent className="p-8">
                        <div className="flex gap-1 mb-4">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Icon key={i} name="Star" size={20} className="text-primary fill-primary" />
                          ))}
                        </div>
                        <p className="text-muted-foreground mb-6 italic">"{testimonial.text}"</p>
                        <div className="flex items-center gap-4">
                          <Avatar className="w-12 h-12">
                            <AvatarFallback className="bg-primary text-white">
                              {testimonial.name.split(' ').map(n => n[0]).join('')}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-semibold">{testimonial.name}</div>
                            <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex" />
              <CarouselNext className="hidden md:flex" />
            </Carousel>
          </div>
        </div>
      </section>

      <section id="gallery" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <Badge className="mb-4">Галерея</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Наши тренировки
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Фотографии с занятий — радость, энергия и достижения наших маленьких спортсменов
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {gallery.map((image, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-2xl group cursor-pointer animate-scale-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <img
                  src={image}
                  alt={`Галерея ${index + 1}`}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <div className="text-white">
                    <Icon name="ZoomIn" size={24} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="schedule" className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <Badge className="mb-4">Расписание</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Занятия на неделе
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Выберите удобное время для занятий. Запись открыта!
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="animate-fade-in-up">
              <CardContent className="p-0">
                {schedule.map((item, index) => (
                  <div
                    key={index}
                    className={`p-6 flex items-center justify-between hover:bg-muted/50 transition-colors ${
                      index !== schedule.length - 1 ? 'border-b border-border' : ''
                    }`}
                  >
                    <div className="flex items-center gap-6">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Icon name="Calendar" size={24} className="text-primary" />
                      </div>
                      <div>
                        <div className="font-semibold text-lg">{item.day}</div>
                        <div className="text-muted-foreground">{item.time}</div>
                      </div>
                    </div>
                    <Badge variant="secondary" className="hidden md:inline-flex">{item.group}</Badge>
                  </div>
                ))}
              </CardContent>
            </Card>

            <div className="mt-8 text-center">
              <Button size="lg" onClick={() => scrollToSection('contacts')} className="hover-scale">
                <Icon name="Clock" size={20} className="mr-2" />
                Записаться на занятие
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <Badge className="mb-4">Контакты</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Свяжитесь со мной
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ответю на все вопросы и помогу выбрать подходящую программу для вашего ребёнка
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
            <div className="space-y-6 animate-fade-in-up">
              <h3 className="text-2xl font-bold mb-6">Контактная информация</h3>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="Phone" size={24} className="text-primary" />
                </div>
                <div>
                  <div className="font-semibold">Телефон</div>
                  <a href="tel:+79991234567" className="text-muted-foreground hover:text-primary transition-colors">
                    +7 (999) 123-45-67
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="Mail" size={24} className="text-secondary" />
                </div>
                <div>
                  <div className="font-semibold">Email</div>
                  <a href="mailto:trainer@example.com" className="text-muted-foreground hover:text-primary transition-colors">
                    trainer@example.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="MapPin" size={24} className="text-primary" />
                </div>
                <div>
                  <div className="font-semibold">Адрес</div>
                  <div className="text-muted-foreground">
                    г. Москва, ул. Спортивная, д. 10
                  </div>
                </div>
              </div>
              <div className="pt-6">
                <div className="font-semibold mb-3">Социальные сети</div>
                <div className="flex gap-3">
                  <Button size="icon" variant="outline" className="hover-scale">
                    <Icon name="Instagram" size={20} />
                  </Button>
                  <Button size="icon" variant="outline" className="hover-scale">
                    <Icon name="Facebook" size={20} />
                  </Button>
                  <Button size="icon" variant="outline" className="hover-scale">
                    <Icon name="Youtube" size={20} />
                  </Button>
                </div>
              </div>
            </div>

            <Card className="animate-fade-in-up">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-6">Оставьте заявку</h3>
                <form className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Ваше имя</label>
                    <Input placeholder="Введите ваше имя" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Телефон</label>
                    <Input type="tel" placeholder="+7 (999) 123-45-67" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Email</label>
                    <Input type="email" placeholder="your@email.com" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Сообщение</label>
                    <Textarea placeholder="Расскажите о вашем ребёнке и целях занятий" rows={4} />
                  </div>
                  <Button type="submit" className="w-full hover-scale">
                    <Icon name="Send" size={20} className="mr-2" />
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-card border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">ДетСпорт</h3>
            <p className="text-muted-foreground mb-6">
              Создаём здоровое и счастливое будущее для ваших детей
            </p>
            <div className="text-muted-foreground text-sm">
              © 2024 ДетСпорт. Все права защищены.
            </div>
          </div>
        </div>
      </footer>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-2xl">
          {selectedProgram && (
            <>
              <DialogHeader>
                <DialogTitle className="text-3xl font-bold flex items-center gap-4">
                  <div className={`w-14 h-14 ${selectedProgram.color} rounded-2xl flex items-center justify-center`}>
                    <Icon name={selectedProgram.icon} size={28} className="text-white" />
                  </div>
                  {selectedProgram.title}
                </DialogTitle>
                <DialogDescription className="text-base pt-4">
                  {selectedProgram.fullDescription}
                </DialogDescription>
              </DialogHeader>
              
              <div className="space-y-6 mt-6">
                <div>
                  <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                    <Icon name="CheckCircle" size={20} className="text-primary" />
                    Преимущества программы
                  </h4>
                  <ul className="space-y-2">
                    {selectedProgram.benefits.map((benefit: string, index: number) => (
                      <li key={index} className="flex items-start gap-2">
                        <Icon name="Check" size={18} className="text-primary mt-1 flex-shrink-0" />
                        <span className="text-muted-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="grid md:grid-cols-3 gap-4 pt-4">
                  <Card>
                    <CardContent className="p-4">
                      <div className="flex items-center gap-3">
                        <Icon name="Calendar" size={20} className="text-primary" />
                        <div>
                          <div className="text-sm text-muted-foreground">Расписание</div>
                          <div className="font-semibold text-sm">{selectedProgram.schedule}</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-4">
                      <div className="flex items-center gap-3">
                        <Icon name="Clock" size={20} className="text-primary" />
                        <div>
                          <div className="text-sm text-muted-foreground">Длительность</div>
                          <div className="font-semibold text-sm">{selectedProgram.duration}</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-4">
                      <div className="flex items-center gap-3">
                        <Icon name="Users" size={20} className="text-primary" />
                        <div>
                          <div className="text-sm text-muted-foreground">Группа</div>
                          <div className="font-semibold text-sm">{selectedProgram.groupSize}</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="flex gap-3 pt-4">
                  <Button className="flex-1" onClick={() => {
                    setIsDialogOpen(false);
                    scrollToSection('contacts');
                  }}>
                    <Icon name="Phone" size={18} className="mr-2" />
                    Записаться на занятие
                  </Button>
                  <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                    Закрыть
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;
