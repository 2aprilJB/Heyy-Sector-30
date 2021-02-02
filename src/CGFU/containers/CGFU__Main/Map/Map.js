import React from 'react'
import { Map as LeafletMap, TileLayer, Polygon, Circle } from 'react-leaflet';
import axios from 'axios';
import Spinner from '../../../../assets/Spinner/Spinner';

class Map extends React.Component {
   state = {
      loading: true,
      error: false,
      mouseActiveSector: null,
      sectorPolyCoords:{},
      localityProps : {
         sector_1:{
            color: 'yellow',
            setColor: 'yellow',
            containmentCoords: [[ 23.230272, 72.644532 ], [23.230262, 72.647032], [23.229158, 72.643073],]
         },
         sector_2:{
            color: 'yellow',
            setColor: 'yellow',
            containmentCoords: [[ 23.230272, 72.644532 ], [23.230262, 72.647032], [23.229158, 72.643073],]
         },
         sector_3:{
            color: 'yellow',
            setColor: 'yellow',
            containmentCoords: [[ 23.230272, 72.644532 ], [23.230262, 72.647032], [23.229158, 72.643073],]
         },
         sector_4:{
            color: 'yellow',
            setColor: 'yellow',
            containmentCoords: [[ 23.230272, 72.644532 ], [23.230262, 72.647032], [23.229158, 72.643073],]
         },
         sector_5:{
            color: 'yellow',
            setColor: 'yellow',
            containmentCoords: [[ 23.230272, 72.644532 ], [23.230262, 72.647032], [23.229158, 72.643073],]
         },
         sector_6:{
            color: 'yellow',
            setColor: 'yellow',
            containmentCoords: [[ 23.230272, 72.644532 ], [23.230262, 72.647032], [23.229158, 72.643073],]
         },
         sector_7:{
            color: 'yellow',
            setColor: 'yellow',
            containmentCoords: [[ 23.230272, 72.644532 ], [23.230262, 72.647032], [23.229158, 72.643073],]
         },
         sector_8:{
            color: 'yellow',
            setColor: 'yellow',
            containmentCoords: [[ 23.230272, 72.644532 ], [23.230262, 72.647032], [23.229158, 72.643073],]
         },
         sector_9:{
            color: 'yellow',
            setColor: 'yellow',
            containmentCoords: [[ 23.230272, 72.644532 ], [23.230262, 72.647032], [23.229158, 72.643073],]
         },
         sector_10:{
            color: 'yellow',
            setColor: 'yellow',
            containmentCoords: [[ 23.230272, 72.644532 ], [23.230262, 72.647032], [23.229158, 72.643073],]
         },
         sector_11:{
            color: 'yellow',
            setColor: 'yellow',
            containmentCoords: [[ 23.230272, 72.644532 ], [23.230262, 72.647032], [23.229158, 72.643073],]
         },
         sector_12:{
            color: 'yellow',
            setColor: 'yellow',
            containmentCoords: [[ 23.230272, 72.644532 ], [23.230262, 72.647032], [23.229158, 72.643073],]
         },
         sector_13:{
            color: 'yellow',
            setColor: 'yellow',
            containmentCoords: [[ 23.230272, 72.644532 ], [23.230262, 72.647032], [23.229158, 72.643073],]
         },
         sector_14:{
            color: 'yellow',
            setColor: 'yellow',
            containmentCoords: [[ 23.230272, 72.644532 ], [23.230262, 72.647032], [23.229158, 72.643073],]
         },
         sector_15:{
            color: 'yellow',
            setColor: 'yellow',
            containmentCoords: [[ 23.230272, 72.644532 ], [23.230262, 72.647032], [23.229158, 72.643073],]
         },
         sector_16:{
            color: 'yellow',
            setColor: 'yellow',
            containmentCoords: [[ 23.230272, 72.644532 ], [23.230262, 72.647032], [23.229158, 72.643073],]
         },
         sector_17:{
            color: 'blue',
            setColor: 'blue',
            containmentCoords: [[ 23.230272, 72.644532 ], [23.230262, 72.647032], [23.229158, 72.643073],]
         },
         sector_18:{
            color: 'yellow',
            setColor: 'yellow',
            containmentCoords: [[ 23.230272, 72.644532 ], [23.230262, 72.647032], [23.229158, 72.643073],]
         },
         sector_19:{
            color: 'yellow',
            setColor: 'yellow',
            containmentCoords: [[ 23.230272, 72.644532 ], [23.230262, 72.647032], [23.229158, 72.643073],]
         },
         sector_20:{
            color: 'yellow',
            setColor: 'yellow',
            containmentCoords: [[ 23.230272, 72.644532 ], [23.230262, 72.647032], [23.229158, 72.643073],]
         },
         sector_21:{
            color: 'yellow',
            setColor: 'yellow',
            containmentCoords: [[ 23.230272, 72.644532 ], [23.230262, 72.647032], [23.229158, 72.643073],]
         },
         sector_22:{
            color: 'yellow',
            setColor: 'yellow',
            containmentCoords: [[ 23.230272, 72.644532 ], [23.230262, 72.647032], [23.229158, 72.643073],]
         },
         sector_23:{
            color: 'yellow',
            setColor: 'yellow',
            containmentCoords: [[ 23.230272, 72.644532 ], [23.230262, 72.647032], [23.229158, 72.643073],]
         },
         sector_24:{
            color: 'yellow',
            setColor: 'yellow',
            containmentCoords: [[ 23.230272, 72.644532 ], [23.230262, 72.647032], [23.229158, 72.643073],]
         },
         sector_25:{
            color: 'yellow',
            setColor: 'yellow',
            containmentCoords: [[ 23.230272, 72.644532 ], [23.230262, 72.647032], [23.229158, 72.643073],]
         },
         sector_26:{
            color: 'yellow',
            setColor: 'yellow',
            containmentCoords: [[ 23.230272, 72.644532 ], [23.230262, 72.647032], [23.229158, 72.643073],]
         },
         sector_27:{
            color: 'red',
            setColor: 'red',
            containmentCoords: [[ 23.230272, 72.644532 ], [23.230262, 72.647032], [23.229158, 72.643073],]
         },
         sector_28:{
            color: 'yellow',
            setColor: 'yellow',
            containmentCoords: [[ 23.230272, 72.644532 ], [23.230262, 72.647032], [23.229158, 72.643073],]
         },
         sector_29:{
            color: 'yellow',
            setColor: 'yellow',
            containmentCoords: [[ 23.230272, 72.644532 ], [23.230262, 72.647032], [23.229158, 72.643073],]
         },
         sector_30:{
            color: 'blue',
            setColor: 'red',
            containmentCoords: [[23.24511,72.64973],[23.24725,72.65103],[23.24926,72.65232],]
         },
      }
   }


  Mouseover = (sector)=>{
   let tempSectorColor = {};
     if(this.state.localityProps[sector]){
         tempSectorColor = {...this.state.localityProps};
         tempSectorColor[sector].color = 'transparent';
      }
      else
         tempSectorColor = {...this.state.localityProps,[sector]:{color:'transparent'}};
      this.setState({
         localityProps: tempSectorColor,
         mouseActiveSector: sector,
      });
  }

/*Once You Ensure complete locality enable it*/

  Mouseout = (sector)=>{
   let tempSectorColor = {};
     if(this.state.localityProps[sector]){
         tempSectorColor = {...this.state.localityProps};
         tempSectorColor[sector].color = this.state.localityProps[sector].setColor;
      }
      else
         tempSectorColor = {...this.state.localityProps,[sector]:{color:this.state.localityProps[sector].setColor}};
      this.setState({
         localityProps: tempSectorColor,
      });
   }

// 

   componentDidMount(){
      axios.get('https://react-my-burger-ecca4.firebaseio.com/sector_PolyCoords.json')
           .then(response=>{
              this.setState({
                 loading: false,
                 sectorPolyCoords: response.data,
               });
           })
           .catch(error=>{
              this.setState({
                 loading: false,
                 error: true,
              });
              console.log(error);
           })
   }
  render() {
     let currentSector = this.state.mouseActiveSector;
     let containmentCircles = null;
     if(currentSector){
         containmentCircles = this.state.localityProps[currentSector].containmentCoords.map(coord=>{
         return <Circle key = {coord+'contain'} center = {coord} radius = {100} color = 'red' />;
         });
      }
    return (this.state.loading ? <Spinner /> :
      <LeafletMap center={[23.235297, 72.669065]} zoom={13}>
        <TileLayer
          url='https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png'
        />
        {Object.keys(this.state.sectorPolyCoords).map(sector=>{
           
           let tempColor = null;
           if(this.state.localityProps[sector])
              tempColor = this.state.localityProps[sector].color;
            else tempColor = 'green';
           return <Polygon onclick = {()=>this.Mouseout(sector)} key = {sector + 'polygon'} onclick = {()=>this.Mouseover(sector)} positions = {this.state.sectorPolyCoords[sector]} color = '#e94560' fillColor = {tempColor} weight = "3" />
        })}
        {containmentCircles}
      </LeafletMap>
    );
  }
}

export default Map;