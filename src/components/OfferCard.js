import React from 'react';
import { Link } from 'react-router-dom';
import './OfferCard.scss';

function OfferCard({ title, description, icon }) {
    return (
        <div className="offer-card card">
            <div className="card-body">
                <img src={icon} alt={`${title} icon`} className="offer-card-icon" />
                <p className="card-text">{description}</p>
                <Link to="/rezerwacja#Oferta" className="btn btn-warning mt-3">
                    Sprawdź
                </Link>
            </div>
        </div>
    );
}

export default OfferCard;
