export function setValue(value){
    return {
      type:"SET_VALUE",
      value: value
    }
  }
  
  export function setDisplaySite(displaySite){
    return {
      type:"SET_DISPLAY_SITE",
      value: displaySite
    }
  } 

  

  export function fetchSites(){
    return function (dispatch) {
      fetch(`https://waterservices.usgs.gov/nwis/iv/?stateCd=tx&format=json`)
      .then(res => res.json())
      .then(
        res => {
          const isCorrectSite = obj => {
            if (
              obj.name === 'USGS:08154700:00065:00000' ||
              obj.name === 'USGS:08154700:00060:00000' ||
              obj.name === 'USGS:08155240:00065:00000' ||
              obj.name === 'USGS:08155240:00060:00000' ||
              obj.name === 'USGS:08155300:00065:00000' ||
              obj.name === 'USGS:08155300:00060:00000' ||
              obj.name === 'USGS:08155400:00065:00000' ||
              obj.name === 'USGS:08155400:00060:00000' ||
              obj.name === 'USGS:08170990:00065:00000' ||
              obj.name === 'USGS:08170990:00060:00000' ||
              obj.name === 'USGS:08153500:00065:00000' ||
              obj.name === 'USGS:08153500:00060:00000' ||
              obj.name === 'USGS:08171000:00065:00000' ||
              obj.name === 'USGS:08171000:00060:00000' ||
              obj.name === 'USGS:08158700:00065:00000' ||
              obj.name === 'USGS:08158700:00060:00000'
            ) {
              return obj;
            }
          };
          const sites = res.value.timeSeries.filter(isCorrectSite);
          dispatch(sitesFetched(sites))
        }
      );
    }
  }

  export function sitesFetched(sites){
    console.log(sites)
    return {
      type:"SITES_FETCHED",
      value: sites
    }
  } 

  export function fetchWeather() {
    return function (dispatch) {
        
        fetch("https://query.yahooapis.com/v1/public/yql?q=select%20item.condition%20from%20weather.forecast%20where%20woeid%20%3D%202357536&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys")
        .then( (response) => {
          return response.json();
        }).then((data) => {
          dispatch(weatherFetched(data));
        });
  
    };
  }
  
  export function weatherFetched(data) {
    return {
      type: "WEATHER_FETCHED",
      value: data
    };
  }

