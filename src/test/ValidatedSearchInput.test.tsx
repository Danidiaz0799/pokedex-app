import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ValidatedSearchInput from '../components/atoms/ValidatedSearchInput/ValidatedSearchInput';

describe('ValidatedSearchInput', () => {
  it('renderiza el input correctamente', () => {
    render(<ValidatedSearchInput value="" onChange={() => {}} placeholder="Search" />);
    expect(screen.getByPlaceholderText('Search')).toBeInTheDocument();
  });

  it('muestra el ícono de búsqueda', () => {
    const { container } = render(<ValidatedSearchInput value="" onChange={() => {}} />);
    const icon = container.querySelector('.search-icon');
    expect(icon).toBeInTheDocument();
  });

  it('muestra el botón de limpiar cuando hay texto', () => {
    render(<ValidatedSearchInput value="pikachu" onChange={() => {}} />);
    expect(screen.getByRole('button', { name: /clear search/i })).toBeInTheDocument();
  });

  it('no muestra el botón de limpiar cuando está vacío', () => {
    render(<ValidatedSearchInput value="" onChange={() => {}} />);
    expect(screen.queryByRole('button', { name: /clear search/i })).not.toBeInTheDocument();
  });

  it('limpia el input cuando se hace clic en el botón de limpiar', async () => {
    const handleChange = vi.fn();
    const user = userEvent.setup();
    
    render(<ValidatedSearchInput value="pikachu" onChange={handleChange} />);
    const clearButton = screen.getByRole('button', { name: /clear search/i });
    
    await user.click(clearButton);
    expect(handleChange).toHaveBeenCalledWith('');
  });
});
