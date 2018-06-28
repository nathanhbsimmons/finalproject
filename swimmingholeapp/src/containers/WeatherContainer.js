import {connect} from 'react-redux';
import Weather from '../components/Weather'

const mapStateToProps = state => ({ weather: state.weather })
       
export default connect(mapStateToProps)(Weather);