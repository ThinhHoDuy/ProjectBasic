import React from 'react';

class ChildComponent extends React.Component {
    /*
    JSX cho phep ham JS tra ra html,chi tra ve 1 the html
    State du lieu co the bi thay doi ma khong can load lai web
    
    */
    state = {
        showJobs: false
    }

    handleShowHide = () => {
        this.setState({
            showJobs: !this.state.showJobs
        })
    }
   
    render() {
        console.log('>>>call render: ', this.props)
        let { arrJobs } = this.props;
        let { showJobs } = this.state;

        return (

            <>
                {showJobs === false &&
                    <div>
                        <button onClick={() => this.handleShowHide()}> Show </button>
                    </div >}
                {showJobs && 
                    <>
                    <div className="job-List">
                        <div style={{color:'Red'}}>
                            Here is an example: 
                        </div>
                    {
                        arrJobs.map((item, index) => {
                            return (
                                <div key={item.id}>
                                    {item.title} - {item.salary} $ 
                                </div>
                    
                            )
                        })
                    }

                </div>
                    <div>
                        <button onClick={() => this.handleShowHide()}> Hide </button>
                    </div>
                    </>
                }
            </>
        )
    }
}
    // const ChildComponent = (props) => {

    //         let { arrJobs } = props;
    //         return (

    //             <>
    //                 <div className="job-List">
    //                     {
    //                         arrJobs.map((item, index) => {
    //                             return (
    //                                 <div key={item.id}>
    //                                     {item.title} - {item.salary}
    //                                 </div>
                    
    //                         )
    //                         })
    //                     }

    //                 </div>
                
    //             </>
    //         )
    // }

export default ChildComponent;
