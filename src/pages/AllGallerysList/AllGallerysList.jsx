import React from 'react';
import Header from '../../components/Header/Header';
import Menu from '../../components/Menu/Menu';
import MainContent from './MainContent';
import Footer from '../../components/Footer/Footer';


function AllGallerysList() {
    return (
        <>
            <div className="container">
                <Header />
                <Menu />
                <MainContent />

            </div>
            <Footer />
        </>
    )
}

export default AllGallerysList;