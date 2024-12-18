import ErrorLayout from "@/layouts/ErrorLayout";

import {createBrowserRouter} from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "*",
    lazy: () => import("@/layouts/NotFoundLayOut"),
  },
  {
    path: "/",
    errorElement: <ErrorLayout />,
    lazy: () => import("@/modules/course-details"),
  },
]);
