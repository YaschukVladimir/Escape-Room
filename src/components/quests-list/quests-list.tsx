import { Quest } from '../../types';
import QuestCard from '../quest-card/quest-card';

type QuestListProps = {
  quests: Quest[];
}


function QuestsList({ quests }: QuestListProps): React.JSX.Element {
  return (
    <div className="cards-grid">
      {quests.map((quest) => (
        <QuestCard key={quest.id} quest={quest} />
      ))}
    </div>
  );
}

export default QuestsList;

