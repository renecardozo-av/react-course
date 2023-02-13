import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { customDarkTheme } from './theme/CustomTheme';

import Layout from './pages/Layout';
import Home from './pages/Home/Home'
import Blogs from './pages/Blogs';
import Contact from './pages/Contact';
import NoPage from './pages/NoPage';


function App() {
  return (
    <ThemeProvider theme={customDarkTheme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />}/>
            <Route path='blogs' element={<Blogs />}/>
            <Route path='contact' element={<Contact />} />
            <Route path='*' element={<NoPage />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
