// Initialize drag and drop using Sortable.js
const dragAndDropItems = document.getElementById('team-members');

new Sortable(dragAndDropItems, {
    animation: 350,
    chosenClass: 'team-member-chosen',
    dragClass: 'team-member-drag'
});
