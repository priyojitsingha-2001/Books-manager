import { Outlet, Route, RouterProvider, createBrowserRouter, createRoutesFromElements, NavLink } from 'react-router-dom';
//pages
import Home from './pages/Home';
import CreateBook from './pages/CreateBook';
import ShowBook from './pages/ShowBook';
import EditBook from './pages/EditBook';
import DeleteBook from './pages/DeleteBook';
import Spinner from './components/Spinner';

export default function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path='/books/details/:id' element={<ShowBook />} />
        <Route path='/books/create/' element={<CreateBook />} />
        <Route path='/books/edit/:id' element={<EditBook />} />
        <Route path='/books/delete/:id' element={<DeleteBook />} />
        <Route path='*' element={<Spinner />} />
      </Route>
    )
  );
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

//root layout
export function RootLayout() {
  return <>
    <main>
      <Outlet />
    </main>
  </>
}