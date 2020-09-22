import React from 'react';
import Cover from './Cover';
import GeneralInfo from './GeneralInfo';

class Home extends React.Component {
    render() {
        return (
            <div>
				<Cover />
				<GeneralInfo />
			</div>
        )
    }

}

export default Home;