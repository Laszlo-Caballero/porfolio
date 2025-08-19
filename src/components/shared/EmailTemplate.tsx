import React from 'react';

export default function EmailTemplate({
  name,
  email,
  phone,
  message,
}: {
  name: string;
  email: string;
  phone?: string;
  message: string;
}) {
  return (
    <div className="flex flex-col">
      <h1>Nueva Oferta de Trabajo</h1>
      <p>Nombre: {name}</p>
      <p>Email: {email}</p>
      <p>Teléfono: {phone || 'Sin teléfono'}</p>
      <p>Mensaje: {message}</p>
    </div>
  );
}
