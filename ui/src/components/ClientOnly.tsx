import {
  FC, ReactNode, useEffect, useState, HTMLAttributes,
} from 'react';

interface ClientOnlyProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export const ClientOnly: FC<ClientOnlyProps> = ({ children, ...rest }) => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  return <div {...rest}>{children}</div>;
};
