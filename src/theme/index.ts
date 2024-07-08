"use client"
import { createTheme, Theme } from '@mui/material/styles';
import PaletteOptions from './palette';

export const theme: Theme = createTheme({
  palette: PaletteOptions,
  typography: {
    fontFamily: 'SF-Pro-Display',
    body1: {
      fontSize: '0.8rem',
  
      '@media only screen and (min-width: 900px)': {
        fontSize: '1rem',
      },
      '@media only screen and (min-width: 1200px)': {
        fontSize: '1.2rem',
      },
      color: '#7E828B',
    },
    body2: {
      fontSize: '1rem',
      '@media only screen and (min-width: 900px)': {
        fontSize: '1.2rem',
      },
      '@media only screen and (min-width: 1200px)': {
        fontSize: '1.4rem',
      },
      color: '#000',
    },
    h1: {
      fontSize: '2.4rem',
      '@media only screen and (min-width: 600px)': {
        fontSize: '2.8rem',
      },
      '@media only screen and (min-width: 900px)': {
        fontSize: '3.2rem',
      },
      '@media only screen and (min-width: 1200px)': {
        fontSize: '3.6rem',
      },
    },
    h2: {
      fontSize: '1.8rem',
      lineHeight: '2rem',
      fontWeight: 'bolder',
      '@media only screen and (min-width: 1600px)': {
        fontSize: '2.5rem',
      },
      '@media only screen and (min-width: 600px)': {
        fontSize: '2.5rem',
      },
      '@media only screen and (min-width: 1200px)': {
        fontSize: '3rem',
      },
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: '1.2rem',
          fontWeight: 500,
          textTransform: 'capitalize',
        }
      }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: '#fff'
        }
      }
    }
  }
});
