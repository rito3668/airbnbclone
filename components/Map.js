import React, { useState } from 'react'
import ReactMapGl,{Marker,Popup} from 'react-map-gl'
// import Map from 'react-map-gl/dist/esm/components/map'
import { getCenter } from 'geolib'
function Map({searchResults}) {
    const coordinates=searchResults.map(result=>({
        longitude:result.long,
        latitude:result.lat
    }))
    const center=getCenter(coordinates)
    const [viewport,setViewPort]=useState({
        width:'100%',
        height:'100%',
        latitude:center.latitude,
        longitude:center.longitude,
        zoom:11
    })
  return (
        <ReactMapGl
        mapStyle='mapbox://styles/rito3668/clrxindaq00rq01r4cmio5qfn'
        mapboxAccessToken={process.env.mapbox_key}
        {...viewport}
        onDrag={(nextViewport)=>setViewPort(nextViewport)}
        onZoom={(nextViewport)=>setViewPort(nextViewport)}
    >
        {/* {searchResults.map(result=>(
            <div key={result.long}>
                <Marker
                    longitude={result.long}
                    latitude={result.lat}
                    offsetLeft={-20}
                    offsetTop={-10}
                >
                       <p>📌</p>
                </Marker>
            </div>
        ))} */}
    </ReactMapGl>
  )
}

export default Map