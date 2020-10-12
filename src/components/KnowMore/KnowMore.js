import React, { Component, Fragment } from 'react';
import Showcase3 from '../../containers/Showcase3/Showcase3';
import Spinner from '../../assets/Spinner/Spinner';
import axios from 'axios';

class KnowMore extends Component{
    state = {
        KnowMore: [],
        loaded: false,
    }
    componentDidMount(){
        axios.get('https://heyy-sector-30.firebaseio.com/knowMore.json')
             .then(response=>{
                 this.setState({
                     KnowMore: response.data,
                     loaded: true,
                 });
             })
             .catch(error=>{
                 alert(error);
                 return Promise.reject(error);
             })
    }
    render(){
        return(
            <Fragment>
                {this.state.loaded?<Showcase3 alerts about subObjects = {this.state.KnowMore} activeSub = {this.props.activeSub} />:<Spinner />}
            </Fragment>
        );
    }
}

export default KnowMore;



// {
//     subject: 'Sindhu Dham',
//     navImage: 'https://www.pngitem.com/pimgs/m/247-2475138_hindu-temple-logo-png-transparent-png.png',
//     about: {
//         aboutImage: 'https://content3.jdmagicbox.com/comp/gandhinagar-gujarat/h4/9999pxx79.xx79.191121025547.c9h4/catalogue/jhulelal-mandir-gandhinagar-gandhinagar-gujarat-temples-ssc0dp9p4p.jpg',
//         info: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for  will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).',
//     }
// }