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
      <span className="stat-bar__label">{label}</span>
      <div className="stat-bar__content">
        <span className="stat-bar__value">{String(value).padStart(3, '0')}</span>
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
    </div>
  );
};

export default StatBar;
