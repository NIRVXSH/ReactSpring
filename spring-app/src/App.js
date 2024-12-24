import { ConfigProvider } from "antd";
import './App.css';
import { RouterProvider } from "react-router-dom";

import routers from "./routes";

const App=() => {
  return (
    <ConfigProvider >
      <RouterProvider router={routers} />
    </ConfigProvider>
  );
}

export default App;
