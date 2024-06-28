import { useTheme } from "next-themes";
import Header from "./Header";
import SubSidebar from "./SubSideBar";
import SideBar from "@/components/layout/sidebar/SideBar";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
const ContentWrapper = ({ children }: { children: React.ReactNode }) => {
    const { theme } = useTheme();
    return (
      <html lang="en" className={theme}>
        <body className={`${inter.className} ${theme}`}>
          <div className={`flex h-screen ${theme}`}>
            <div className="flex flex-1 flex-col relative">
              <Header />
              <main className={`flex-1 flex body_main_layout ${theme}`}>
                <div
                  className={`primary_color fixed top-0 left-0 bottom-0 ${theme}`}
                >
                  <SideBar />
                </div>
                <div
                  className={`sub_side flex-0 ml-20 fixed top-10 bottom-0 ${theme}`}
                >
                  <SubSidebar />
                </div>
                <div className={`flex-1 ml-80 w-96 ${theme}`}>{children}</div>
              </main>
            </div>
          </div>
        </body>
      </html>
    );
  };
export default ContentWrapper;