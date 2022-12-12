export default {
  namespaced: true,
  state: {
    inHouse: [
      {
        img: 'inSideHouse-1',
        title: 'Same great quality. New lower prices.',
      },
      {
        img: 'inSideHouse-2',
        title: 'Everyday Essentials, High quality affordable',
      },
      {
        img: 'inSideHouse-3',
        title: 'Join the makeover journey',
      },
    ],
    aboutCompany: [
      {
        img: 'icon-company-1',
        title: 'Transparent pricing',
        descr: 'See fixed prices before you book. No hidden charges.',
      },
      {
        img: 'icon-company-2',
        title: 'Experts only',
        descr: 'Our professionals are well trained and have on-job expertise.',
      },
      {
        img: 'icon-company-3',
        title: 'Fully equipped',
        descr: 'We bring everything needed to get the job done well.',
      },
    ]
  },
  getters: {
    getInteriorHouse({ inHouse }) {
      return inHouse
    },
    getInfoCompany: ({ aboutCompany }) => aboutCompany,
  }
}