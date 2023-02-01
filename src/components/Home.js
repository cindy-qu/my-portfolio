import { Container, Grid, Image, Icon } from "semantic-ui-react";
import './Home.css';
import mySvg2 from './undraw_astronaut_re_8c33.svg'

const Home = () => {
  return (

    <Container>
        
        <div>

        <Grid stackable columns={2}>
        <Grid.Column id="homepage">
            <h1 id ="home">
                Hi, I’m Cindy
                
            </h1>
            <h2 className = "home2">Accountant turned Software Developer</h2>
           
            
            <p className = "homebuttons">
              <a href="https://github.com/cindy-qu"><Icon size="small" name="github"></Icon></a>
              <a href="https://www.linkedin.com/in/cindy-qu/"><Icon size="small" name="linkedin"></Icon></a>
              <a href="/contact"><Icon size="small" name="mail"></Icon></a>

            </p>
            {/* <p className ="home2">
              <a href="https://github.com/cindy-qu"><Icon size="big" name="github"></Icon></a>
              <a href="https://github.com/cindy-qu"><Icon size="big" name="linkedin"></Icon></a>
            </p> */}
            </Grid.Column>
            <Grid.Column>
            <Image id= "homeimage" src={mySvg2} alt="SVG as an image" fluid />
            </Grid.Column>
     </Grid>
            <div className="background">
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
</div>
        </div>
        
    </Container>
 

    
  )
}

export default Home