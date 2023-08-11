import { styled  } from '@mui/system';
import Grid from '@mui/material/Unstable_Grid2';

type StyledProps = {
  flexBasis: string;
};

export const AnimatedGrid = styled(Grid)<StyledProps>(({ theme, flexBasis }) => ({
  flexBasis: flexBasis,
  ...theme?.components?.AnimatedGrid.styleOverrides.root,
}))