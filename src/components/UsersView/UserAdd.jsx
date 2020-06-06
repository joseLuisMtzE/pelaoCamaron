import React from 'react';
import { mdiPlusThick } from '@mdi/js';
import Icon from '@mdi/react';

export default function UserAdd({ showModal }) {
  return (
    <div className="UserCard">
      <Icon path={mdiPlusThick} title="agregar" size={2} color="#54545467"  />
      <div className="UserText">
        <span className="text-bold">Agregar usuario</span>
      </div>
    </div>
  );
}
