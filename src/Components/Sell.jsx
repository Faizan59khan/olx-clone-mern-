import React,{ Component } from 'react'
import '../App.css';
import axios from 'axios';



class Signup extends Component {

    constructor(){
        super();
        this.state={
            name:"",
            image:"",
            owner:"",           
           

        };
     
        this.subMit=this.subMit.bind(this);
        this.handleForm=this.handleForm.bind(this);
    }

handleForm(e){
  
    this.setState({
      
        [e.target.name] : e.target.files ? e.target.files[0]:e.target.value,
    })
  
}
subMit(e){
    
    e.preventDefault();
   console.log(this.state);
  /* const data =new FormData();
    data.append('email',this.state.femail);
   data.append('password',this.state.fpassword);
   data.append('name',this.state.fname);
   data.append('verifiedPassword',this.state.fverifiedPassword); */

  const data ={
       name:this.state.fname,
       email:this.state.femail,
       password:this.state.fpassword,
       verifiedPassword:this.state.fverifiedPassword,       
   }
   
  
    
   axios.post('http://localhost:5000/api/user-register',data)
   .then((response)=>{
       alert(response.data.msg);
   })
   .catch((error)=>{
      alert(`Error=> ${error.response.data.msg}`);
   })

   
}
 
  render(){
     
    return (
        <div className="Sign_UpContainer">
            <form className="Sign_UpForm">
                <label>Owner</label>
                <input type="text" placeholder="Enter your name" id="owner"
                  onChange={this.handleForm}/>

                <label>Product</label>
                <input type="file" placeholder="Upload" id="image"
                onChange={this.handleForm}/>

                <label>Product Name</label>
                <input type="text" placeholder="Enter Product Name" id="name"
                      onChange={this.handleForm}/>
               

                <button onClick={this.subMit}>Submit</button>
            </form>
        </div>
    )
  }
  }


export default Signup;
