import {router} from "./router/Router";

import { RouterProvider } from "react-router-dom";

function App() {
  return (
    <main className='h-screen'>
      <RouterProvider router={router} />
    </main>
  );
}

export default App;
