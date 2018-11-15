import React from 'react'
import { View, Text } from 'native-base'

export class OfflineWarning extends React.Component {

  render () {
    let {description,isOffline, backgroundColor='#ff3300'} = this.props

    //if there is net connection, just ignore this component
    if (!isOffline) return null


    //set the default value for warning message if not specified
    description = description || 'You are currently offline and using only cache data. Some data and operation may not not work properly.'

    //show the banner for offline
    return (
      <View style={{backgroundColor}}>
        <Text style={{
          paddingTop: 5,
          paddingBottom: 5,
          textAlign: 'center',
          fontWeight: 'bold',
          color: 'white'
        }}>
          {description}
        </Text>
      </View>
    )
  }

}
