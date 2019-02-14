import React from 'react'
import { Container, Row, Col, Button } from 'reactstrap'
import CellDetail from './CellDetail'
import style from '../style/MovieDetail.css'

class MovieDetail extends CellDetail {
  
  render() {
    let data = this.state.detailData
    let title = data.title + ' (' + parseInt(data.release_date) + ')'
    document.documentElement.style.setProperty('--background-image', 'url(' + data.backdrop_path + ')')
    
    return (
      <div id='CellDetailDiv' className={style.banner}>
        <div className={style.bannerInfo}>
          <h1>
            {data.title}
          </h1>
          <div className={style.bannerInfoDetails}>
            <span className={style.green}>{data.vote_average * 10 + "% Match"}</span>
            <span>{parseInt(data.release_date)}</span>
            <span className={style.border}>R</span>
            <span>{data.runtime}</span>
            <br />
            <br />
            <p>
              {data.overview} 
            </p>
            <Button color="danger" size="lg">PLAY</Button>{' '}
          </div>
        </div>
        <div className={style.bannerImg}>
        </div>
        <div className={style.bannerTabs}>
          <button
            className={style.bannerTabsButtonActive}
          >
            OVERVIEW
          </button>
          <button className={style.bannerTabsButton}>
            WATCH
          </button>
          <button className={style.bannerTabsButton}>
            DETAILS
          </button>
        </div> 
      </div>
    )

  }
}

export default MovieDetail