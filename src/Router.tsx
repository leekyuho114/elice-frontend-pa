import { Courses } from 'pages/Courses';
import { Routes, Route } from 'react-router-dom';
export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Courses />} />
    </Routes>
  );
};
