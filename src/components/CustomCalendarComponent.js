import React from 'react';
export default class CustomCalendarComponent extends React.Component{
    render() {
        return (
            <div>
                <input style={{width:"100%",color:"#307765", marginBottom:"0px",paddingBottom:"0px"}} 
                    onClick={this.props.onClick}
                    value={this.props.ipDate}
                    onChange={(e)=>this.props.handleIpChange(e.target.value)}
                    type="input"
                />
            </div>
          );
    }
}