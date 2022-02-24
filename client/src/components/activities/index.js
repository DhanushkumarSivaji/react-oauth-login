import React from "react";
import Pagination from "../pagination";
import FetchData from '../hoc/fetchData';


function Activities({currentPosts,postsPerPage,totalPosts,paginate,currentPage}) {
  return (
    <div className="card-container">
      <div className="card text-center">
        <div className="card-header">Activities</div>
        <div className="card-body">
          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th scope="col">S.no</th>
                <th scope="col">Repo Name</th>
                <th scope="col">Event Type</th>
              </tr>
            </thead>
            <tbody>
              {currentPosts.map((val, i) => (
                <tr>
                  <th scope="row">{i + 1}</th>
                  <td>{val.repo.name.split("/")[1]}</td>
                  <td>{val.type}</td>
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

export default FetchData(Activities,{path:"events"});