/**
 * Atom: PokeballIcon
 * Ícono reutilizable de Pokéball
 */

interface PokeballIconProps {
  size?: number;
  color?: string;
  className?: string;
}

export const PokeballIcon = ({ 
  size = 40, 
  color = '#DC0A2D',
  className = '' 
}: PokeballIconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="24" cy="24" r="22" stroke={color} strokeWidth="2" />
      <line x1="2" y1="24" x2="46" y2="24" stroke={color} strokeWidth="2" />
      <circle cx="24" cy="24" r="6" stroke={color} strokeWidth="2" fill="white" />
      <circle cx="24" cy="24" r="3" fill={color} />
    </svg>
  );
};
