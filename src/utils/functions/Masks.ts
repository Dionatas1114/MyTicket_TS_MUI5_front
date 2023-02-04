const masks = (mask: string, extraRule?: string) => {
  const masks: StringElements = {
    cpf: '$1.$2.$3-$4',
    phone: `($2) ${extraRule}$3-$4`,
  };

  return masks[mask];
};

const patterns: RegExpElements = {
  space: /\D/g,
  cpf: /^(\d{3})(\d{3})(\d{3})(\d{2})/,
  phone: /^(\d{2})(\d{2})(\d{4})(\d{4})/,
};

const Masks = (input: string, mask: string, extraRule?: string) =>
  input.replace(patterns.space, '').replace(patterns[mask], masks(mask, extraRule));

export default Masks;
