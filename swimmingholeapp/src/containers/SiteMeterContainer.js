import {connect} from 'react-redux';
import SiteMeter from '../components/SiteMeter'

const mapStateToProps = state => ({ displaySite: state.displaySite })
       
export default connect(mapStateToProps)(SiteMeter);