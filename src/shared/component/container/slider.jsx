// @flow

import React from 'react';
import injectSheet from 'react-jss';

import {STATIC_PATH} from '../../config';

const styles = {};

const Slider = ({classes}: { classes: Object }) =>
    <div className="slider">
        {[5, 4, 3, 2, 1].map(imgElem => (
            <div key={imgElem}>
                <input type="radio" name="slide_switch" id={"id" + imgElem + "-img-slider"}/>
                <img src={STATIC_PATH + "/img/slides/slide" + imgElem + ".jpg"} alt="img" data-img="full-img"
                     data-active = {(imgElem === 1)? "active":""}/>
                <label htmlFor={"id" + imgElem + "-img-slider"} data-imgId = {imgElem}>
                    <img src={STATIC_PATH + "/img/slides/slide" + imgElem + "_s.jpg"} alt="img"/>
                </label>
            </div>
        ))}
        <div className="slide_preview_description" lang="la">
            <h3 className="slide_preview_description_title">Lorem ipsum dolor sit amet, consectetur adipiscing
                elit.</h3>
            <p>
                Sed sit amet iaculis lacus. Proin a justo tincidunt dolor feugiat commodo. Donec egestas augue ut risus
                blandit, non ultricies turpis pretium. Cras ac faucibus purus.<br/>Fusce ut urna tempus odio scelerisque
                vehicula sed ut ante. Sed pellentesque
                lobortis blandit. Fusce scelerisque leo non tristique condimentum.
            </p>
        </div>
        <div className="decor_main_slide">
            <img src={STATIC_PATH + "/img/decor.png"} alt="decor main slide"/>
        </div>
    </div>;

export default injectSheet(styles)(Slider);
