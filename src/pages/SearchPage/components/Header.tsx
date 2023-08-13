import Typography from '@mui/material/Typography';

export const Header: React.FC = () => (
  <Typography variant="h3" sx={{
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'custom.layoutBorder.default',
    mb: 8
  }}>查詢資訊</Typography>
);