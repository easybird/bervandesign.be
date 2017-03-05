import React from 'react';
import Gallery from 'react-photo-gallery';

const imageRatios = [{ width: 681, height: 1024, aspectRatio: 1.5 }, { width: 600, height: 600, aspectRatio: 1 }];

class PhotoGallery extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      photoSet: this.createPhotoSet(props.images)
    }
  }

  componentDidMount() {
    this.setState({
      photoSet: this.createPhotoSet(this.props.images)
    })
  }

  createPhotoSet(images) {
    function getRandomDataFromArray(data) {
      return data[Math.floor(Math.random() * data.length)]
    }

    return images
      .map((image) => {
          const imageRatio = getRandomDataFromArray(imageRatios);
          return {
            src: image.src,
            width: imageRatio.width,
            height: imageRatio.height,
            aspectRatio: imageRatio.aspectRatio,
            lightboxImage: {
              src: image.src,
              srcset: [
                image.src
              ]
            }
          }
        }
      );
  }

  render() {
    return (
      <Gallery photos={this.state.photoSet}/>
    );
  }
}

PhotoGallery.propTypes = {
  images: React.PropTypes.array.isRequired
};
export default PhotoGallery;
