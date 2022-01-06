import React from 'react';

const sections = props => {
  return <sections id={props.id}>{props.children}</sections>;
};

export default sections;