
const teamCard = (team) => {
  const cardString = `
  <div class="card" id="${team.id}">
  <img src="${team.img}" class="card-img-top">
  <div class="card-body text-center">
    <h5 class="card-title">${team.name}</h5>
    <p class="card-text">${team.conferenceId}</p>
  </div>
</div>`;
  return cardString;
};

export default { teamCard };
