import React from "react";
import { Header } from '../Layout/Header';
import { GalleryPhotos } from "./GalleryPhotos"
import { Footer } from '../Layout/Footer';

export function Gallery() {
    return (
        <>       
        <Header />
        <GalleryPhotos />
        <Footer />
        </>
    )
}