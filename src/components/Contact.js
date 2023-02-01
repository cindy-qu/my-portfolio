import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Container, Form, Input, TextArea, Button, Modal, Icon, Header, Grid } from 'semantic-ui-react'
import mySvg from './undraw_new_message_re_fp03.svg'

const Contact = () => {

  const [open , setOpen] = useState(false)
  const [message , setMessage] = useState(false)
  const [messageNote , setMessageNote] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_aclhg7n', 'template_g7hllxw', e.target, 'GX_kR7xPVu4L_6qNn')
      .then((result) => {
          console.log(result.text);
          setMessage(true)
          setMessageNote(true)
      }, (error) => {
          console.log(error.text);
          setMessage(false)
          setMessageNote(false)
      });
  };

  const messageSent = message ? "Message Sent" : "Message Not Sent"
  const messageDescription = messageNote ? "Thank you for you message! I will reply as soon as possible!" : "Please make sure your email address, name, and message have been filled out!"

  return (
    <Container className="contact">

      <h1>Contact Me!</h1>
      <p>I would love to help develop custom websites or chat about any questions!  </p>
      <Grid stackable columns={2}>
        <Grid.Column id="contactform">
          <Form onSubmit={sendEmail}>
            <Form.Field
              id='form-input-control-email'
              control={Input}
              label='Email'
              name='user_email'
              placeholder='Email…'
              required
              icon='mail'
              iconPosition='left'
              autoComplete = 'off'
            />
            <Form.Field
              id='form-input-control-last-name'
              control={Input}
              label='Name'
              name='user_name'
              placeholder='Name…'
              required
              icon='user circle'
              iconPosition='left'
              autoComplete = 'off'
            />
            <Form.Field
              id='form-textarea-control-opinion'
              control={TextArea}
              label='Message'
              name='user_message'
              placeholder='Message…'
              required
              autoComplete = 'off'
            />
              <Modal
                closeIcon
                open = {open}
                trigger = {<Button type='submit' color='green' >Submit</Button>}
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}
                size='tiny'
                >
                <Header icon='info circle' content={messageSent} />
                <Modal.Content>
                  <p>
                    {messageDescription}
                  </p>
                </Modal.Content>

              </Modal>
            
          </Form>
        </Grid.Column>
        <Grid.Column id="socials">
          
          <img src={mySvg} alt="mail svg"></img>
                    <p>Find me on these online spaces too!</p>
                    <span>
                        <a href="https://github.com/cindy-qu">
                            <Icon link name='github' size='large'/>
                        </a>
                        <a href="https://www.linkedin.com/in/cindy-qu/">
                            <Icon link name='linkedin' size='large'/>
                        </a>
                        <a href="https://dev.to/cqq">
                            <Icon link name='sticky note' size='large'/>
                        </a>
                        
                    </span>
                    
                </Grid.Column>
    </Grid>
  </Container>
    
  );
}

export default Contact