import React from 'react'
import {withApollo} from 'react-apollo'
import {SyncOfflineMutation} from './SyncOfflineMutation'

export const withSyncOfflineMutation = ({storage}) => {

  return (WrappedComponent) => {

    class With extends React.Component {

      async componentDidMount() {
        this.syncOfflineMutation = new SyncOfflineMutation({apolloClient: this.props.client, storage})
        await this.syncOfflineMutation.init()

        this.setState({syncOfflineMutation: this.syncOfflineMutation})
      }

      render() {

        const {syncOfflineMutation} = this.state || {}


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

