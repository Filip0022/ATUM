import React, { useState, useCallback } from 'react';
import { render } from 'react-dom';
import ImageViewer from 'react-simple-image-viewer';
import './Gallery.css';


function Gallery() {
    const [currentImage, setCurrentImage] = useState(0);
    const [isViewerOpen, setIsViewerOpen] = useState(false);
    const images = [
        'https://zoonews.pl/wp-content/uploads/2022/02/male-kotki.jpg',
        'https://zoonews.pl/wp-content/uploads/2022/02/male-kotki.jpg',
        'https://zoonews.pl/wp-content/uploads/2022/02/male-kotki.jpg',
        'https://zoonews.pl/wp-content/uploads/2022/02/male-kotki.jpg',
        'https://zoonews.pl/wp-content/uploads/2022/02/male-kotki.jpg',
        'https://zoonews.pl/wp-content/uploads/2022/02/male-kotki.jpg',
        'https://zoonews.pl/wp-content/uploads/2022/02/male-kotki.jpg',
        'https://zoonews.pl/wp-content/uploads/2022/02/male-kotki.jpg',
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