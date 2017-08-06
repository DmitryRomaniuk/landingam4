// @flow

import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { trailersGetAsync } from '../../action/trailers';
import Trailer from '../trailer';


class Trailers extends React.Component {
    componentDidMount() {
        this.props.trailersGetAsync();
    }

    render() {
        return (<div className="trailers">
          <div className="trailers_left_decor" />
          <div className="container">
            <div className="trailer_main">
              <div className="chapter_header trailers_head">
                <div className="chapter_title trailers_title">
                  <span className="chapter_title_name trailers_title_name">Трейлеры</span>
                  <a className="chapter_title_all trailers_title_all" href="#">Весь&nbsp;каталог</a>
                </div>
                <div className="scroll-turn-preview">
                  <a
                    className="scroll-turn-preview-left" href="#carouselTrailerIndicators" role="button"
                    data-slide="prev"
                  />
                  <a
                    className="scroll-turn-preview-right" href="#carouselTrailerIndicators" role="button"
                    data-slide="next"
                  />
                </div>
              </div>
              <div className="trailer_blocks_preview_wrapper">
                <div id="carouselTrailerIndicators" className="carousel slide" data-ride="carousel">
                  <ol className="carousel-indicators">
                    <li data-target="#carouselTrailerIndicators" data-slide-to="0" className="active" />
                    <li data-target="#carouselTrailerIndicators" data-slide-to="1" />
                    <li data-target="#carouselTrailerIndicators" data-slide-to="2" />
                    <li data-target="#carouselTrailerIndicators" data-slide-to="3" />
                    <li data-target="#carouselTrailerIndicators" data-slide-to="4" />
                  </ol>
                  <div className="carousel-inner" role="listbox">
                    <div className="carousel-item active">
                      <div className="container">
                        <div className="row justify-content-center">
                          {this.props.trailers.map((elem) => {
                              const trailer = Object.assign({}, elem);
                                // eslint-disable-next-line no-underscore-dangle
                              delete trailer._id;
                              return (<Trailer
                                key={trailer.title}
                                title={trailer.title}
                                genre={trailer.genre}
                                imgUrl={trailer.imgUrl}
                              />);
                          })}
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <div className="container">
                        <div className="row justify-content-center">
                          {this.props.trailers.map((elem) => {
                              const trailer = Object.assign({}, elem);
                                // eslint-disable-next-line no-underscore-dangle
                              delete trailer._id;
                              return (<Trailer
                                key={trailer.title}
                                title={trailer.title}
                                genre={trailer.genre}
                                imgUrl={trailer.imgUrl}
                              />);
                          })}
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <div className="container">
                        <div className="row justify-content-center">
                          {this.props.trailers.map((elem) => {
                              const trailer = Object.assign({}, elem);
                                // eslint-disable-next-line no-underscore-dangle
                              delete trailer._id;
                              return (<Trailer
                                key={trailer.title}
                                title={trailer.title}
                                genre={trailer.genre}
                                imgUrl={trailer.imgUrl}
                              />);
                          })}
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <div className="container">
                        <div className="row justify-content-center">
                          {this.props.trailers.map((elem) => {
                              const trailer = Object.assign({}, elem);
                                // eslint-disable-next-line no-underscore-dangle
                              delete trailer._id;
                              return (<Trailer
                                key={trailer.title}
                                title={trailer.title}
                                genre={trailer.genre}
                                imgUrl={trailer.imgUrl}
                              />);
                          })}
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <div className="container">
                        <div className="row justify-content-center">
                          {this.props.trailers.map((elem) => {
                              const trailer = Object.assign({}, elem);
                                // eslint-disable-next-line no-underscore-dangle
                              delete trailer._id;
                              return (<Trailer
                                key={trailer.title}
                                title={trailer.title}
                                genre={trailer.genre}
                                imgUrl={trailer.imgUrl}
                              />);
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>);
    }
}


Trailers.propTypes = {
    // eslint-disable-next-line react/require-default-props
    trailersGetAsync: PropTypes.func,
    trailers: PropTypes.any,
};

Trailers.defaultProps = {
    trailers: [
        {
            title: '',
            genre: ['', ''],
            imgUrl: '',
        },
    ],
};


const mapStateToProps = state => ({
    trailers: state.trailers.get('listTrailers').toJS(),
});

export default connect(mapStateToProps, { trailersGetAsync })(Trailers);
