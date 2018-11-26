var app = new Vue({
  el: "#app",
  data: {
    jsonData: []
  },
  filters: {
    markdown: function(value) {
      if (!value || typeof value !== 'string') return "";
      return marked(value);
    }
  },
  mounted: function() {
    var self = this;
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", "./currentRules.json", true);
    xmlhttp.onreadystatechange = function() {
      if (xmlhttp.readyState == 4) {
        if (xmlhttp.status == 200) {
          console.log(xmlhttp);
          self.jsonData = JSON.parse(xmlhttp.responseText).sections;
          console.log(self.jsonData);
        }
      }
    };
    xmlhttp.send(null);
  }
});
