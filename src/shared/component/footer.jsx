// @flow

import React from 'react';
import { STATIC_PATH } from '../config';

const Footer = () =>
  <footer>
    <div className="container-fluid">
      <div className="row">
        <div className="offset-lg-1" />
        <div className="footer_description col-md-6 col-lg-4">
          <div className="row">
            <div className="running_icon" />
            <a className="twitter_icon" href="#"><i className="icon-twitter" /></a>
            <a className="facebook_icon" href="#"><i className="icon-facebook2" /></a>
            <a className="ball_icon" href="#"><i className="icon-dribbble" /></a>
            <a className="google_icon" href="#"><i className="icon-google2" /></a>
            <a className="linkedin_icon" href="#"><i className="icon-linkedin" /></a>
          </div>
          <div className="row footer_description_text_wrapper col-md-9">
            <h2 className="footer_description_header">Lorem ipsum.</h2>
            <p className="footer_description_text">Eu usu verear eruditi dolorem. Qui eu zril tibique fabellas. Ut eius neglegentur nec, ne dolore soluta eos, eu veri habemus urbanitas mea. Et quot adolescens vim. Est populo tractatos explicari ut, minim everti has id, ne quo aliquam officiis
                assueverit.
              </p>
          </div>
          <div className="footer_img_man" />
          <button type="button" className="btn btn-secondary footer_write_to_us_button">Написать нам</button>
        </div>
        <div className="offset-md-3 offset-lg-1" />
        <div className="footer_warning_copyright_wrapper col-md-3 col-lg-6 align-items-end">
          <div className="footer_18_warning">18+</div>
          <div className="footer_copyright">
            <span>Copyright &copy; 2001-2014<br />Все права защищены законодательством РФ. Использование материалов
      возможно только с прямой ссылкой на источник</span>
          </div>
        </div>
      </div>
    </div>
    <div className="footer_decor">
      <div className="footer_decor_redline" />
      <img src={STATIC_PATH + '/img/footer_decor.png'} className="footer_decor_mountans" alt="img" />
      <div className="footer_decor_blueline" />
    </div>
  </footer>;

export default Footer;
