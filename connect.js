// Fires as soon as document is ready
$(document).ready(function(){
  
  // Auto-Select Input Field
  $("#meetingId").focus();
  
  // Form Submission
  $("#joinMeetingForm").submit(function( event ) {
    var text_val = $("#meetingId").val();
    
    // Strip - symbols
    while(text_val.indexOf('-') != -1) {
      text_val = text_val.replace("-", "");
    }
    
    // Handle if length is not 9 or if value is not numeric
    if(text_val.length != 9 || $.isNumeric(text_val) != true) {
      
      // Animate alert
      $("div.notice").animate({marginTop: "27px"}, {duration: 600});
      
      // interrupt form submission
      event.preventDefault();
    }
    else {
      jUrl = "http://www.fastsupport.com/";
      meetID = document.joinMeetingB.MeetingID.value;
      document.joinMeetingB.action = jUrl + meetID;
    }
  });
  
});

