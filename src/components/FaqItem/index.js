// Write your code here.
import {Component} from 'react'
import './index.css'

const PLUS_IMAGE =
  'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
const MINUS_IMAGE =
  'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'

class FaqItem extends Component {
  state = {isActive: false}

  toggleButton = () => {
    this.setState(prevState => ({isActive: !prevState.isActive}))
  }

  renderImage = () => {
    const {isActive} = this.state
    const toggleImage = isActive ? MINUS_IMAGE : PLUS_IMAGE
    const altText = isActive ? 'minus' : 'plus'

    return (
      <button className="button" type="button" onClick={this.toggleButton}>
        <img src={toggleImage} alt={altText} className="image" />
      </button>
    )
  }

  renderAnswer = () => {
    const {isActive} = this.state
    const {faqItem} = this.props
    const {answerText} = faqItem

    if (isActive) {
      return (
        <div className="answer-container">
          <hr className="horizontal-line" />
          <p className="answer">{answerText}</p>
        </div>
      )
    }
    return null
  }

  render() {
    const {isActive} = this.state
    const {faqItem} = this.props
    console.log(faqItem)
    const {id, questionText, answerText} = faqItem

    return (
      <li className="faq-item">
        <div className="question-container">
          <h1 className="question">{questionText}</h1>
          {this.renderImage()}
        </div>
        {this.renderAnswer()}
      </li>
    )
  }
}

export default FaqItem
