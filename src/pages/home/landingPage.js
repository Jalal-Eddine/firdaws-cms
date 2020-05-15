import React, { Component } from 'react';

import FrNavBar from '../../components/firdaws/FrNavBar';
import FrHomeHeader from '../../components/firdaws/FrHomeHeader';
import Layout from '../../components/Layout'


class FirdawsHome extends Component {
  constructor() {
    super()
    this.state = {
      time: 'night'
    }
  }
  switchDayNight2=()=>{
    if(this.state.time==='night'){
      document.body.classList.toggle("firdawsDay");
      document.body.classList.toggle("firdawsNight");
      this.setState({time:'day'});
    } else if(this.state.time==='day'){
      document.body.classList.toggle("firdawsNight");
      document.body.classList.toggle("firdawsDay");
      this.setState({time:'night'});
    }
  }
  switchDayNight=()=>{
    if(this.state.time==='night'){
      document.body.classList.toggle("firdawsDay");
      document.body.classList.toggle("firdawsNight");
      this.setState({time:'day'});
    } else if(this.state.time==='day'){
      document.body.classList.toggle("firdawsNight");
      document.body.classList.toggle("firdawsDay");
      this.setState({time:'night'});
    }
}
    componentDidMount() {
      document.body.classList.toggle("firdaws");
      document.body.classList.toggle("firdawsNight");
    }
    componentWillUnmount() {
      document.body.classList.toggle("firdaws");
    }
    render() {
        return(
        <Layout>
            <FrNavBar Switch={this.switchDayNight}/>
            <FrHomeHeader/>
            {/* <FrFooter/> */}
        </Layout>
    );
    }
}

export default FirdawsHome;