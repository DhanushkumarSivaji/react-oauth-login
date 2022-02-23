import React from "react";
import './style.css';

const data = {
  "login": "DhanushkumarSivaji",
  "id": 36889650,
  "node_id": "MDQ6VXNlcjM2ODg5NjUw",
  "avatar_url": "https://avatars.githubusercontent.com/u/36889650?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/DhanushkumarSivaji",
  "html_url": "https://github.com/DhanushkumarSivaji",
  "followers_url": "https://api.github.com/users/DhanushkumarSivaji/followers",
  "following_url": "https://api.github.com/users/DhanushkumarSivaji/following{/other_user}",
  "gists_url": "https://api.github.com/users/DhanushkumarSivaji/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/DhanushkumarSivaji/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/DhanushkumarSivaji/subscriptions",
  "organizations_url": "https://api.github.com/users/DhanushkumarSivaji/orgs",
  "repos_url": "https://api.github.com/users/DhanushkumarSivaji/repos",
  "events_url": "https://api.github.com/users/DhanushkumarSivaji/events{/privacy}",
  "received_events_url": "https://api.github.com/users/DhanushkumarSivaji/received_events",
  "type": "User",
  "site_admin": false,
  "name": "Dhanush kumar Sivaji",
  "company": null,
  "blog": "https://www.linkedin.com/in/dhanush-kumar-s-a459b0132/",
  "location": "Chennai",
  "email": null,
  "hireable": null,
  "bio": "ReactJS / NodeJS Developer | DevOps Enthusiast | Learning Azure / AWS",
  "twitter_username": null,
  "public_repos": 72,
  "public_gists": 1,
  "followers": 1,
  "following": 0,
  "created_at": "2018-02-27T13:51:04Z",
  "updated_at": "2022-02-22T16:07:14Z",
  "private_gists": 0,
  "total_private_repos": 5,
  "owned_private_repos": 5,
  "disk_usage": 127665,
  "collaborators": 0,
  "two_factor_authentication": false,
  "plan": {
    "name": "free",
    "space": 976562499,
    "collaborators": 0,
    "private_repos": 10000
  }
}

export default function Profile() {

  return (
    <div className="profile-card">
      <div class="card">
        <div class="card-body">
          <div class="d-flex flex-column align-items-center text-center">
            <img
              src={data.avatar_url}
              alt="Admin"
              class="rounded-circle"
              width="150"
            />
            <div class="mt-3">
              <h4>{data.name}</h4>
              <p class="text-secondary mb-1">Full Stack Developer</p>
              <p class="text-muted font-size-sm">{data.location}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
