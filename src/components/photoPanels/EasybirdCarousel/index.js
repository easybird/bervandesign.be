import React from 'react';
import Lightbox from 'react-images';

class EasybirdCarousel extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentImage: 0,
      openCarousel: props.openCarousel
    };
    this.closeLightbox = this.closeLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
    this.gotoImage = this.gotoImage.bind(this);
    this.handleClickImage = this.handleClickImage.bind(this);
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      openCarousel: newProps.openCarousel
    })
  }

  closeLightbox() {
    this.setState({
      currentImage: 0,
      openCarousel: false,
    });
  }

  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1,
    });
  }

  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1,
    });
  }

  gotoImage(index) {
    this.setState({
      currentImage: index,
    });
  }

  handleClickImage() {
    if (this.state.currentImage === this.props.images.length - 1) return;

    this.gotoNext();
  }

  render() {
    const theme = {
      // container
      container: {
        background: 'rgba(255, 255, 255, 1)'
      },
      // arrows
      arrow: {
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        fill: '#222',
        opacity: 0.6,
        transition: 'opacity 200ms',

        ':hover': {
          opacity: 1,
        },
      },
      arrow__size__medium: {
        borderRadius: 40,
        height: 40,
        marginTop: -20,

        '@media (min-width: 768px)': {
          height: 70,
          padding: 15,
        },
      },
      arrow__direction__left: { marginLeft: 10 },
      arrow__direction__right: { marginRight: 10 },

      // header
      close: {
        position: "fixed",
        right: "5%",
        top: "0",
        width: "60px",
        height: "60px",
        fill: '#000',
        opacity: 0.6,
        transition: 'all 200ms',

        ':hover': {
          opacity: 1,
        },
      },
      header: {
        height: 0
      },
      // footer
      footer: {
        height: 0,
        color: '#000'
      },
      footerCaption: {
        bottom: "-30px",
        textAlign: "left"
      },
      // thumbnails
      thumbnail: {},
      thumbnail__active: {
        boxShadow: '0 0 0 1px #000',
      },
    };

    return (
      <Lightbox
        currentImage={this.state.currentImage}
        images={this.props.images || [{ src: '/assets/img/hero/hero_landelijk.jpg' }, { src: '/assets/img/hero/hero_modern.jpg' }]}
        isOpen={this.state.openCarousel}
        onClickImage={this.handleClickImage}
        onClickNext={this.gotoNext}
        onClickPrev={this.gotoPrevious}
        onClickThumbnail={this.gotoImage}
        onClose={this.closeLightbox}
        showThumbnails={true}
        showImageCount={false}
        width={2048}
        theme={theme}
      />
    )
  }
}

EasybirdCarousel.propTypes = {
  openCarousel: React.PropTypes.bool,
  images: React.PropTypes.array.isRequired
};
export default EasybirdCarousel;
