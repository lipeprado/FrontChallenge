import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import LazyLoad from 'react-lazyload';
import { CSSTransitionGroup } from 'react-transition-group';
import * as loadActions from '../../actions/loadActions';
import styles from './main.scss';

class MainContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      loading: true,
    }; 
    this.loadComics = this.loadComics.bind(this);     
  }
  
  componentDidMount(){   
    this.loadComics();
  }

  loadComics(){
    this.props.actions.loadComics(this.state.loading);
  }

  
  render() {
    let { comics, loading } = this.props;    
    let quadrinhos = comics.map(comic => {
      return (
        <div key={comic.id} className={styles.card}>         
          <LazyLoad height={450} offset={300} once>
            <img src={comic.thumbnail.path + "/portrait_uncanny." + comic.thumbnail.extension} className={styles.card__image}/> 
          </LazyLoad>
          <a href={comic.events.collectionURI} target="_blank" className={styles.card__link}>Ver Agora</a>          
          <h3 className={styles.card__title}>{comic.title}</h3>
        </div>
      );
    });
    
    return (
      <div className={styles.mainContainer}>
        {!loading ? <p>Carregando...</p> : quadrinhos}
      </div>
    );
  }
}

MainContainer.propTypes = {
  comics: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  actions: PropTypes.object.isRequired,
};

function mapStateToProps(state, ownProps) {
  console.log('MSTP', state);
  
  return {
    comics: state.comics.dataComics || [],
    loading: state.comics.loading,
  };
}

function mapDispatchToProps(dispatch) {
  
  return {
    actions: bindActionCreators(loadActions, dispatch)
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);