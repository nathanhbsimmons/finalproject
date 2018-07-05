import {connect} from 'react-redux';
import Instructions from '../components/Instructions'

const mapStateToProps = state => ({ displaySite: state.displaySite })
       
export default connect(mapStateToProps)(Instructions);