import { wrapper } from "@/store";
import { ReactElement } from "react";

const DefaultLayout = ({ children }: { children: ReactElement }) => {
  return <>{children}</>;
};

export default wrapper.withRedux(DefaultLayout);
