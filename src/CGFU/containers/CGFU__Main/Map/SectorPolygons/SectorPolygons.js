import React, { Component } from 'react'
import {Polygon} from 'react-leaflet';

class SectPolygons extends Component{
    colorSetter = (color, property)=>{
            if(property<10)
                color = 'green';
            else if(property<50 && property>10)
                color = 'orange';
            else    
                color = 'black';    
        return color;        
    }
    state = {
        color: 'blue'
    }
    render(){
        let Polygons = Object.keys(this.props.sectorCoords)
            .map(sector=>{
                let tempColor = 'green';
                if(this.props.localityProps[sector]){
                    tempColor = this.colorSetter(tempColor,this.props.localityProps[sector].containment);
                }
                return <Polygon color = {this.state.color} key = {sector + 'Polygon'} weight = "1.5" positions = {this.props.sectorCoords[sector]}/>
                });
        Polygons.map(poly=>{
            console.log(poly);
        })
    return Polygons;
    }
}

export default SectPolygons;