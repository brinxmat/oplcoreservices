const keyEvents = [
  {
    "keyId": 65,
    "elementId": "s2id_tag_952_subfield_a_",
    "action": "focus"
  }, {
    "keyId": 79,
    "elementId": "tag_952_subfield_o_",
    "action": "focus"
  }, {
    "keyId": 80,
    "elementId": "tag_952_subfield_p_",
    "action": "focus"
  }, {
    "keyId": 90,
    "elementId": "tag_952_subfield_z_",
    "action": "focus"
  }, {
    "keyId": 121,
    "elementId": "add_multiple_copies",
    "action": "click"
  }, {
    "keyId": 49,
    "elementId": "s2id_tag_952_subfield_1_",
    "action": "focus"
  } ];

keyEvents.forEach(keyEvent => {
  window.addEventListener('keyup', (event) => {
      if (event.ctrlKey && event.keyCode === keyEvent.keyId) {
        if (keyEvent.action === "focus") {
          const node = document.getElementById(document.querySelectorAll('[id^="' + keyEvent.elementId + '"]')[ 0 ].id)
          if (node.nodeName === "DIV") {
            node.getElementsByClassName('select2-choice')[0].click();
            console.log(node)
          } else {
            document.getElementById(document.querySelectorAll('[id^="' + keyEvent.elementId + '"]')[ 0 ].id).click();
          }
        } else if (keyEvent.action === "click") {
          document.getElementById(document.querySelectorAll('input[id^="' + keyEvent.elementId + '"]')[ 0 ].id).click();
        }
      }
    }
    , false);
});

const hiddenElements = [ {
  "elementId": "subfield952d"
}, {
  "elementId": "subfield952j"
},{
  "elementId": "subfield952v"
},{
  "elementId": "subfield952w"
} ];

hiddenElements.forEach(hiddenElement => {
  document.getElementById(document.querySelectorAll('div[id^="' + hiddenElement.elementId + '"]')[ 0 ].id).style.visibility = 'hidden';
});

document.getElementById('add_multiple_copies').addEventListener('click', (event) => {
  document.getElementById('number_of_copies').focus();
})
