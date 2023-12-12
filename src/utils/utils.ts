import { Quest } from '../types';


export function sortQuestsByType(allQuests: Quest[], choosenQuestType: string) {
  if (choosenQuestType === 'all-quests') {
    return allQuests;
  } else {
    return (
      allQuests.filter((quest) => quest.type === choosenQuestType)
    );
  }
}
