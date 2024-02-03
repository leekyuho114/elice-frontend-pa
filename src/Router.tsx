import { Courses } from 'pages/Courses';
import { Route, Routes } from 'react-router-dom';

const Router = () => {
  return (
    <Routes>
      <Route path="/edu" element={<Courses />} />
    </Routes>
  );
};
export default Router;
