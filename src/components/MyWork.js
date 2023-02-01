import { Container, Card, Image, Icon, Button } from "semantic-ui-react"

import { works } from "./Work"

const MyWork = () => {
  return (
    <Container style={{ margin: 50 }}>
        <Card.Group itemsPerRow={1}>
            {works.map((work) => {

                return (
                    <Card style={{ margin: 50 }} key = {work.id}>
                        <Image src = { work.demo_gif } />
                        <Card.Content>
                            <Card.Header>{ work.name }</Card.Header>
                            
                            
                            <Card.Description>{ work.description }</Card.Description>
                            <a href={work.github}><Icon size="big" name="github"></Icon></a>
                                {work.deployed?<Button color="green" id="demobutton">
                                    <a href={work.deployed} target="_blank" rel="noreferrer">Deployed Application</a>
                                </Button>:null}
                        </Card.Content>
                    </Card>
                )
            })}
        </Card.Group>
    </Container>
  )
}

export default MyWork