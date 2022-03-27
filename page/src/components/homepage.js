import './homepage.css'

function Home() {
  return (
    <div className="home">
        <h1>Hi, my name is Duck</h1>
        <p>
        ...and 'Duck' isnt my real name. I am a Muslim Developer living in South-Asia. I am a developer that
        mainly does webdev but I do other stuff too, and I also play videogames. I'm also into Raspberry Pi's, Arduino
        boards and tiny computers in general :) <br/>
        </p>

        <a href="https://twitter.com/ducksveryaweso">{'> Twitter <'}<br/></a>
        <a href="https://github.com/ducksveryawes">{'> Github <'} <br/><br/></a>
        <div className="image-bottom">
        </div>
    </div>
  );
}

export default Home;