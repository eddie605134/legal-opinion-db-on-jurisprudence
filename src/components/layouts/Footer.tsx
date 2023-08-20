import React from 'react';
import { styled } from '@mui/system';

const Footer = styled('footer')(({ theme }) => ({
  padding: '8px',
  backgroundColor: theme.palette.primary.main,
}));

export default function () {
  return (
    <Footer>
      <div className="footer">
        <div className="footer__content">
          <div className="footer__content__item" style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <span style={{
              fontWeight: 'bold',
              color: '#5F5346',
            }}>Copyright©2023 愛因斯坦創立AIFR</span>
          </div>
        </div>
      </div>
    </Footer>
  );
}