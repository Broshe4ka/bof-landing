import linksData from './linksData';

const subsData = [
  {
    id: 1,
    period: 'сезон',
    price: 'Бесплатновое',
    fetureList: [
      'Подписка действительна до конца  сезона',
      'Уникальная роль в дискорде',
      'Закртый доступ к тестовым серверам',
    ],
    url: linksData.authSubSeason,
    image: '/images/sniffer.png',
    bg: 'var(--bg-gradient-season)',
  },
  {
    id: 2,
    period: 'месяц',
    price: 'Бесплатновое',
    fetureList: [
      'Подписка действительна до конца месяца',
      'Уникальная роль в дискорде',
      'Доступ к общим серверам',
    ],
    url: linksData.authSubMounthly,
    image: '/images/cow.png',
    bg: 'var(--bg-gradient-mounth)',
  },
];

export default subsData;
