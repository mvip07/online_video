import { Route, Routes } from "react-router-dom"
import BlogDetails from "./components/blogDetails";
import Contact from "./components/contact";
import CourseDetails from "./components/courseDetails";
import InstructorProfile from "./components/instructorProfile";
import Login from "./components/login";
import About from "./container/about";
import Blog from "./container/blog";
import Courses from "./container/courses";
import CoursesTwo from "./container/coursesTwo";
import Faq from "./container/faq";
import HomeOne from "./container/home";
import HomeThree from "./container/homeThree";
import HomeTwo from "./container/homeTwo";
import Instructor from "./container/instructor";
import Price from "./container/price";

function App() {
  return (
    <Routes >
      <Route path="/" element={<HomeOne />} />
      <Route path="/-2" element={<HomeTwo />} />
      <Route path="/-3" element={<HomeThree />} />
      <Route path="/about" element={<About />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog-details" element={<BlogDetails />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/courses-2" element={<CoursesTwo />} />
      <Route path="/course-details" element={<CourseDetails />} />
      <Route path="/faq" element={<Faq />} />
      <Route path="/instructor" element={<Instructor />} />
      <Route path="/instructor-profile" element={<InstructorProfile />} />
      <Route path="/login" element={<Login />} />
      <Route path="/price" element={<Price />} />

    </Routes>
  );
}

export default App;
