class Tab extends React.Component{
  constructor(props){
    super(props)
    this.state = { selectedTab: " " }
  }

  render(){
    return(
      this.props.map((prop) => 
      <ul>
        <h1>{prop.title}</h1>
        <article>{prop.content}</article>
      </ul>)
    );
  }

}