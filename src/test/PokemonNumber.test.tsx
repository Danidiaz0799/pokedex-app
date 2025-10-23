import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import PokemonNumber from '../components/atoms/PokemonNumber';

describe('PokemonNumber', () => {
  it('renderiza el número con formato correcto para un dígito', () => {
    render(<PokemonNumber id={1} />);
    expect(screen.getByText('#001')).toBeInTheDocument();
  });

  it('renderiza el número con formato correcto para dos dígitos', () => {
    render(<PokemonNumber id={25} />);
    expect(screen.getByText('#025')).toBeInTheDocument();
  });

  it('renderiza el número con formato correcto para tres dígitos', () => {
    render(<PokemonNumber id={151} />);
    expect(screen.getByText('#151')).toBeInTheDocument();
  });

  it('maneja números mayores a 999 correctamente', () => {
    render(<PokemonNumber id={1000} />);
    expect(screen.getByText('#1000')).toBeInTheDocument();
  });
});
