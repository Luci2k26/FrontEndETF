import React from 'react';

const GameCard = ({ game, onDelete }) => {
  return (
    <div className="col-12 col-md-6 col-lg-4 mb-4 d-flex align-items-stretch">
      <div className="card w-100 shadow-sm border-0 h-100">
        <img
          src={game.image}
          className="card-img-top"
          alt={game.name}
          style={{ height: '190px', objectFit: 'cover' }}
        />
        <div className="card-body d-flex flex-column">
          <div className="d-flex justify-content-between align-items-center mb-2">
            <span className="badge bg-primary px-2 py-1">{game.category}</span>
            <span className="fs-5 fw-bold text-success">
              {game.price === 0 ? 'Gratis' : `$${game.price.toFixed(2)}`}
            </span>
          </div>
          <h5 className="card-title fw-bold text-dark">{game.name}</h5>
          <p className="card-text text-muted small flex-grow-1">{game.description}</p>
          <div className="mt-3 d-flex gap-2">
            <button className="btn btn-outline-dark flex-grow-1 fw-semibold">
              Comprar
            </button>
            <button
              className="btn btn-outline-danger"
              onClick={() => onDelete(game.id)}
              title="Eliminar de la lista"
            >
              Eliminar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameCard;