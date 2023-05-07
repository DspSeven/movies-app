import {Component} from 'react'

import Slider from 'react-slick'
import {Link, withRouter} from 'react-router-dom'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ],
}

class ReactSlick extends Component {
  renderSlick = () => {
    const {slickDetails} = this.props
    return (
      <Slider {...settings}>
        {slickDetails.map(eachMovie => (
          <Link to={`/movies/${eachMovie.id}`} key={eachMovie.id}>
            <li testid="MovieCard" className="slick-item" key={eachMovie.id}>
              <img
                className="logo-image"
                src={eachMovie.posterPath}
                alt={eachMovie.title}
              />
            </li>
          </Link>
        ))}
      </Slider>
    )
  }

  render() {
    return <div>{this.renderSlick()}</div>
  }
}

export default withRouter(ReactSlick)
