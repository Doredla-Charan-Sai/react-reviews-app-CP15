// Write your code here
import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {index: 0}

  onLeft = () => {
    const {index} = this.state
    if (index > 0) {
      this.setState(prevState => ({index: prevState.index - 1}))
    } else {
      this.setState({index: 0})
    }
  }

  onRight = () => {
    const {reviewsList} = this.props
    const {index} = this.state
    if (index < reviewsList.length - 1) {
      this.setState(prevState => ({index: prevState.index + 1}))
    } else {
      this.setState({index: reviewsList.length - 1})
    }
  }

  render() {
    const {reviewsList} = this.props
    const {index} = this.state
    return (
      <div className="bg-cont">
        <div className="content-cont">
          <button
            type="button"
            className="btn"
            onClick={this.onLeft}
            data-testid="leftArrow"
          >
            <img
              className="img"
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
            />
          </button>
          <div className="review-cont">
            <h1 className="main-head">Reviews</h1>
            <img
              className="profile"
              src={reviewsList[index].imgUrl}
              alt={reviewsList[index].username}
            />
            <p className="username">{reviewsList[index].username}</p>
            <p className="company-name">{reviewsList[index].companyName}</p>
            <p className="description">{reviewsList[index].description}</p>
          </div>
          <button
            type="button"
            className="btn"
            onClick={this.onRight}
            data-testid="rightArrow"
          >
            <img
              className="img"
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}
export default ReviewsCarousel
