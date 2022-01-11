import React from 'react';

class AddForm extends React.Component{
    state={
        name:"",
        email:"",
    };

    add=(e) =>{
        e.preventDefault();
        if(this.state.name==="" || this.state.email === ""){
            alert("All the feilds are mandatory!!!");
            return;
        }
        this.props.addContactHandler(this.state);
        this.setState({name:"",email:""});
        console.log(this.state);
    };
    render(){
        return(
           <div className='ui main'>
              
               <form className='ui form' onSubmit={this.add}>
                   <div className='field'>
                       <label>Name</label>
                       value={this.state.name}
                       <input type="text" name="name" placeholder='Name'onChange={ (e) => this.setState({name: e.target.value})}/>
                   </div>
                     
                       <div className='field'>
                       <label>Email</label>
                       value={this.state.email}
                       <input type="text" name="email" placeholder='Email'onChange={ (e) => this.setState({email: e.target.value})}/>
                </div>
                <button className='ui button blue'>Submit</button>
               </form>
           </div>
        );


    };
}
export default AddForm;