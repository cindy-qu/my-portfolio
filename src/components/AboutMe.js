import { Grid, Container, Image } from "semantic-ui-react"
import mySvg from './undraw_faq_re_31cw.svg'

const AboutMe = () => {
  return (
    <Grid id="about" >
        <Container text>
       <h1>About Me</h1>
        <Grid.Row>
            <Grid.Column width={3}>
                
            <p>
            Hi, I am Cindy Qu, and I decided to career pivot to software developer after four years of working as a tax accountant. I enjoyed financial accounting and working with various tech startups and healthcare companies, but I want to help build impactful applications.
        </p>
        <p>
            I studied various programming languages in Flatiron School as well as on my own. I have had a lot of fun getting to create different projects. I learned vanilla JavaScript, React, Ruby on Rails, and I am currently practicing data structures and algorithms using Python. I am always looking for the opporunity to work on projects. My portfolio site is built with React and please check out the projects I have built here!
        </p>
        <p>
            When I am not coding, I enjoy being outdoors, checking out new places to eat and hanging out with my two cats. I am also currently training for a half-marathon! 

            Want to learn more about me or work together on a project? Check out my resume or send me a message here!
        </p>
        
            </Grid.Column>
     
        </Grid.Row>
       
        <Image src={mySvg} id="faqimage" alt="FAQ" fluid/>


        </Container>

    </Grid>
    
  )
}

export default AboutMe