import { Navigate, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { TechProvider } from "../providers/TechContext";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route element={<TechProvider />}>
        <Route path="/home" element={<Home />} />
      </Route>
      <Route path="/" element={<Navigate to="/home" />} />
    </Routes>
  );
};

// export function MainRoutes() {
//   return (
//     <Routes>
//       <Route element={<PasswordStateProvider />}>
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />
//       </Route>
//       <Route element={<TechsProvider />}>
//         <Route path="/dashboard" element={<Dashboard />} />
//       </Route>
//       <Route path="/" element={<Navigate to="/login" />} />
//       <Route path="*" element={<PageNotFound />} />
//     </Routes>
//   );
// }
