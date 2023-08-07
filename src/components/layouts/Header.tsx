import { styled } from '@mui/system';
import Logo from '@/static/images/logo.png';

const HeaderContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
  padding: '10px 20px',
  backgroundColor: '#C0E5FE',
  height: '50px',
  position: 'relative',
});

const LogoImage = styled('img')({
  width: '130px',
  marginRight: '15px',
  position: 'absolute',
  left: '20px',
  top: '15px',
});

const HeaderText = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  lineHeight: '1.2',
});

const SpanText = styled('span')({
  fontSize: '35px',  
  fontWeight: 'bold',
  color: '#5F5346',
  position: 'absolute',
});

function Header() {
  return (
    <HeaderContainer>
      <LogoImage src={Logo} alt="Logo" />
      <HeaderText>
        <SpanText sx={{
          top: '38px',
          left: '160px',
        }}>台灣地圖上的</SpanText>
        <SpanText sx={{ml: 12, top: '95px',
          left: '160px',}}>見解資料庫</SpanText>
      </HeaderText>
    </HeaderContainer>
  );
}

export default Header;
