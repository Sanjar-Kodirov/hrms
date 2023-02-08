import cls from "./Sidebar.module.scss";
import { useState } from "react";
import { ThemeSwitcher } from "shared/ThemeSwitcher";
import { classNames } from "shared/lib/classNames/classNames";

interface SidebarProps {
  className?: string;
}
export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, toggleCollapsed] = useState(false);

  const onToggle = () => {
    toggleCollapsed((prev) => !prev);
  };
  return (
    <div
      className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
        className,
      ])}
    >
      <div className={cls.switchers}>
        <ThemeSwitcher />
        {/* language switcher */}
      </div>
      <button onClick={onToggle}>Toggle</button>
    </div>
  );
};
