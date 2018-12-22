import React from 'react';
import config from 'react-global-configuration';

export const ConfigContext = React.createContext({
  navigation: {
    isOpen: null,
    toggle: () => {}
  }
});

config.set({
  burger: {
    ingredientsTypes: ['meat', 'salad', 'cheese', 'bacon']
  }
});
