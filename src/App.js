import {Component} from 'react'

import ButtonsList from './Components/ButtonsList'
import './App.css'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

// Replace your code here
class App extends Component {
  state = {
    btnId: languageGreetingsList[0].id,
  }

  onUpdateBtnId = id => {
    this.setState({btnId: id})
  }

  renderGreetings = () => {
    const {btnId} = this.state

    const filterObj = languageGreetingsList.find(
      eachObj => eachObj.id === btnId,
    )

    console.log(filterObj)

    return (
      <img
        src={filterObj.imageUrl}
        className="greeting-img"
        alt={filterObj.imageAltText}
      />
    )
  }

  render() {
    const {btnId} = this.state

    return (
      <div className="bg-container">
        <div className="detailed-container">
          <h1 className="main-heading">Multilingual Greetings</h1>
          <ul className="btn-list">
            {languageGreetingsList.map(eachItem => (
              <ButtonsList
                buttonDetails={eachItem}
                onUpdateBtnId={this.onUpdateBtnId}
                activeBtnId={btnId}
                key={eachItem.id}
              />
            ))}
          </ul>
          <div className="greeting-card">{this.renderGreetings()}</div>
        </div>
      </div>
    )
  }
}
export default App
