import { setDisplaySiteFromMap } from '../actions';
import { connect } from 'react-redux';
import ClickMap from '../components/Map'


function mapDispatchToProps(dispatch){
    
    return {
        
      setDisplaySite:function(displaySite){
        var action = setDisplaySiteFromMap(displaySite);
        dispatch(action);
      },
      
    }
}

const mapStateToProps = state => ({ sites: state.sites })
  
export default connect(mapStateToProps,mapDispatchToProps)(ClickMap);