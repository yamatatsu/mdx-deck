import React from 'react'
import PropTypes from 'prop-types'
import debounce from 'lodash.debounce'
import styled from 'styled-components'
import { withDeck } from './context'

const Root = styled.div([], {
  userSelect: 'none',
})

const Swipe = withDeck(class extends React.Component {
  static propTypes = {
    deck: PropTypes.shape({
      index: PropTypes.number.isRequired,
      goTo: PropTypes.func.isRequired
    })
  }

  root = React.createRef()

  state = {
    touch: false,
    start: null
  }

  handleTouchStart = e => {
    const start = e.clientX
    this.setState({ touch: true, start })
    this.timer = setTimeout(this.handleTouchEnd, 300)
  }

  handleTouchEnd = e => {
    this.setState({ touch: false, start: null })
    const { deck } = this.props
    const index = Math.round(deck.index)
    deck.goTo(index)
    clearTimeout(this.timer)
  }

  // handleTouchMove = debounce(e => {
  handleTouchMove = e => {
    const { start, touch } = this.state
    if (!touch) return
    const { clientX } = e
    // e.persist()
    const { index, length, goTo } = this.props.deck
    const move = clientX - start
    const { width } = this.root.current.getBoundingClientRect()
    const next = index - move / width
    if (next < 0 || next > length) return
    goTo(next)
    this.setState({ start: clientX })
  } //, 10)

  render () {
    return (
      <Root
        innerRef={this.root}
        onTouchStart={this.handleTouchStart}
        onTouchEnd={this.handleTouchEnd}
        onTouchCancel={this.handleTouchEnd}
        onTouchMove={this.handleTouchMove}

        onMouseDown={this.handleTouchStart}
        onMouseUp={this.handleTouchEnd}
        onMouseLeave={this.handleTouchEnd}
        onMouseMove={this.handleTouchMove}
        >
        {this.props.children}
      </Root>
    )
  }
})

export default Swipe
