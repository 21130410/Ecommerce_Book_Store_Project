import { Outlet } from "react-router-dom";
import Header from "../AppHeader/index";
import Footer from "../AppFooter/index"
import AppHeader from "../AppHeader/index";
import AppFooter from "../AppFooter/index";
import SideMenu from "../SideMenu/index";
import { Space } from "antd";
import "../../app.css";
import PageContent from "../PageContent/index";
// function AdminLayout() {
//     return (
//         <>
//             <Header />
//             <main><Outlet /></main>
//             <Footer />
//         </>
//     );
// }
//
// export default AdminLayout;

const AdminLayout = () => {
    return (
        <div className="App">
            <AppHeader />
            <div className="SideMenuAndPageContent">
                <SideMenu />
                <Outlet /> {/* Route con sẽ được hiển thị ở đây */}
            </div>
            <AppFooter />
        </div>
    );
};

export default AdminLayout;
