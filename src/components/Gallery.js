import React, { useState } from 'react';
import Modal from 'react-modal';
import ReactCompareImage from 'react-compare-image';
import img1 from '../img/Clean206.png';
import img2 from '../img/dirty206.png';
Modal.setAppElement('#root');

function Gallery() {
    const images = [
        { before: img2, after: img1 },
        { before: img2, after: img1 },
        { before: img2, after: img1 },
        { before: img1, after: img2 },
        { before: img2, after: img1 },
        { before: img2, after: img1 },
        { before: img2, after: img1 },
        { before: img2, after: img1 },
    ];

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const openModal = (image) => {
        setSelectedImage(image);
        setModalIsOpen(true);
    };
    const closeModal = () => {
        setModalIsOpen(false);
        setSelectedImage(null);
    };

    return (
        <div className="gallery container">
            <div className="row">
                {images.map((img, idx) => (
                    <div key={idx} className="col-md-3 gallery-item mb-4">
                        <img
                            src={img.before}
                            alt={`Gallery ${idx + 1}`}
                            className="img-fluid rounded"
                            onClick={() => openModal(img)} 
                        />
                    </div>
                ))}
            </div>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Image Modal"
                className="image-modal"
                overlayClassName="overlay"
            >
                {selectedImage ? (
                    <ReactCompareImage
                        leftImage={selectedImage.before}
                        rightImage={selectedImage.after}
                        sliderLineWidth={2}
                        sliderPositionPercentage={0.5}
                    />
                ) : (
                    <p>Loading image...</p>
                )}
                <button onClick={closeModal} className="close-modal">
                    &times; 
                </button>
            </Modal>
        </div>
    );
}

export default Gallery;
