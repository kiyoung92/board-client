/** @jsxImportSource @emotion/react */

// import { Login } from './views/login'
import { Main } from './views/main';
import { commonLayout } from './style/common/layout';

function App() {
  return (
    <div css={ commonLayout.wrap }>
      <Main css={ commonLayout.wrap }></Main>
    </div>
  );
}

export default App;
