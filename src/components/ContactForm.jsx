import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({ nombre: '', email: '', mensaje: '' });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!formData.nombre.trim() || !formData.email.trim() || !formData.mensaje.trim()) {
      setError('Por favor, completa todos los campos requeridos.');
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('Debes ingresar un formato de correo electrónico válido.');
      return;
    }

    setSuccess('¡Tu mensaje ha sido validado y enviado con éxito!');
    setFormData({ nombre: '', email: '', mensaje: '' });
  };

  return (
    <section id="contacto" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-4">Contáctanos</h2>
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">
            <form onSubmit={handleSubmit} className="card p-4 shadow-sm" noValidate>
              {error && <div className="alert alert-danger">{error}</div>}
              {success && <div className="alert alert-success">{success}</div>}
              
              <div className="mb-3">
                <label className="form-label">Nombre</label>
                <input type="text" className="form-control" name="nombre" value={formData.nombre} onChange={handleChange} required />
              </div>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input type="email" className="form-control" name="email" value={formData.email} onChange={handleChange} required />
              </div>
              <div className="mb-3">
                <label className="form-label">Mensaje</label>
                <textarea className="form-control" name="mensaje" rows="4" value={formData.mensaje} onChange={handleChange} required></textarea>
              </div>
              <button type="submit" className="btn btn-primary w-100">Enviar Mensaje</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;