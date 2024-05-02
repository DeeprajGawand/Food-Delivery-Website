import './App.css';
import { CssBaseline, ThemeProvider } from '@mui/material';
import darkTheme from './theme/DarkTheme';
import HomePage from './customers/pages/Home/HomePage';

function App() {
  return (
    <ThemeProvider theme ={darkTheme}>
      <CssBaseline/>
      <HomePage/>
    </ThemeProvider>
   
  
  );
}

export default App;
