import React from 'react';
import ReactDOM from 'react-dom';
import './theme.css';
import matlab from './img/matlab.png';
import robotics from './img/robotics.jpg';
import judicial from './img/judicial_system.jpg';
import transportation from './img/transportation.jpg';


function ThemeType(props) {
    return (
        <div className="HackathonTheme">
            <div class="wrapper">

                <div class="cards_wrap">
                    <div class="card_item">
                        <div class="card_inner">
                            <img src={matlab}/><br/><br/>
                            {/* <div class="role_name">matlab</div> */}
                            <div class="role_name">Matlab </div>

                            
                            {/*<div class="film">The list of issues surrounding our environment go on.These environmental problems arise from conflicts between nature and humans. Develop a Solution to reduce Envirnmental problem.</div>*/}
                        </div>
                    </div>
                    <div class="card_item">
                        <div class="card_inner">
                            <img src={robotics} /><br/><br/>
                            {/* <div class="role_name">robotics and Wellness</div> */}
                            <div class="role_name">Robotics</div>

                            
                            {/*<div class="film">Have any ideas that don't fit into any of the categories above? Worry not. We encourage you to test your ideas and discover solutions to problems without any limitations.</div>*/}
                        </div>
                    </div>
                    <div class="card_item">
                        <div class="card_inner">
                            <img src={judicial} /><br/><br/>
                            <div class="role_name">Development</div>
                            
                           {/* <div class="film">Web 3.0 is the third generation of internet services for websites and apps that will focus on providing a data-driven and Semantic Web employing a machine-based understanding of data.</div>*/}
                        </div>
                    </div>
            
                 
                </div>
            </div>


        </div>
    );
}

export default ThemeType;