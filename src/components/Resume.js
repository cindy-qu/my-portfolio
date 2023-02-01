import React from 'react';
import { Container } from 'semantic-ui-react'

import resume from './Cindy Qu SE Resume.pdf';

const Resume = () => {
  return (
    <Container id="resume">
    <iframe src={`${resume}#view=fitH`}  title="resume" />
</Container>
  )
}

export default Resume