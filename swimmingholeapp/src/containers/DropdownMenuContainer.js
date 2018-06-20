import { setValue, setDisplaySiteFromDropdown } from '../actions';
import { connect } from 'react-redux';
import DropdownMenu from '../components/DropdownMenu'


function mapDispatchToProps(dispatch){
    return {
        setValue:function(value){
        var action = setValue(value);
        dispatch(action);
      },
      setDisplaySite:function(index){
        var action = setDisplaySiteFromDropdown(index);
        dispatch(action);
      },
      
    }
}

const mapStateToProps = state => ({ value: state.value, sites: state.sites })
  
export default connect(mapStateToProps,mapDispatchToProps)(DropdownMenu);