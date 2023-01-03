import Pages from './pages/pages';
import { Allwrap, Bg } from './styles/global/allWrap';

function App() {
  return (
    <>
      <Bg>
        <Allwrap>
          <Pages />
        </Allwrap>
      </Bg>
    </>
  );
}

export default App;
