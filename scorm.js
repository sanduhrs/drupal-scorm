/* $Id$ */

/**
 * SCORM 2004 Run-Time Environment (RTE)
 *
 * @author
 * Stefan Auditor <stefan.auditor@erdfisch.de>
 */

// Global killswitch
if (Drupal.jsEnabled) {
  // Initialize support methods
  $(document).ready(function() {
    // Find debug area
    API_1484_11.dbox = $('#API_1484_11');
  
    // Load error strings to array
    API_1484_11.LoadErrorStrings();
    
    // Load data
    API_1484_11.LoadDataModel();
  });
}
