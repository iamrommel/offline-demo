import {StorageBase} from './StorageBase'

export class UserStorage extends StorageBase {
  constructor() {
    super()
    super.storage = this.onlineOfflineStorageFactory(new UserWebServiceStorage(), new UserSqliteStorage())
  }
}


class UserWebServiceStorage {
  find = async ({where}) => {
    //factory where to get the data
    return { id: 'web service id', name: 'web service name'  }
  }

}


class UserSqliteStorage {
  find = async ({where}) => {
    //factory where to get the data
    return { id: 'SQL Lite id', name: 'SQL Lite name'  }
  }
}

