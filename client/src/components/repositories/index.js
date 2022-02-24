import React from "react";
import { isEmpty } from "lodash";
import moment from "moment";
import Pagination from "../pagination";
import FetchData from "../hoc/fetchData";
import "./style.css";

function Repositories({
  currentPosts,
  postsPerPage,
  totalPosts,
  paginate,
  currentPage,
}) {
  return (
    <div className="card-container">
      <div className="card text-center">
        <div className="card-header">Repositories</div>
        <div className="card-body">
          {!isEmpty(currentPosts) ? (
            <table className="table">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">Repo Name</th>
                  <th scope="col">Repo Type</th>
                  <th scope="col">Last Commit</th>
                </tr>
              </thead>
              <tbody>
                {currentPosts.map((val, i) => (
                  <tr>
                    <td>{val.name}</td>
                    <td>{val.type ? "Private" : "Public"}</td>
                    <td>{moment(val.pushed_at).format("DD/MM/YYYY")}</td>
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

export default FetchData(Repositories, { path: "repos" });
