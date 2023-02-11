import { useTheme, Theme } from 'app/providers/ThemeProvider';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import LightIcon from 'shared/assets/icons/theme-light.svg';
import { Button, ThemeButton } from 'shared/ui/Button/Button';

export const ThemeSwitcher = () => {
    const { theme, toggleTheme } = useTheme();
    return (
        <div>
            <div>
                <Button theme={ThemeButton.CLEAR} onClick={toggleTheme}>
                    {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
                </Button>
            </div>
        </div>
    );
};
