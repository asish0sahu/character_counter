import {Component} from 'react'

import './index.css'

import {v4} from 'uuid'

import {
  EmptyListImage,
  MainContainer,
  CounterContainer,
  SuccessViewContainer,
  MainHeadingChar,
} from './styledComponents'

class Home extends Component {
  state = {characterList: [], inputText: ''}

  changeInput = event => {
    this.setState({inputText: event.target.value})
  }

  submitForm = event => {
    event.preventDefault()

    const {inputText} = this.state

    this.setState(prevState => ({
      characterList: [...prevState.characterList, {id: v4(), inputText}],
      inputText: '',
    }))
  }

  renderSuccessView = () => {
    const {characterList} = this.state
    console.log(characterList)

    const showCharacterList = characterList.length > 0

    return showCharacterList ? (
      <ul>
        {characterList.map(each => (
          <li key={each.id}>
            <p>
              {each.inputText} {each.inputText.length}
            </p>
          </li>
        ))}
      </ul>
    ) : (
      <div>
        <EmptyListImage
          src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
          alt="no user inputs"
        />
      </div>
    )
  }

  render() {
    const {inputText} = this.state
    return (
      <MainContainer>
        <SuccessViewContainer>
          <div>
            <h1>
              Count the characters like a <br />
              Boss...
            </h1>
          </div>
          {this.renderSuccessView()}
        </SuccessViewContainer>
        <CounterContainer>
          <form onSubmit={this.submitForm}>
            <MainHeadingChar>Character Counter</MainHeadingChar>
            <input
              type="text"
              value={inputText}
              onChange={this.changeInput}
              placeholder="Enter the characters here"
            />
            <button type="submit" className="boat">
              Add
            </button>
          </form>
        </CounterContainer>
      </MainContainer>
    )
  }
}
export default Home
