export default async event => {


  return {
    data: {
      data: [`Hello ${event.data.name || 'World'}, greeting from the corner of the world `]
    }
  }
}
