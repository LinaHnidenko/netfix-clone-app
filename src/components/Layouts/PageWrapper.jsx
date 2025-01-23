import cn from "classnames";
import { BackgroungScene } from "../BackgroungScene";
import { Header } from "../Header";

export const PageWrapper = ({ children, className, mainClassName }) => (
  <div className={cn("h-full w-full relative", className)}>
    <BackgroungScene />

    <Header />

    <main className={cn("flex-1", mainClassName)}>{children}</main>
  </div>
);
