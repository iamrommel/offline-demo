import React from 'react'
import {Button, Icon} from 'native-base'
import {DELETE_USER} from './queries'

export class DeleteUserButton extends React.Component {

  state = {loading: false}

  onDelete = async () => {
    const {data, client, rowMap, secId, rowId} = this.props
    const variables = {id: data.id}
    const refetchQueries = () => ['allUsers']

    try {
      this.setState({loading: true})
      await client.mutate({mutation: DELETE_USER, variables, refetchQueries})
    }
    catch (e) {
      console.log('therei s error', e)
    }
    finally {
      rowMap[`${secId}${rowId}`].props.closeRow()
      this.setState({loading: false})

    }

  }

  render() {
    const {loading} = this.state
    return (
      <Button full danger disabled={loading} onPress={this.onDelete}>
        <Icon active name={loading ? 'refresh' : 'trash'}/>
      </Button>
    )
  }

}
