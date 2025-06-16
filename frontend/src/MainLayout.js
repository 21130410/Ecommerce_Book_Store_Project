// src/layouts/MainLayout.jsx
import Header from '../src/components/Header/Header';
import Footer from '../src/components/Footer/Footer';

export default function MainLayout({ children }) {
    return (
        <>
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    );
}
