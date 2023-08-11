import { Outlet } from 'react-router-dom';
import { useTheme } from '@mui/system';
import CardContent from '@mui/material/CardContent';

export const MainContent = () => {
  const theme = useTheme();
  return (
    <CardContent sx={{
      border: `6px solid ${theme.palette.custom.layoutBorder.default}`,
      background: theme.palette.custom.contentBackground.default,
      borderTopRightRadius: '.5em',
      minHeight: '80vh'
    }}>
      <Outlet />
    </CardContent>
  );
}