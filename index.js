// Generated by LiveScript 1.2.0
var mainCtrl, prjDetailCtrl, prjCtrl, ircCtrl, ircCountCtrl, ircCalendarCtrl, ircRelationCtrl;
mainCtrl = function($scope, $http){
  return import$($scope, {
    tabs: [['about', '關於'], ['timeline', '時間軸'], ['project', '專案'], ['irc', '聊天室']],
    tab: 'project',
    tabClass: function(it){
      if ($scope.tab === it) {
        return 'active';
      } else {
        return "";
      }
    },
    setTab: function(it){
      return $scope.tab = it;
    }
  });
};
prjDetailCtrl = function($scope, $http){
  $scope.range = function(a, b){
    var i$, i, results$ = [];
    for (i$ = a; i$ <= b; ++i$) {
      i = i$;
      results$.push(i);
    }
    return results$;
  };
  return $http.get('simple.json').success(function(data){
    var i$, h, lresult$, k, v, results$ = [];
    $scope.projects = [];
    for (i$ in data) {
      h = data[i$];
      lresult$ = [];
      for (k in h) {
        v = h[k];
        v.key = k;
        lresult$.push($scope.projects.push(v));
      }
      results$.push(lresult$);
    }
    return results$;
  });
};
prjCtrl = function($scope, $http, $element){
  import$($scope, {
    panel: 0,
    setPanel: function(d){
      return $scope.panel = ($scope.panel + d + 2) % 2;
    }
  });
  $scope.nameToUrl = function(it){
    return it.replace(" ", '_');
  };
  $scope.projects = [
    {
      name: '鄉民關心你',
      homepage: 'http://kuansim.herokuapp.com/',
      source: 'https://github.com/g0v/kuansim',
      img: 'kuansim.jpg'
    }, {
      name: '萌典',
      homepage: 'http://moedict.tw/',
      source: ['https://github.com/g0v/moedict-process', 'https://github.com/yllan/moedict-mac', 'https://github.com/racklin/moedict-jquery-plugin'],
      img: 'moedict.jpg'
    }, {
      name: '政誌',
      homepage: 'http://fact.g0v.tw/',
      source: 'https://github.com/g0v/twangry',
      img: 'fact.jpg'
    }, {
      name: '求職小幫手',
      homepage: 'http://jobhelper.g0v.ronny.tw/',
      source: 'https://github.com/ronnywang/jobhelper',
      img: 'jobhelper.jpg'
    }, {
      name: '新聞小幫手',
      homepage: 'http://newshelper.g0v.tw/',
      source: 'https://github.com/g0v/newshelper-backend',
      img: 'newshelper-backend.jpg'
    }, {
      name: '社會資訊運動平台',
      homepage: 'http://movement.ee.ncku.edu.tw/',
      source: 'https://github.com/4movement/movement',
      img: 'movement.jpg'
    }, {
      name: '空氣品質即時指標',
      homepage: 'http://g0v.github.io/twgeojson/air.html',
      source: 'https://github.com/g0v/twgeojson/',
      img: 'twgeojson.jpg'
    }, {
      name: "Pet Need Me",
      homepage: 'http://petneed.me/',
      source: 'https://github.com/jsleetw/petneed.me',
      img: 'petneedme.jpg'
    }, {
      name: '福利請聽',
      homepage: 'http://listening.g0v.tw/',
      source: 'https://github.com/g0v/listening',
      img: 'listening.jpg'
    }, {
      name: '中央政府總預算',
      homepage: '//budget.g0v.tw/',
      source: 'https://github.com/g0v/twbudget',
      img: 'budget.jpg'
    }, {
      name: '立院影城',
      homepage: 'http://ivod.ly.g0v.tw/',
      source: 'https://github.com/g0v/ivod.ly.g0v.tw',
      img: 'ivod.jpg'
    }, {
      name: '國會大代誌',
      homepage: 'http://ly.g0v.tw/',
      source: 'https://github.com/g0v/ly.g0v.tw',
      img: 'ly.g0v.tw.jpg'
    }, {
      name: '聾通訊',
      homepage: 'https://play.google.com/store/apps/details?id=edu.stu.ihelp.client&hl=en',
      source: 'https://github.com/cy-project/iHelp-android',
      img: 'ihelp.jpg'
    }, {
      name: '法律亦毒氣',
      homepage: 'http://laweasyread.herokuapp.com/',
      source: 'https://github.com/g0v/laweasyread',
      img: 'lawEasyRead.jpg'
    }, {
      name: '立委聯絡資訊',
      homepage: 'http://billy3321.github.io/lytel/',
      source: 'https://github.com/g0v/ly-tel/',
      img: 'ly-tel.jpg'
    }, {
      name: "Bad Driver",
      homepage: 'http://baddriver.mobileweb.com.tw/',
      source: "",
      img: 'baddriver.jpg'
    }
  ];
  return console.log($scope.projects);
};
ircCtrl = function($scope, $http, $element){
  import$($scope, {
    panel: 2,
    setPanel: function(d){
      return $scope.panel = ($scope.panel + d + 3) % 3;
    },
    color: d3.scale.category20()
  });
  return $http.get('http://kcwu.csie.org/~kcwu/ircstat/g0v-count.json').success(function(data){
    $scope.$broadcast('data.ready', data);
    return console.log(data);
  });
};
ircCountCtrl = function($scope, $element){
  import$($scope, {
    cur: {
      x: 0,
      y: 0,
      name: "1",
      value: "1"
    },
    hover: function(e, n){
      var ref$, w, h, dx, tx, ty, lx1, ly1, lx2, ly2;
      ref$ = [$element.width(), $element.height()], w = ref$[0], h = ref$[1];
      dx = n.name.length * 2;
      ref$ = [
        e.clientX < w / 2
          ? 10
          : 266 - 40, e.clientY / h * 200 * 0.8 + 20
      ], tx = ref$[0], ty = ref$[1];
      ref$ = [
        n.x + 20 + (e.clientX < w / 2
          ? -n.r / 1.5
          : n.r / 1.5), n.y
      ], lx1 = ref$[0], ly1 = ref$[1];
      ref$ = [
        e.clientX < w / 2
          ? 10 + dx
          : 266 - 40 - dx, e.clientY / h * 200 * 0.8 + 20
      ], lx2 = ref$[0], ly2 = ref$[1];
      import$($scope.cur, n);
      return ref$ = $scope.cur, ref$.tx = tx, ref$.ty = ty, ref$.lx1 = lx1, ref$.ly1 = ly1, ref$.lx2 = lx2, ref$.ly2 = ly2, ref$;
    }
  });
  return $scope.$on('data.ready', function(e, data){
    var bubble;
    bubble = d3.layout.pack().sort(null).size([266 * 0.8, 200 * 0.8]).padding(1.5);
    $scope.nick = bubble.nodes({
      children: data.by_nick.map(function(it){
        return {
          name: it[0],
          value: it[1]
        };
      })
    }).filter(function(it){
      return !it.children;
    });
    return $scope.sum = $scope.nick.reduce(function(){
      return arguments[0] + arguments[1].value;
    }, 0);
  });
};
ircCalendarCtrl = function($scope, $element){
  import$($scope, {
    lineChart: "M0,0",
    th: ['一', '二', '三', '四', '五', '六', '日'],
    event: {
      "2013-06-08": "hackath3n 客廳工廠黑客松",
      "2013-08-10": "hackath4n 國民大會黑客松",
      "2013-10-20": "hackath5n 美麗島黑客松",
      "2013-11-02": "Yahoo!Hack TW 2013",
      "2013-11-03": "Yahoo!Hack TW 2013",
      "2013-11-24": "第一次萌典松與啄木鳥頒獎",
      "2013-12-21": "hackath6n 勞動基準黑客松"
    },
    yHash: {},
    mHash: {},
    hover: {
      map: d3.scale.linear().domain([0, 300]).range([50, 250]),
      cur: {
        v: 0,
        d: "-"
      },
      setter: null,
      loc: function(e){
        var n, w, i;
        n = $(e.currentTarget);
        w = 1440 * e.currentTarget.getBBox().width / 300.0;
        i = parseInt(300 * (e.clientX - n.offset().left) / w);
        return this.set($scope.date[i]);
      },
      set: function(it){
        var this$ = this;
        if (!it) {
          this.setter = setTimeout(function(){
            this$.setter = null;
            return $scope.$apply(function(){
              return this$.cur = {
                v: 0,
                d: "-"
              };
            });
          }, 1000);
        } else if (this.setter) {
          clearTimeout(this.setter);
          this.setter = null;
        }
        import$(this.cur, it);
        this.cur.event = $scope.event[this.cur.d] || "　";
        return this.cur.tx = this.map(this.cur.x);
      }
    }
  });
  return $scope.$on('data.ready', function(e, data){
    var len, weekday, offset, dmonth, v, ref$, min, max, xMap, yMap;
    len = data.by_date_per_day.length;
    weekday = data.by_date_per_day.slice(len - 259, len - 1);
    offset = (moment(weekday[0][0]).weekday() + 6) % 7;
    dmonth = 0;
    $scope.date = weekday.map(function(d, i){
      var m, ref$, year, month, x, y;
      i += offset;
      m = moment(d[0]);
      ref$ = [m.year(), m.month() + 1], year = ref$[0], month = ref$[1];
      if (!(month in $scope.mHash)) {
        dmonth += 2;
        $scope.mHash[month] = dmonth + parseInt((i % 280) / 7) * 7;
      }
      ref$ = [dmonth + parseInt((i % 280) / 7) * 7, (i % 7) * 7 + parseInt(i / 280) * 60], x = ref$[0], y = ref$[1];
      if (!(year in $scope.yHash)) {
        $scope.yHash[year] = x;
      }
      return {
        y: y,
        x: x,
        v: d[1],
        d: d[0]
      };
    });
    v = $scope.date.map(function(it){
      return it.v;
    });
    ref$ = [d3.min(v), d3.max(v)], min = ref$[0], max = ref$[1];
    $scope.dayFrom = moment($scope.date[0].d).format('L');
    $scope.dayTil = moment((ref$ = $scope.date)[ref$.length - 1].d).format('L');
    $scope.heatColor = d3.scale.linear().domain([min, (2 * min + max) / 3, (min + 2 * max) / 3, max]).range(['#EEEEEE', '#D6E685', '#8CC665', '#1E6823']);
    xMap = d3.scale.linear().domain([0, $scope.date.length]).range([2, 282]);
    yMap = d3.scale.linear().domain([min, max]).range([20, 0]);
    $scope.line = d3.svg.line().x(function(){
      return xMap(arguments[1]);
    }).y(function(it){
      return yMap(it.v);
    }).interpolate('line').tension(1.0);
    $scope.lineChart = $scope.line($scope.date);
    return $scope.date.map(function(d, i){
      d.lx = xMap(i);
      return d.ly = yMap(d.v);
    });
  });
};
ircRelationCtrl = function($scope, $element){
  import$($scope, {
    nodes: [],
    links: [],
    colorFunc: d3.scale.ordinal().range(colorbrewer.Paired[12]),
    color: function(it){
      if ($scope.hover.cur && !it.hover) {
        return '#e0e0e0';
      } else {
        return this.colorFunc(it.name);
      }
    }
  });
  return $scope.$on('data.ready', function(e, data){
    var ref$, w, h, force, hash, it, it2, jt, nodes, links, i$, len$, j$, x, len1$;
    ref$ = [300, 200], w = ref$[0], h = ref$[1];
    data = data.by_nick_to;
    force = d3.layout.force();
    hash = {};
    for (it in data) {
      it2 = it.toLowerCase().trim();
      for (jt in data[it]) {
        jt = jt.toLowerCase().trim();
        if (!(jt in hash)) {
          hash[jt] = {
            name: jt,
            charge: 1
          };
        }
      }
      hash[it2] = {
        name: it2,
        d: data[it],
        charge: 1
      };
    }
    nodes = (function(){
      var results$ = [];
      for (it in hash) {
        results$.push(it);
      }
      return results$;
    }()).map(function(d, i){
      hash[d].index = i;
      return hash[d];
    });
    nodes.sort(function(a, b){
      if (a.name > b.name) {
        return 1;
      } else if (a.name === b.name) {
        return 0;
      } else {
        return -1;
      }
    });
    links = [];
    for (i$ = 0, len$ = nodes.length; i$ < len$; ++i$) {
      it = nodes[i$];
      for (j$ = 0, len1$ = (ref$ = (fn$()).sort(fn1$)).length; j$ < len1$; ++j$) {
        jt = ref$[j$];
        if (!jt) {
          continue;
        }
        jt = jt.toLowerCase().trim();
        links.push({
          source: hash[it.name],
          target: hash[jt]
        });
        hash[jt].charge++;
      }
    }
    $scope.links = links;
    nodes.map(function(it){
      var ref$;
      it.v = it.charge;
      return it.r = (ref$ = Math.pow(it.charge, 1.2) / 40) > 1 ? ref$ : 1;
    });
    force.nodes(nodes).links(links).size([300, 170]).gravity(3.5).charge(function(it){
      return -Math.pow(it.charge, 1.5) - 10;
    }).start();
    $scope.nodes = nodes;
    $scope.nodesActive = [
      (ref$ = nodes.filter(function(it){
        return it.charge > 5;
      }).sort(function(a, b){
        return b.charge - a.charge;
      }))[0], ref$[1], ref$[2], ref$[3], ref$[4], ref$[5], ref$[6], ref$[7], ref$[8], ref$[9], ref$[10], ref$[11], ref$[12], ref$[13], ref$[14], ref$[15], ref$[16], ref$[17], ref$[18], ref$[19], ref$[20]
    ];
    $scope.hover = {
      cur: null,
      neighbor: [],
      near: function(it){
        return ["", "active", "near"][it.hover];
      },
      hl: function(n, v){
        return n.hover = v;
      },
      set: function(d){
        var ref$, this$ = this;
        if (this.cur) {
          links.map(function(it){
            if (it.source === this$.cur) {
              it.target.hover = 0;
            }
            if (it.target === this$.cur) {
              return it.source.hover = 0;
            }
          });
          this.cur.hover = 0;
        }
        this.cur = d;
        if (this.cur) {
          links.map(function(it){
            if (it.source === this$.cur) {
              it.target.hover = 2;
            }
            if (it.target === this$.cur) {
              return it.source.hover = 2;
            }
          });
          this.cur.hover = 1;
        }
        this.neighbor = nodes.filter(function(it){
          return it.hover === 2;
        });
        if (this.neighbor.length > 20) {
          return this.neighbor = [(ref$ = this.neighbor)[0], ref$[1], ref$[2], ref$[3], ref$[4], ref$[5], ref$[6], ref$[7], ref$[8], ref$[9], ref$[10], ref$[11], ref$[12], ref$[13], ref$[14], ref$[15], ref$[16], ref$[17], ref$[18], ref$[19], ref$[20]];
        }
      }
    };
    return force.on('tick', function(){
      return $scope.$apply();
    });
    function fn$(){
      var results$ = [];
      for (x in it.d) {
        results$.push(x);
      }
      return results$;
    }
    function fn1$(a, b){
      return it.d[a] - it.d[b];
    }
  });
};
function import$(obj, src){
  var own = {}.hasOwnProperty;
  for (var key in src) if (own.call(src, key)) obj[key] = src[key];
  return obj;
}