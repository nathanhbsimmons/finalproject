export function filterSelectedSite(event, index, sites) {
    console.log(event.target.title)
    if (index === 1 || event.target.title == "Bull Creek") {
        console.log("I'm in 1")
        const indexStreamFlow = 'USGS:08154700:00060:00000';
        const indexGaugeHeight = 'USGS:08154700:00065:00000';
        const displaySitesArr = []
        sites.map((obj, key) => {
            if (obj.name === indexStreamFlow || obj.name === indexGaugeHeight) {
              displaySitesArr.push(obj)
            }
          });
          return displaySitesArr
        
      } else if (index === 2 || event.target.title == "Gus Fruh") {
        const indexStreamFlow = 'USGS:08155300:00060:00000';
        const indexGaugeHeight = 'USGS:08155300:00065:00000';
        const displaySitesArr = []
        sites.map((obj, key) => {
            if (obj.name === indexStreamFlow || obj.name === indexGaugeHeight) {
              displaySitesArr.push(obj)
            }
          });
          return displaySitesArr
  
      } else if (index === 3 || event.target.title == "Lost Creek") {
        const indexStreamFlow = 'USGS:08155240:00060:00000';
        const indexGaugeHeight = 'USGS:08155240:00065:00000';
        const displaySitesArr = []
        sites.map((obj, key) => {
            if (obj.name === indexStreamFlow || obj.name === indexGaugeHeight) {
              displaySitesArr.push(obj)
            }
          });
          return displaySitesArr
  
      } else if (index === 4 || event.target.title == "Barton Springs") {
        const indexStreamFlow = 'USGS:08155400:00060:00000';
        const indexGaugeHeight = 'USGS:08155400:00065:00000';
        const displaySitesArr = []
        sites.map((obj, key) => {
            if (obj.name === indexStreamFlow || obj.name === indexGaugeHeight) {
              displaySitesArr.push(obj)
            }
          });
          return displaySitesArr
  
      } else if (index === 5 || event.target.title == "Pedernales Falls") {
        const indexStreamFlow = 'USGS:08153500:00060:00000';
        const indexGaugeHeight = 'USGS:08153500:00065:00000';
        const displaySitesArr = []
        sites.map((obj, key) => {
            if (obj.name === indexStreamFlow || obj.name === indexGaugeHeight) {
              displaySitesArr.push(obj)
            }
          });
          return displaySitesArr
  
      } else if (index === 6 || event.target.title == "Camp Ben McCulloch") {
        const indexStreamFlow = 'USGS:08158700:00060:00000';
        const indexGaugeHeight = 'USGS:08158700:00065:00000';
        const displaySitesArr = []
        sites.map((obj, key) => {
            if (obj.name === indexStreamFlow || obj.name === indexGaugeHeight) {
              displaySitesArr.push(obj)
            }
          });
          return displaySitesArr
  
      } else if (index === 7 || event.target.title == "Jacob's Well") { 
        const indexStreamFlow = 'USGS:08170990:00060:00000';
        const indexGaugeHeight = 'USGS:08170990:00065:00000';
        const displaySitesArr = []
        sites.map((obj, key) => {
            if (obj.name === indexStreamFlow || obj.name === indexGaugeHeight) {
              displaySitesArr.push(obj)
            }
          });
          return displaySitesArr
  
      } else if (index === 8 || event.target.title == "Blue Hole") {
        const indexStreamFlow = 'USGS:08171000:00060:00000';
        const indexGaugeHeight = 'USGS:08171000:00065:00000';
        const displaySitesArr = []
        sites.map((obj, key) => {
            if (obj.name === indexStreamFlow || obj.name === indexGaugeHeight) {
              displaySitesArr.push(obj)
            }
          });
          return displaySitesArr
  
      }
}