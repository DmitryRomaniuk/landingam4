// @flow

import React from 'react';
import injectSheet from 'react-jss';

import {STATIC_PATH} from '../../config';

const styles = {};

const Slider = ({classes}: { classes: Object }) =>
    <div className="slider">
        <input type="radio" name="slide_switch" id="id1-img-slider" />
        <img src={STATIC_PATH + "/img/slides/slide1.jpg"} alt="img" />
        <label htmlFor="id1-img-slider">
            <img src={STATIC_PATH + "/img/slides/slide1_s.jpg"} alt="img"/>
        </label>
        <input type="radio" name="slide_switch" id="id2-img-slider" />
        <label htmlFor="id2-img-slider">
            <img src={STATIC_PATH + "/img/slides/slide2_s.jpg"} alt="img"/>
        </label>
        <img src={STATIC_PATH + "/img/slides/slide2.jpg"} alt="img" />
        <input type="radio" name="slide_switch" id="id3-img-slider" />
        <label htmlFor="id3-img-slider">
            <img src={STATIC_PATH + "/img/slides/slide3_s.jpg"} alt="img"/>
        </label>
        <img src={STATIC_PATH + "/img/slides/slide3.jpg"} alt="img" />
        <input type="radio" name="slide_switch" id="id4-img-slider" />
        <label htmlFor="id4-img-slider">
            <img src={STATIC_PATH + "/img/slides/slide4_s.jpg"} alt="img"/>
        </label>
        <img src={STATIC_PATH + "/img/slides/slide4.jpg"} alt="img" />
        <input type="radio" name="slide_switch" id="id5-img-slider" />
        <label htmlFor="id5-img-slider">
            <img src={STATIC_PATH + "/img/slides/slide5_s.jpg"} alt="img"/>
        </label>
        <img src={STATIC_PATH + "/img/slides/slide5.jpg"} alt="img" />
        <div className="slide_preview_description" lang="la">
            <h3 className="slide_preview_description_title">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
            <p>
                Sed sit amet iaculis lacus. Proin a justo tincidunt dolor feugiat commodo. Donec egestas augue ut risus blandit, non ultricies turpis pretium. Cras ac faucibus purus.<br/>Fusce ut urna tempus odio scelerisque vehicula sed ut ante. Sed pellentesque
                lobortis blandit. Fusce scelerisque leo non tristique condimentum.
            </p>
        </div>
        <div className="decor_main_slide">
            <img src={STATIC_PATH + "/img/decor.png"} alt="decor main slide"/>
        </div>
    </div>;

export default injectSheet(styles)(Slider);
