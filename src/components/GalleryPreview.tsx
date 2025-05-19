import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import '../styles/GalleryPreview.css';

interface ImageItem {
  id: number;
  src: string;
  alt: string;
  title: string;
}

const SimpleGallery: React.FC = () => {

  const images: ImageItem[] = [
    { id: 1, src: '/assets/soaspic.jpg', alt: 'Urban architecture', title: 'Masked Lovers' },
    { id: 2, src: '/assets/sosa8.jpg', alt: 'Portrait photography', title: 'African' },
    { id: 3, src: '/assets/sosa9.jpg', alt: 'Landscape photography', title: 'Solitude' },
    { id: 4, src: '/assets/sosa10.jpg', alt: 'Landscape photography', title: 'Smile' },
    { id: 5, src: '/assets/sosa5.jpg', alt: 'Street photography', title: 'Authenticity' },
    { id: 6, src: '/assets/sosa6.jpg', alt: 'Architecture detail', title: 'Professional' },
    { id: 7, src: '/assets/sosa7.jpg', alt: 'Portrait photography', title: 'African' },
    { id: 8, src: '/assets/sosa11.jpg', alt: 'Macro photography', title: 'Masked Lovers' },
    { id: 9, src: '/assets/sosa4.jpg', alt: 'Street photography', title: 'Self love' },
  ];

  
  const [selectedImage, setSelectedImage] = useState<ImageItem | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isImageLoaded, setIsImageLoaded] = useState<boolean>(false);

 
  const handleImageClick = (image: ImageItem): void => {
    const index = images.findIndex(img => img.id === image.id);
    setCurrentIndex(index);
    setSelectedImage(image);
    setIsImageLoaded(false);
  };


  const closeModal = (): void => {
    setSelectedImage(null);
  };


  const navigateImage = (direction: 'next' | 'prev'): void => {
    if (!selectedImage) return;
    
    let newIndex = direction === 'next' 
      ? (currentIndex + 1) % images.length 
      : (currentIndex - 1 + images.length) % images.length;
    
    setIsImageLoaded(false);
    setCurrentIndex(newIndex);
    setSelectedImage(images[newIndex]);
  };


  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedImage) return;
      
      if (e.key === 'Escape') {
        closeModal();
      } else if (e.key === 'ArrowRight') {
        navigateImage('next');
      } else if (e.key === 'ArrowLeft') {
        navigateImage('prev');
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, currentIndex]);


  const handleImageLoad = () => {
    setIsImageLoaded(true);
  };

  return (
    <div className="simple-gallery-container">
      <div className="gallery-content">
        <div className="gallery-header">
          <h1 className="gallery-title">Gallery</h1>
        </div>
        
        <div className="gallery-grid">
          {images.map((image) => (
            <div 
              key={image.id}
              className="gallery-item"
              onClick={() => handleImageClick(image)}
            >
              <img 
                src={image.src} 
                alt={image.alt}
                className="gallery-image"
              />
              <div className="image-caption">
                <h3>{image.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
      

      {selectedImage && (
        <div className="lightbox-overlay" onClick={closeModal}>
          <button 
            className="close-button"
            onClick={closeModal}
          >
            <X size={24} />
          </button>
          

          <button 
            className="nav-button prev-button"
            onClick={(e) => {
              e.stopPropagation();
              navigateImage('prev');
            }}
          >
            <ChevronLeft size={28} />
          </button>
          
          <button 
            className="nav-button next-button"
            onClick={(e) => {
              e.stopPropagation();
              navigateImage('next');
            }}
          >
            <ChevronRight size={28} />
          </button>
          
          <div className="lightbox-container" onClick={(e) => e.stopPropagation()}>
            <img 
              src={selectedImage.src} 
              alt={selectedImage.alt}
              className={`lightbox-image ${isImageLoaded ? 'loaded' : ''}`}
              onLoad={handleImageLoad}
            />
            
            <div className="lightbox-info">
              <h3 className="lightbox-title">{selectedImage.title}</h3>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SimpleGallery;