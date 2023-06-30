import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import SignInSide from './SignInSide.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Checkout from './Checkout.jsx';
import Review from './Review.jsx';

const App = () => {
    return (<Checkout></Checkout>)
  }

// const App = () => {
//   return (<BrowserRouter>
//     <Routes>
//       <Route path="/" element={<Review></Review>}></Route>
//       <Route path="/pink" element={<SignInSide></SignInSide>}></Route>
//     </Routes>
//   </BrowserRouter>)
// }

export default App;