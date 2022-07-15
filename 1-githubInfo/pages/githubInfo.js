const APIURL = "https://api.github.com/users/";

const userAvatar = document.getElementById("profile-avatar");
const userName = document.getElementById("profile-username");
const userLocation = document.getElementById("profile-location");
const userCompany = document.getElementById("profile-company");
const userBio = document.getElementById("profile-bio");
const userRepos = document.getElementById("profile-repos");
const userFollowers = document.getElementById("profile-followers");

function getUserInfo() {
  const username = document.getElementById("username-input").value;
  document.querySelector(".profile").style.display = "none";

  fetch(APIURL + username)
    .then((response) => response.json())
    .then((res) => {
      console.log(res);
      if (res.message != "Not Found") {
        document.querySelector(".profile").style.display = "";
      }
      userAvatar.src = res.avatar_url;
      userName.textContent = res.name;
      if (!res.location) {
        userLocation.style.display = "none";
      } else {
        userLocation.style.display = "";
        userLocation.textContent = res.location;
      }
      if (!res.company) {
        userCompany.style.display = "none";
      } else {
        userCompany.style.display = "";
        userCompany.textContent = res.company;
      }
      userBio.textContent = res.bio;
      userRepos.textContent = res.public_repos + " Repositórios";
      userFollowers.textContent = res.followers + " Seguidores";
    });
}

getUserInfo();
