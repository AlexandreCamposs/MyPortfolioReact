import './style.scss';

const MyProject = ({ items }) => {
  return (
    <div className="container-p">
      <div className="container-projects">
        <div className="project-descrition">
          
          <img src={items.Img} className="img-background" />
          <h4>{items.title}</h4>
          <h5>{items.description}</h5>
          <p>{items.url}</p>
          
        </div>
      </div>
    </div>
  );
};

export default MyProject;
