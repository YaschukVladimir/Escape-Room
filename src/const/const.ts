export enum AppRoute {
  Root = '/',
  Quest = '/quest/:id',
  MyQuests = '/my-quests',
  Login = '/login',
  Booking = '/quest/:id/booking',
  Contacts = '/contacts'
}

export const questTypes = {
  'all-quests': 'Все квесты',
  'adventure': 'Приключения',
  'horror': 'Ужасы',
  'mystic': 'Мистика',
  'detective': 'Детектив',
  'sci-fi': 'Sci-fi',
};
