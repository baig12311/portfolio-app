import { Stack } from 'expo-router';
import Index from './index';
import ThemeProvider from '../ThemeProvider';

const Layout=()=> {
  return (
    <ThemeProvider>
      <Index />
    </ThemeProvider>
  );
}
export default Layout;