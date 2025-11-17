export default class View {
        _data
    
        render(data){
            this._data = data;
            const markup = this._generateMarkup();
            this._clear();
            this._parentElement.insertAdjacentHTML("afterbegin", markup);
        }
    
        _clear(){
            this._parentElement.innerHTML = ''; // global private clear feature
        }
        // spinner feature function here 
        
    renderSpinner(){
        const markup = `<div class="spinner">
              <svg>
                <use href="${icons}_icon-loader"></use>
              </svg>
            </div>`;
        this._clear();
        this._parentElement.insertAdjacentHTML('afterbegin', markup);
    };
    
        // error message UI Here ->
            
        renderError(message = this._erroMessage){
            const markup = `
            <div class="error">
                <div>
                  <svg>
                    <use href="${icons}_icon-alert-triangle"></use>
                  </svg>
                </div>
                <p>${message}</p>
              </div>
              `;
    
        this._clear();
        this._parentElement.insertAdjacentHTML('afterbegin', markup);
        }
    
        // Success Message
            renderMessage(message = this._message){
            const markup = `
            <div class="message">
                <div>
                  <svg>
                    <use href="${icons}_icon-smile"></use>
                  </svg>
                </div> 
                <p>${message}</p>
              </div>
              `;
    
        this._clear();
        this._parentElement.insertAdjacentHTML('afterbegin', markup);
        }
    
    
}