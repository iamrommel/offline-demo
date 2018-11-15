import React from 'react'
import PropTypes from 'prop-types'
import {compose, getContext, withContext} from 'recompose'

const Provider = () => withContext(
  {stores: PropTypes.object},
  props => ({userContext: props})
)
(props => React.Children.only(props.children))

const Consumer = Component => getContext({userContext: PropTypes.object})(Component)

const AppContext = React.createContext()


export {Provider, Consumer, AppContext}
