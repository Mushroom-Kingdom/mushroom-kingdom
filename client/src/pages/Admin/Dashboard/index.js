import React, { useContext } from "react";
import {Link} from "react-router-dom";
import AuthenticationContext from "../../../contexts/AuthenticationContext";

function AdminDashboard() {
  const auth = useContext(AuthenticationContext);

  return (
    <section className="dashboard">
      <nav className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0">
        <h2 className="navbar-brand col-sm-3 col-md-2 mr-0">Mushroom-Kingdom</h2>
        <input className="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search" />
        <ul className="navbar-nav px-3">
          <li className="nav-item text-nowrap">
            <button className="btn btn-dark" onClick={auth.logout}>Sign out</button>
          </li>
        </ul>
      </nav>

    <div className="container-fluid">
      <div className="row">
        <nav className="col-md-2 d-none d-md-block bg-light sidebar">
          <div className="sidebar-sticky">
            <ul className="nav flex-column">
              <li className="nav-item">
                <Link to="/admin/dashboard" className="nav-link"><i className="fas fa-home"></i> Dashboard</Link>               
              </li>
              <li className="nav-item">
                <Link to="/admin/orders" className="nav-link"><i className="fas fa-file"></i> Orders</Link>               
              </li>
              <li className="nav-item">
                <Link to="/admin/products" className="nav-link"><i className="fas fa-box"></i> Products</Link>                
              </li>             
            </ul>

            {/* <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
              <span>Saved reports</span>
              <a className="d-flex align-items-center text-muted" href="#">
                <span data-feather="plus-circle"></span>
              </a>
            </h6>
            <ul className="nav flex-column mb-2">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <span data-feather="file-text"></span>
                  Current month
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <span data-feather="file-text"></span>
                  Last quarter
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <span data-feather="file-text"></span>
                  Social engagement
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <span data-feather="file-text"></span>
                  Year-end sale
                </a>
              </li>
            </ul> */}
          </div>
        </nav>

        <main role="main" className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
          <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
            <h1 className="h2">Dashboard</h1> 
          </div>   
         
          <h1><i className="fas fa-tools"></i> Under Construction</h1>

        </main>
      </div>
    </div>      
    </section>
  );
}

export default AdminDashboard;
