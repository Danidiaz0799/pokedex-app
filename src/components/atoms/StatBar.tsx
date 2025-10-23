import './StatBar.css';

interface StatBarProps {
  label: string;
  value: number;
  maxValue?: number;
  color?: string;
}

/**
 * Atom: StatBar
 * Barra de estadística con label y progreso
 */
const StatBar = ({ label, value, maxValue = 255, color = '#dc0a2d' }: StatBarProps) => {
  const percentage = Math.min((value / maxValue) * 100, 100);
  
  return (
    <div className="stat-bar">
      <div className="stat-bar__header">
        <span className="stat-bar__label">{label}</span>
        <span className="stat-bar__value">{value}</span>
      </div>
      <div className="stat-bar__track">
        <div 
          className="stat-bar__fill" 
          style={{ 
            width: `${percentage}%`,
            backgroundColor: color 
          }}
        />
      </div>
    </div>
  );
};

export default StatBar;
