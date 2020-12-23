import React, { useEffect } from "react";
import styles from "../../styles/jss/components/carousel";
import { Grow, IconButton, Icon } from "@material-ui/core";
import { DEFAULT_CAROUSEL_IMAGE } from "../../constants/Const";

export default function Carousel(props) {
  const classes = styles();
  const { title, subTitle, listImages } = props;
  const LIST_CAROUSEL_IMAGE = listImages ? listImages : DEFAULT_CAROUSEL_IMAGE;
  let slideIndex = 0;
  let sliderInterval;
  let touchPageX = 0;

  useEffect(() => {
    showSlides(0);
    return () => {
      clearInterval(sliderInterval);
    };
  }, [listImages]);

  const showSlides = (index) => {
    clearInterval(sliderInterval);
    let i;
    let slides = document.getElementsByClassName("carouselItem");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    // get next slide index
    if (index < 0) {
      slideIndex = slides.length - 1;
    } else if (index >= slides.length) {
      slideIndex = 0;
    } else {
      slideIndex = index;
    }
    slides[slideIndex].style.display = "block";

    if (LIST_CAROUSEL_IMAGE.length > 1) {
      // show dot active or deactive under carousel
      let dots = document.getElementsByClassName("dot");
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }

      dots[slideIndex].className += " active";
      sliderInterval = setInterval(() => showSlides(slideIndex + 1), 10000);
    }
  };

  const handleTouchStart = (e) => {
    touchPageX = e.changedTouches[0].pageX;
  };

  const handleTouchEnd = (e) => {
    let touchPageXend = e.changedTouches[0].pageX;
    let distance = touchPageX - touchPageXend;
    if (distance > 0) {
      showSlides(slideIndex + 1);
    } else if (distance < 0) {
      showSlides(slideIndex - 1);
    }
  };

  return (
    <section
      className={classes.mainCarousel}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {LIST_CAROUSEL_IMAGE.map((image, index) => (
        <div
          key={index}
          className={`carouselItem fade ${classes.mainCarousel__item}`}
          style={{ backgroundImage: `url(${image})` }}
        >
          <Grow in={true} {...{ timeout: 1500 }}>
            <div className={classes.carousel__item__title}>
              <h1 className="mainTitle noselect">{title}</h1>
              <p className="subTitle noselect">{subTitle}</p>
            </div>
          </Grow>
        </div>
      ))}
      {LIST_CAROUSEL_IMAGE.length > 1 && (
        <>
          <div className={classes.mainCarousel__dot}>
            {LIST_CAROUSEL_IMAGE.map((image, index) => (
              <span
                key={index}
                className="dot"
                onClick={() => showSlides(index)}
              ></span>
            ))}
          </div>
          <IconButton
            className={classes.mainCarousel__arrowLeft}
            onClick={() => showSlides(slideIndex - 1)}
          >
            <Icon>chevron_left</Icon>
          </IconButton>
          <IconButton
            className={classes.mainCarousel__arrowRight}
            onClick={() => showSlides(slideIndex + 1)}
          >
            <Icon>chevron_right</Icon>
          </IconButton>
        </>
      )}
    </section>
  );
}
