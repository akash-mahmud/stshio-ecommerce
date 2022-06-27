import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async';

export default function Login() {
  const [userInfo, setuserInfo] = useState({

  })
  const login = async(e:any) => {
  e.preventDefault()
console.log(userInfo);
}
  return (
    <>
     <Helmet>
        <title>Stshio Admin - Login</title>
  
   
      </Helmet>  
       <div className="page-header">
            <h3 className="page-title">
           
            </h3>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="/"></a></li>
                <li className="breadcrumb-item active" aria-current="page"></li>
                </ol>
            </nav>
          </div>
      <div className="row">
        
           <div className="col-md-12 grid-margin stretch-card">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Login</h4>
                  <p className="card-description">
                  
              </p>
              <div className="col-md-12">
                <div style={{
                  margin: '0 auto',
                  width:'50%'
                }}>
                  
                  <form method='POST' onSubmit={login} className="forms-sample">
                  
                    <div className="form-group">
                      <label htmlFor="myemail">Email address</label>
                      <input autoComplete="none" onChange={(e) => {
                        setuserInfo({
                          ...userInfo,
                          email: e.target.value
                        })
                      }} type="email" className="form-control" id="myemail" placeholder="Email"/>
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputPassword1">Password</label>
                      <input autoComplete="new-password" onChange={(e) => {
                        setuserInfo({
                          ...userInfo,
                          password: e.target.value
                        })
                      }} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                    </div>
              
                
                    <button type="submit" className="btn btn-primary mr-2">Submit</button>
                    <button type='reset' className="btn btn-light">Cancel</button>
                  </form>
              </div>
              </div>
                </div>
              </div>
            </div> 
           </div>
    </>
  )
}
