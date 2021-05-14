import * as React from "react";
import { Wrapper, Indicator } from "./loader.styles";

export const Loader = () => {
  return (
    <Wrapper>
      <Indicator size={50} animating={true} color="red" />
    </Wrapper>
  );
};

export default Loader;
