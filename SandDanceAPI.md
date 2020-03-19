# API
## Class类
### View
数据展示组件

```typescript
class Viewer{
  // 1.属性
  // 默认的viewer选项
  // https://sanddance.js.org/docs/sanddance/v2/api/types.html#vieweroptions
  public static defaultViewerOptions: ViewerOptions;
  
  // 可视化类型的制定行为
  // https://sanddance.js.org/docs/sanddance/v2/api/types.html#speccapabilities
  // 可视化的一些展示，lable，size等等设置
  public specCapabilities: SpecCapabilities; 
  
  // Viewer选项，后期可选择新加入，用renderSameLayout方法
  // https://sanddance.js.org/docs/sanddance/v2/api/types.html#vieweroptions
  public options: ViewerOptions;
  
  // vega特性，特性
  public vegaSpec: Spec;
  
  // vega view的实例
  public vegaViewGl:ViewGl_Class;
  
  // 用于渲染界面的对象
  public presenter: Presenter;
  
  // 当前渲染的insight对象
  // https://sanddance.js.org/docs/sanddance/v2/api/types.html#insight
  public insight: Insight;
  
  // 颜色
  // https://sanddance.js.org/docs/sanddance/v2/api/types.html#colorcontext
  public colorContexts: ColorContext[];
  
  // 当然颜色。使用renderSameLayout可以更改设置
  public currentColorContext: number;
  
  
  // 2.构造器
  /**
  * element: html元素，用于展示
  * options: 一些可选择的viewer的元素   
  * options选项：https://sanddance.js.org/docs/sanddance/v2/api/types.html#vieweroptions
  **/
  public constructor(element: HTMLElement, options?:Partial<ViewerOpstions>){
    
  }
  
  // 3.方法
  /**
  * 在同一个布局中，加入新的options再次渲染
  * 数据更新，布局响应等等
  **/
  public void renderSameLayout(newViewerOptions?: Partial<ViewerOptions>);
  
  /**
  * 渲染
  * return：Promise<RenderResult>
  * RenderResult: https://sanddance.js.org/docs/sanddance/v2/api/types.html#renderresult
  * insight: 创建数据展示的对象 
  * insight: https://sanddance.js.org/docs/sanddance/v2/api/types.html#insight
  * data: 数据
  * options: 渲染选项
  * options: https://sanddance.js.org/docs/sanddance/v2/api/types.html#renderoptions
  **/
  public async render(insight: Insight, data: object[], options:RenderOptions={}): Promise<RenderResult>;
  
  /**
  * 数据过滤器，筛选, 并且进行动画展示
  * return Promise对象
  * 这个方法涉及到与用户的交互方式，在界面中展示可做筛选的选项，生成Search展示相应的数据
  * search: https://sanddance.js.org/docs/sanddance/v2/api/types.html#search
  * search有相应的筛选表达式: https://vega.github.io/vega/docs/expressions/
  **/
  public filter(search: Search): Promise<void>;
  
  /**
  * 移除所有过滤选项，并且进行动画展示
  * return Promise对象
  **/
  public reset(): Promise<void>;
  
  /**
  * 数据选择
  * 利用的是vega中的filter表达式
  * search: https://sanddance.js.org/docs/sanddance/v2/api/types.html#search
  **/
  public select(search: Search): Promise<void>;
  
  /**
  * 移除所有选择
  * return Promise对象
  **/
  public deselect():Promise<void>;
  
  /**
  * 获取当前所有的选择
  * return SelectionState
  * https://sanddance.js.org/docs/sanddance/v2/api/types.html#selectionstate
  **/
  public getSelection():SelectionState;
  
  /**
  * 选择一个数据行，设置活动状态：用户与数据交互，可以选择某一行数据
  * datum: object
  * return Promise对象
  **/
  public activate(datum: object):Promise<void>;
  
  
  /**
  * 停用
  * return Promise对象
  **/
  public deActivate(): Promise<void>;
  
  /**
  * 获取insight对象
  * https://sanddance.js.org/docs/sanddance/v2/api/types.html#insight
  interface InsightColumns {
    uid?: string;
    x?: string;
    y?: string;
    z?: string;
    group?: string;
    size?: string;
    color?: string;
    sort?: string;
    facet?: string;
}
  **/
  public getInsight():Insight;
  
  /**
  * 或者某一列数据的统计对象，可用于所有或者筛选过的
  * column: 要获取的统计信息的列
  * column：https://sanddance.js.org/docs/sanddance/v2/api/types.html#column
  * return ColumnStats
  * ColumnStats: https://sanddance.js.org/docs/sanddance/v2/api/types.html#columnstats
  **/
  public getColumnStats(column:Column):ColumnStats;
  
  /**
  * 获取当前信号值: 一个interface
  * SignalValues:https://sanddance.js.org/docs/sanddance/v2/api/types.html#signalvalues
  * interface SpecContext {
    specColumns: SpecColumns;
    insight: Insight;
    specViewOptions: SpecViewOptions;
}
  **/
  public getSignalValues():SignalValues;
  
  /**
  * 完成渲染
  **/
  public finalize():void;
}
	
```



