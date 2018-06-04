import {Component, OnInit, Input} from '@angular/core';


@Component({
  selector: 'app-nav-sider',
  templateUrl: './nav-sider.component.html',
  styleUrls: ['./nav-sider.component.less']
})
export class NavSiderComponent implements OnInit {
  @Input() isCollapsed;
  public MenuTheme: String = 'dark';
  public menus = [
    {
      name: '仪表盘',
      icon: 'anticon-area-chart',
      url: '/workspace/dashboard',
      expand: false,
      sub: true
    },
    {
      name: '库存管理',
      icon: 'anticon-bars',
      expand: true,
      subMenu: [
        {name: 'Tom'},
        {
          name: 'Bill'
        }
      ]
    },
    {
      name: 'asd',
      icon: 'anticon-user',
      expand: true,
      sub: false,
      subMenu: [
        {name: 'Tom'},
        {
          name: 'Bill'
        }
      ]
    }
  ];
  public newMenus = {
    noChildren: [
      {
        name: '仪表盘',
        icon: 'anticon-area-chart',
        link: '/workspace/dashboard',
        selected: true
      },
    ],
    hasChildren: [
      {
        name: '库存管理',
        icon: 'anticon-bars',
        sub: false,
        children: [
          {
            name: 'Tom',
            selected: true
          },
          {
            name: 'Bill',
            selected: false
          }
        ]
      },
      {
        name: 'asd',
        icon: 'anticon-user',
        sub: false,
        children: [
          {
            name: 'Tom',
            selected: false
          },
          {
            name: 'Bill',
            selected: false
          }
        ]
      }
    ]
  };
  openMap = [
    {
      sub: false
    },
    {
      sub: false
    }
  ];

  constructor() {
  }

  ngOnInit() {

  }

  openHandler(val, index: number) {
    if (index === this.openMap.indexOf(val)) {
      this.openMap[index].sub = true;
      for (let i = 0; i < this.openMap.length; i++) {
        if (i !== this.openMap.indexOf(val)) {
          this.openMap[i].sub = false;
          this.openMap[index].sub = true;
        }
      }
    }
  }
}
