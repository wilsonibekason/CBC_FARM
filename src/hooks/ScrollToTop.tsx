import React, { ReactElement } from "react";
import { useLocation } from "react-router-dom";
interface Props {
  children: ReactElement<any>;
  // children: ReactElement<any> JSX.element[] || JSX.element || REeactNiode.elment JSX.Element[] | JSX.Element |
}
const ScrollToTop = ({ children }: Props) => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [pathname]);
  return children;
};

export default ScrollToTop;
