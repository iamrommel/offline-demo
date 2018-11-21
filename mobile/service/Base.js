export class Base {
  constructor({repositoryFactory}) {
    if (!repositoryFactory) throw  new Error('Repository function is needed in RepositoryBase')
    this.repository = repositoryFactory()
  }

  findOne = async ({where}) => {
    return this.repository.findOne({where})
  }

  findById = async (docId, options) => {
    return this.repository.findById(docId, options)
  }

  find = async ({where}) => {
    return this.repository.find({where})
  }

  insert = async ({data}) => {
    return this.repository.insert({data})
  }

  remove = async ({where, docId}) => {
    return this.repository.remove({where, docId})
  }

  update = async ({where, data, docId}) => {
    return this.repository.update({where, data, docId})
  }


}
