mainCtrl = ($scope, $http) ->
  $scope <<< do
    tabs: [<[about 關於]> <[timeline 時間軸]> <[project 專案]> <[irc 聊天室]>]
    tab: \irc
    tab-class: -> if $scope.tab==it => \active else ""
    set-tab: -> $scope.tab = it
    nick: []
    aux:
      color: d3.scale.category20!
      bubble: d3.layout.pack!sort null .size [266*0.8,200*0.8] .padding 1.5
    viz:
      irc:
        nick: []

ircCtrl = ($scope, $http, $element) ->
  $scope <<< do
    week:
      th: <[一 二 三 四 五 六 日]>
      event: do
        "2013-06-08": "hackath3n 客廳工廠黑客松"
        "2013-08-10": "hackath4n 國民大會黑客松"
        "2013-10-20": "hackath5n 美麗島黑客松"
        "2013-11-02": "Yahoo!Hack TW 2013"
        "2013-11-03": "Yahoo!Hack TW 2013"
        "2013-11-24": "第一次萌典松與啄木鳥頒獎"
        "2013-12-21": "hackath6n 勞動基準黑客松"
      y-hash: {}
      m-hash: {}
      hover:
        map: d3.scale.linear!domain [0 300] .range [50 250]
        cur: {v: 0, d: "-"}
        setter: null
        set: ->
          if !it =>
            @setter = setTimeout ~>
              @setter = null
              $scope.$apply ~> @cur = {v:0,d:"-"}
            , 1000
          else if @setter =>
            clearTimeout @setter
            @setter = null
          @cur <<< it
          @cur.event = $scope.week.event[@cur.d] or "　"
          @cur.tx = @map @cur.x
    hover-item: {x:0, y:0,name: "1",value:"1"}
    panel: 1
    set-panel: (d) ->
      $scope.panel = ($scope.panel + d + 2)%2
    hover: (e,n) ->
      [w,h] = [$element.width!,$element.height!]
      dx = n.name.length * 2
      [tx,ty] = [(if e.clientX < w/2 => 10 else 266 - 40), e.clientY / h * 200 * 0.8 + 20]
      [lx,ly] = [(if e.clientX < w/2 => 10 + dx else 266 - 40 - dx), e.clientY / h * 200 * 0.8 + 20]
      $scope.hover-item <<< n
      $scope.hover-item <<< {tx,ty,lx,ly}
  $http.get \g0v-count.json .success (data)->
    $scope.nick = $scope.aux.bubble.nodes({children:data.by_nick.map -> {name:it.0, value:it.1}})filter ->!it.children
    len = data.by_date_per_day.length
    weekday = data.by_date_per_day.slice(len - 259, len - 1)
    offset = (moment weekday.0.0 .weekday! + 6) % 7
    dmonth = 0
    $scope.date = weekday.map (d,i) ->
      i += offset
      m = moment d.0
      [year,month] = [m.year!, m.month! + 1]
      if not (month of $scope.week.m-hash) =>
        dmonth += 2
        $scope.week.m-hash[month] = dmonth + parseInt((i % 280) / 7) * 7
      [x,y] = [dmonth + parseInt((i % 280) / 7) * 7,  (i % 7) * 7 + parseInt(i / 280) * 60]
      if not (year of $scope.week.y-hash) => $scope.week.y-hash[year] = x
      { y, x, v: d.1, d: d.0  }
    v = $scope.date.map -> it.v
    [min,max] = [d3.min(v), d3.max(v)]
    $scope.week.day-from = moment $scope.date.0.d .format \L
    $scope.week.day-til = moment $scope.date[*-1]d .format \L
    $scope.heat-color = d3.scale.linear!domain [min,(2 * min + max)/3,(min + 2 * max)/3,max] .range <[#EEEEEE #D6E685 #8CC665 #1E6823]>
    $scope.talk-sum = $scope.nick.reduce (-> &0 + &1.value), 0
