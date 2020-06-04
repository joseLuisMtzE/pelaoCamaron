import React from 'react';
import { mdiPlusThick } from '@mdi/js';
import Icon from '@mdi/react';

export default function UserAdd({ showModal }) {
  return (
    <div className="UserCard">
      <button type="primary" className="boto" onClick={showModal}>
        <Icon path={mdiPlusThick} title="agregar" size={1} color="#000"  />
      </button>
      <div className="UserText">
        <span className="text-bold">Agregar usuario</span>
      </div>
    </div>
  );
}
