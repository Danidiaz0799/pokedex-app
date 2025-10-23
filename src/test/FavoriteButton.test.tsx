import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import FavoriteButton from '../components/atoms/FavoriteButton';

describe('FavoriteButton', () => {
  it('renderiza el botón correctamente', () => {
    render(<FavoriteButton isFavorite={false} onClick={() => {}} />);
    const button = screen.getByRole('button', { name: /add to favorites/i });
    expect(button).toBeInTheDocument();
  });

  it('muestra corazón vacío cuando no es favorito', () => {
    const { container } = render(<FavoriteButton isFavorite={false} onClick={() => {}} />);
    const button = container.querySelector('.favorite-button');
    expect(button).not.toHaveClass('favorite-button--active');
  });

  it('muestra corazón lleno cuando es favorito', () => {
    const { container } = render(<FavoriteButton isFavorite={true} onClick={() => {}} />);
    const button = container.querySelector('.favorite-button');
    expect(button).toHaveClass('favorite-button--active');
  });

  it('llama a onClick cuando se hace clic', async () => {
    const handleClick = vi.fn();
    const user = userEvent.setup();
    
    render(<FavoriteButton isFavorite={false} onClick={handleClick} />);
    const button = screen.getByRole('button');
    
    await user.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('cambia el aria-label según el estado', () => {
    const { rerender } = render(<FavoriteButton isFavorite={false} onClick={() => {}} />);
    expect(screen.getByRole('button', { name: /add to favorites/i })).toBeInTheDocument();

    rerender(<FavoriteButton isFavorite={true} onClick={() => {}} />);
    expect(screen.getByRole('button', { name: /remove from favorites/i })).toBeInTheDocument();
  });
});
