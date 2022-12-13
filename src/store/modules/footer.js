export default {
  namespaced: true,
  state: {
    footerLink: [
      {
        text: 'Delivery Service',
        link: 'http://google.com',
      },
      {
        text: 'Assembly Service',
        link: 'http://apple.com',
      },
      {
        text: 'Customer Service',
        link: 'http://samsung.com',
      },
      {
        text: 'Contact Us',
        link: 'http://twitter.com',
      },
      {
        text: 'Near Me',
        link: 'http://facebook.com',
      },
      {
        text: 'Careers',
        link: 'http://google.com',
      },
      {
        text: 'Gift Cards',
        link: 'http://audi.com',
      },
      {
        text: 'Contact Us',
        link: 'http://bmw.com',
      },
    ]
  },
  getters: {
    getFooterLink({ footerLink }) {
      return footerLink;
    },
  },
  actions: {},
  mutation: {},
}