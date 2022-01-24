var map = L.map('map', {attributionControl:false}).setView([51.505, -0.09], 13);
L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

new L.cascadeButtons([
    {icon: 'fas fa-home', direction:'horizontal', ignoreActiveState:true , command: () =>{console.log('test') }},
    {icon: 'fas fa-home', direction:'horizontal', items:[
        {icon: 'fas fa-home', command: () =>{console}},
        {icon: 'fas fa-home', command: () =>{console}},
        {icon: 'fas fa-home', command: () =>{console}},
        {icon: 'fas fa-home', command: () =>{console}},
        {icon: 'fas fa-home', command: () =>{console}},
        {icon: 'fas fa-home', command: () =>{console}},
        {icon: 'fas fa-home', command: () =>{console}},
        {icon: 'fas fa-home', command: () =>{console}},
        {icon: 'fas fa-home', command: () =>{console}},
        {icon: 'fas fa-home', command: () =>{console}},
    ]},
    {icon: 'fas fa-home', direction:'horizontal', items: [
        {icon: 'fas fa-home', command: () =>{console}},
        {icon: 'fas fa-home', command: () =>{console}},
    ]},
], {position:'topleft', direction:'vertical'}).addTo(map);

new L.cascadeButtons([
    {icon: 'fas fa-home', direction:'vertical', ignoreActiveState:true , command: () =>{console.log('test') }},
    {icon: 'fas fa-home', direction:'vertical', items:[
        {icon: 'fas fa-home', command: () =>{console}},
        {icon: 'fas fa-home', command: () =>{console}},
        {icon: 'fas fa-home', command: () =>{console}},
        {icon: 'fas fa-home', command: () =>{console}},
        {icon: 'fas fa-home', command: () =>{console}},
        {icon: 'fas fa-home', command: () =>{console}},
        {icon: 'fas fa-home', command: () =>{console}},
        {icon: 'fas fa-home', command: () =>{console}},
        {icon: 'fas fa-home', command: () =>{console}},
        {icon: 'fas fa-home', command: () =>{console}},
    ]},
    {icon: 'fas fa-home', direction:'vertical', items: [
        {icon: 'fas fa-home', command: () =>{console}},
        {icon: 'fas fa-home', command: () =>{console}},
    ]},
], {position:'bottomright', direction:'horizontal'}).addTo(map);