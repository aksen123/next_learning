import { Outlet } from "react-router-dom";

const Event = () => {
  return (
    <div>
      <h1>이벤트 페이지</h1>
      <Outlet />
    </div>
  );
};

export default Event;
