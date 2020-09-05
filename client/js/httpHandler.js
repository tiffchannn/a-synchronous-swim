// import movement from './keypressHandler.js'
(function() {

  const serverUrl = 'http://127.0.0.1:3000';

  //
  // TODO: build the swim command fetcher here
  //
  const postSwimCommand = (move) => {
    $.ajax({
      type: 'POST',
      data: move,
      url: serverUrl,
      success: () => {
        console.log('Able to post the move!');
      }
    });
  }

  const getSwimCommand = () => {
    $.ajax({
      type: 'GET',
      url: serverUrl,
      success: (random) => {
        console.log('Able to receive the data!');
        SwimTeam.move(random); // add functionality here for swim command
      }
    });
  }


 console.log('pleaseeee work');



  /////////////////////////////////////////////////////////////////////
  // The ajax file uplaoder is provided for your convenience!
  // Note: remember to fix the URL below.
  /////////////////////////////////////////////////////////////////////

  const ajaxFileUplaod = (file) => {
    var formData = new FormData();
    formData.append('file', file);
    $.ajax({
      type: 'POST',
      data: formData,
      url: 'http://127.0.0.1:3000',
      cache: false,
      contentType: false,
      processData: false,
      success: () => {
        // reload the page
        window.location = window.location.href;
      }
    });
  };

  $('form').on('submit', function(e) {
    e.preventDefault();

    var form = $('form .file')[0];
    if (form.files.length === 0) {
      return;
    }

    ajaxFileUplaod(file);
  });

})();

