import React, { Component } from 'react';
import {Icon} from 'leaflet';
import { Map as LeafletMap, TileLayer, Polygon, Marker } from 'react-leaflet';
import axios from 'axios';
import Spinner from '../../../assets/Spinner/Spinner';
import ZoneIcons from '../../../assets/Zones/Zones';

class SectorMap extends Component{
    state = {
        zonalPolyCoords:{},
        loading: true,
    }
    componentDidMount(){
        axios.get('https://react-my-burger-ecca4.firebaseio.com/Heyy-Sector-30/Zones.json')
             .then(response=>{
                 this.setState({
                     zonalPolyCoords: response.data,
                     loading:false,
                 });
             })
             .catch(error=>{
                 console.log(error);
             });
    }

    render(){
        let zonalCoords = this.state.zonalPolyCoords;
        return(
            this.state.loading?<div style = {{width: '5rem'}}><Spinner/></div>:
            <LeafletMap attributionControl = {false} zoomControl = {false} style = {{borderRadius: "12px", zIndex: '1'}} center={[23.239755, 72.670940]} zoom={15.4}>
                <TileLayer url='https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png'/>
                {this.props.ZoneIcons?ZoneIcons.map(zone=>{
                    let iconic = new Icon({
                        iconUrl: zone.icon,
                        iconSize: [45,30]
                    });
                    return <Marker key = {zone.coordinate} position = {zone.coordinate} icon = {iconic}/>
                }):null}
                {Object.keys(zonalCoords).map(zone=>{
                    return <Polygon key = {zone} positions = {zonalCoords[zone]} color = 'magenta' fillColor = {'#ff7b54'} weight = "2"/>
                })}
            </LeafletMap>
        );
    }
}

export default SectorMap;