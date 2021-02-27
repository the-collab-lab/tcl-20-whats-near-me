import React from 'react';
import './Header.css';
import { Icon } from '@iconify/react';
import compassIcon from '@iconify-icons/et/compass';

export default function Header() {
  return (
    <div className="header">
      <Icon icon={compassIcon} className="exploreIcon" />
      <h2 className="headerTitle">Explore Your World</h2>
    </div>
  );
}
