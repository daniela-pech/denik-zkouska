import { ProgressChart } from '../../components/ProgressChart';
import './style.css';

export const HomePage = () => {
  return (
    <div className="flex flex-col items-start p-4">
      <ProgressChart />
    </div>
  );
};
