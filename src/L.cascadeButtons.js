L.Control.cascadeButtons = L.Control.extend({
    options: {
        position: 'bottomright',
        direction: 'horizontal',
        className: ''
    },

    initialize: function(buttons, options){
        L.Util.setOptions(this, options);
        this._buttons = buttons;
    },

    onAdd: function (map){
        const className = (this.options.className) ? this.options.className : 'leaflet-control-cascadeButtons';

        const toolBar = L.DomUtil.create('div', `${className} ${this.options.direction || 'horizontal'}`);

        this._buttons.forEach(function(button){
            const buttonContainer = L.DomUtil.create('div', `${(button.direction==='horizontal') ? 'horizontal reverse' : ''}`);
            const buttonElement = document.createElement('button');
            buttonElement.setAttribute("type", "button");
            buttonElement.setAttribute("aria-expanded", "false");
            const buttonIcon = L.DomUtil.create('i', `${button.icon}`);
            buttonElement.append(buttonIcon)

            if(button.items && button.items.length>0){

                const ul = L.DomUtil.create('ul', `hidden ${(button.direction==='horizontal') ? 'reverse' : 'column'}`);
                button.items.forEach(function(item, index){

                    const li = document.createElement('li');
                    li.style.animationDuration = `${1/(index+1)}s`

                    const i = L.DomUtil.create('i', `${item.icon}`);

                    li.addEventListener('click', function(){
                        item.command()
                    })

                    li.append(i)  
                    ul.append(li);
                    
                })

                buttonElement.addEventListener('click', function(){
                    
                    if(button.command){
                        button.command();
                    }     
                    const elem = L.DomUtil.get(ul);
                    elem.classList.toggle('hidden');

                    const isAriaExpanded = JSON.parse(buttonElement.getAttribute("aria-expanded"))
                    buttonElement.setAttribute('aria-expanded', !isAriaExpanded);
                    
                    (!button.ignoreActiveState) ? buttonElement.classList.toggle('activeButton') : '';
                })

                buttonContainer.append(ul)    

            } else {
                buttonElement.addEventListener('click', function(){
                    (!button.ignoreActiveState) ? buttonElement.classList.toggle('activeButton') : '';
                    button.command();
                })
            }

            buttonContainer.append(buttonElement)
            toolBar.append(buttonContainer)
        })

        return toolBar;
    }
})

L.cascadeButtons = function(buttons, options){
    return new L.Control.cascadeButtons(buttons, options);  
}