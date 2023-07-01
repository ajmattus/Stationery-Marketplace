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
import { BrowserRouter, Route, Routes, NavLink, Router} from 'react-router-dom';
import Checkout from './Checkout.jsx';
import Review from './Review.jsx';
import ProductPage from './ProductPage.jsx';
import AddressForm from './AddressForm.jsx';

// const App = () => {
//     return <Review />
//   }

const App = () => {
  return (
    <>
    {/* <NavLink to={'/sign'}>Sign in here</NavLink>
    <NavLink to={'/checkout'}>Checkout here</NavLink>
    <NavLink to={'/checkout/review/payment'}>Payment here</NavLink>
    <NavLink to={'/products'}>Products here</NavLink>
    <NavLink to={'/checkout/review'}>Review here</NavLink> */}
    {/* <Router>
      <Route exact path='/sign'><SignInSide/></Route>
    </Router> */}
    <div>Text</div>
      <BrowserRouter>
      <Routes>
        <Route index element={<SignInSide/>} />
        <Route path='/checkout' element={<div>This is checkout</div>} />
        <Route path='*' element={<div>This is an error</div>} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;