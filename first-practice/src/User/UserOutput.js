import React from 'react';
import './User.css';

const userOutput = (props) => {
	return (
			<div>
			<p>Paragraph One</p>
			<p>Paragraph Two</p>
			</div>
/*		<div>
			<p onClick={props.click}>I'm {props.name} and I'm {props.age} years old!</p>
			<p>{props.children}</p>
			<input type="text" onChange={props.changed} value={props.name} />
		</div>*/
  )
};

export default userOutput;
