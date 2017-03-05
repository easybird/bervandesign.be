import React from 'react';
import Lightbox from 'react-images';
import styles from './index.css';

class PhotoGrid extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      imageGrid: this.createImageGrid(props.images),
      currentImage: 0,
      lightboxIsOpen: false
    };

    this.renderImages = () => this._renderImages();
    this.closeLightbox = this.closeLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
    this.gotoImage = this.gotoImage.bind(this);
    this.handleClickImage = this.handleClickImage.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
  }

  componentDidMount() {
    this.setState({
      imageGrid: this.createImageGrid(this.props.images)
    })
  }

  openLightbox(index, event) {
    event.preventDefault();
    this.setState({
      currentImage: index,
      lightboxIsOpen: true,
    });
  }

  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
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

  createImageGrid(images) {
    function getRandomDataFromArray(data) {
      return data[getRandomPositiveNumber(data.length - 1)];
    }

    function getRandomPositiveNumber(biggestNumber, smallestNumber = 0) {
      return Math.floor(Math.random() * (biggestNumber - smallestNumber + 1) + smallestNumber);
    }

    function getRandomizedMinWidth(averageMinWidth, variation) {
      const randomPositiveVariation = getRandomPositiveNumber(variation);
      const randomVariation = getRandomPositiveNumber(1) === 1 ? randomPositiveVariation : -randomPositiveVariation;
      return averageMinWidth + randomVariation;
    }

    const imageCount = images.length;

    const rows = 3;
    const columns = Math.ceil(imageCount / rows);
    const variation = 5;
    const averageMinWidth = 100 / columns;
    let totalWidth = 0;

    return {
      rows,
      columns,
      images: images.map((image, index) => {
        const imageGrid = {
          src: image.src,
          flexGrow: getRandomDataFromArray([1, 2, 3]),
        };

        const columnsModulo = (index + 1) % columns;
        if (columnsModulo === 0) {
          // last element
          imageGrid.minWidth = 100 - totalWidth;
          totalWidth = 0;
        } else {
          var currentMinWidth = getRandomizedMinWidth(averageMinWidth, variation);
          imageGrid.minWidth = currentMinWidth;
          totalWidth += currentMinWidth;
        }
        return imageGrid;
      })
    }
  }

  _renderImages() {
    const images = this.state.imageGrid.images;
    return images.map((image, index) => {
      return (
        <div
          className={styles.image}
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${image.src})`,
            flexBasis: `${image.minWidth}%`,
            flexGrow: image.flexGrow
          }}
          key={index}
        >
          <a href={image.src}
             key={index}
             onClick={(e) => this.openLightbox(index, e)}
          >
            <span className={styles.emptySpan}></span>
          </a>
        </div>)

    });
  }

  render() {
    return (
      <section className={styles.photos}>
        {this.renderImages()}
        <Lightbox
          currentImage={this.state.currentImage}
          images={this.props.images}
          isOpen={this.state.lightboxIsOpen}
          onClickImage={this.handleClickImage}
          onClickNext={this.gotoNext}
          onClickPrev={this.gotoPrevious}
          onClickThumbnail={this.gotoImage}
          onClose={this.closeLightbox}
          showThumbnails={true}
        />
      </section>
    );
  }
}

PhotoGrid.propTypes = {
  images: React.PropTypes.array.isRequired
};
export default PhotoGrid;
