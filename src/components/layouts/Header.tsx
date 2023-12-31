import { styled } from '@mui/system';
import { useLocation, useNavigate } from 'react-router-dom'; 
import Logo from '@/static/images/logo.png';

type StyledProps = {
  pathIsMap?: boolean;
}

const HeaderContainer = styled('div')<StyledProps>(({ pathIsMap }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: '10px 20px',
  backgroundColor: '#C0E5FE',
  position: 'relative',
}));

const Position = styled('div')<StyledProps>(({ pathIsMap }) => ({
  position: pathIsMap ? 'absolute' : 'unset',
  top: '18px',
  left: '18px',
  width: pathIsMap ? '500px' : 'unset',
  display: 'flex',
  flexGrow: pathIsMap ? 0 : 1,
}))

const LogoImage = styled('img')<StyledProps>(({ pathIsMap }) => ({
  width: pathIsMap ? '110px' : '50px',
  marginRight: pathIsMap ? '25px' : '15px',
}));

const HeaderText = styled('div')<StyledProps>(({ pathIsMap }) => ({
  display: 'flex',
  flexDirection: 'column',
  lineHeight: pathIsMap ? '1.6' : '1.2',
  fontSize: pathIsMap ? '35px' : '14px',
}));

const SpanText = styled('span')({
  // fontSize: '35px',  
  fontWeight: 'bold',
  color: '#5F5346',
  // position: 'absolute',
});

function Header() {
  const location = useLocation();
  const navigate = useNavigate()

  const pathIsMap = location.pathname === '/map';
  return (
    <HeaderContainer>
      <>
        <LogoImage
          src={Logo}
          alt="Logo"
          sx={{ cursor: 'pointer' }}
          onClick={() => navigate('/')} />
        <HeaderText>
          <SpanText sx={{ml: 1, fontSize: '26px', cursor: 'pointer'}} onClick={() => navigate('/')}>台灣地圖上的見解資料庫-民事案件</SpanText>
        </HeaderText>
      </>
    </HeaderContainer>
  );
}

export default Header;
