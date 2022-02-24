import React from "react";
import Pagination from "../pagination";
import FetchData from '../hoc/fetchData';
import './style.css';


function Repositories({currentPosts,postsPerPage,totalPosts,paginate,currentPage}) {

  return (
    <div className="card-container">
      <div className="card text-center">
        <div className="card-header">Repositories</div>
        <div className="card-body">
          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th scope="col">S.no</th>
                <th scope="col">Repo Name</th>
                <th scope="col">Repo Type</th>
              </tr>
            </thead>
            <tbody>
              {currentPosts.map((val, i) => (
                <tr>
                  <th scope="row">{i + 1}</th>
                  <td>{val.name}</td>
                  <td>{val.type ? "Private" : "Public"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="card-footer text-muted">
        <Pagination
            postsPerPage={postsPerPage}
            totalPosts={totalPosts}
            paginate={paginate}
            currentPage={currentPage}
        />
        </div>
      </div>
    </div>
  );
}

export default FetchData(Repositories,{path:"repos"});