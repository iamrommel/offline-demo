import React from 'react'
import {withApollo} from 'react-apollo'
import {SyncOfflineMutation} from './SyncOfflineMutation'


export const withSyncOfflineMutation = ({storage}) => {

  return (WrappedComponent) => {

    class With extends React.Component {

      state = {hasOfflineData: false}

      async componentDidMount() {
        this.syncOfflineMutation = new SyncOfflineMutation({apolloClient: this.props.client, storage})
        await this.syncOfflineMutation.init()
        this.setState({hasOfflineData: this.syncOfflineMutation.hasOfflineData()})
      }

      sync = async () => {
        await this.syncOfflineMutation.sync()
      }

      render() {

        const syncOfflineMutation = {
          sync : this.sync,
          hasOfflineData : this.state.hasOfflineData
        }

        return (
          <WrappedComponent
            syncOfflineMutation={syncOfflineMutation}
            {...this.props}/>
        )
      }
    }

    With = withApollo(With)

    return With

  }

}
