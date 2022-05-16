
var title = document.createElement('h1');
document.body.append(title);
var titleText = "Profile";
title.append(titleText);

var imgElement = document.createElement('div');
imgElement.classList.add('image-container')
var img =  document.createElement('img');
img.src = 'avatar.png';
document.body.append(imgElement);
imgElement.append(img);

var heading = document.createElement('h2');
document.body.append(heading);
var nameText = "Balendra Maharjan";
heading.append(nameText);

var position = document.createElement('h3');
document.body.append(position);
var positionText = "UI developer";
position.append(positionText);

var office = document.createElement('h4');
document.body.append(office);
var officeText = "outside.tech";
office.append(officeText);

var desc = document.createElement('p');
document.body.append(desc);
var descText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
desc.append(descText);


