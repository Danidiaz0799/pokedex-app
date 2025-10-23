import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import TypeBadge from '../components/atoms/TypeBadge';

describe('TypeBadge', () => {
  it('renderiza el badge con el tipo correcto', () => {
    render(<TypeBadge typeName="Fire" />);
    expect(screen.getByText('Fire')).toBeInTheDocument();
  });

  it('renderiza diferentes tipos correctamente', () => {
    render(<TypeBadge typeName="Electric" />);
    expect(screen.getByText('Electric')).toBeInTheDocument();
  });

  it('aplica el color correcto según el tipo', () => {
    const { container } = render(<TypeBadge typeName="Water" />);
    const badge = container.querySelector('.type-badge');
    expect(badge).toHaveStyle({ backgroundColor: '#6890F0' });
  });

  it('renderiza tipos con cualquier formato', () => {
    render(<TypeBadge typeName="Fairy" />);
    expect(screen.getByText('Fairy')).toBeInTheDocument();
  });
});
