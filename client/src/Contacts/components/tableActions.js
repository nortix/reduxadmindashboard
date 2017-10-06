import React, {Component} from 'react';
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

class Actions extends Component {

    static propTypes = {
        enterprise_id: PropTypes.number,
        contact_id: PropTypes.number,      
        onDelete: PropTypes.func.isRequired
    }

    /**
     * ID will be provided on the fly by Table component iterator
     */
    static defaultProps = {
        id: null
    };

    render() {
        return (
            <div className="actions">             
                <Link className="btn btn-circle btn-icon-only btn-default"
                    title="Interacciones"
                    to={"/empresas/"+ this.props.enterprise_id +"/contactos/"+ this.props.contact_id +"/interacciones"}>
                    <i className="fa fa-commenting"></i>
                </Link>
                <Link className="btn btn-circle btn-icon-only btn-default green"
                    to={"/empresas/"+this.props.enterprise_id+"/contactos/"+this.props.contact_id+"/edicion"}>
                    <i className="fa fa-pencil"></i>
                </Link>
                <button type="button" className="btn btn-circle btn-icon-only btn-default red" 
                        onClick={()=>{this.props.onDelete(this.props.contact_id)}}
                        title="Eliminar" >
                    <i className="fa fa-remove"></i>
                </button>            
            </div>
        )
    }
}

export default Actions