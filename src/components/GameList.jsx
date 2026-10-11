import React from 'react';
import GameCard from './GameCard';

const GameList = ({ games, onDeleteGame }) => {
  if (games.length === 0) {
    return <div className="col-12 text-center py-4 text-muted">No hay videojuegos disponibles en esta categoría.</div>;
  }
  return (
    <div className="row">
      {games.map((game) => (
        <GameCard key={game.id} game={game} onDelete={onDeleteGame} />
      ))}
    </div>
  );
};

export default GameList;