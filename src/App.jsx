import { Toaster } from "./components/ui/toaster";
import { pagesConfig } from "./pages.config";
import { Routes, Route } from "react-router-dom"; // No Router here

// Destructure config
const { Pages, Layout, mainPage } = pagesConfig;

// Resolve main page
const mainPageKey = mainPage ?? Object.keys(Pages)[0];
const MainPage = Pages[mainPageKey];

// Layout wrapper
const LayoutWrapper = ({ children, currentPageName }) =>
  Layout ? (
    <Layout currentPageName={currentPageName}>
      {children}
    </Layout>
  ) : (
    <>{children}</>
  );

// Simple fallback page
function PageNotFound() {
  return <h1>404 — Page Not Found</h1>;
}

function App() {
  return (
    <>
      <Toaster />

      <Routes>
        {/* Main page */}
        <Route
          path="/"
          element={
            <LayoutWrapper currentPageName={mainPageKey}>
              <MainPage />
            </LayoutWrapper>
          }
        />

        {/* Other pages */}
        {Object.entries(Pages).map(([path, Page]) => (
          <Route
            key={path}
            path={`/${path}`}
            element={
              <LayoutWrapper currentPageName={path}>
                <Page />
              </LayoutWrapper>
            }
          />
        ))}

        {/* Catch-all */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
