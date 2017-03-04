import React from 'react';
import ProjectContentPage from '../ProjectContentPage';
import BervanContainer from '../BervanContainer';

class BervanThema extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const projectContent = this.props.head.projects.map((project, index) =>
      <ProjectContentPage
        key={index}
        project={project}
      />);

    return (
      <BervanContainer {...this.props }>
        {projectContent}
      </BervanContainer>

    )
  }
}

BervanThema.propTypes = {
  head: React.PropTypes.object.isRequired
};

export default BervanThema;
