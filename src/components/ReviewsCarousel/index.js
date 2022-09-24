// Write your code here
import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {id: 0}

  leftArrow = () => {
    const {id} = this.state
    if (id !== 0) {
      this.setState(prevState => ({id: prevState.id - 1}))
    }
  }

  rightArrow = () => {
    const {id} = this.state
    const {reviewsList} = this.props
    if (id !== reviewsList.length - 1) {
      this.setState(prevState => ({id: prevState.id + 1}))
    }
  }

  render() {
    const {id} = this.state
    const {reviewsList} = this.props
    const {imgUrl, username, companyName, description} = reviewsList[id]

    return (
      <div className="bg">
        <h1 className="heading">Reviews</h1>
        <img src={imgUrl} alt={username} />
        <p className="name">{username}</p>
        <div className="button-container">
          <button
            type="button"
            className="button"
            onClick={this.leftArrow}
            testid="leftArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
            />
          </button>
          <button
            type="button"
            className="button"
            onClick={this.rightArrow}
            testid="rightArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
            />
          </button>
        </div>
        <p className="para">{companyName}</p>
        <p className="para">{description}</p>
      </div>
    )
  }
}

export default ReviewsCarousel
