import React,{Component} from 'react'
import {NavLink,Route,Switch} from 'react-router-dom'
import BScroll from 'better-scroll'

import CategoryHeader from '../../components/category-header/category-header'
import Childcategory from './childcategory/childcategory'

import './category.sass'

export default class Category extends Component{
  componentDidMount(){
    let scroll = new BScroll('.electro-wrapper')
  }
  render(){
    return (
      <div>
        <CategoryHeader></CategoryHeader>
        <div className='goods'>
          <div className='menu-wrapper' style={{height:'400px'}}>
            <ul>
              <li>
                <NavLink to='/category/mcommunication/11'>
                  <i className='iconfont icon-shouji'></i>
                  手机通讯
                </NavLink >
              </li>
              <li>
                <NavLink to='/category/mcommunication/1230'>
                  <i className='iconfont icon-diannao'></i>
                  电脑办公
                </NavLink >
              </li>
              <li>
                <NavLink to='/category/mcommunication/308'>
                  <i className='iconfont icon-icon_zhinengjiadian'></i>
                  智能家电
                </NavLink >
              </li>
              <li>
                <NavLink to='/category/mcommunication/1184'>
                  <i className='iconfont icon-xihumeizhuang'></i>
                  洗护美妆
                </NavLink >
              </li>
              <li>
                <NavLink to='/category/mcommunication/1197'>
                  <i className='iconfont icon-riyongbaihuo'></i>
                  日用百货
                </NavLink >
              </li>
              <li>
                <NavLink to='/category/mcommunication/1255'>
                  <i className='iconfont icon-cars'></i>
                  汽车用品
                </NavLink >
              </li>
              <li>
                <NavLink to='/category/mcommunication/1256'>
                  <i className='iconfont icon-babies'></i>
                  母婴用品
                </NavLink >
              </li>
              <li>
                <NavLink to='/category/mcommunication/1185'>
                  <i className='iconfont icon-jiushui'></i>
                  食品酒水
                </NavLink >
              </li>
            </ul>
          </div>
          <div className='electro-wrapper'>
            <ul className='content' style={{height:'1500px'}}>
              <li>
                  <Route path='/category/mcommunication/:id'  component={Childcategory}></Route>
              </li>
            </ul>

          </div>
        </div>
      </div>
    )
  }
}