import React, { useState } from 'react';

const AddGameForm = ({ onAddGame }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [nuevoJuego, setNuevoJuego] = useState({
    name: '',
    category: 'Shooter',
    price: '',
    description: '',
    image: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nuevoJuego.name || !nuevoJuego.price || !nuevoJuego.description) return;

    onAddGame({
      ...nuevoJuego,
      id: Date.now(),
      price: parseFloat(nuevoJuego.price),
      image: nuevoJuego.image || 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=500&auto=format&fit=crop&q=60'
    });

    setNuevoJuego({ name: '', category: 'Shooter', price: '', description: '', image: '' });
    setIsOpen(false);
  };

  return (
    <div className="mb-4 text-center">
      <button className="btn btn-success mb-3" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? 'Cancelar' : '+ Agregar Nuevo Videojuego'}
      </button>

      {isOpen && (
        <form onSubmit={handleSubmit} className="card p-3 shadow-sm mx-auto text-start" style={{ maxWidth: '500px' }}>
          <h5 className="mb-3 text-center">Nuevo Videojuego</h5>
          <div className="mb-2">
            <label className="form-label small">Nombre</label>
            <input
              type="text"
              className="form-control form-control-sm"
              required
              value={nuevoJuego.name}
              onChange={(e) => setNuevoJuego({ ...nuevoJuego, name: e.target.value })}
            />
          </div>
          <div className="mb-2">
            <label className="form-label small">Categoría</label>
            <select
              className="form-select form-select-sm"
              value={nuevoJuego.category}
              onChange={(e) => setNuevoJuego({ ...nuevoJuego, category: e.target.value })}
            >
              <option value="Shooter">Shooter</option>
              <option value="RPG">RPG</option>
              <option value="RPG de Acción">RPG de Acción</option>
              <option value="Supervivencia">Supervivencia</option>
              <option value="Metroidvania">Metroidvania</option>
            </select>
          </div>
          <div className="mb-2">
            <label className="form-label small">Precio ($)</label>
            <input
              type="number"
              step="0.01"
              className="form-control form-control-sm"
              required
              value={nuevoJuego.price}
              onChange={(e) => setNuevoJuego({ ...nuevoJuego, price: e.target.value })}
            />
          </div>
          <div className="mb-2">
            <label className="form-label small">URL de Imagen (Opcional)</label>
            <input
              type="url"
              className="form-control form-control-sm"
              placeholder="https://..."
              value={nuevoJuego.image}
              onChange={(e) => setNuevoJuego({ ...nuevoJuego, image: e.target.value })}
            />
          </div>
          <div className="mb-3">
            <label className="form-label small">Descripción</label>
            <textarea
              className="form-control form-control-sm"
              rows="2"
              required
              value={nuevoJuego.description}
              onChange={(e) => setNuevoJuego({ ...nuevoJuego, description: e.target.value })}
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary btn-sm w-100">Guardar Videojuego</button>
        </form>
      )}
    </div>
  );
};

export default AddGameForm;