jQuery("#example1").radialProgress("init", {
  'size': 100,
  'fill': 5
}).radialProgress("to", {'perc': 100, 'time': 10000});

jQuery("#pie").radialPieChart("init", {
  'font-size': 13,
  'fill': 20,
  'data': [
    {'color': "#2DB1E4", 'perc': 33},
    {'color': "#9CCA13", 'perc': 33},
    {'color': "#A4075E", 'perc': 33}
  ]
});

var clock = jQuery("#multi").radialMultiProgress("init", {
  'fill': 25,
  'font-size': 14,
  'data': [
    {'color': "#2DB1E4", 'range': [0, 12]},
    {'color': "#9CCA13", 'range': [0, 59]},
    {'color': "#A4075E", 'range': [0, 59]}
  ]
});

var startClock = function() {
  var dh, dm, ds;
  setInterval(function() {
    var date = new Date(),
        h = date.getHours() % 12,
        m = date.getMinutes(),
        s = date.getSeconds();
    if (dh !== h) { clock.radialMultiProgress("to", {
      "index": 0, 'perc': h, 'time': (h ? 100 : 10)
    }); dh = h; }
    if (dm !== m) { clock.radialMultiProgress("to", {
      "index": 1, 'perc': m, 'time': (m ? 100 : 10)
    }); dm = m; }
    if (ds !== s) { clock.radialMultiProgress("to", {
      "index": 2, 'perc': s, 'time': (s ? 100 : 10)
    }); ds = s; }
  }, 1000);
};

startClock();

jQuery("#smallrad").radialProgress("init", {
  'size': 20,
  'fill': 2,
  'text-color': "transparent"
}).radialProgress("to", {'perc': 66});

jQuery("#smallpie").radialPieChart("init", {
  'size': 20,
  'fill': 5,
  'text-color': "transparent",
  'data': [
    {'color': "#2DB1E4", 'perc': 30},
    {'color': "#9CCA13", 'perc': 40},
    {'color': "#A4075E", 'perc': 30}
  ]
});
