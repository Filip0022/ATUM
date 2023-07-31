import React, { useState, useCallback } from 'react';
import { render } from 'react-dom';
import ImageViewer from 'react-simple-image-viewer';
import './Gallery.css';


function Gallery() {
    const [currentImage, setCurrentImage] = useState(0);
    const [isViewerOpen, setIsViewerOpen] = useState(false);
    const images = [
        '/images/uniejow21-9.jpeg',
        '/images/uniejow21-8.jpeg',
        '/images/uniejow21-10.jpeg',
        '/images/makeup1.jpeg',
        '/images/makeup2.jpeg',
        '/images/biblioteka1.jpeg',
        '/images/biblioteka2.jpeg',
        '/images/biblioteka3.jpeg',
        '/images/grudziadz2.jpeg',
        '/images/grudziadz1.jpeg',
        '/images/uniejow20-1.jpeg',
        '/images/uniejow20-2.jpeg',
        '/images/uniejow20-3.jpeg',
        '/images/uniejow20-4.jpeg',
        '/images/uniejow20-5.jpeg',
        '/images/uniejow20-6.jpeg',
        '/images/uniejow20-7.jpeg',
        '/images/uniejow20-8.jpeg',
        '/images/uniejow20-9.jpeg',
        '/images/szczecin2.jpeg',
        '/images/szczecin1.jpeg',
        '/images/uniejow21-1.JPG',
        '/images/uniejow21-2.JPG',
        '/images/uniejow21-3.JPG',
        '/images/uniejow21-4.JPG',
        '/images/uniejow21-5.JPG',
        '/images/uniejow21-6.JPG',
        '/images/uniejow22-1.JPG',
        '/images/uniejow22-2.JPG',
        '/images/uniejow21-7.jpeg',
    ];

    const openImageViewer = useCallback((index) => {
        setCurrentImage(index);
        setIsViewerOpen(true);
    }, []);

    const closeImageViewer = () => {
        setCurrentImage(0);
        setIsViewerOpen(false);
    };

    return (
        <div id="gallery">
            {images.map((src, index) => (
                <img
                    src={ src }
                    onClick={ () => openImageViewer(index) }
                    width="250px"
                    key={ index }
                    style={{}}
                    alt=""
                />
            ))}

            {isViewerOpen && (
                <ImageViewer
                    src={ images }
                    currentIndex={ currentImage }
                    disableScroll={ false }
                    closeOnClickOutside={ true }
                    onClose={ closeImageViewer }
                />
            )}
        </div>
    );
}

export default Gallery