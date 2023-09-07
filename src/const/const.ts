export enum AppRoute {
  Root = '/',
  Quest = '/quest/:id',
  MyQuests = '/my-quests',
  Login = '/login',
  Booking = '/quest/:id/booking',
  Contacts = '/contacts'
}

export enum ApiRoute {
  GetQuests = '/v1/escape-room/quest',
  GetDetailedQuest = '/v1/escape-room/quest',
  Booking = '/v1/escape-room/quest/{questId}/booking',
  Login = '/v1/escape-room/login',
  Logout = '/v1/escape-room/logout',
  MyQuests = '/v1/escape-room/reservation',
}

export const questTypes = {
  'all-quests': 'Все квесты',
  'adventure': 'Приключения',
  'horror': 'Ужасы',
  'mystic': 'Мистика',
  'detective': 'Детектив',
  'sci-fi': 'Sci-fi',
};

export const questDifficulty = {
  'any': 'любой',
  'easy': 'простой',
  'middle': 'средний',
  'hard': 'сложный'
};

export const TIMEOUT_SHOW_ERROR = 2000;

export enum NameSpace {
  Data = 'DATA',
  App = 'APP',
  User = 'USER',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}
