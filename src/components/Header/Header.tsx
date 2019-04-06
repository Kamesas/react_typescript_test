import * as React from "react";
import stl from "./Header.module.sass";

interface HeaderProps {
  title?: string;
}

const Header: React.FC<HeaderProps> = (props: HeaderProps) => {
  return (
    <div className={stl.header}>
      <h1>TODO app ({props.title})</h1>
    </div>
  );
};

Header.defaultProps = {
  title: "React and TypeScript"
};

export default Header;
