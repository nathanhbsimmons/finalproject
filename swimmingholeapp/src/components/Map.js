import React, { Component } from 'react';
import map from '../img/mapPicture.png'
import '../App.css';
import {filterSelectedSite} from '../Scripts';
import ImageMap from 'image-map'



class ClickMap extends Component {
    
        componentDidMount(){
            ImageMap('img[usemap]')
        }
  
        render(props){
            return (
                <div>
                    <img className="mapImage" src={map} alt="" useMap="#image-map" />
                    <map name="image-map" id="Map">
                        <area onClick={(event)=>{this.props.setValue(Number(event.target.id)); this.props.setDisplaySite(filterSelectedSite(event, null, this.props.sites))}} alt="" id="6" title="Pedernales Falls"  href="#" shape="poly" coords="77,155,76,188,116,187,112,155" />
                        <area onClick={(event)=>{this.props.setValue(Number(event.target.id)); this.props.setDisplaySite(filterSelectedSite(event, null, this.props.sites))}} alt="" id="2" title="Bull Creek" href="#" shape="poly" coords="784,79,785,118,820,117,817,80" />
                        <area onClick={(event)=>{this.props.setValue(Number(event.target.id)); this.props.setDisplaySite(filterSelectedSite(event, null, this.props.sites))}} alt="" id="4" title="Lost Creek" href="#" shape="poly" coords="676,267,678,303,712,304,711,267" />
                        <area onClick={(event)=>{this.props.setValue(Number(event.target.id)); this.props.setDisplaySite(filterSelectedSite(event, null, this.props.sites))}} alt="" id="5" title="Barton Springs" href="#" shape="poly" coords="778,285,781,317,812,317,812,284" />
                        <area onClick={(event)=>{this.props.setValue(Number(event.target.id)); this.props.setDisplaySite(filterSelectedSite(event, null, this.props.sites))}} alt="" id="3" title="Gus Fruh" href="#" shape="poly" coords="743,315,744,352,775,350,772,316" />
                        <area onClick={(event)=>{this.props.setValue(Number(event.target.id)); this.props.setDisplaySite(filterSelectedSite(event, null, this.props.sites))}} alt="" id="7" title="Camp Ben McCulloch" href="#" shape="poly" coords="429,510,431,550,463,550,463,511" />
                        <area onClick={(event)=>{this.props.setValue(Number(event.target.id)); this.props.setDisplaySite(filterSelectedSite(event, null, this.props.sites))}} alt="" id="8" title="Jacob's Well" href="#" shape="poly" coords="269,670,272,706,302,706,298,669" />
                        <area onClick={(event)=>{this.props.setValue(Number(event.target.id)); this.props.setDisplaySite(filterSelectedSite(event, null, this.props.sites))}} alt="" id="9" title="Blue Hole" href="#" shape="poly" coords="322,720,324,759,352,760,354,724" />
                    </map>
                </div>
            );
        }
        
    }



export default ClickMap

