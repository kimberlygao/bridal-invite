$('input:checkbox').change(
  function(){
      if ($(this).is(':checked')) {
          $("#caption-text").html("SEE DETAILS &rarr;");
          $("#caption-text").wrapInner('<a class="details-link" href="details.html"></a>');
      }
      else {
        $("#caption-text").html("CLICK/TAP TO OPEN");
      }
  });