if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
      navigator.serviceWorker.register('/sw.js').then(function(registration) {
        // Registration was successful
        console.log('ServiceWorker registration successful with scope: ', registration.scope);
      }, function(err) {
        // registration failed :(
        console.log('ServiceWorker registration failed: ', err);
      });
      if(!navigator.serviceWorker.controller){
        return;
      }
      //if there's an updated worker already waiting, call
      //index._updateReady()
      if(reg.waiting){
        index._updateReady();
        return;
      }
      //if there's an updated worker installing,track its
      //progress. If it becoes "installed", call
      //index._updateReady()
      if(reg.installing){
        indexController._trackInstalling();
      }
      //otherwise, listen for new installing workers arriving.
      //If one arrives, track its progress.
      //If it becomes "installed", call
      //index._updateReady() 
    });
  indexController.prototype._trackInstalling = function(worker){
      var indexController =this;

      worker.addEventListener('statechange', function(){
          if(worker)
      })
  }
  indexController.prototype._updateReady = function(){
      var index = this._toastsView.show("New version available",{
          buttons:['whatever']
      });
  }