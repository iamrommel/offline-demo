export class Base {
  constructor({repositoryFactory}) {
    if (!repositoryFactory) throw  new Error('Repository function is needed in RepositoryBase')
    this.repository = repositoryFactory()
  }



}
