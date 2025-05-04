import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export default function Projects() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  }
  return (
    <div>
      <h1>My Projects</h1>
      <h2>Geared Up</h2>
      <Slider {...settings}>
        <div>
          <img
            src="/src/assets/images/geared-up/1-home-page.png"
            alt="Geared Up Landing page"
          />
          <h3>1</h3>
        </div>
        <div>
          <img
            src="/src/assets/images/geared-up/2-g-walk-list.png"
            alt="Geared Up Walk List"
          />
          <h3>2</h3>
        </div>
        <div>
          <img
            src="/src/assets/images/geared-up/3-g-walk.png"
            alt="Great Walk Info"
          />
          <h3>3</h3>
        </div>
        <div>
          <img
            src="/src/assets/images/geared-up/4-user-sign-up.png"
            alt="User Sign Up Details"
          />
          <h3>4</h3>
        </div>
        <div>
          <img
            src="/src/assets/images/geared-up/5-sign-up-g-walk.png"
            alt="Sign Up form for completed great walks"
          />
          <h3>5</h3>
        </div>
        <div>
          <img
            src="/src/assets/images/geared-up/6-sign-up-gear.png"
            alt="Sign Up form for current gear"
          />
          <h3>6</h3>
        </div>
        <div>
          <img
            src="/src/assets/images/geared-up/7-warnings.png"
            alt="Safety Tips"
          />
          <h3>7</h3>
        </div>
        <div>
          <img
            src="/src/assets/images/geared-up/8-rec-walks.png"
            alt="Recommended Walks"
          />
          <h3>8</h3>
        </div>
        <div>
          <img
            src="/src/assets/images/geared-up/9-g-walk-gear.png"
            alt="Necessary Gear for each walk, with current gear ticked-off"
          />
          <h3>9</h3>
        </div>
        <div>
          <img
            src="/src/assets/images/geared-up/10-g-walk-comment.png"
            alt="Comment Section for each Great Walk"
          />
          <h3>10</h3>
        </div>
        <div>
          <img
            src="/src/assets/images/geared-up/11-add-g-walk-plan.png"
            alt="Planning a Walk"
          />
          <h3>11</h3>
        </div>
        <div>
          <img
            src="/src/assets/images/geared-up/12-user-profile.png"
            alt="User Profile"
          />
          <h3>12</h3>
        </div>
        <div>
          <img
            src="/src/assets/images/geared-up/13-user-walks.png"
            alt="List of User's Planned and Completed Walks"
          />
          <h3>13</h3>
        </div>
      </Slider>
    </div>
  )
}
