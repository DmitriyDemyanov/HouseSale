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
    ],
    country: [
      {
        name: "Australia",
        cities: [
          {
            city: 'Sydney ',
          },
          {
            city: 'Albury',
          },
          {
            city: 'Queensland',
          },
          {
            city: 'Adelaide ',
          },
          {
            city: 'Hobart',
          },
          {
            city: 'Darwin',
          },
          {
            city: 'Canberra',
          },
          {
            city: 'Perth',
          },
          {
            city: 'Melbourne',
          },
        ],
      },
      {
        name: 'UAE',
        cities: [
          {
            city: 'Dubai',
          },
          {
            city: 'Abu Dhabi',
          },
          {
            city: 'Sharjah',
          },
          {
            city: 'Ajman',
          },
          {
            city: '	Al Ain',
          },
        ],
      },
      {
        name: 'USA',
        cities: [
          {
            city: 'New York',
          },
          {
            city: '	Los Angeles',
          },
          {
            city: '	Chicago',
          },
          {
            city: 'Houston',
          },
          {
            city: 'Philadelphia',
          },
          {
            city: 'San Diego',
          },
          {
            city: 'Washington',
          },
          {
            city: 'Boston',
          },
          {
            city: '	Oklahoma City',
          },
          {
            city: '	Las Vegas',
          },
        ],
      },
      {
        name: 'Mexico',
        cities: [
          {
            city: 'Mexico City',
          },
          {
            city: 'Ecatepec',
          },
          {
            city: '	Guadalajara',
          },
          {
            city: '	Puebla City',
          },
          {
            city: '	Ciudad Juárez',
          },
        ],
      },
    ]
  },
  getters: {
    getFooterLink({ footerLink }) {
      return footerLink;
    },
    getCityServese({ country }) {
      return country;
    }
  },
  actions: {},
  mutation: {},
}