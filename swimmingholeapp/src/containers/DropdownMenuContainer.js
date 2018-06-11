import { setValue } from '../actions';
import { connect } from 'react-redux';


function mapDispatchToProps(dispatch){
    return {
        setValue:function(value){
        var action = setValue(value);
        dispatch(action);
      },
      
    }
}
  
export default connect(null,mapDispatchToProps)(DropdownMenu);