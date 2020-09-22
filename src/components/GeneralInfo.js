import React from 'react';
import './GeneralInfo.css';

class GeneralInfo extends React.Component {

render() {
    return (
        

  <section>

    <h1 className="font-weight-bold text-center pb-2">How Home Improvement Works</h1>

    <div className="row">

      <div className="col-md-6 col-xl-3 mb-4">
        <div className="card text-center text-black">
          <div className="card-body">
            <p className="mt-4 pt-2"><i className="fas fa-file-contract fa-4x"></i></p>
            <h5 className="font-weight-normal my-4 py-2">Defining the Scope of Work</h5>
            <p className="mb-4">He polite be object change. Consider no overcame yourself sociable children.</p>
          </div>
        </div>
      </div>

      <div className="col-md-6 col-xl-3 mb-4">
        <div className="card text-center">
          <div className="card-body">
            <p className="mt-4 pt-2"><i className="fas fa-wallet fa-4x black-text"></i></p>
            <h5 className="font-weight-normal my-4 py-2">Estimated Budget</h5>
            <p className="text-muted mb-4">He polite be object change. Consider no overcame yourself sociable children.</p>
          </div>
        </div>
      </div>

      <div className="col-md-6 col-xl-3 mb-4">
        <div className="card text-center lighten-1 text-black">
          <div className="card-body">
            <p className="mt-4 pt-2">
                <i className="fas fa-home fa-4x"></i>
                <i className="fas fa-tag fa-4x"></i>
                <i className="fas fa-dollar-sign fa-4x"></i>
            </p>
            <h5 className="font-weight-normal my-4 py-2">Quotes</h5>
            <p className="mb-4">He polite be object change. Consider no overcame yourself sociable children.</p>
          </div>
        </div>
      </div>

      <div className="col-md-6 col-xl-3">
        <div className="card text-center">
          <div className="card-body">
            <p className="mt-4 pt-2"><i className="fas fa-handshake fa-4x black-text"></i></p>
            <h5 className="font-weight-normal my-4 py-2">Find the One</h5>
            <p className="text-muted mb-4">He polite be object change. Consider no overcame yourself sociable children.</p>
          </div>
        </div>
      </div>

    </div>

  </section>


    );
}

}

export default GeneralInfo;