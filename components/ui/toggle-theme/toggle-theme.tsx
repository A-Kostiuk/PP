import React, { FC, useEffect, useState } from 'react';
import { Ball, Checkbox, Label } from './styled';
import { useTheme } from 'next-themes';

const ToggleTheme: FC = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const {setTheme, resolvedTheme} = useTheme();
  const isDarkMode = resolvedTheme !== 'light';

  const toggleThemeHandler = () => {
    setTheme(resolvedTheme === 'light' ? 'dark' : 'light');
  };

  if (!mounted) return null;

  return (
    <div>
      <Checkbox type="checkbox" id="checkbox" checked={isDarkMode}
                onChange={toggleThemeHandler} aria-label={'Toggle theme'} />
      <Label $isDarkMode={isDarkMode} htmlFor="checkbox">
        <Ball $isDarkMode={isDarkMode} />
      </Label>
    </div>
  );
};

export default ToggleTheme;
