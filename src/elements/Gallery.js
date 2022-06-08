import React from "react";
import { Header } from './Header';
import { GalleryPhotos } from "./GalleryPhotos"
import { Footer } from './Footer';

export function Gallery() {
    return (
        <>       
        <Header />
        <GalleryPhotos />
        <Footer />
        </>
    )
}