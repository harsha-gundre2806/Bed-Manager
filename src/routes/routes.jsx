import { createBrowserRouter } from "react-router-dom";
import AddEmployeePage from "../pages/admin/AddEmployeePage";
import CreateProfile from "../components/patient/CreateProfile";
import EditProfile from "../components/patient/EditProfile";
const router = createBrowserRouter([
  {
    path: "/",
    element: <AddEmployeePage />, // temporary home
  },
  {
    path: "/add-employee",
    element: <AddEmployeePage />,
  },
  {
    path: "/create-profile",
    element: <CreateProfile />,
  },
  {
    path: "/edit-profile",
    element: <EditProfile />,
  },
  
]);

export default router;
