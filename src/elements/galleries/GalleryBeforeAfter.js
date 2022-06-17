import React from "react";
import { Header } from '../Layout/Header';
import { GalleryPhotosBA } from "./GalleryPhotosBA";
import { Footer } from '../Layout/Footer';

export function GalleryBeforeAfter() {
    return (
        <>       
        <Header />
        <GalleryPhotosBA />
        <Footer />
        </>
    )
}