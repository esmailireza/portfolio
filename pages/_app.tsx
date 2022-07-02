import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import "../styles/globals.css";

import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <div className="grid grid-cols-12 gap-6 px-5 my-14 lg:mb-0 md:mb-16 sm:px-20 md:px-32 lg:px-36 xl:px-48 ">
        {/* // do this div style later (after putting the content) */}
        <div className="h-full col-span-12 p-4 text-base text-center bg-white bg-opacity-50 dark:bg-dark-500 lg:col-span-4 rounded-2xl backdrop-filter backdrop-blur-lg">
          {/* //!sidebar */}
          <Sidebar />
        </div>
        <div className="flex flex-col col-span-12 overflow-hidden bg-white bg-opacity-50 rounded-2xl lg:col-span-8 dark:bg-dark-500 backdrop-filter backdrop-blur-lg">
          {/* //!navbar */}
          <Navbar />
          {/* //!about */}
          <Component {...pageProps} />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default MyApp;
