export enum AppRoute {
  Root = '/',
  Quest = '/quest/:id',
  MyQuests = '/my-quests',
  Login = '/login',
  Booking = '/quest/:id/booking',
  Contacts = '/contacts'
}

export const questTypes = {
  all: 'Все квесты',
  adventure: 'Приключения',
  horror: 'Ужасы',
  mystic: 'Мистика',
  detective: 'Детектив',
  scifi: 'Sci-fi',
};
