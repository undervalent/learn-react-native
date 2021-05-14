import * as React from "react";

import { SafeArea } from "./safe-area.styles";

export const SafeAreaWrapper: React.FC = ({ children }) => {
  return <SafeArea>{children}</SafeArea>;
};

export default SafeAreaWrapper;
