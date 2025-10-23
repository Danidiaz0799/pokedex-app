import { describe, it, expect } from 'vitest';
import { validateSearchInput } from '../utils/pokemonHelpers';

describe('validateSearchInput', () => {
  it('retorna isValid true cuando el input está vacío', () => {
    expect(validateSearchInput('')).toEqual({ isValid: true });
  });

  it('retorna isValid true para un nombre válido', () => {
    const result = validateSearchInput('pikachu');
    expect(result.isValid).toBe(true);
  });

  it('retorna isValid true cuando contiene números', () => {
    expect(validateSearchInput('001')).toEqual({
      isValid: true,
    });
  });

  it('retorna isValid true para búsqueda mixta (letras y números)', () => {
    expect(validateSearchInput('pika123')).toEqual({
      isValid: true,
    });
  });

  it('retorna error cuando contiene caracteres especiales', () => {
    expect(validateSearchInput('pika!')).toEqual({
      isValid: false,
      errorMessage: 'Search can only contain letters and numbers',
    });
  });

  it('retorna error cuando contiene #', () => {
    expect(validateSearchInput('#001')).toEqual({
      isValid: false,
      errorMessage: 'Search can only contain letters and numbers',
    });
  });

  it('acepta nombres con espacios', () => {
    const result = validateSearchInput('mr mime');
    expect(result.isValid).toBe(true);
  });

  it('rechaza solo espacios como válido pero vacío', () => {
    expect(validateSearchInput('   ')).toEqual({ isValid: true });
  });

  it('acepta nombres en mayúsculas', () => {
    const result = validateSearchInput('PIKACHU');
    expect(result.isValid).toBe(true);
  });

  it('acepta nombres mezclados', () => {
    const result = validateSearchInput('PiKaChU');
    expect(result.isValid).toBe(true);
  });

  it('acepta solo números', () => {
    const result = validateSearchInput('001');
    expect(result.isValid).toBe(true);
  });

  it('acepta números sin ceros', () => {
    const result = validateSearchInput('1');
    expect(result.isValid).toBe(true);
  });
});
