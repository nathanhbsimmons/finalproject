import React from 'react';

export function filterSelectedSite(event, index, sites) {
   
    if (index === 1 || event.target.id == 2) {
        const indexStreamFlow = 'USGS:08154700:00060:00000';
        const indexGaugeHeight = 'USGS:08154700:00065:00000';
        const displaySitesArr = []
        sites.map((obj, key) => {
            if (obj.name === indexStreamFlow || obj.name === indexGaugeHeight) {
              obj.sourceInfo.siteName = "Bull Creek @ Loop 360"
              displaySitesArr.push(obj)
            }
          });
          return displaySitesArr
        
      } else if (index === 2 || event.target.id == 3) {
        const indexStreamFlow = 'USGS:08155300:00060:00000';
        const indexGaugeHeight = 'USGS:08155300:00065:00000';
        const displaySitesArr = []
        sites.map((obj, key) => {
            if (obj.name === indexStreamFlow || obj.name === indexGaugeHeight) {
              obj.sourceInfo.siteName = "Gus Fruh (Greenbelt)"
              displaySitesArr.push(obj)
            }
          });
          return displaySitesArr
  
      } else if (index === 3 || event.target.id == 4) {
        const indexStreamFlow = 'USGS:08155240:00060:00000';
        const indexGaugeHeight = 'USGS:08155240:00065:00000';
        const displaySitesArr = []
        sites.map((obj, key) => {
            if (obj.name === indexStreamFlow || obj.name === indexGaugeHeight) {
              obj.sourceInfo.siteName = "Lost Creek (Greenbelt)"
              displaySitesArr.push(obj)
            }
          });
          return displaySitesArr
  
      } else if (index === 4 || event.target.id == 5) {
        const indexStreamFlow = 'USGS:08155400:00060:00000';
        const indexGaugeHeight = 'USGS:08155400:00065:00000';
        const displaySitesArr = []
        sites.map((obj, key) => {
            if (obj.name === indexStreamFlow || obj.name === indexGaugeHeight) {
              obj.sourceInfo.siteName = "Barton Springs (Upper)"
              displaySitesArr.push(obj)
            }
          });
          return displaySitesArr
  
      } else if (index === 5 || event.target.id == 6) {
        const indexStreamFlow = 'USGS:08153500:00060:00000';
        const indexGaugeHeight = 'USGS:08153500:00065:00000';
        const displaySitesArr = []
        sites.map((obj, key) => {
            if (obj.name === indexStreamFlow || obj.name === indexGaugeHeight) {
              obj.sourceInfo.siteName = "Pedernales Falls"
              displaySitesArr.push(obj)
            }
          });
          return displaySitesArr
  
      } else if (index === 6 || event.target.id == 7) {
        const indexStreamFlow = 'USGS:08158700:00060:00000';
        const indexGaugeHeight = 'USGS:08158700:00065:00000';
        const displaySitesArr = []
        sites.map((obj, key) => {
            if (obj.name === indexStreamFlow || obj.name === indexGaugeHeight) {
              obj.sourceInfo.siteName = "Camp Ben McCulloch"
              displaySitesArr.push(obj)
            }
          });
          return displaySitesArr
  
      } else if (index === 7 || event.target.id == 8) { 
        const indexStreamFlow = 'USGS:08170990:00060:00000';
        const indexGaugeHeight = 'USGS:08170990:00065:00000';
        const displaySitesArr = []
        sites.map((obj, key) => {
            if (obj.name === indexStreamFlow || obj.name === indexGaugeHeight) {
              obj.sourceInfo.siteName = "Jacob's Well"
              displaySitesArr.push(obj)
            }
          });
          return displaySitesArr
  
      } else if (index === 8 || event.target.id == 9) {
        const indexStreamFlow = 'USGS:08171000:00060:00000';
        const indexGaugeHeight = 'USGS:08171000:00065:00000';
        const displaySitesArr = []
        sites.map((obj, key) => {
            if (obj.name === indexStreamFlow || obj.name === indexGaugeHeight) {
              obj.sourceInfo.siteName = "Blue Hole"
              displaySitesArr.push(obj)
            }
          });
          return displaySitesArr
  
      }
}

