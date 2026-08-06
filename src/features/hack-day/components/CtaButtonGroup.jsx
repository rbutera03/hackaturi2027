import React from 'react';
import { RAPID_BUILD_CTAS } from '../data/rapidBuildContent.js';

const CtaButtonGroup = ({ className = '' }) => (
  <div className={`rb-cta-buttons ${className}`.trim()}>
    {RAPID_BUILD_CTAS.map((button) => {
      const isPlaceholder = button.url === '#TODO' || button.url === '#';
      const classNames = [
        button.variant === 'primary' ? 'btn-primary rb-cta-btn' : 'rb-cta-btn rb-cta-btn--secondary',
        isPlaceholder ? 'rb-cta-btn--disabled' : '',
      ].filter(Boolean).join(' ');

      if (isPlaceholder) {
        return (
          <span key={button.id} className={classNames} aria-disabled="true" title="Link coming soon">
            {button.label}
          </span>
        );
      }

      return (
        <a
          key={button.id}
          href={button.url}
          className={classNames}
          {...(button.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        >
          {button.label}
        </a>
      );
    })}
  </div>
);

export default CtaButtonGroup;
