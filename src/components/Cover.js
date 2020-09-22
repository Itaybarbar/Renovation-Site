import React from 'react';
import './Cover.css';
import HomazzeButton from './HomazzeButton';

class Cover extends React.Component {

	render() {
		return(
			<div className="coverPic">
				<div className="projectButton">
					<HomazzeButton />
				</div>
			</div>
			
		)
	}
}

export default Cover;