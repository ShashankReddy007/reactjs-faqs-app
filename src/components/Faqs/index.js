// Write your code he
import {Component} from 'react'
import FaqItem from '../FaqItem'
import './index.css'

class Faqs extends Component {
  render() {
    const {faqsList} = this.props
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">FAQs</h1>
          <ul className="faqs-list">
            {faqsList.map(item => (
              <FaqItem key={item.id} faqItem={item} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Faqs
