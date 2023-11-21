import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import { Warships } from '../Warships/Warships';
import { AppContextProvider } from './Context/AppContext';

export function App() {
  return (
    <AppContextProvider>
      <Header />
      <Warships />
      <Footer />
    </AppContextProvider>
  );
}
