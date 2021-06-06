import React from 'react';
import Assessment from './Assessment';
import Genre from './Genre';
import Imagem from './Imagem';
import StoryLine from './StoryLine';
import SubtitleCard from './SubtitleCard';
import TittleCard from './TittleCard';
// import Data from '../data';
class AddMovie extends React.Component {
  constructor() {
    super();

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyLine: '',
      rating: 0,
      genre: 'action',
    };

    this.handlerChange = this.handlerChange.bind(this);
    // this.handlerClick = this.handlerClick.bind(this);
  }

  handlerChange(event) {
    // console.log('asd')
    const { name } = event.target;
    const { value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  // handlerClick(event) {
  //   return console.log('test click', event);
  // }

  render() {
    // const { subtitle, title, imagePath, storyLine, rating, genre } = this.props;

    return (
      <form data-testid="add-movie-form">
        <TittleCard />
        <SubtitleCard />
        <Imagem />
        <StoryLine />
        <Assessment />
        <Genre />
      </form>
    );
  }
}

export default AddMovie;
