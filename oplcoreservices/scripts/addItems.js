const keyEvents = [
  {
    "keyId": 65,
    "focusId": "s2id_tag_952_subfield_a_"
  }, {
    "keyId": 79,
    "focusId": "tag_952_subfield_o_"
  }, {
    "keyId": 80,
    "focusId": "tag_952_subfield_p_"
  }, {
    "keyId": 90,
    "focusId": "tag_952_subfield_z_"
  } ];

keyEvents.forEach(keyEvent => {
  window.addEventListener('keyup', (event) => {
      if (event.ctrlKey && event.keyCode === keyEvent.keyId) {
          document.getElementById(document.querySelectorAll('input[id^="' + keyEvent.focusId + '"]')[ 0 ].id).focus();
      }
    }
    , false);
});
