import { useTheme, Theme } from 'app/providers/ThemeProvider';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import LightIcon from 'shared/assets/icons/theme-light.svg';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import cls from './ThemeSwitcher.module.scss';

export const ThemeSwitcher = () => {
    const { theme, toggleTheme } = useTheme();
    return (
        <div className={cls.ThemeSwitcher}>
            <div className={cls.ThemeSwitcher__toggle}>
                <Button theme={ThemeButton.CLEAR} onClick={toggleTheme}>
                    {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
                </Button>
            </div>
        </div>
    );
};
