import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { customDarkTheme } from './theme/CustomTheme';
import { useReducer } from 'react';

import Layout from './pages/Layout';
import Home from './pages/home/Home'
import Blogs from './pages/blogs/Blogs';
import Contact from './pages/Contact';
import About from './pages/about/About';
import NoPage from './pages/NoPage';
import background from './assets/background.jpeg';
import ViewPost from './pages/ViewPost';
import { initialState, reducer } from './state/reducers';
import Context from './context/CreateContext';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider value={{state, dispatch}}>
      <ThemeProvider theme={customDarkTheme}>
        <CssBaseline />
        <BrowserRouter>
          <div style={{
            backgroundImage: `url(${background})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width:'100%',
            height: '100vh'
          }}>
            <Routes>
              <Route path='/' element={<Layout />}>
                <Route index element={<Home />}/>
                <Route path='blogs' element={<Blogs />}/>
                <Route path='contact' element={<Contact />} />
                <Route path='*' element={<NoPage />}/>
                <Route path='about' element={<About />}/>
                <Route path='/view-post/:id' element={<ViewPost />}/>
              </Route>
            </Routes>
          </div>
        </BrowserRouter>
      </ThemeProvider>
    </Context.Provider>
  );
}

export default App;
