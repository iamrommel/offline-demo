import {Base} from './Base'

export class User extends Base {

  constructor() {

    super({dbName: 'userDb'})

    //ignore the result of seed
    this.seed()

    this.createIndex()
  }

  createIndex = () => {
    this.db.createIndex({
      index: {fields: ['name', 'dateOfBirth']}
    })
  }
  seed = async () => {
    //seed only if there is empty values
    const allDocs = await this.db.allDocs()

    if (allDocs.total_rows === 0) {
      let docs = [
        {_id: '1', name: 'Local name 1', dateOfBirth: '2004-11-10T07:10:41Z'},
        {_id: '2', name: 'Local name 2', dateOfBirth: '2002-10-10T17:17:23Z'}
      ]

      docs = [
        {
          '_id': '5c02ed43fec6540019a730c3',
          'ticketNo': '7140014',
          'status': 'Closed',
          'remarks': null,
          'timeStamp': '2018-12-02T23:00:00.000Z',
          'totalWeight': 47384,
          'route': {
            '_id': '5a0aef4b86ea7600015e8aca',
            'code': 'F01',

          },
          'drivers': [
            {
              '_id': '5b59d31a25350f000f89ac53',
              'code': 'Chuck17102@gmail.com',
              'name': 'Harrison, Carlos R.',
              'logo': {
                'default': 'https://res.cloudinary.com/tmmshauler/image/upload/c_thumb,h_120,w_120/v1533214026/hauler/rh1razixs5cxs1qxdnot.png',

              },

            }
          ],
          'details': [
            {
              '_id': '5c03bd14fec6540019a73394',
              'customer': {
                '_id': '5a0b06cf86ea7600015eb0e2',
                'summary': '32501-1 - John E. King',
                'logo': {
                  'default': 'https://res.cloudinary.com/tmmshauler/image/upload/v1506318907/hauler/dft-customer.jpg',

                },

              },

            },
            {
              '_id': '5c03c2bffec6540019a73401',
              'customer': {
                '_id': '5a0b05e386ea7600015eb0d3',
                'summary': '32688-1 - David E. Glick',
                'logo': {
                  'default': 'https://res.cloudinary.com/tmmshauler/image/upload/v1506318907/hauler/dft-customer.jpg',

                },

              },

            },
            {
              '_id': '5c03c88ffec6540019a73472',
              'customer': {
                '_id': '5a0b028486ea7600015eafd9',
                'summary': '32152-1 -  Esh, John B.',
                'logo': {
                  'default': 'https://res.cloudinary.com/tmmshauler/image/upload/v1506318907/hauler/dft-customer.jpg',

                },

              },

            },
            {
              '_id': '5c03cf59fec6540019a734b3',
              'customer': {
                '_id': '5a0b00be86ea7600015eaa90',
                'summary': '30865-1 - King, David K. ',
                'logo': {
                  'default': 'https://res.cloudinary.com/tmmshauler/image/upload/v1506318907/hauler/dft-customer.jpg',

                },

              },

            },
            {
              '_id': '5c03d1cdfec6540019a73731',
              'customer': {
                '_id': '5a0afc0286ea7600015e9b9d',
                'summary': '30864-1 -  King, Levi P.',
                'logo': {
                  'default': 'https://res.cloudinary.com/tmmshauler/image/upload/v1506318907/hauler/dft-customer.jpg',

                },

              },

            },
            {
              '_id': '5c03d635fec6540019a737ae',
              'customer': {
                '_id': '5a0af92486ea7600015e9329',
                'summary': '32340-1 - Petersheim Moses K. ',
                'logo': {
                  'default': 'https://res.cloudinary.com/tmmshauler/image/upload/v1506318907/hauler/dft-customer.jpg',

                },

              },

            },
            {
              '_id': '5c03da1ffec6540019a7382f',
              'customer': {
                '_id': '5a0b139e86ea7600015eb4a9',
                'summary': '32297-1 - John B. Stoltzfus',
                'logo': {
                  'default': 'https://res.cloudinary.com/tmmshauler/image/upload/v1506318907/hauler/dft-customer.jpg',

                },

              },

            },
            {
              '_id': '5c03dec9fec6540019a73959',
              'customer': {
                '_id': '5a0b12e186ea7600015eb494',
                'summary': '32321-1 - Steven L. Stoltzfus',
                'logo': {
                  'default': 'https://res.cloudinary.com/tmmshauler/image/upload/v1506318907/hauler/dft-customer.jpg',

                },

              },

            },
            {
              '_id': '5c03eaf0fec6540019a739e2',
              'customer': {
                '_id': '5a2178b6fd8f190001a6a385',
                'summary': '31947-1 - Amos S. Esh',
                'logo': {
                  'default': 'https://res.cloudinary.com/tmmshauler/image/upload/v1506318907/hauler/dft-customer.jpg',

                },

              },

            }
          ],
          'deliveries': [
            {
              '_id': '5c04157efec6540019a73b53',
              'customer': {
                '_id': '5a21a28afd8f190001a7e9dc',
                'summary': '24-013 - Green Springs',
                'logo': {
                  'default': 'https://res.cloudinary.com/tmmshauler/image/upload/v1506318907/hauler/dft-plant.jpg',

                },

              },

            }
          ],

        },
        // {
        //   '_id': '5c0273ecfec6540019a726c0',
        //   'ticketNo': '7140074',
        //   'status': 'Closed',
        //   'remarks': null,
        //   'timeStamp': '2018-12-01T11:42:16.360Z',
        //   'totalWeight': 51363,
        //   'route': {
        //     '_id': '5ad7416ee552a3000f965ef3',
        //     'code': 'F07',
        //
        //   },
        //   'drivers': [
        //     {
        //       '_id': '5b59d31a25350f000f89ac53',
        //       'code': 'Chuck17102@gmail.com',
        //       'name': 'Harrison, Carlos R.',
        //       'logo': {
        //         'default': 'https://res.cloudinary.com/tmmshauler/image/upload/c_thumb,h_120,w_120/v1533214026/hauler/rh1razixs5cxs1qxdnot.png',
        //
        //       },
        //
        //     }
        //   ],
        //   'details': [
        //     {
        //       '_id': '5c027710fec6540019a72881',
        //       'customer': {
        //         '_id': '5ad74ce7e552a3000f966075',
        //         'summary': '30598 - Zook, Enos E.',
        //         'logo': {
        //           'default': 'https://res.cloudinary.com/tmmshauler/image/upload/v1506318907/hauler/dft-customer.jpg',
        //
        //         },
        //
        //       },
        //
        //     },
        //     {
        //       '_id': '5c027ae5fec6540019a728ee',
        //       'customer': {
        //         '_id': '5ad74f24e552a3000f9660c1',
        //         'summary': '30664 - Esh, Melvin S.',
        //         'logo': {
        //           'default': 'https://res.cloudinary.com/tmmshauler/image/upload/v1506318907/hauler/dft-customer.jpg',
        //
        //         },
        //
        //       },
        //
        //     },
        //     {
        //       '_id': '5c027e8dfec6540019a7295f',
        //       'customer': {
        //         '_id': '5ad74eace552a3000f9660ae',
        //         'summary': '3202 - Stoltzfus, Aquilla R.',
        //         'logo': {
        //           'default': 'https://res.cloudinary.com/tmmshauler/image/upload/v1506318907/hauler/dft-customer.jpg',
        //
        //         },
        //
        //       },
        //
        //     },
        //     {
        //       '_id': '5c028464fec6540019a729d4',
        //       'customer': {
        //         '_id': '5ad74d75e552a3000f966088',
        //         'summary': '4306 - Esh, Daniel M.',
        //         'logo': {
        //           'default': 'https://res.cloudinary.com/tmmshauler/image/upload/v1506318907/hauler/dft-customer.jpg',
        //
        //         },
        //
        //       },
        //
        //     },
        //     {
        //       '_id': '5c028661fec6540019a72a4d',
        //       'customer': {
        //         '_id': '5ad74df2e552a3000f96609b',
        //         'summary': '3218 - Stoltzfus, Jacob L.',
        //         'logo': {
        //           'default': 'https://res.cloudinary.com/tmmshauler/image/upload/v1506318907/hauler/dft-customer.jpg',
        //
        //         },
        //
        //       },
        //
        //     },
        //     {
        //       '_id': '5c028babfec6540019a72aca',
        //       'customer': {
        //         '_id': '5ad74c67e552a3000f966062',
        //         'summary': '30665 - King, Benjamin S.',
        //         'logo': {
        //           'default': 'https://res.cloudinary.com/tmmshauler/image/upload/v1506318907/hauler/dft-customer.jpg',
        //
        //         },
        //
        //       },
        //
        //     },
        //     {
        //       '_id': '5c028e91fec6540019a72b4b',
        //       'customer': {
        //         '_id': '5ad74545e552a3000f96604f',
        //         'summary': '30827 - King, David S.',
        //         'logo': {
        //           'default': 'https://res.cloudinary.com/tmmshauler/image/upload/v1506318907/hauler/dft-customer.jpg',
        //
        //         },
        //
        //       },
        //
        //     },
        //     {
        //       '_id': '5c0295c2fec6540019a72bd0',
        //       'customer': {
        //         '_id': '5ad74fd5e552a3000f9660d4',
        //         'summary': '31856 - Johnson, Thomas E.  III',
        //         'logo': {
        //           'default': 'https://res.cloudinary.com/tmmshauler/image/upload/v1506318907/hauler/dft-customer.jpg',
        //
        //         },
        //
        //       },
        //
        //     }
        //   ],
        //   'deliveries': [
        //     {
        //       '_id': '5c02eba9fec6540019a72d09',
        //       'customer': {
        //         '_id': '5a21a28afd8f190001a7e9dc',
        //         'summary': '24-013 - Green Springs',
        //         'logo': {
        //           'default': 'https://res.cloudinary.com/tmmshauler/image/upload/v1506318907/hauler/dft-plant.jpg',
        //
        //         },
        //
        //       },
        //
        //     }
        //   ],
        //
        // },
        // {
        //   '_id': '5c009a70b201da0019b136e4',
        //   'ticketNo': '7098852',
        //   'status': 'Closed',
        //   'remarks': null,
        //   'timeStamp': '2018-11-30T23:01:00.000Z',
        //   'totalWeight': 48146,
        //   'route': {
        //     '_id': '5a0aef4b86ea7600015e8aca',
        //     'code': 'F01',
        //
        //   },
        //   'drivers': [
        //     {
        //       '_id': '5b59d31a25350f000f89ac53',
        //       'code': 'Chuck17102@gmail.com',
        //       'name': 'Harrison, Carlos R.',
        //       'logo': {
        //         'default': 'https://res.cloudinary.com/tmmshauler/image/upload/c_thumb,h_120,w_120/v1533214026/hauler/rh1razixs5cxs1qxdnot.png',
        //
        //       },
        //
        //     }
        //   ],
        //   'details': [
        //     {
        //       '_id': '5c012029b201da0019b138d5',
        //       'customer': {
        //         '_id': '5a0b06cf86ea7600015eb0e2',
        //         'summary': '32501-1 - John E. King',
        //         'logo': {
        //           'default': 'https://res.cloudinary.com/tmmshauler/image/upload/v1506318907/hauler/dft-customer.jpg',
        //
        //         },
        //
        //       },
        //
        //     },
        //     {
        //       '_id': '5c0125e2b201da0019b139eb',
        //       'customer': {
        //         '_id': '5a0b05e386ea7600015eb0d3',
        //         'summary': '32688-1 - David E. Glick',
        //         'logo': {
        //           'default': 'https://res.cloudinary.com/tmmshauler/image/upload/v1506318907/hauler/dft-customer.jpg',
        //
        //         },
        //
        //       },
        //
        //     },
        //     {
        //       '_id': '5c012d4eb201da0019b13a28',
        //       'customer': {
        //         '_id': '5a0b028486ea7600015eafd9',
        //         'summary': '32152-1 -  Esh, John B.',
        //         'logo': {
        //           'default': 'https://res.cloudinary.com/tmmshauler/image/upload/v1506318907/hauler/dft-customer.jpg',
        //
        //         },
        //
        //       },
        //
        //     },
        //     {
        //       '_id': '5c01314ab201da0019b13b05',
        //       'customer': {
        //         '_id': '5a0b00be86ea7600015eaa90',
        //         'summary': '30865-1 - King, David K. ',
        //         'logo': {
        //           'default': 'https://res.cloudinary.com/tmmshauler/image/upload/v1506318907/hauler/dft-customer.jpg',
        //
        //         },
        //
        //       },
        //
        //     },
        //     {
        //       '_id': '5c0133f7b201da0019b13c62',
        //       'customer': {
        //         '_id': '5a0afc0286ea7600015e9b9d',
        //         'summary': '30864-1 -  King, Levi P.',
        //         'logo': {
        //           'default': 'https://res.cloudinary.com/tmmshauler/image/upload/v1506318907/hauler/dft-customer.jpg',
        //
        //         },
        //
        //       },
        //
        //     },
        //     {
        //       '_id': '5c013866b201da0019b13cdf',
        //       'customer': {
        //         '_id': '5a0af92486ea7600015e9329',
        //         'summary': '32340-1 - Petersheim Moses K. ',
        //         'logo': {
        //           'default': 'https://res.cloudinary.com/tmmshauler/image/upload/v1506318907/hauler/dft-customer.jpg',
        //
        //         },
        //
        //       },
        //
        //     },
        //     {
        //       '_id': '5c013c9cb201da0019b13d94',
        //       'customer': {
        //         '_id': '5a0b139e86ea7600015eb4a9',
        //         'summary': '32297-1 - John B. Stoltzfus',
        //         'logo': {
        //           'default': 'https://res.cloudinary.com/tmmshauler/image/upload/v1506318907/hauler/dft-customer.jpg',
        //
        //         },
        //
        //       },
        //
        //     },
        //     {
        //       '_id': '5c01414cb201da0019b13e19',
        //       'customer': {
        //         '_id': '5a0b12e186ea7600015eb494',
        //         'summary': '32321-1 - Steven L. Stoltzfus',
        //         'logo': {
        //           'default': 'https://res.cloudinary.com/tmmshauler/image/upload/v1506318907/hauler/dft-customer.jpg',
        //
        //         },
        //
        //       },
        //
        //     },
        //     {
        //       '_id': '5c01508cb201da0019b13ea2',
        //       'customer': {
        //         '_id': '5a2178b6fd8f190001a6a385',
        //         'summary': '31947-1 - Amos S. Esh',
        //         'logo': {
        //           'default': 'https://res.cloudinary.com/tmmshauler/image/upload/v1506318907/hauler/dft-customer.jpg',
        //
        //         },
        //
        //       },
        //
        //     }
        //   ],
        //   'deliveries': [
        //     {
        //       '_id': '5c01a827b201da0019b14100',
        //       'customer': {
        //         '_id': '5a21a28afd8f190001a7e9dc',
        //         'summary': '24-013 - Green Springs',
        //         'logo': {
        //           'default': 'https://res.cloudinary.com/tmmshauler/image/upload/v1506318907/hauler/dft-plant.jpg',
        //
        //         },
        //
        //       },
        //
        //     }
        //   ],
        //
        // },
        // {
        //   '_id': '5bfc3406b201da0019b1247f',
        //   'ticketNo': '7098285',
        //   'status': 'Open',
        //   'remarks': null,
        //   'timeStamp': '2018-11-27T23:30:00.000Z',
        //   'totalWeight': 50798,
        //   'route': {
        //     '_id': '5ad7416ee552a3000f965ef3',
        //     'code': 'F07',
        //
        //   },
        //   'drivers': [
        //     {
        //       '_id': '5b59d31a25350f000f89ac53',
        //       'code': 'Chuck17102@gmail.com',
        //       'name': 'Harrison, Carlos R.',
        //       'logo': {
        //         'default': 'https://res.cloudinary.com/tmmshauler/image/upload/c_thumb,h_120,w_120/v1533214026/hauler/rh1razixs5cxs1qxdnot.png',
        //
        //       },
        //
        //     }
        //   ],
        //   'details': [
        //     {
        //       '_id': '5bfd3197b201da0019b1278d',
        //       'customer': {
        //         '_id': '5ad74ce7e552a3000f966075',
        //         'summary': '30598 - Zook, Enos E.',
        //         'logo': {
        //           'default': 'https://res.cloudinary.com/tmmshauler/image/upload/v1506318907/hauler/dft-customer.jpg',
        //
        //         },
        //
        //       },
        //
        //     },
        //     {
        //       '_id': '5bfd3595b201da0019b127fa',
        //       'customer': {
        //         '_id': '5ad74f24e552a3000f9660c1',
        //         'summary': '30664 - Esh, Melvin S.',
        //         'logo': {
        //           'default': 'https://res.cloudinary.com/tmmshauler/image/upload/v1506318907/hauler/dft-customer.jpg',
        //
        //         },
        //
        //       },
        //
        //     },
        //     {
        //       '_id': '5bfd396ab201da0019b1286b',
        //       'customer': {
        //         '_id': '5ad74eace552a3000f9660ae',
        //         'summary': '3202 - Stoltzfus, Aquilla R.',
        //         'logo': {
        //           'default': 'https://res.cloudinary.com/tmmshauler/image/upload/v1506318907/hauler/dft-customer.jpg',
        //
        //         },
        //
        //       },
        //
        //     },
        //     {
        //       '_id': '5bfd41a2b201da0019b12914',
        //       'customer': {
        //         '_id': '5ad74d75e552a3000f966088',
        //         'summary': '4306 - Esh, Daniel M.',
        //         'logo': {
        //           'default': 'https://res.cloudinary.com/tmmshauler/image/upload/v1506318907/hauler/dft-customer.jpg',
        //
        //         },
        //
        //       },
        //
        //     },
        //     {
        //       '_id': '5bfd4234b201da0019b129c1',
        //       'customer': {
        //         '_id': '5ad74df2e552a3000f96609b',
        //         'summary': '3218 - Stoltzfus, Jacob L.',
        //         'logo': {
        //           'default': 'https://res.cloudinary.com/tmmshauler/image/upload/v1506318907/hauler/dft-customer.jpg',
        //
        //         },
        //
        //       },
        //
        //     },
        //     {
        //       '_id': '5bfd4724b201da0019b12a3e',
        //       'customer': {
        //         '_id': '5ad74c67e552a3000f966062',
        //         'summary': '30665 - King, Benjamin S.',
        //         'logo': {
        //           'default': 'https://res.cloudinary.com/tmmshauler/image/upload/v1506318907/hauler/dft-customer.jpg',
        //
        //         },
        //
        //       },
        //
        //     },
        //     {
        //       '_id': '5bfd4a09b201da0019b12abf',
        //       'customer': {
        //         '_id': '5ad74545e552a3000f96604f',
        //         'summary': '30827 - King, David S.',
        //         'logo': {
        //           'default': 'https://res.cloudinary.com/tmmshauler/image/upload/v1506318907/hauler/dft-customer.jpg',
        //
        //         },
        //
        //       },
        //
        //     },
        //     {
        //       '_id': '5bfd506db201da0019b12b44',
        //       'customer': {
        //         '_id': '5ad74fd5e552a3000f9660d4',
        //         'summary': '31856 - Johnson, Thomas E.  III',
        //         'logo': {
        //           'default': 'https://res.cloudinary.com/tmmshauler/image/upload/v1506318907/hauler/dft-customer.jpg',
        //
        //         },
        //
        //       },
        //
        //     }
        //   ],
        //   'deliveries': [],
        //
        // },
        // {
        //   '_id': '5bfba78fb201da0019b113b0',
        //   'ticketNo': '7098642',
        //   'status': 'Closed',
        //   'remarks': null,
        //   'timeStamp': '2018-11-26T11:00:00.000Z',
        //   'totalWeight': 48025,
        //   'route': {
        //     '_id': '5a0aef4b86ea7600015e8aca',
        //     'code': 'F01',
        //
        //   },
        //   'drivers': [
        //     {
        //       '_id': '5b59d31a25350f000f89ac53',
        //       'code': 'Chuck17102@gmail.com',
        //       'name': 'Harrison, Carlos R.',
        //       'logo': {
        //         'default': 'https://res.cloudinary.com/tmmshauler/image/upload/c_thumb,h_120,w_120/v1533214026/hauler/rh1razixs5cxs1qxdnot.png',
        //
        //       },
        //
        //     }
        //   ],
        //   'details': [
        //     {
        //       '_id': '5bfbd49bb201da0019b116b1',
        //       'customer': {
        //         '_id': '5a0b06cf86ea7600015eb0e2',
        //         'summary': '32501-1 - John E. King',
        //         'logo': {
        //           'default': 'https://res.cloudinary.com/tmmshauler/image/upload/v1506318907/hauler/dft-customer.jpg',
        //
        //         },
        //
        //       },
        //
        //     },
        //     {
        //       '_id': '5bfbdacfb201da0019b1171e',
        //       'customer': {
        //         '_id': '5a0b05e386ea7600015eb0d3',
        //         'summary': '32688-1 - David E. Glick',
        //         'logo': {
        //           'default': 'https://res.cloudinary.com/tmmshauler/image/upload/v1506318907/hauler/dft-customer.jpg',
        //
        //         },
        //
        //       },
        //
        //     },
        //     {
        //       '_id': '5bfbe251b201da0019b1178f',
        //       'customer': {
        //         '_id': '5a0b028486ea7600015eafd9',
        //         'summary': '32152-1 -  Esh, John B.',
        //         'logo': {
        //           'default': 'https://res.cloudinary.com/tmmshauler/image/upload/v1506318907/hauler/dft-customer.jpg',
        //
        //         },
        //
        //       },
        //
        //     },
        //     {
        //       '_id': '5bfbe6c9b201da0019b11838',
        //       'customer': {
        //         '_id': '5a0b00be86ea7600015eaa90',
        //         'summary': '30865-1 - King, David K. ',
        //         'logo': {
        //           'default': 'https://res.cloudinary.com/tmmshauler/image/upload/v1506318907/hauler/dft-customer.jpg',
        //
        //         },
        //
        //       },
        //
        //     },
        //     {
        //       '_id': '5bfbe969b201da0019b118b1',
        //       'customer': {
        //         '_id': '5a0afc0286ea7600015e9b9d',
        //         'summary': '30864-1 -  King, Levi P.',
        //         'logo': {
        //           'default': 'https://res.cloudinary.com/tmmshauler/image/upload/v1506318907/hauler/dft-customer.jpg',
        //
        //         },
        //
        //       },
        //
        //     },
        //     {
        //       '_id': '5bfbede4b201da0019b1192e',
        //       'customer': {
        //         '_id': '5a0af92486ea7600015e9329',
        //         'summary': '32340-1 - Petersheim Moses K. ',
        //         'logo': {
        //           'default': 'https://res.cloudinary.com/tmmshauler/image/upload/v1506318907/hauler/dft-customer.jpg',
        //
        //         },
        //
        //       },
        //
        //     },
        //     {
        //       '_id': '5bfbf24ab201da0019b119af',
        //       'customer': {
        //         '_id': '5a0b139e86ea7600015eb4a9',
        //         'summary': '32297-1 - John B. Stoltzfus',
        //         'logo': {
        //           'default': 'https://res.cloudinary.com/tmmshauler/image/upload/v1506318907/hauler/dft-customer.jpg',
        //
        //         },
        //
        //       },
        //
        //     },
        //     {
        //       '_id': '5bfbf6c6b201da0019b11a34',
        //       'customer': {
        //         '_id': '5a0b12e186ea7600015eb494',
        //         'summary': '32321-1 - Steven L. Stoltzfus',
        //         'logo': {
        //           'default': 'https://res.cloudinary.com/tmmshauler/image/upload/v1506318907/hauler/dft-customer.jpg',
        //
        //         },
        //
        //       },
        //
        //     },
        //     {
        //       '_id': '5bfc04cfb201da0019b11af1',
        //       'customer': {
        //         '_id': '5a2178b6fd8f190001a6a385',
        //         'summary': '31947-1 - Amos S. Esh',
        //         'logo': {
        //           'default': 'https://res.cloudinary.com/tmmshauler/image/upload/v1506318907/hauler/dft-customer.jpg',
        //
        //         },
        //
        //       },
        //
        //     }
        //   ],
        //   'deliveries': [
        //     {
        //       '_id': '5bfc3362b201da0019b12009',
        //       'customer': {
        //         '_id': '5a21a28afd8f190001a7e9dc',
        //         'summary': '24-013 - Green Springs',
        //         'logo': {
        //           'default': 'https://res.cloudinary.com/tmmshauler/image/upload/v1506318907/hauler/dft-plant.jpg',
        //
        //         },
        //
        //       },
        //
        //     }
        //   ],
        //
        // },
        // {
        //   '_id': '5bfa8b27b201da0019b10054',
        //   'ticketNo': '7098425',
        //   'status': 'Open',
        //   'remarks': null,
        //   'timeStamp': '2018-11-25T13:00:00.000Z',
        //   'totalWeight': 40065,
        //   'route': {
        //     '_id': '5a217b51fd8f190001a6af1c',
        //     'code': 'F04',
        //
        //   },
        //   'drivers': [
        //     {
        //       '_id': '5a0c822091764e0001a350e3',
        //       'code': 'JH.Cwt@hotmail.com',
        //       'name': 'Hess, Jonathan A.',
        //       'logo': {
        //         'default': 'https://res.cloudinary.com/tmmshauler/image/upload/c_thumb,h_120,w_120/v1533213973/hauler/urnsrc8ubaii7uqsji4y.png',
        //
        //       },
        //
        //     }
        //   ],
        //   'details': [
        //     {
        //       '_id': '5bfa990e02f5a589e68ad1a7',
        //       'customer': {
        //         '_id': '5a216430fd8f190001a6346b',
        //         'summary': '31945-1 - Donna Merrill',
        //         'logo': {
        //           'default': 'https://res.cloudinary.com/tmmshauler/image/upload/v1506318907/hauler/dft-customer.jpg',
        //
        //         },
        //
        //       },
        //
        //     },
        //     {
        //       '_id': '5bfa9deb7a137c856914c070',
        //       'customer': {
        //         '_id': '5a215e90fd8f190001a62472',
        //         'summary': '32643-1 - Aaron S. Beiler',
        //         'logo': {
        //           'default': 'https://res.cloudinary.com/tmmshauler/image/upload/v1506318907/hauler/dft-customer.jpg',
        //
        //         },
        //
        //       },
        //
        //     },
        //     {
        //       '_id': '5bfaa39149bf85f812a71cce',
        //       'customer': {
        //         '_id': '5a21618afd8f190001a62ce0',
        //         'summary': '03173-1 - Jacob F. and Mary S. Esh',
        //         'logo': {
        //           'default': 'https://res.cloudinary.com/tmmshauler/image/upload/v1506318907/hauler/dft-customer.jpg',
        //
        //         },
        //
        //       },
        //
        //     },
        //     {
        //       '_id': '5bfaa8a00c87853dbc5a124b',
        //       'customer': {
        //         '_id': '5a215f77fd8f190001a62721',
        //         'summary': '32330-1 - Benjamin S. Lantz',
        //         'logo': {
        //           'default': 'https://res.cloudinary.com/tmmshauler/image/upload/v1506318907/hauler/dft-customer.jpg',
        //
        //         },
        //
        //       },
        //
        //     },
        //     {
        //       '_id': '5bfaad8f205a780bfd3390c1',
        //       'customer': {
        //         '_id': '5a21735dfd8f190001a68bc6',
        //         'summary': '32273-1 - Aaron E. King',
        //         'logo': {
        //           'default': 'https://res.cloudinary.com/tmmshauler/image/upload/v1506318907/hauler/dft-customer.jpg',
        //
        //         },
        //
        //       },
        //
        //     },
        //     {
        //       '_id': '5bfab2d7b4a5f4d0626a5f72',
        //       'customer': {
        //         '_id': '5a2174cbfd8f190001a6922b',
        //         'summary': '31745-1 - Levi Petersheim',
        //         'logo': {
        //           'default': 'https://res.cloudinary.com/tmmshauler/image/upload/v1506318907/hauler/dft-customer.jpg',
        //
        //         },
        //
        //       },
        //
        //     },
        //     {
        //       '_id': '5bfab9a4ed47897c2f57c898',
        //       'customer': {
        //         '_id': '5ad625031eb037000f0ba8ad',
        //         'summary': '32745 - Fisher, Steven & Rebecca',
        //         'logo': {
        //           'default': 'https://res.cloudinary.com/tmmshauler/image/upload/v1506318907/hauler/dft-customer.jpg',
        //
        //         },
        //
        //       },
        //
        //     },
        //     {
        //       '_id': '5bfac9a5ffda4a5bfe7ced2f',
        //       'customer': {
        //         '_id': '5ad627f21eb037000f0ba8c9',
        //         'summary': '27518 - Ludwig Janet',
        //         'logo': {
        //           'default': 'https://res.cloudinary.com/tmmshauler/image/upload/v1506318907/hauler/dft-customer.jpg',
        //
        //         },
        //
        //       },
        //
        //     },
        //     {
        //       '_id': '5bfad04cb201da0019b10985',
        //       'customer': {
        //         '_id': '5ad627421eb037000f0ba8bb',
        //         'summary': '02651 - Baumgardner, Daniel',
        //         'logo': {
        //           'default': 'https://res.cloudinary.com/tmmshauler/image/upload/v1506318907/hauler/dft-customer.jpg',
        //
        //         },
        //
        //       },
        //
        //     }
        //   ],
        //   'deliveries': [],
        //
        // },
        // {
        //   '_id': '5bfa8a0fb201da0019b0fe5f',
        //   'ticketNo': '7098426',
        //   'status': 'Closed',
        //   'remarks': null,
        //   'timeStamp': '2018-11-25T11:55:00.000Z',
        //   'totalWeight': 45990,
        //   'route': {
        //     '_id': '5ad7416ee552a3000f965ef3',
        //     'code': 'F07',
        //
        //   },
        //   'drivers': [
        //     {
        //       '_id': '5b59d31a25350f000f89ac53',
        //       'code': 'Chuck17102@gmail.com',
        //       'name': 'Harrison, Carlos R.',
        //       'logo': {
        //         'default': 'https://res.cloudinary.com/tmmshauler/image/upload/c_thumb,h_120,w_120/v1533214026/hauler/rh1razixs5cxs1qxdnot.png',
        //
        //       },
        //
        //     }
        //   ],
        //   'details': [
        //     {
        //       '_id': '5bfa8f94b201da0019b100b5',
        //       'customer': {
        //         '_id': '5ad74ce7e552a3000f966075',
        //         'summary': '30598 - Zook, Enos E.',
        //         'logo': {
        //           'default': 'https://res.cloudinary.com/tmmshauler/image/upload/v1506318907/hauler/dft-customer.jpg',
        //
        //         },
        //
        //       },
        //
        //     },
        //     {
        //       '_id': '5bfa937cb201da0019b10122',
        //       'customer': {
        //         '_id': '5ad74f24e552a3000f9660c1',
        //         'summary': '30664 - Esh, Melvin S.',
        //         'logo': {
        //           'default': 'https://res.cloudinary.com/tmmshauler/image/upload/v1506318907/hauler/dft-customer.jpg',
        //
        //         },
        //
        //       },
        //
        //     },
        //     {
        //       '_id': '5bfa9748b201da0019b10193',
        //       'customer': {
        //         '_id': '5ad74eace552a3000f9660ae',
        //         'summary': '3202 - Stoltzfus, Aquilla R.',
        //         'logo': {
        //           'default': 'https://res.cloudinary.com/tmmshauler/image/upload/v1506318907/hauler/dft-customer.jpg',
        //
        //         },
        //
        //       },
        //
        //     },
        //     {
        //       '_id': '5bfa9d42b201da0019b10359',
        //       'customer': {
        //         '_id': '5ad74d75e552a3000f966088',
        //         'summary': '4306 - Esh, Daniel M.',
        //         'logo': {
        //           'default': 'https://res.cloudinary.com/tmmshauler/image/upload/v1506318907/hauler/dft-customer.jpg',
        //
        //         },
        //
        //       },
        //
        //     },
        //     {
        //       '_id': '5bfaa0acb201da0019b103d2',
        //       'customer': {
        //         '_id': '5ad74c67e552a3000f966062',
        //         'summary': '30665 - King, Benjamin S.',
        //         'logo': {
        //           'default': 'https://res.cloudinary.com/tmmshauler/image/upload/v1506318907/hauler/dft-customer.jpg',
        //
        //         },
        //
        //       },
        //
        //     },
        //     {
        //       '_id': '5bfaa424b201da0019b1044f',
        //       'customer': {
        //         '_id': '5ad74545e552a3000f96604f',
        //         'summary': '30827 - King, David S.',
        //         'logo': {
        //           'default': 'https://res.cloudinary.com/tmmshauler/image/upload/v1506318907/hauler/dft-customer.jpg',
        //
        //         },
        //
        //       },
        //
        //     },
        //     {
        //       '_id': '5bfaab09b201da0019b104d0',
        //       'customer': {
        //         '_id': '5ad74fd5e552a3000f9660d4',
        //         'summary': '31856 - Johnson, Thomas E.  III',
        //         'logo': {
        //           'default': 'https://res.cloudinary.com/tmmshauler/image/upload/v1506318907/hauler/dft-customer.jpg',
        //
        //         },
        //
        //       },
        //
        //     }
        //   ],
        //   'deliveries': [
        //     {
        //       '_id': '5bfba670b201da0019b10fca',
        //       'customer': {
        //         '_id': '5a21a28afd8f190001a7e9dc',
        //         'summary': '24-013 - Green Springs',
        //         'logo': {
        //           'default': 'https://res.cloudinary.com/tmmshauler/image/upload/v1506318907/hauler/dft-plant.jpg',
        //
        //         },
        //
        //       },
        //
        //     }
        //   ],
        //
        // },
        // {
        //   '_id': '5bf92a74b201da0019b0e78c',
        //   'ticketNo': '7098553',
        //   'status': 'Closed',
        //   'remarks': null,
        //   'timeStamp': '2018-11-24T11:20:00.000Z',
        //   'totalWeight': 47455,
        //   'route': {
        //     '_id': '5a0aef4b86ea7600015e8aca',
        //     'code': 'F01',
        //
        //   },
        //   'drivers': [
        //     {
        //       '_id': '5b59d31a25350f000f89ac53',
        //       'code': 'Chuck17102@gmail.com',
        //       'name': 'Harrison, Carlos R.',
        //       'logo': {
        //         'default': 'https://res.cloudinary.com/tmmshauler/image/upload/c_thumb,h_120,w_120/v1533214026/hauler/rh1razixs5cxs1qxdnot.png',
        //
        //       },
        //
        //     }
        //   ],
        //   'details': [
        //     {
        //       '_id': '5bf93525b201da0019b0e81d',
        //       'customer': {
        //         '_id': '5a0b06cf86ea7600015eb0e2',
        //         'summary': '32501-1 - John E. King',
        //         'logo': {
        //           'default': 'https://res.cloudinary.com/tmmshauler/image/upload/v1506318907/hauler/dft-customer.jpg',
        //
        //         },
        //
        //       },
        //
        //     },
        //     {
        //       '_id': '5bf93a83b201da0019b0e8be',
        //       'customer': {
        //         '_id': '5a0b05e386ea7600015eb0d3',
        //         'summary': '32688-1 - David E. Glick',
        //         'logo': {
        //           'default': 'https://res.cloudinary.com/tmmshauler/image/upload/v1506318907/hauler/dft-customer.jpg',
        //
        //         },
        //
        //       },
        //
        //     },
        //     {
        //       '_id': '5bf94064b201da0019b0e8fb',
        //       'customer': {
        //         '_id': '5a0b028486ea7600015eafd9',
        //         'summary': '32152-1 -  Esh, John B.',
        //         'logo': {
        //           'default': 'https://res.cloudinary.com/tmmshauler/image/upload/v1506318907/hauler/dft-customer.jpg',
        //
        //         },
        //
        //       },
        //
        //     },
        //     {
        //       '_id': '5bf9461eb201da0019b0ebcc',
        //       'customer': {
        //         '_id': '5a0b00be86ea7600015eaa90',
        //         'summary': '30865-1 - King, David K. ',
        //         'logo': {
        //           'default': 'https://res.cloudinary.com/tmmshauler/image/upload/v1506318907/hauler/dft-customer.jpg',
        //
        //         },
        //
        //       },
        //
        //     },
        //     {
        //       '_id': '5bf948ccb201da0019b0eedc',
        //       'customer': {
        //         '_id': '5a0afc0286ea7600015e9b9d',
        //         'summary': '30864-1 -  King, Levi P.',
        //         'logo': {
        //           'default': 'https://res.cloudinary.com/tmmshauler/image/upload/v1506318907/hauler/dft-customer.jpg',
        //
        //         },
        //
        //       },
        //
        //     },
        //     {
        //       '_id': '5bf94cfdb201da0019b0ef59',
        //       'customer': {
        //         '_id': '5a0af92486ea7600015e9329',
        //         'summary': '32340-1 - Petersheim Moses K. ',
        //         'logo': {
        //           'default': 'https://res.cloudinary.com/tmmshauler/image/upload/v1506318907/hauler/dft-customer.jpg',
        //
        //         },
        //
        //       },
        //
        //     },
        //     {
        //       '_id': '5bf9517bb201da0019b0efda',
        //       'customer': {
        //         '_id': '5a0b139e86ea7600015eb4a9',
        //         'summary': '32297-1 - John B. Stoltzfus',
        //         'logo': {
        //           'default': 'https://res.cloudinary.com/tmmshauler/image/upload/v1506318907/hauler/dft-customer.jpg',
        //
        //         },
        //
        //       },
        //
        //     },
        //     {
        //       '_id': '5bf955a8b201da0019b0f093',
        //       'customer': {
        //         '_id': '5a0b12e186ea7600015eb494',
        //         'summary': '32321-1 - Steven L. Stoltzfus',
        //         'logo': {
        //           'default': 'https://res.cloudinary.com/tmmshauler/image/upload/v1506318907/hauler/dft-customer.jpg',
        //
        //         },
        //
        //       },
        //
        //     },
        //     {
        //       '_id': '5bf96478b201da0019b0f200',
        //       'customer': {
        //         '_id': '5a2178b6fd8f190001a6a385',
        //         'summary': '31947-1 - Amos S. Esh',
        //         'logo': {
        //           'default': 'https://res.cloudinary.com/tmmshauler/image/upload/v1506318907/hauler/dft-customer.jpg',
        //
        //         },
        //
        //       },
        //
        //     }
        //   ],
        //   'deliveries': [
        //     {
        //       '_id': '5bf991fdb201da0019b0f52e',
        //       'customer': {
        //         '_id': '5a21a074fd8f190001a7d5be',
        //         'summary': '24-019 - MD & VA MPA (PMO)',
        //         'logo': {
        //           'default': 'https://res.cloudinary.com/tmmshauler/image/upload/v1506318907/hauler/dft-plant.jpg',
        //
        //         },
        //
        //       },
        //
        //     }
        //   ],
        //
        // },
        // {
        //   '_id': '5bf809105baff70019add25e',
        //   'ticketNo': '7072084',
        //   'status': 'Closed',
        //   'remarks': null,
        //   'timeStamp': '2018-11-23T16:00:00.000Z',
        //   'totalWeight': 51864,
        //   'route': {
        //     '_id': '5ad7416ee552a3000f965ef3',
        //     'code': 'F07',
        //
        //   },
        //   'drivers': [
        //     {
        //       '_id': '5a0c822091764e0001a350e3',
        //       'code': 'JH.Cwt@hotmail.com',
        //       'name': 'Hess, Jonathan A.',
        //       'logo': {
        //         'default': 'https://res.cloudinary.com/tmmshauler/image/upload/c_thumb,h_120,w_120/v1533213973/hauler/urnsrc8ubaii7uqsji4y.png',
        //
        //       },
        //
        //     }
        //   ],
        //   'details': [
        //     {
        //       '_id': '5bf8303c1611554306898625',
        //       'customer': {
        //         '_id': '5ad74fd5e552a3000f9660d4',
        //         'summary': '31856 - Johnson, Thomas E.  III',
        //         'logo': {
        //           'default': 'https://res.cloudinary.com/tmmshauler/image/upload/v1506318907/hauler/dft-customer.jpg',
        //
        //         },
        //
        //       },
        //
        //     },
        //     {
        //       '_id': '5bf8393860d59e3bd438ad43',
        //       'customer': {
        //         '_id': '5ad74eace552a3000f9660ae',
        //         'summary': '3202 - Stoltzfus, Aquilla R.',
        //         'logo': {
        //           'default': 'https://res.cloudinary.com/tmmshauler/image/upload/v1506318907/hauler/dft-customer.jpg',
        //
        //         },
        //
        //       },
        //
        //     },
        //     {
        //       '_id': '5bf83de0c3681cc3cffa7a93',
        //       'customer': {
        //         '_id': '5ad74f24e552a3000f9660c1',
        //         'summary': '30664 - Esh, Melvin S.',
        //         'logo': {
        //           'default': 'https://res.cloudinary.com/tmmshauler/image/upload/v1506318907/hauler/dft-customer.jpg',
        //
        //         },
        //
        //       },
        //
        //     },
        //     {
        //       '_id': '5bf843eac327c9e37e2380a2',
        //       'customer': {
        //         '_id': '5ad74df2e552a3000f96609b',
        //         'summary': '3218 - Stoltzfus, Jacob L.',
        //         'logo': {
        //           'default': 'https://res.cloudinary.com/tmmshauler/image/upload/v1506318907/hauler/dft-customer.jpg',
        //
        //         },
        //
        //       },
        //
        //     },
        //     {
        //       '_id': '5bf84a0362930dbb591568c0',
        //       'customer': {
        //         '_id': '5ad74d75e552a3000f966088',
        //         'summary': '4306 - Esh, Daniel M.',
        //         'logo': {
        //           'default': 'https://res.cloudinary.com/tmmshauler/image/upload/v1506318907/hauler/dft-customer.jpg',
        //
        //         },
        //
        //       },
        //
        //     },
        //     {
        //       '_id': '5bf84fc91b7a84edbab6bc92',
        //       'customer': {
        //         '_id': '5ad74ce7e552a3000f966075',
        //         'summary': '30598 - Zook, Enos E.',
        //         'logo': {
        //           'default': 'https://res.cloudinary.com/tmmshauler/image/upload/v1506318907/hauler/dft-customer.jpg',
        //
        //         },
        //
        //       },
        //
        //     },
        //     {
        //       '_id': '5bf8558e4b4bf8944726fea9',
        //       'customer': {
        //         '_id': '5ad74545e552a3000f96604f',
        //         'summary': '30827 - King, David S.',
        //         'logo': {
        //           'default': 'https://res.cloudinary.com/tmmshauler/image/upload/v1506318907/hauler/dft-customer.jpg',
        //
        //         },
        //
        //       },
        //
        //     },
        //     {
        //       '_id': '5bf85a4a58dd802c045b5b55',
        //       'customer': {
        //         '_id': '5ad74c67e552a3000f966062',
        //         'summary': '30665 - King, Benjamin S.',
        //         'logo': {
        //           'default': 'https://res.cloudinary.com/tmmshauler/image/upload/v1506318907/hauler/dft-customer.jpg',
        //
        //         },
        //
        //       },
        //
        //     }
        //   ],
        //   'deliveries': [
        //     {
        //       '_id': '5bf88b9b5baff70019addfb3',
        //       'customer': {
        //         '_id': '5b1de4c1848298000fe8e5a3',
        //         'summary': '1110761 - Maryland and Virginia Milk Producer',
        //         'logo': {
        //           'default': 'https://res.cloudinary.com/tmmshauler/image/upload/v1506318907/hauler/dft-plant.jpg',
        //
        //         },
        //
        //       },
        //
        //     }
        //   ],
        //
        // },
        // {
        //   '_id': '5bf6a0da5baff70019adc143',
        //   'ticketNo': '7072643',
        //   'status': 'Closed',
        //   'remarks': null,
        //   'timeStamp': '2018-11-22T12:30:00.000Z',
        //   'totalWeight': 47892,
        //   'route': {
        //     '_id': '5a0aef4b86ea7600015e8aca',
        //     'code': 'F01',
        //
        //   },
        //   'drivers': [
        //     {
        //       '_id': '5a0c822091764e0001a350e3',
        //       'code': 'JH.Cwt@hotmail.com',
        //       'name': 'Hess, Jonathan A.',
        //       'logo': {
        //         'default': 'https://res.cloudinary.com/tmmshauler/image/upload/c_thumb,h_120,w_120/v1533213973/hauler/urnsrc8ubaii7uqsji4y.png',
        //
        //       },
        //
        //     }
        //   ],
        //   'details': [
        //     {
        //       '_id': '5bf6a4622b6f3e6c95d95a59',
        //       'customer': {
        //         '_id': '5a2178b6fd8f190001a6a385',
        //         'summary': '31947-1 - Amos S. Esh',
        //         'logo': {
        //           'default': 'https://res.cloudinary.com/tmmshauler/image/upload/v1506318907/hauler/dft-customer.jpg',
        //
        //         },
        //
        //       },
        //
        //     },
        //     {
        //       '_id': '5bf6b12df20fc9c641ff6fea',
        //       'customer': {
        //         '_id': '5a0af92486ea7600015e9329',
        //         'summary': '32340-1 - Petersheim Moses K. ',
        //         'logo': {
        //           'default': 'https://res.cloudinary.com/tmmshauler/image/upload/v1506318907/hauler/dft-customer.jpg',
        //
        //         },
        //
        //       },
        //
        //     },
        //     {
        //       '_id': '5bf6b6d9cdba82c1ca3d2cf0',
        //       'customer': {
        //         '_id': '5a0b139e86ea7600015eb4a9',
        //         'summary': '32297-1 - John B. Stoltzfus',
        //         'logo': {
        //           'default': 'https://res.cloudinary.com/tmmshauler/image/upload/v1506318907/hauler/dft-customer.jpg',
        //
        //         },
        //
        //       },
        //
        //     },
        //     {
        //       '_id': '5bf6bbd82d3afad6874caf33',
        //       'customer': {
        //         '_id': '5a0b12e186ea7600015eb494',
        //         'summary': '32321-1 - Steven L. Stoltzfus',
        //         'logo': {
        //           'default': 'https://res.cloudinary.com/tmmshauler/image/upload/v1506318907/hauler/dft-customer.jpg',
        //
        //         },
        //
        //       },
        //
        //     },
        //     {
        //       '_id': '5bf6c33cd9a1d4ec845c6799',
        //       'customer': {
        //         '_id': '5a0afc0286ea7600015e9b9d',
        //         'summary': '30864-1 -  King, Levi P.',
        //         'logo': {
        //           'default': 'https://res.cloudinary.com/tmmshauler/image/upload/v1506318907/hauler/dft-customer.jpg',
        //
        //         },
        //
        //       },
        //
        //     },
        //     {
        //       '_id': '5bf6c9322e8a8f25e878e4d3',
        //       'customer': {
        //         '_id': '5a0b00be86ea7600015eaa90',
        //         'summary': '30865-1 - King, David K. ',
        //         'logo': {
        //           'default': 'https://res.cloudinary.com/tmmshauler/image/upload/v1506318907/hauler/dft-customer.jpg',
        //
        //         },
        //
        //       },
        //
        //     },
        //     {
        //       '_id': '5bf6cf06fce3f32827f51b1d',
        //       'customer': {
        //         '_id': '5a0b028486ea7600015eafd9',
        //         'summary': '32152-1 -  Esh, John B.',
        //         'logo': {
        //           'default': 'https://res.cloudinary.com/tmmshauler/image/upload/v1506318907/hauler/dft-customer.jpg',
        //
        //         },
        //
        //       },
        //
        //     },
        //     {
        //       '_id': '5bf6d679e8e63e8f54568d07',
        //       'customer': {
        //         '_id': '5a0b05e386ea7600015eb0d3',
        //         'summary': '32688-1 - David E. Glick',
        //         'logo': {
        //           'default': 'https://res.cloudinary.com/tmmshauler/image/upload/v1506318907/hauler/dft-customer.jpg',
        //
        //         },
        //
        //       },
        //
        //     },
        //     {
        //       '_id': '5bf6ddd2e87f882f979e8dd2',
        //       'customer': {
        //         '_id': '5a0b06cf86ea7600015eb0e2',
        //         'summary': '32501-1 - John E. King',
        //         'logo': {
        //           'default': 'https://res.cloudinary.com/tmmshauler/image/upload/v1506318907/hauler/dft-customer.jpg',
        //
        //         },
        //
        //       },
        //
        //     }
        //   ],
        //   'deliveries': [
        //     {
        //       '_id': '5bf808e75baff70019add150',
        //       'customer': {
        //         '_id': '5a21a28afd8f190001a7e9dc',
        //         'summary': '24-013 - Green Springs',
        //         'logo': {
        //           'default': 'https://res.cloudinary.com/tmmshauler/image/upload/v1506318907/hauler/dft-plant.jpg',
        //
        //         },
        //
        //       },
        //
        //     }
        //   ],
        //
        // }
      ]

      await this.db.bulkDocs(docs)

      console.log('Done seeding for User Repository')

    }

  }


}
