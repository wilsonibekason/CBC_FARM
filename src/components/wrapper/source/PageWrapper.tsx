import { Rect } from "css-box-model";
import React from "react";
import PageTitles from "../pagetitles/PageTitles";
import Wrapper from "./Wrapper";
interface PageWrapperInterface {
  children: React.ReactNode;
}
const PageWrapper: React.FC<PageWrapperInterface> = ({ children }) => {
  return (
    <>
      <Wrapper>
        <PageTitles PageMessage="About Our company" />
        {children}
      </Wrapper>
    </>
  );
};

export default PageWrapper;
