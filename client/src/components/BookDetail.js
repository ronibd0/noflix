import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import CellDetail from './CellDetail'
import style from '../style/BookDetail.css'

class BookDetail extends CellDetail {
  //TODO
  render() {
    let data = this.state.detailData
    let title = data.title + ' (' + parseInt(data.published_date) + ')'
    //document.documentElement.style.setProperty('--background-image', 'url(' + data.backdrop_path + ')')
    
    return (
      <div id='CellDetailDiv' className={style.cellDetailDiv}>
        <li id='CellDetail' key='CellDetail' className={style.cellDetail}>
          <div id='CellDetail_left'className={style.cellDetailLeft}>
            <a id='CellDetailImageLink' className={style.imageLink}>
              <img id='CellDetailImage' className={style.cellDetailImage} src={data.thumbnail}/>
            </a>
          </div>
          <div id='CellDetail_right' className={style.cellDetailRight}>
            <div id='CellDetail_close' className={style.cellDetailClose} onClick={this.closeCellDetail.bind(this)}>&#10006;</div>
            
            <div id='CellDetailTitle' className={style.cellDetailTitle}> {title} </div>
            <div id='CellDetailDescription' className={style.cellDetailDescription}> {data.description}</div>
          </div>
        </li>
      </div>
    )

  }
}

export default BookDetail