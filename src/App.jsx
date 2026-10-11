import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Filter from './components/Filter';
import GameList from './components/GameList';
import AddGameForm from './components/AddGameForm';
import ContactForm from './components/ContactForm';
import { gamesData } from './data/games';

const App = () => {
  const [games, setGames] = useState(gamesData);
  const [selectedCategory, setSelectedCategory] = useState('Todas');

  const categories = ['Todas', ...new Set(games.map((g) => g.category))];

  const handleAddGame = (newGame) => {
    setGames([newGame, ...games]);
  };

  const handleDeleteGame = (id) => {
    setGames(games.filter((game) => game.id !== id));
  };

  const displayedGames =
    selectedCategory === 'Todas'
      ? games
      : games.filter((g) => g.category === selectedCategory);

  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <main className="flex-grow-1">
        <section id="inicio" className="text-center py-5 bg-dark text-white">
          <div className="container">
            <h1 className="display-4 fw-bold">Bienvenido a GameStore</h1>
            <p className="lead text-secondary">Tu catálogo oficial de videojuegos en línea.</p>
          </div>
        </section>

        <section id="catalogo" className="container py-5">
          <h2 className="text-center mb-4">Catálogo de Productos</h2>
          <AddGameForm onAddGame={handleAddGame} />
          <Filter
            categories={categories}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />
          <GameList games={displayedGames} onDeleteGame={handleDeleteGame} />
        </section>

        <ContactForm />
      </main>

      <footer className="bg-dark text-white text-center py-3 mt-auto">
        <p className="mb-0">&copy; {new Date().getFullYear()} GameStore - Duoc UC</p>
      </footer>
    </div>
  );
};

export default App;