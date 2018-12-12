import {Base} from './Base'
import _ from 'lodash'

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

      // '_id': '5be935f489feee001945d29f',
      docs = [
        {
          '_id': '1be935f489feee001945d29f',
          'ticketNo': '7050129',
          'timeStamp': '2018-11-12T11:25:00.000Z',
          'grossWeight': 91540,
          'tareWeight': 34200,
          'netWeight': 57340,
          'sealNo': [
            '0391636',
            '635',
            '634'
          ],
          'manifestNo': '1865244',
          'manifestNos': [],
          'status': 'Closed',
          'summary': '7050129 - Nov 12, 2018 11:25 AM',
          'totalWeight': 48135,
          'remarks': null,
          'trailer': {
            '_id': '8206',

          },
          'drivers': [
            {
              '_id': '5b59d31a25350f000f89ac53',
              'name': 'Harrison, Carlos R.',
              'status': 'Active',
              'logo': {
                'default': 'https://res.cloudinary.com/tmmshauler/image/upload/c_thumb,h_120,w_120/v1533214026/hauler/rh1razixs5cxs1qxdnot.png',

              },
              'contact': {
                'address1': {
                  'fullAddress': '4822 Letterkenny Road, Chambersburg, PA, 17201',

                },
                'email': 'Chuck17102@gmail.com',
                'phone': '717-508-6051',

              },

            }
          ],
          'driver': {
            '_id': '5b59d31a25350f000f89ac53',
            'name': 'Harrison, Carlos R.',
            'status': 'Active',
            'logo': {
              'default': 'https://res.cloudinary.com/tmmshauler/image/upload/c_thumb,h_120,w_120/v1533214026/hauler/rh1razixs5cxs1qxdnot.png',

            },
            'contact': {
              'address1': {
                'fullAddress': '4822 Letterkenny Road, Chambersburg, PA, 17201',

              },
              'email': 'Chuck17102@gmail.com',
              'phone': '717-508-6051',

            },

          },
          'route': {
            '_id': '5a0aef4b86ea7600015e8aca',
            'remarks': 'ROUTE #001\nMaryland & Virginia.\nDriver: Carlos Harrison.\nManager/Relief: Jonathan Hess.',
            'distance': 0,
            'status': 'Active',
            'code': 'F01',
            'details': [
              {
                '_id': '5ad6194c1eb037000f0b7a47',
                'position': 1,
                'customer': {
                  '_id': '5a2178b6fd8f190001a6a385',
                  'code': '31947-1',
                  'name': 'Amos S. Esh',
                  'summary': '31947-1 - Amos S. Esh',
                  'status': 'Active',
                  'type': 'Milk Producer',
                  'logo': {
                    'default': 'https://res.cloudinary.com/tmmshauler/image/upload/v1506318907/hauler/dft-customer.jpg',

                  },
                  'contact': {
                    'email': '',
                    'phone': '(717) 927-6569',
                    'address1': {
                      'gps': {
                        'lng': -76.493296,
                        'lat': 39.91928,

                      },
                      'fullAddress': '2420 Arnold Road, Red Lion, PA, 17356',

                    },

                  },

                },

              },
              {
                '_id': '5baa274798f5e0000ff09265',
                'position': 2,
                'customer': {
                  '_id': '5a0b12e186ea7600015eb494',
                  'code': '32321-1',
                  'name': 'Steven L. Stoltzfus',
                  'summary': '32321-1 - Steven L. Stoltzfus',
                  'status': 'Active',
                  'type': 'Milk Producer',
                  'logo': {
                    'default': 'https://res.cloudinary.com/tmmshauler/image/upload/v1506318907/hauler/dft-customer.jpg',

                  },
                  'contact': {
                    'email': '',
                    'phone': '(717)    -    ',
                    'address1': {
                      'gps': {
                        'lng': -76.390491,
                        'lat': 40.116766,

                      },
                      'fullAddress': '1978 Junction Road, Manheim, PA, 17545',

                    },

                  },

                },

              },
              {
                '_id': '5baa271798f5e0000ff090c5',
                'position': 3,
                'customer': {
                  '_id': '5a0b139e86ea7600015eb4a9',
                  'code': '32297-1',
                  'name': 'John B. Stoltzfus',
                  'summary': '32297-1 - John B. Stoltzfus',
                  'status': 'Active',
                  'type': 'Milk Producer',
                  'logo': {
                    'default': 'https://res.cloudinary.com/tmmshauler/image/upload/v1506318907/hauler/dft-customer.jpg',

                  },
                  'contact': {
                    'email': '',
                    'phone': '(717)    -    ',
                    'address1': {
                      'gps': {
                        'lng': -76.390169,
                        'lat': 40.114652,

                      },
                      'fullAddress': '1424 Landisville Road, Manheim, PA, 17545',

                    },

                  },

                },

              },
              {
                '_id': '5a0afaeb86ea7600015e985a',
                'position': 4,
                'customer': {
                  '_id': '5a0af92486ea7600015e9329',
                  'code': '32340-1',
                  'name': 'Petersheim Moses K. ',
                  'summary': '32340-1 - Petersheim Moses K. ',
                  'status': 'Active',
                  'type': 'Milk Producer',
                  'logo': {
                    'default': 'https://res.cloudinary.com/tmmshauler/image/upload/v1506318907/hauler/dft-customer.jpg',

                  },
                  'contact': {
                    'email': '',
                    'phone': '(717) 653-6070',
                    'address1': {
                      'gps': {
                        'lng': -76.4356028,
                        'lat': 40.1357686,

                      },
                      'fullAddress': '1728 Mount Joy Road, Manheim, PA, 17545',

                    },

                  },

                },

              },
              {
                '_id': '5a0afd7a86ea7600015e9fe0',
                'position': 5,
                'customer': {
                  '_id': '5a0afc0286ea7600015e9b9d',
                  'code': '30864-1',
                  'name': ' King, Levi P.',
                  'summary': '30864-1 -  King, Levi P.',
                  'status': 'Active',
                  'type': 'Milk Producer',
                  'logo': {
                    'default': 'https://res.cloudinary.com/tmmshauler/image/upload/v1506318907/hauler/dft-customer.jpg',

                  },
                  'contact': {
                    'email': '',
                    'phone': '(717) 664-4931',
                    'address1': {
                      'gps': {
                        'lng': -76.4579107,
                        'lat': 40.1515307,

                      },
                      'fullAddress': '1331 Shelly Road, Manheim, PA, 17545',

                    },

                  },

                },

              },
              {
                '_id': '5a0b024486ea7600015eaf15',
                'position': 6,
                'customer': {
                  '_id': '5a0b00be86ea7600015eaa90',
                  'code': '30865-1',
                  'name': 'King, David K. ',
                  'summary': '30865-1 - King, David K. ',
                  'status': 'Active',
                  'type': 'Milk Producer',
                  'logo': {
                    'default': 'https://res.cloudinary.com/tmmshauler/image/upload/v1506318907/hauler/dft-customer.jpg',

                  },
                  'contact': {
                    'email': '',
                    'phone': '(717) 665-2316',
                    'address1': {
                      'gps': {
                        'lng': -76.4559039,
                        'lat': 40.1738951,

                      },
                      'fullAddress': '1320 North Colebrook Road, Manheim, PA, 17545',

                    },

                  },

                },

              },
              {
                '_id': '5a0b056886ea7600015eb023',
                'position': 7,
                'customer': {
                  '_id': '5a0b028486ea7600015eafd9',
                  'code': '32152-1',
                  'name': ' Esh, John B.',
                  'summary': '32152-1 -  Esh, John B.',
                  'status': 'Active',
                  'type': 'Milk Producer',
                  'logo': {
                    'default': 'https://res.cloudinary.com/tmmshauler/image/upload/v1506318907/hauler/dft-customer.jpg',

                  },
                  'contact': {
                    'email': '',
                    'phone': '(717) 664-2334',
                    'address1': {
                      'gps': {
                        'lng': -76.421926,
                        'lat': 40.172432,

                      },
                      'fullAddress': '1107 Old Line Road, Manheim, PA, 17545',

                    },

                  },

                },

              },
              {
                '_id': '5a0b076e86ea7600015eb10d',
                'position': 8,
                'customer': {
                  '_id': '5a0b05e386ea7600015eb0d3',
                  'code': '32688-1',
                  'name': 'David E. Glick',
                  'summary': '32688-1 - David E. Glick',
                  'status': 'Active',
                  'type': 'Milk Producer',
                  'logo': {
                    'default': 'https://res.cloudinary.com/tmmshauler/image/upload/v1506318907/hauler/dft-customer.jpg',

                  },
                  'contact': {
                    'email': '',
                    'phone': '(717) 367-4833',
                    'address1': {
                      'gps': {
                        'lng': -76.50451869999999,
                        'lat': 40.1796417,

                      },
                      'fullAddress': '3932 Sunnyside Road, Manheim, PA, 17545',

                    },

                  },

                },

              },
              {
                '_id': '5a0b077c86ea7600015eb155',
                'position': 9,
                'customer': {
                  '_id': '5a0b06cf86ea7600015eb0e2',
                  'code': '32501-1',
                  'name': 'John E. King',
                  'summary': '32501-1 - John E. King',
                  'status': 'Active',
                  'type': 'Milk Producer',
                  'logo': {
                    'default': 'https://res.cloudinary.com/tmmshauler/image/upload/v1506318907/hauler/dft-customer.jpg',

                  },
                  'contact': {
                    'email': '',
                    'phone': '(717) 367-8935',
                    'address1': {
                      'gps': {
                        'lng': -76.5844941,
                        'lat': 40.19904409999999,

                      },
                      'fullAddress': '1330 Mapledale Road, Elizebethtown, PA, 17022',

                    },

                  },

                },

              },
              {
                '_id': '5b11b238b2b6e3000fe265a4',
                'position': 11,
                'customer': {
                  '_id': '5a21a074fd8f190001a7d5be',
                  'code': '24-019',
                  'name': 'MD & VA MPA (PMO)',
                  'summary': '24-019 - MD & VA MPA (PMO)',
                  'status': 'Active',
                  'type': 'Plant',
                  'logo': {
                    'default': 'https://res.cloudinary.com/tmmshauler/image/upload/v1506318907/hauler/dft-plant.jpg',

                  },
                  'contact': {
                    'email': '',
                    'phone': '(703) 742-7402',
                    'address1': {
                      'gps': {
                        'lng': -76.87611299999999,
                        'lat': 39.139735,

                      },
                      'fullAddress': '8321 Leishear Road, LAUREL, MD, 20723',

                    },

                  },

                },

              },
              {
                '_id': '5b11b245b2b6e3000fe26708',
                'position': 12,
                'customer': {
                  '_id': '5a21a31bfd8f190001a7eb7c',
                  'code': '24-801',
                  'name': 'RUTTER\'S DY',
                  'summary': '24-801 - RUTTER\'S DY',
                  'status': 'Active',
                  'type': 'Plant',
                  'logo': {
                    'default': 'https://res.cloudinary.com/tmmshauler/image/upload/v1506318907/hauler/dft-plant.jpg',

                  },
                  'contact': {
                    'email': '',
                    'phone': '',
                    'address1': {
                      'gps': {
                        'lng': -76.73648399999999,
                        'lat': 39.9919536,

                      },
                      'fullAddress': '2100 N. George St., YORK, PA',

                    },

                  },

                },

              },
              {
                '_id': '5bbbc630f0bfca0019e267b1',
                'position': 13,
                'customer': {
                  '_id': '5a21a28afd8f190001a7e9dc',
                  'code': '24-013',
                  'name': 'Green Springs',
                  'summary': '24-013 - Green Springs',
                  'status': 'Active',
                  'type': 'Plant',
                  'logo': {
                    'default': 'https://res.cloudinary.com/tmmshauler/image/upload/v1506318907/hauler/dft-plant.jpg',

                  },
                  'contact': {
                    'email': '',
                    'phone': '800-492-0094 ext 1262',
                    'address1': {
                      'gps': {
                        'lng': -76.60337,
                        'lat': 39.320163,

                      },
                      'fullAddress': '2701 Loch Raven Road, , BALTIMORE, MD',

                    },

                  },

                },

              }
            ],

          },
          'deliveries': [
            {
              '_id': '5be9d53af62181000f4c0bd5',
              'customer': {
                '_id': '5a21a28afd8f190001a7e9dc',
                'summary': '24-013 - Green Springs',
                'logo': {
                  'default': 'https://res.cloudinary.com/tmmshauler/image/upload/v1506318907/hauler/dft-plant.jpg',

                },

              },
              'weight': 48135,
              'timeStamp': '2018-11-12T19:31:26.956Z',
              'btus': [],
              'remarks': 'Added from mobile app',
              'driver': {
                '_id': '5b59d31a25350f000f89ac53',
                'name': 'Harrison, Carlos R.',
                'status': 'Active',
                'logo': {
                  'default': 'https://res.cloudinary.com/tmmshauler/image/upload/c_thumb,h_120,w_120/v1533214026/hauler/rh1razixs5cxs1qxdnot.png',

                },
                'contact': {
                  'address1': {
                    'fullAddress': '4822 Letterkenny Road, Chambersburg, PA, 17201',

                  },
                  'email': 'Chuck17102@gmail.com',
                  'phone': '717-508-6051',

                },

              },

            }
          ],
          'details': [
            {
              '_id': '5be963fcf62181000f4bf3d8',
              'customer': {
                '_id': '5a0b06cf86ea7600015eb0e2',
                'summary': '32501-1 - John E. King',
                'code': '32501-1',
                'name': 'John E. King',
                'logo': {
                  'default': 'https://res.cloudinary.com/tmmshauler/image/upload/v1506318907/hauler/dft-customer.jpg',

                },
                'contact': {
                  'address1': {
                    'street1': '1330 Mapledale Road',
                    'fullAddress': '1330 Mapledale Road, Elizebethtown, PA, 17022',

                  },

                },
                'plant': {
                  '_id': '2915',
                  'code': '1110761',
                  'name': 'Maryland and Virginia Milk Producer',

                },
                'reportId': 'S1o3NLcgM',

              },
              'gradeType': 'A',
              'weight': 6248,
              'temperature': 38,
              'code': '790325011010556',
              'timeStamp': '2018-11-12T11:28:11.139Z',
              'remarks': 'Added from mobile app',
              'gaugeRod': 2816,
              'numberOfMilkings': 4,
              'cpd': 'F',
              'driver': {
                '_id': '5b59d31a25350f000f89ac53',
                'name': 'Harrison, Carlos R.',
                'status': 'Active',
                'logo': {
                  'default': 'https://res.cloudinary.com/tmmshauler/image/upload/c_thumb,h_120,w_120/v1533214026/hauler/rh1razixs5cxs1qxdnot.png',

                },
                'contact': {
                  'address1': {
                    'fullAddress': '4822 Letterkenny Road, Chambersburg, PA, 17201',

                  },
                  'email': 'Chuck17102@gmail.com',
                  'phone': '717-508-6051',

                },

              },

            },
            {
              '_id': '5be96a0af62181000f4bf479',
              'customer': {
                '_id': '5a0b05e386ea7600015eb0d3',
                'summary': '32688-1 - David E. Glick',
                'code': '32688-1',
                'name': 'David E. Glick',
                'logo': {
                  'default': 'https://res.cloudinary.com/tmmshauler/image/upload/v1506318907/hauler/dft-customer.jpg',

                },
                'contact': {
                  'address1': {
                    'street1': '3932 Sunnyside Road',
                    'fullAddress': '3932 Sunnyside Road, Manheim, PA, 17545',

                  },

                },
                'plant': {
                  '_id': '2915',
                  'code': '1110761',
                  'name': 'Maryland and Virginia Milk Producer',

                },
                'reportId': 'S1o3NLcgM',

              },
              'gradeType': 'A',
              'weight': 5074,
              'temperature': 37,
              'code': '790326881010343',
              'timeStamp': '2018-11-12T11:54:24.930Z',
              'remarks': 'Added from mobile app',
              'gaugeRod': 2313,
              'numberOfMilkings': 4,
              'cpd': 'F',
              'driver': {
                '_id': '5b59d31a25350f000f89ac53',
                'name': 'Harrison, Carlos R.',
                'status': 'Active',
                'logo': {
                  'default': 'https://res.cloudinary.com/tmmshauler/image/upload/c_thumb,h_120,w_120/v1533214026/hauler/rh1razixs5cxs1qxdnot.png',

                },
                'contact': {
                  'address1': {
                    'fullAddress': '4822 Letterkenny Road, Chambersburg, PA, 17201',

                  },
                  'email': 'Chuck17102@gmail.com',
                  'phone': '717-508-6051',

                },

              },

            },
            {
              '_id': '5be97192f62181000f4bf771',
              'customer': {
                '_id': '5a0b028486ea7600015eafd9',
                'summary': '32152-1 -  Esh, John B.',
                'code': '32152-1',
                'name': ' Esh, John B.',
                'logo': {
                  'default': 'https://res.cloudinary.com/tmmshauler/image/upload/v1506318907/hauler/dft-customer.jpg',

                },
                'contact': {
                  'address1': {
                    'street1': '1107 Old Line Road',
                    'fullAddress': '1107 Old Line Road, Manheim, PA, 17545',

                  },

                },
                'plant': {
                  '_id': '2915',
                  'code': '1110761',
                  'name': 'Maryland and Virginia Milk Producer',

                },
                'reportId': 'S1o3NLcgM',

              },
              'gradeType': 'A',
              'weight': 6262,
              'temperature': 37,
              'code': '790321521010552',
              'timeStamp': '2018-11-12T12:19:24.804Z',
              'remarks': 'Added from mobile app',
              'gaugeRod': 5909,
              'numberOfMilkings': 4,
              'cpd': 'F',
              'driver': {
                '_id': '5b59d31a25350f000f89ac53',
                'name': 'Harrison, Carlos R.',
                'status': 'Active',
                'logo': {
                  'default': 'https://res.cloudinary.com/tmmshauler/image/upload/c_thumb,h_120,w_120/v1533214026/hauler/rh1razixs5cxs1qxdnot.png',

                },
                'contact': {
                  'address1': {
                    'fullAddress': '4822 Letterkenny Road, Chambersburg, PA, 17201',

                  },
                  'email': 'Chuck17102@gmail.com',
                  'phone': '717-508-6051',

                },

              },

            },
            {
              '_id': '5be97622f62181000f4bf7e6',
              'customer': {
                '_id': '5a0b00be86ea7600015eaa90',
                'summary': '30865-1 - King, David K. ',
                'code': '30865-1',
                'name': 'King, David K. ',
                'logo': {
                  'default': 'https://res.cloudinary.com/tmmshauler/image/upload/v1506318907/hauler/dft-customer.jpg',

                },
                'contact': {
                  'address1': {
                    'street1': '1320 North Colebrook Road',
                    'fullAddress': '1320 North Colebrook Road, Manheim, PA, 17545',

                  },

                },
                'plant': {
                  '_id': '2915',
                  'code': '1110761',
                  'name': 'Maryland and Virginia Milk Producer',

                },
                'reportId': 'S1o3NLcgM',

              },
              'gradeType': 'A',
              'weight': 4429,
              'temperature': 37,
              'code': '790308651010709',
              'timeStamp': '2018-11-12T12:40:13.144Z',
              'remarks': 'Added from mobile app',
              'gaugeRod': 5209,
              'numberOfMilkings': 4,
              'cpd': 'R',
              'driver': {
                '_id': '5b59d31a25350f000f89ac53',
                'name': 'Harrison, Carlos R.',
                'status': 'Active',
                'logo': {
                  'default': 'https://res.cloudinary.com/tmmshauler/image/upload/c_thumb,h_120,w_120/v1533214026/hauler/rh1razixs5cxs1qxdnot.png',

                },
                'contact': {
                  'address1': {
                    'fullAddress': '4822 Letterkenny Road, Chambersburg, PA, 17201',

                  },
                  'email': 'Chuck17102@gmail.com',
                  'phone': '717-508-6051',

                },

              },

            },
            {
              '_id': '5be978e2f62181000f4bf85f',
              'customer': {
                '_id': '5a0afc0286ea7600015e9b9d',
                'summary': '30864-1 -  King, Levi P.',
                'code': '30864-1',
                'name': ' King, Levi P.',
                'logo': {
                  'default': 'https://res.cloudinary.com/tmmshauler/image/upload/v1506318907/hauler/dft-customer.jpg',

                },
                'contact': {
                  'address1': {
                    'street1': '1331 Shelly Road',
                    'fullAddress': '1331 Shelly Road, Manheim, PA, 17545',

                  },

                },
                'plant': {
                  '_id': '2915',
                  'code': '1110761',
                  'name': 'Maryland and Virginia Milk Producer',

                },
                'reportId': 'S1o3NLcgM',

              },
              'gradeType': 'A',
              'weight': 3500,
              'temperature': 37,
              'code': '790308641010652',
              'timeStamp': '2018-11-12T12:57:49.308Z',
              'remarks': 'Added from mobile app',
              'gaugeRod': 1700,
              'numberOfMilkings': 4,
              'cpd': 'R',
              'driver': {
                '_id': '5b59d31a25350f000f89ac53',
                'name': 'Harrison, Carlos R.',
                'status': 'Active',
                'logo': {
                  'default': 'https://res.cloudinary.com/tmmshauler/image/upload/c_thumb,h_120,w_120/v1533214026/hauler/rh1razixs5cxs1qxdnot.png',

                },
                'contact': {
                  'address1': {
                    'fullAddress': '4822 Letterkenny Road, Chambersburg, PA, 17201',

                  },
                  'email': 'Chuck17102@gmail.com',
                  'phone': '717-508-6051',

                },

              },

            },
            {
              '_id': '5be97d5ff62181000f4bf8dc',
              'customer': {
                '_id': '5a0af92486ea7600015e9329',
                'summary': '32340-1 - Petersheim Moses K. ',
                'code': '32340-1',
                'name': 'Petersheim Moses K. ',
                'logo': {
                  'default': 'https://res.cloudinary.com/tmmshauler/image/upload/v1506318907/hauler/dft-customer.jpg',

                },
                'contact': {
                  'address1': {
                    'street1': '1728 Mount Joy Road',
                    'fullAddress': '1728 Mount Joy Road, Manheim, PA, 17545',

                  },

                },
                'plant': {
                  '_id': '2915',
                  'code': '1110761',
                  'name': 'Maryland and Virginia Milk Producer',

                },
                'reportId': 'S1o3NLcgM',

              },
              'gradeType': 'A',
              'weight': 3954,
              'temperature': 37,
              'code': '790323401010552',
              'timeStamp': '2018-11-12T13:16:56.779Z',
              'remarks': 'Added from mobile app',
              'gaugeRod': 4100,
              'numberOfMilkings': 4,
              'cpd': 'F',
              'driver': {
                '_id': '5b59d31a25350f000f89ac53',
                'name': 'Harrison, Carlos R.',
                'status': 'Active',
                'logo': {
                  'default': 'https://res.cloudinary.com/tmmshauler/image/upload/c_thumb,h_120,w_120/v1533214026/hauler/rh1razixs5cxs1qxdnot.png',

                },
                'contact': {
                  'address1': {
                    'fullAddress': '4822 Letterkenny Road, Chambersburg, PA, 17201',

                  },
                  'email': 'Chuck17102@gmail.com',
                  'phone': '717-508-6051',

                },

              },

            },
            {
              '_id': '5be98214f62181000f4bf991',
              'customer': {
                '_id': '5a0b139e86ea7600015eb4a9',
                'summary': '32297-1 - John B. Stoltzfus',
                'code': '32297-1',
                'name': 'John B. Stoltzfus',
                'logo': {
                  'default': 'https://res.cloudinary.com/tmmshauler/image/upload/v1506318907/hauler/dft-customer.jpg',

                },
                'contact': {
                  'address1': {
                    'street1': '1424 Landisville Road',
                    'fullAddress': '1424 Landisville Road, Manheim, PA, 17545',

                  },

                },
                'plant': {
                  '_id': null,
                  'code': null,
                  'name': null,

                },
                'reportId': 'S1o3NLcgM',

              },
              'gradeType': 'A',
              'weight': 6576,
              'temperature': 38,
              'code': '322970101',
              'timeStamp': '2018-11-12T13:36:19.302Z',
              'remarks': 'Added from mobile app',
              'gaugeRod': 3424,
              'numberOfMilkings': 4,
              'cpd': 'R',
              'driver': {
                '_id': '5b59d31a25350f000f89ac53',
                'name': 'Harrison, Carlos R.',
                'status': 'Active',
                'logo': {
                  'default': 'https://res.cloudinary.com/tmmshauler/image/upload/c_thumb,h_120,w_120/v1533214026/hauler/rh1razixs5cxs1qxdnot.png',

                },
                'contact': {
                  'address1': {
                    'fullAddress': '4822 Letterkenny Road, Chambersburg, PA, 17201',

                  },
                  'email': 'Chuck17102@gmail.com',
                  'phone': '717-508-6051',

                },

              },

            },
            {
              '_id': '5be98681f62181000f4bfa4a',
              'customer': {
                '_id': '5a0b12e186ea7600015eb494',
                'summary': '32321-1 - Steven L. Stoltzfus',
                'code': '32321-1',
                'name': 'Steven L. Stoltzfus',
                'logo': {
                  'default': 'https://res.cloudinary.com/tmmshauler/image/upload/v1506318907/hauler/dft-customer.jpg',

                },
                'contact': {
                  'address1': {
                    'street1': '1978 Junction Road',
                    'fullAddress': '1978 Junction Road, Manheim, PA, 17545',

                  },

                },
                'plant': {
                  '_id': null,
                  'code': null,
                  'name': null,

                },
                'reportId': 'S1o3NLcgM',

              },
              'gradeType': 'A',
              'weight': 6940,
              'temperature': 36,
              'code': '790323211010554',
              'timeStamp': '2018-11-12T13:55:51.591Z',
              'remarks': 'Added from mobile app',
              'gaugeRod': 7806,
              'numberOfMilkings': 4,
              'cpd': 'R',
              'driver': {
                '_id': '5b59d31a25350f000f89ac53',
                'name': 'Harrison, Carlos R.',
                'status': 'Active',
                'logo': {
                  'default': 'https://res.cloudinary.com/tmmshauler/image/upload/c_thumb,h_120,w_120/v1533214026/hauler/rh1razixs5cxs1qxdnot.png',

                },
                'contact': {
                  'address1': {
                    'fullAddress': '4822 Letterkenny Road, Chambersburg, PA, 17201',

                  },
                  'email': 'Chuck17102@gmail.com',
                  'phone': '717-508-6051',

                },

              },

            },
            {
              '_id': '5be9939ff62181000f4bfa9f',
              'customer': {
                '_id': '5a2178b6fd8f190001a6a385',
                'summary': '31947-1 - Amos S. Esh',
                'code': '31947-1',
                'name': 'Amos S. Esh',
                'logo': {
                  'default': 'https://res.cloudinary.com/tmmshauler/image/upload/v1506318907/hauler/dft-customer.jpg',

                },
                'contact': {
                  'address1': {
                    'street1': '2420 Arnold Road',
                    'fullAddress': '2420 Arnold Road, Red Lion, PA, 17356',

                  },

                },
                'plant': {
                  '_id': '2915',
                  'code': '1110761',
                  'name': 'Maryland and Virginia Milk Producer',

                },
                'reportId': 'S1o3NLcgM',

              },
              'gradeType': 'A',
              'weight': 5152,
              'temperature': 37,
              'code': '790319471010552',
              'timeStamp': '2018-11-12T14:51:30.808Z',
              'remarks': 'Added from mobile app',
              'gaugeRod': 2316,
              'numberOfMilkings': 4,
              'cpd': 'F',
              'driver': {
                '_id': '5b59d31a25350f000f89ac53',
                'name': 'Harrison, Carlos R.',
                'status': 'Active',
                'logo': {
                  'default': 'https://res.cloudinary.com/tmmshauler/image/upload/c_thumb,h_120,w_120/v1533214026/hauler/rh1razixs5cxs1qxdnot.png',

                },
                'contact': {
                  'address1': {
                    'fullAddress': '4822 Letterkenny Road, Chambersburg, PA, 17201',

                  },
                  'email': 'Chuck17102@gmail.com',
                  'phone': '717-508-6051',

                },

              },

            }
          ],

        }
      ]

      await this.db.bulkDocs(docs)

      console.log('Done seeding for User Repository')

    }

  }


  mapDocForSync = (doc) => {

    //if tag for deletion just return the doc
    if (doc._deleted) return doc

    //unnecessary fields
    delete doc.summary
    delete doc.drivers
    doc.driver = _.pick(doc.driver, ['_id'])
    doc.route = _.pick(doc.route, ['_id'])

    doc.deliveries = doc.deliveries && doc.deliveries.map(m => {
      return _.omit(m, ['customer.summary', 'customer.logo', 'driver.name',
        'driver.status', 'driver.logo', 'driver.contact'
      ])
    })

    doc.details = doc.details && doc.details.map(m => {
      return _.omit(m, ['customer.summary', 'customer.logo', 'customer.code', 'customer.name',
        'customer.contact',
        'customer.reportId',
        'customer.plant',
        'driver.name',
        'driver.status', 'driver.logo', 'driver.contact'
      ])
    })

    doc.tenant = {_id: 'DFH'} //include the tenant id of the object


    return doc
  }

}
