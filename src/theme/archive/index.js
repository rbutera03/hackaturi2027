import RapidBuildDecor from './RapidBuildDecor.jsx';
import './rapidBuildTheme.css';

// Optional per-event looks, selected by an event's `theme` key.
export const ARCHIVE_THEMES = {
  'rapid-build': {
    className: 'archive-theme--rapid-build',
    Decor: RapidBuildDecor,
  },
};
