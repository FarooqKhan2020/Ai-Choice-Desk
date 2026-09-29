'use client';

import { createContext, useContext, useMemo, useState } from 'react';
import { DEFAULT_INPUTS, calculate } from './calculatorData';

const CalculatorContext = createContext(null);

export function CalculatorProvider({ children }) {
  const [inputs, setInputs] = useState(DEFAULT_INPUTS);

  const value = useMemo(
    () => ({
      inputs,
      setInput: (key, next) => setInputs((prev) => ({ ...prev, [key]: next })),
      results: calculate(inputs),
    }),
    [inputs],
  );

  return <CalculatorContext.Provider value={value}>{children}</CalculatorContext.Provider>;
}

export function useCalculator() {
  const context = useContext(CalculatorContext);
  if (!context) throw new Error('useCalculator must be used inside CalculatorProvider');
  return context;
}
