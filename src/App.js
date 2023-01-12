import React from "react";
// all css files
import "./App.css";
import "../src/pages/home page/Home.css";
import "../src/pages/Contact us/contactUs.css";
import "../src/components/loading.css";
import "./pages/learning app/learningApp.css";
import "./pages/products/productPage.css";
import "./pages/products/productDetails.css";
// --------------
import Header from "../src/components/Header";
import { Routes, Route } from "react-router-dom";
import NoPage from "./pages/nopage/NoPage";
import WhatsappButton from "./components/WhatsappButton";
import Footer from "./components/Footer";
import Loading from "./components/Loading";
const HomePage = React.lazy(() => import("./pages/home page/Home"));
const ProductPage = React.lazy(() => import("./pages/products/Products"));
const LearningApp = React.lazy(() =>
  import("./pages/learning app/LearningApp")
);

const ContactPage = React.lazy(() => import("./pages/Contact us/ContactUs"));
const AboutPage = React.lazy(() => import("./pages/about us/AboutUs"));
const OnlineTrainingsPage = React.lazy(() =>
  import("./pages/online trainings/OnlineTrainings")
);

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route
          index
          path="/"
          element={
            <React.Suspense fallback={<Loading />}>
              <HomePage />
            </React.Suspense>
          }
        />
        <Route
          index
          path="home"
          element={
            <React.Suspense fallback={<Loading />}>
              <HomePage />
            </React.Suspense>
          }
        />
        <Route
          path="products"
          element={
            <React.Suspense fallback={<Loading />}>
              <ProductPage />
            </React.Suspense>
          }
        />
        <Route
          path="contactus"
          element={
            <React.Suspense fallback={<Loading />}>
              <ContactPage />
            </React.Suspense>
          }
        />
        <Route
          path="aboutus"
          element={
            <React.Suspense fallback={<Loading />}>
              <AboutPage />
            </React.Suspense>
          }
        />
        <Route
          path="learningapp"
          element={
            <React.Suspense fallback={<Loading />}>
              <LearningApp />
            </React.Suspense>
          }
        />
        <Route
          path="onlinetrainings"
          element={
            <React.Suspense fallback={<Loading />}>
              <OnlineTrainingsPage />
            </React.Suspense>
          }
        />

        <Route path="*" element={<NoPage />} />
      </Routes>
      <WhatsappButton />
      <Footer />
    </div>
  );
}

export default App;
