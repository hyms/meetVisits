export default {
  required: [(val: string) => !!val || 'Requerido'],
  max: (max: number) => [
    (v: string) => {
      if (v !== null && v !== undefined && v.length > 0) {
        return v.length <= max || 'Tiene que ser menor ' + max + ' caracteres';
      }
      return true;
    },
  ],
  min: (min: number) => [
    (v: string) => {
      if (v !== null && v !== undefined && v.length > 0) {
        return v.length >= min || 'Tiene que ser mayor ' + min + ' caracteres';
      }
      return true;
    },
  ],
  equalValue: (val2: string) => [
    (v: string) => {
      return v === val2 || 'las contraseñas no coincien';
    },
  ],
  number: [
    (v: string) => {
      if (v !== null && v !== undefined && v.length > 0) {
        return /[0-9]+$/.test(v) || 'Solo numeros';
      }
      return true;
    },
  ],
  numberWithDecimal: [
    (v: string) => {
      if (v !== null && v !== undefined && v.length > 0) {
        return /^\d*\.?\d*$/.test(v) || 'Solo numeros';
      }
      return true;
    },
  ],
  alpha: [
    (v: string) => {
      if (v !== null && v !== undefined && v.length > 0) {
        return /[a-zA-Z]+$/.test(v) || 'Solo letras';
      }
      return true;
    },
  ],
};
