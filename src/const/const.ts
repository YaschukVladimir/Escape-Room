
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
  Booking = '/v1/escape-room/quest',
  Login = '/v1/escape-room/login',
  Logout = '/v1/escape-room/logout',
  MyQuests = '/v1/escape-room/reservation',
}

export const questTypes = {
  'all-quests': 'Все квесты',
  'adventures': 'Приключения',
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

export enum QuestDate {
  today = 'Сегодня',
  tomorrow = 'Завтра',
}

export const TIMEOUT_SHOW_ERROR = 500;

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

export const URL_MARKER_DEFAULT = '/img/svg/pin-default.svg';
export const URL_MARKER_CURRENT = '/img/svg/pin-active.svg';

export const ZOOM = 13;
