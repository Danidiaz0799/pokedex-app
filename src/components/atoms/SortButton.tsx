import './SortButton.css';

interface SortButtonProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
  icon?: React.ReactNode;
}

/**
 * Atom: SortButton
 * Botón reutilizable para ordenamiento con estado activo
 */
const SortButton = ({ label, isActive, onClick, icon }: SortButtonProps) => {
  return (
    <button
      className={`sort-button ${isActive ? 'sort-button--active' : ''}`}
      onClick={onClick}
    >
      {icon && <span className="sort-button__icon">{icon}</span>}
      {label}
    </button>
  );
};

export default SortButton;
