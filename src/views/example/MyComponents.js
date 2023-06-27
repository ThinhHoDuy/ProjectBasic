import React from 'react';

class MyComponents extends React.Component {
    /*
    JSX cho phep ham JS tra ra html,chi tra ve 1 the html
    State du lieu co the bi thay doi ma khong can load lai web
    
    */
    
    state = {
        firstName: '',
        lastName:''
       
    }
    handleChangeFirstName = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }

    handleChangeLastName = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault()
        console.log('>>>check data input: ',this.state)
        // alert('click me')
    }
   
    render() {
        console.log('>>>call render: ', this.state)
        return (

            <>             
                <form>
                    <label htmlFor="fname">First name:</label><br/>
                    <input
                        type="text"
                        value={this.state.firstName}
                        onChange={(event)=>this.handleChangeFirstName(event)}
                    />
                    <br />
                    <label htmlFor="lname">Last name:</label><br/>
                    <input
                        type="text"
                        value={this.state.lastName}
                        onChange={(event)=>this.handleChangeLastName(event)}
                    />
                    <br />
                    <br />
                    <div>
                        Full name: {this.state.firstName} {this.state.lastName}
                    </div>
                    <input type="submit" value="Submit"
                    
                        onClick={(event) => this.handleSubmit(event)}
                        
                    />
                </form>
                
            </>
        )

    }

}
export default MyComponents;
