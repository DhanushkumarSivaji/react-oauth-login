import React from "react";
import { isEmpty } from "lodash";
import moment from "moment";
import Pagination from "../pagination";
import FetchData from "../hoc/fetchData";

function Activities({
  currentPosts,
  postsPerPage,
  totalPosts,
  paginate,
  currentPage,
}) {
  return (
    <div className="card-container">
      <div className="card text-center">
        <div className="card-header">Recent Activities</div>
        <div className="card-body">
          {console.log("currentPosts",currentPosts)}
          {!isEmpty(currentPosts) ? (
            <table className="table">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">Repo Name</th>
                  <th scope="col">Event Type</th>
                  <th scope="col">Created At</th>
                </tr>
              </thead>
              <tbody>
                {currentPosts.map((val, i) => (
                  <tr>
                    <td>{val.repo.name.split("/")[1]}</td>
                    <td>{val.type}</td>
                    <td>{moment(val.created_at).format("DD/MM/YYYY")}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div class="d-flex justify-content-center">
              <div class="spinner-border" role="status"></div>
            </div>
          )}
        </div>
        {!isEmpty(currentPosts) && (
          <div className="card-footer text-muted">
            <Pagination
              postsPerPage={postsPerPage}
              totalPosts={totalPosts}
              paginate={paginate}
              currentPage={currentPage}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default FetchData(Activities, { path: "events" });
