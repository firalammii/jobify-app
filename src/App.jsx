import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { About, Home, Profile, SignIn, SignUp, CreateListing, UpdateListing, Listing, Search, Companies, AddCompany, Jobs, AddJob, Users } from './pages';
import { PrivateRoute, Contact, RequireAuth, AppHeader } from './components';
import { ROLES } from './data/roles';

export default function App() {
  return (
    <BrowserRouter>
      <AppHeader />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/about' element={<About />} />
        <Route path='/search' element={<Search />} />
        <Route path='/listing/:listingId' element={<Listing />} />

        <Route element={<PrivateRoute />}>
          <Route path='/profile' element={<Profile />} />
          <Route path='/create-listing' element={<CreateListing />} />
          <Route
            path='/update-listing/:listingId'
            element={<UpdateListing />}
          />
        </Route>


        <Route element={<RequireAuth allowedRoles={[ROLES.admin]} />}>
          <Route path='/companies' element={<Companies />} />
          <Route path='/add-company' element={<AddCompany />} />

          <Route path="/jobs" element={<Jobs />} />
          <Route path="/add-job" element={<AddJob />} />

        </Route>
        <Route element={<RequireAuth allowedRoles={[ROLES.super]} />}>
          <Route path="/users" element={<Users />} />
          {/* <Route path="/add-user" element={<Register />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
