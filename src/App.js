import { HelmetProvider } from 'react-helmet-async';
import Pages from './pages/pages';
import { Allwrap, Bg } from './styles/global/allWrap';


function App() {
  return (
    <>
      <Bg>
        <Allwrap>
        <HelmetProvider>
          <Pages />
        </HelmetProvider>
        </Allwrap>
      </Bg>
    </>
  );
}

export default App;
