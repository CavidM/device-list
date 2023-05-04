import { FC, useEffect, useState } from "react";

export const ClientOnly: FC<any> = ({ children, ...rest }) => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  return <div {...rest}>{children}</div>;
}