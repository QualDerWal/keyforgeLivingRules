var app = new Vue({
  el: "#app",
  data: {
    jsonData: []
  },
  computed: {
    tocList: function() {
      return this.jsonData.filter(item => item.title);
    }
  },
  filters: {
    markdown: function (value) {
      if (!value || typeof value !== "string") return "";
      return marked.InlineLexer.output(value, []);
    },
    snakeCase: function (value) {
      return value.toLowerCase().split(' ').join('_');
    }
  },
  mounted: function () {
    var self = this;
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", "./currentRules.json", true);
    xmlhttp.onreadystatechange = function () {
      if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        self.jsonData = JSON.parse(xmlhttp.responseText).sections;
      }
    };
    xmlhttp.send(null);
  }
});
