// @flow

import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { gamesGetAsync } from '../../action/games';
import Game from '../game';


class Games extends React.Component {
    componentDidMount() {
        this.props.gamesGetAsync();
    }

    render() {
        return (<div className="games">
          <div className="games_left_decor" />
          <div className="container">
            <div className="game_main">
              <div className="chapter_header games_head">
                <div className="chapter_title games_title">
                  <h2 className="chapter_title_name games_title_name">Игры</h2>
                  <a className="chapter_title_all games_title_all" href="#">Весь&nbsp;каталог</a>
                </div>
                <div className="scroll-turn-preview">
                  <a
                    className="scroll-turn-preview-left" href="#carouselGamesIndicators" role="button"
                    data-slide="prev"
                  />
                  <a
                    className="scroll-turn-preview-right" href="#carouselGamesIndicators" role="button"
                    data-slide="next"
                  />
                </div>
              </div>
              <div className="game_block_preview_wrapper">
                <div id="carouselGamesIndicators" className="carousel slide" data-ride="carousel">
                  <ol className="carousel-indicators">
                    <li data-target="#carouselGamesIndicators" data-slide-to="0" className="active" />
                    <li data-target="#carouselGamesIndicators" data-slide-to="1" />
                    <li data-target="#carouselGamesIndicators" data-slide-to="2" />
                    <li data-target="#carouselGamesIndicators" data-slide-to="3" />
                    <li data-target="#carouselGamesIndicators" data-slide-to="4" />
                  </ol>
                  <div className="carousel-inner" role="listbox">
                    <div className="carousel-item active">
                      <div className="container row">
                        {this.props.games.map((elem) => {
                            const game = Object.assign({}, elem);
                              // eslint-disable-next-line no-underscore-dangle
                            delete game._id;
                            return (<Game
                              key={game.title}
                              title={game.title}
                              description={game.description}
                              imgUrl={game.imgUrl}
                              platforms={game.platforms}
                              likes={game.likes}
                              comments={game.comments}
                              rating={game.rating}
                            />);
                        })}
                      </div>
                    </div>
                    <div className="carousel-item">
                      <div className="container row">
                        {this.props.games.map((elem) => {
                            const game = Object.assign({}, elem);
                              // eslint-disable-next-line no-underscore-dangle
                            delete game._id;
                            return (<Game
                              key={game.title}
                              title={game.title}
                              description={game.description}
                              imgUrl={game.imgUrl}
                              platforms={game.platforms}
                              likes={game.likes}
                              comments={game.comments}
                              rating={game.rating}
                            />);
                        })}
                      </div>
                    </div>
                    <div className="carousel-item">
                      <div className="container row">
                        {this.props.games.map((elem) => {
                            const game = Object.assign({}, elem);
                              // eslint-disable-next-line no-underscore-dangle
                            delete game._id;
                            return (<Game
                              key={game.title}
                              title={game.title}
                              description={game.description}
                              imgUrl={game.imgUrl}
                              platforms={game.platforms}
                              likes={game.likes}
                              comments={game.comments}
                              rating={game.rating}
                            />);
                        })}
                      </div>
                    </div>
                    <div className="carousel-item">
                      <div className="container row">
                        {this.props.games.map((elem) => {
                            const game = Object.assign({}, elem);
                              // eslint-disable-next-line no-underscore-dangle
                            delete game._id;
                            return (<Game
                              key={game.title}
                              title={game.title}
                              description={game.description}
                              imgUrl={game.imgUrl}
                              platforms={game.platforms}
                              likes={game.likes}
                              comments={game.comments}
                              rating={game.rating}
                            />);
                        })}
                      </div>
                    </div>
                    <div className="carousel-item">
                      <div className="container row">
                        {this.props.games.map((elem) => {
                            const game = Object.assign({}, elem);
                              // eslint-disable-next-line no-underscore-dangle
                            delete game._id;
                            return (<Game
                              key={game.title}
                              title={game.title}
                              description={game.description}
                              imgUrl={game.imgUrl}
                              platforms={game.platforms}
                              likes={game.likes}
                              comments={game.comments}
                              rating={game.rating}
                            />);
                        })}
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


Games.propTypes = {
    // eslint-disable-next-line react/require-default-props
    gamesGetAsync: PropTypes.func,
    games: PropTypes.any,
};

Games.defaultProps = {
    games: [
        {
            title: '',
            description: '',
            imgUrl: '',
            platforms: ['', '', ''],
            likes: 0,
            comments: 0,
            rating: 0,
        },
    ],
};


const mapStateToProps = state => ({
    games: state.games.get('listGames').toJS(),
});

export default connect(mapStateToProps, { gamesGetAsync })(Games);
