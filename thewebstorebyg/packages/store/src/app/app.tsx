import * as React from 'react';
import NxWelcome from './nx-welcome';
import { Link, Route, Routes } from 'react-router-dom';

const Pdp = React.lazy(() => import('pdp/Module'));

const Search = React.lazy(() => import('search/Module'));

export function App() {
  return (
    <React.Suspense fallback={null}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/pdp">Pdp</Link>
        </li>

        <li>
          <Link to="/search">Search</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<NxWelcome title="store" />} />

        <Route path="/pdp" element={<Pdp />} />

        <Route path="/search" element={<Search />} />
      </Routes>
    </React.Suspense>
  );
}

export default App;
