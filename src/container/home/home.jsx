import React,{Component} from 'react'
import { WingBlank ,WhiteSpace,ListView} from 'antd-mobile';
import BScroll from 'better-scroll'


import Banner from '../../components/banner/banner'
import NctouchNavHome from '../../components/nctouch-nav-home/nctouch-nav-home'
import NctouchNavLayout from '../../components/nctouch-home-layout/nctouch-home-layout'
import './home.sass'

export default class Home extends Component{
  state={
    homeData:[],
    banners:[],
    layoutc:[],
    layoutd:[],
  }
  componentWillMount(){
    this.$http.get('http://www.51mkf.com/mobile/index.php?act=index').then(res=>{
      const result=res.data;
      console.log(result)
      if(result.code===200){
        this.setState({
          homeData:result.datas,
          banners:result.datas[0]['adv_list']['item'],
          layoutc:result.datas[2]['home3']['item'],
          layoutd:result.datas[3]['home3']['item']
        })
      }
    })
  }
  componentDidMount(){
    let scroll = new BScroll('.wrapper',{
      scrollY: true,
      click: true
    })
  }
  render(){
    const {banners,layoutc,layoutd}=this.state;
    return (
      <div>
        <div className='wrapper'>
          <ul className='content'>
            <li>
              <Banner banners={banners}></Banner>
            </li>
            <li>
              <div className='item-pic'>
                <a href="http://www.51mkf.com/wap/special_detail.html?special_id=170">
                  <img src="http://www.51mkf.com/data/upload/mobile/special/s0/s0_05905806944492058.gif" alt=""/>
                </a>
              </div>
            </li>
            <li>
              <NctouchNavHome></NctouchNavHome>
            </li>
            <li>
              <NctouchNavLayout layoutc={layoutc}
                                layoutd={layoutd}
              />
            </li>
          </ul>
        </div>
      </div>

    )
  }
}