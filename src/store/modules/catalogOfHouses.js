export default {
  namespaced: true,
  state: {
    catalog: [
      {
        img: 'wood-house',
        text: 'wood-house',
      },
      {
        img: 'corner-house',
        text: 'corner-house',
      },
      {
        img: 'rectangle-house',
        text: 'rectangle-house',
      },
      {
        img: 'block-house',
        text: 'block-house',
      },
      {
        img: 'corner-house',
        text: 'corner-house',
      },
      {
        img: 'high-house',
        text: 'high-house',
      },
      {
        img: 'stone-house',
        text: 'stone-house',
      },
      {
        img: 'corner-house',
        text: 'corner-house',
      },

    ]
  },
  getters: {
    getCatalogHouses: ({ catalog }) => catalog,
  }
};