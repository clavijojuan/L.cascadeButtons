var map = L.map('map').setView([51.505, -0.09], 13);
L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

/// VERTICAL

new L.cascadeButtons([
    {icon: 'fas fa-home', ignoreActiveState:true , command: () =>{console.log('test') }},
    {icon: 'fas fa-home', items:[
        {icon: 'fas fa-home', command: () =>{console.log('hola')}},
        {icon: 'fas fa-home', command: () =>{console.log('hola')}},
        {icon: 'fas fa-globe', command: () =>{console.log('hola')}},
    ]},
    {icon: 'fas fa-home', items: [
        {icon: 'fas fa-home', command: () =>{console.log('hola')}},
        {icon: 'fas fa-globe', command: () =>{console.log('hola')}},
    ]},
], {position:'topleft', direction:'vertical'}).addTo(map);

new L.cascadeButtons([
    {icon: 'fas fa-home', ignoreActiveState:true , command: () =>{console.log('test') }},
    {icon: 'fas fa-home', items:[
        {icon: 'fas fa-home', command: () =>{console.log('hola')}},
        {icon: 'fas fa-home', command: () =>{console.log('hola')}},
        {icon: 'fas fa-globe', command: () =>{console.log('hola')}},
    ]},
    {icon: 'fas fa-home', items: [
        {icon: 'fas fa-home', command: () =>{console.log('hola')}},
        {icon: 'fas fa-globe', command: () =>{console.log('hola')}},
    ]},
], {position:'bottomright', direction:'vertical'}).addTo(map);

new L.cascadeButtons([
    {icon: 'fas fa-home', ignoreActiveState:true , command: () =>{console.log('test') }},
    {icon: 'fas fa-home', items:[
        {icon: 'fas fa-home', command: () =>{console.log('hola')}},
        {icon: 'fas fa-home', command: () =>{console.log('hola')}},
        {icon: 'fas fa-globe', command: () =>{console.log('hola')}},
    ]},
    {icon: 'fas fa-home', items: [
        {icon: 'fas fa-home', command: () =>{console.log('hola')}},
        {icon: 'fas fa-globe', command: () =>{console.log('hola')}},
    ]},
], {position:'topright', direction:'vertical'}).addTo(map);

new L.cascadeButtons([
    {icon: 'fas fa-home', ignoreActiveState:true , command: () =>{console.log('test') }},
    {icon: 'fas fa-home', items:[
        {icon: 'fas fa-home', command: () =>{console.log('hola')}},
        {icon: 'fas fa-home', command: () =>{console.log('hola')}},
        {icon: 'fas fa-globe', command: () =>{console.log('hola')}},
    ]},
    {icon: 'fas fa-home', items: [
        {icon: 'fas fa-home', command: () =>{console.log('hola')}},
        {icon: 'fas fa-globe', command: () =>{console.log('hola')}},
    ]},
], {position:'bottomleft', direction:'vertical'}).addTo(map);


//// HORIZONTAL

new L.cascadeButtons([
    {icon: 'fas fa-home', ignoreActiveState:true , command: () =>{console.log('test') }},
    {icon: 'fas fa-home', items:[
        {icon: 'fas fa-home', command: () =>{console.log('hola')}},
        {icon: 'fas fa-home', command: () =>{console.log('hola')}},
        {icon: 'fas fa-globe', command: () =>{console.log('hola')}},
    ]},
    {icon: 'fas fa-home', items: [
        {icon: 'fas fa-home', command: () =>{console.log('hola')}},
        {icon: 'fas fa-globe', command: () =>{console.log('hola')}},
    ]},
], {position:'topleft', direction:'horizontal'}).addTo(map);

new L.cascadeButtons([
    {icon: 'fas fa-home', ignoreActiveState:true , command: () =>{console.log('test') }},
    {icon: 'fas fa-home', items:[
        {icon: 'fas fa-home', command: () =>{console.log('hola')}},
        {icon: 'fas fa-home', command: () =>{console.log('hola')}},
        {icon: 'fas fa-globe', command: () =>{console.log('hola')}},
    ]},
    {icon: 'fas fa-home', items: [
        {icon: 'fas fa-home', command: () =>{console.log('hola')}},
        {icon: 'fas fa-globe', command: () =>{console.log('hola')}},
    ]},
], {position:'bottomright', direction:'horizontal'}).addTo(map);

new L.cascadeButtons([
    {icon: 'fas fa-home', ignoreActiveState:true , command: () =>{console.log('test') }},
    {icon: 'fas fa-home', items:[
        {icon: 'fas fa-home', command: () =>{console.log('hola')}},
        {icon: 'fas fa-home', command: () =>{console.log('hola')}},
        {icon: 'fas fa-globe', command: () =>{console.log('hola')}},
    ]},
    {icon: 'fas fa-home', items: [
        {icon: 'fas fa-home', command: () =>{console.log('hola')}},
        {icon: 'fas fa-globe', command: () =>{console.log('hola')}},
    ]},
], {position:'topright', direction:'horizontal'}).addTo(map);

new L.cascadeButtons([
    {icon: 'fas fa-home', ignoreActiveState:true , command: () =>{console.log('test') }},
    {icon: 'fas fa-home', items:[
        {icon: 'fas fa-home', command: () =>{console.log('hola')}},
        {icon: 'fas fa-home', command: () =>{console.log('hola')}},
        {icon: 'fas fa-globe', command: () =>{console.log('hola')}},
    ]},
    {icon: 'fas fa-home', items: [
        {icon: 'fas fa-home', command: () =>{console.log('hola')}},
        {icon: 'fas fa-globe', command: () =>{console.log('hola')}},
    ]},
], {position:'bottomleft', direction:'horizontal'}).addTo(map);