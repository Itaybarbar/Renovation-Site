import React from 'react';
import './StartRenovation.css';

class StartRenovation extends React.Component {
    state={
        floors: 1
    }

    addition = () => {
       this.setState({floors: this.state.floors + 1})
    }

    subtraction = () => {
        if(this.state.floors > 1){
            this.setState({floors: this.state.floors - 1})
        }
     }

     floorsHead() {

     }

    render() {
        return (
            <div>
                <section>
                    <h2>Tell Us a Little About Your Property Type</h2>
                    <div id="home" className="about" >
                        <div>
                            <input type="radio" id="home_01" name="home_select" />
                            <label htmlFor="home_01">
                                <img alt="apartment_img" />
                                <h4>APARTMENT</h4>
                            </label>
                        </div>
                        <div>
                            <input type="radio" id="home_02" name="home_select" />
                            <label htmlFor="home_02">
                                <img alt="town_house_img" />
                                <h4>TOWN HOUSE</h4>
                            </label>
                        </div>
                        <div>
                            <input type="radio" id="home_03" name="home_select" />
                            <label htmlFor="home_03">
                                <img alt="house_img" />
                                <h4>HOUSE</h4>
                            </label>
                        </div>
                    </div>
                </section>

                <section>
                    <h2>How Old is Your Home?</h2>
                    <div id="houseAge" className="about" >
                        <div>
                            <input type="radio" id="age_01" name="age_select" />
                            <label htmlFor="age_01">
                                <img alt="before_1945_img" />
                                <h4>Before 1945</h4>
                            </label>
                        </div>
                        <div>
                            <input type="radio" id="age_02" name="age_select" />
                            <label htmlFor="age_02">
                                <img alt="1945-2000_img" />
                                <h4>1945-2000</h4>
                            </label>
                        </div>
                        <div>
                            <input type="radio" id="age_03" name="age_select" />
                            <label htmlFor="age_03">
                                <img alt="after_2000_img" />
                                <h4>After 2000</h4>
                            </label>
                        </div>
                        <div>
                            <input type="radio" id="age_04" name="age_select" />
                            <label htmlFor="age_04">
                                <img alt="after_2000_img" />
                                <h4>I'm Not Sure</h4>
                            </label>
                        </div>
                    </div>
                </section>

                <section id="floorSection">
                    <h2>How Many Floors In Your House?</h2>
                    <div id="floorsWrap" >
                        <div id="floors">{this.state.floors}</div>
                        <div onClick={this.addition}><i className="fas fa-plus"></i></div>
                        <div onClick={this.subtraction}><i className="fas fa-minus"></i></div>
                    </div> 
                </section>
            </div>
        );
    }
}

export default StartRenovation;