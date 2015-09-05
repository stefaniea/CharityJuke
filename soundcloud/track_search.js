SC.initialize({
  client_id: 'cb32f7702a0bd6053ef890bdf200525a'
});
// find all sounds of buskers
SC.get('/tracks', { q: 'kygo'}, function(tracks) {
  console.log(tracks);
});