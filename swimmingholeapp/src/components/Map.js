import React, { Component } from 'react';
import map from '../img/mapZoom.png'
import '../App.css';
import {filterSelectedSite} from '../Scripts';
import ImageMap from 'image-map'




class ClickMap extends Component {
    
        componentDidMount(){
            ImageMap('img[usemap]')
        }
  
        render(props){
            return (
                <span className="mapDiv">
                    <img className="mapImage" src={map} alt="" useMap="#image-map" id="map-image" />
                   
                    <map name="image-map" >
                        <area onClick={(event)=>{this.props.setValue(Number(event.target.id)); this.props.setDisplaySite(filterSelectedSite(event, null, this.props.sites))}} alt="" id="6" title="Pedernales Falls"  href="#" shape="circle"   coords="30, 68, 14" />
                        <area onClick={(event)=>{this.props.setValue(Number(event.target.id)); this.props.setDisplaySite(filterSelectedSite(event, null, this.props.sites))}} alt="" id="2" title="Bull Creek" href="#" shape="circle" coords="383, 31, 14" />
                        <area onClick={(event)=>{this.props.setValue(Number(event.target.id)); this.props.setDisplaySite(filterSelectedSite(event, null, this.props.sites))}} alt="" id="4" title="Lost Creek" href="#" shape="circle" coords="329, 124, 16" />
                        <area onClick={(event)=>{this.props.setValue(Number(event.target.id)); this.props.setDisplaySite(filterSelectedSite(event, null, this.props.sites))}} alt="" id="5" title="Barton Springs" href="#" shape="circle" coords="380, 132, 14" />
                        <area onClick={(event)=>{this.props.setValue(Number(event.target.id)); this.props.setDisplaySite(filterSelectedSite(event, null, this.props.sites))}} alt="" id="3" title="Gus Fruh" href="#" shape="circle" coords="361, 148, 14" />
                        <area onClick={(event)=>{this.props.setValue(Number(event.target.id)); this.props.setDisplaySite(filterSelectedSite(event, null, this.props.sites))}} alt="" id="7" title="Camp Ben McCulloch" href="#" shape="circle" coords="205, 247, 16" />
                        <area onClick={(event)=>{this.props.setValue(Number(event.target.id)); this.props.setDisplaySite(filterSelectedSite(event, null, this.props.sites))}} alt="" id="8" title="Jacob's Well" href="#" shape="circle" coords="124, 325, 14"  />
                        <area onClick={(event)=>{this.props.setValue(Number(event.target.id)); this.props.setDisplaySite(filterSelectedSite(event, null, this.props.sites))}} alt="" id="9" title="Blue Hole" href="#" shape="circle" coords="150, 351, 15" />
                    </map>
                    
                </span>

            );
        }
        
    }



export default ClickMap

