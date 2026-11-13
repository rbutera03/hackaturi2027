// src/components/Tabs.jsx
// A row of pill buttons for switching between groups (used by FAQ and Team).
// Styles: .tabs and .tab in src/theme/base.css.
//
// Props:
//   label     describes the group to screen readers, e.g. "FAQ categories"
//   tabs      [{ id, label }]
//   activeId  id of the selected tab
//   onChange  called with the id of the tab that was clicked

import React from 'react';

const Tabs = ({ label, tabs, activeId, onChange }) => (
  <div className="tabs" role="group" aria-label={label}>
    {tabs.map((tab) => {
      const isActive = tab.id === activeId;
      return (
        <button
          key={tab.id}
          type="button"
          className={`tab${isActive ? ' is-active' : ''}`}
          aria-pressed={isActive}
          onClick={() => onChange(tab.id)}
        >
          {tab.label}
        </button>
      );
    })}
  </div>
);

export default Tabs;
