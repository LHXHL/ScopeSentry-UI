export default {
  common: {
    filesize: '大小',
    quantity: '数量',
    import: '导入',
    category: '分类',
    uploadMsg:
      '批量导入，只支持nuclei，将yaml文件放入zip中上传，可直接将nuclei官方poc库下载上传会自动提取poc。',
    upload: '上传',
    cover: '覆盖',
    download: '下载',
    operation: '操作',
    selectAll: '全选',
    multipleSelection: '多选',
    name: '名称',
    cversion: '当前版本',
    lversion: '最新版本',
    updateButtonMsg: '目前只支持升级Server',
    switchAction: '开',
    switchInactive: '关',
    inputText: '请输入',
    selectText: '请选择',
    startTimeText: '开始时间',
    endTimeText: '结束时间',
    changePassword: '修改密码',
    submit: '提交',
    updatemsg: '发现新版本',
    update: '一键更新',
    querysyntax: '查询语法',
    true: '是',
    statusStop: '暂停',
    false: '否',
    version: '系统版本信息',
    newPassword: '新密码',
    login: '登录',
    edit: '编辑',
    delete: '删除',
    view: '查看',
    new: '新建',
    state: '状态',
    config: '设置',
    on: '开启',
    off: '关闭',
    save: '保存',
    required: '该项为必填项',
    loginOut: '退出系统',
    document: '项目文档',
    reminder: '温馨提示',
    loginOutMessage: '是否退出本系统？',
    back: '返回',
    ok: '确定',
    cancel: '取消',
    reload: '重新加载',
    closeTab: '关闭标签页',
    closeTheLeftTab: '关闭左侧标签页',
    closeTheRightTab: '关闭右侧标签页',
    closeOther: '关闭其它标签页',
    closeAll: '关闭全部标签页',
    prevLabel: '上一步',
    nextLabel: '下一步',
    skipLabel: '跳过',
    doneLabel: '结束',
    menu: '菜单',
    menuDes: '以路由的结构渲染的菜单栏',
    collapse: '展开缩收',
    collapseDes: '展开和缩放菜单栏',
    tagsView: '标签页',
    tagsViewDes: '用于记录路由历史记录',
    tool: '工具',
    toolDes: '用于设置定制系统',
    query: '查询',
    reset: '重置',
    shrink: '收起',
    expand: '展开',
    delMessage: '是否删除所选中数据？',
    delWarning: '提示',
    delOk: '确定',
    delCancel: '取消',
    delNoData: '请选择需要删除的数据',
    delSuccess: '删除成功',
    refresh: '刷新',
    fullscreen: '全屏',
    size: '尺寸',
    columnSetting: '列设置',
    lengthRange: '长度在 {min} 到 {max} 个字符',
    notSpace: '不能包含空格',
    notSpecialCharacters: '不能包含特殊字符',
    isEqual: '两次输入不一致'
  },
  export: {
    exportType: '导出类型',
    exportTypeAll: '所有数据',
    exportTypeSearch: '当前搜索条件',
    exportQuantity: '导出数据量',
    exportRecords: '导出记录',
    fileName: '文件名',
    createTime: '创建时间',
    endTime: '完成时间',
    fileSize: '文件大小',
    state: '状态',
    run: '进行中',
    success: '成功',
    fail: '失败',
    type: '类型',
    download: '下载'
  },
  searchHelp: {
    notice: '关键字需要用双引号包裹',
    operator: '运算符',
    meaning: '含义',
    equal: '精准匹配，表示仅查询关键词资产。',
    notIn: '剔除，表示剔除包含关键词资产。',
    like: '匹配，表示查询包含关键词资产（支持正则输入）。',
    brackets: '括号内容优先级最高',
    and: '与条件',
    or: '或条件',
    keywords: '关键字',
    explain: '说明',
    example: '示例',
    app: '检索指定组件',
    body: '检索HTTP响应体',
    header: '检索HTTP请求头',
    title: '检测网站标题',
    statuscode: '检索响应码，不支持模糊查找',
    icon: '根据网站图标hash检索',
    ip: '检索IP',
    port: '检索端口',
    domain: '检索域名',
    protocol: '根据服务检索',
    banner: '检索非HTTP资产的Banner',
    project: '根据项目名称检索',
    length: '根据响应长度检索，不支持模糊查找',
    subdomainType: '检索记录类型',
    subdoaminValue: '检索记录值',
    url: '检索URL',
    inpur: '检索输入源',
    source: '检索URL来源',
    urlType: '检索URL类型',
    method: '检索Method',
    crawlerBody: '检索POST数据',
    sname: '检索敏感信息名称',
    sinfo: '检索敏感信息',
    redirect: '检索跳转链接',
    vulname: '检索漏洞名称',
    matched: '检索匹配内容',
    vulRequest: '检索请求内容',
    response: '检索响应内容',
    hash: '检索响应hash',
    diff: '检索diff内容',
    level: '检索漏洞等级(info、high、medium、critical、low、unknown)',
    sensMd5: '根据响应体MD5检索',
    sensLevel: '根据敏感信息等级搜索（red、green、cyan、yellow、orange、gray、pink）',
    taskName: '根据任务名称检索，仅支持精确查找'
  },
  lock: {
    lockScreen: '锁定屏幕',
    lock: '锁定',
    lockPassword: '锁屏密码',
    unlock: '点击解锁',
    backToLogin: '返回登录',
    entrySystem: '进入系统',
    placeholder: '请输入锁屏密码',
    message: '锁屏密码错误'
  },
  error: {
    noPermission: `抱歉，您无权访问此页面。`,
    pageError: '抱歉，您访问的页面不存在。',
    networkError: '抱歉，服务器报告错误。',
    returnToHome: '返回首页'
  },
  setting: {
    projectSetting: '项目配置',
    theme: '主题',
    layout: '布局',
    systemTheme: '系统主题',
    menuTheme: '菜单主题',
    interfaceDisplay: '界面显示',
    breadcrumb: '面包屑',
    breadcrumbIcon: '面包屑图标',
    collapseMenu: '折叠菜单',
    hamburgerIcon: '折叠图标',
    screenfullIcon: '全屏图标',
    sizeIcon: '尺寸图标',
    localeIcon: '多语言图标',
    tagsView: '标签页',
    logo: '标志',
    greyMode: '灰色模式',
    fixedHeader: '固定头部',
    headerTheme: '头部主题',
    cutMenu: '切割菜单',
    copy: '拷贝',
    clearAndReset: '清除缓存并且重置',
    copySuccess: '拷贝成功',
    copyFailed: '拷贝失败',
    footer: '页脚',
    uniqueOpened: '菜单手风琴',
    tagsViewIcon: '标签页图标',
    dynamicRouter: '开启动态路由',
    serverDynamicRouter: '服务端动态路由',
    reExperienced: '请重新退出登录体验',
    fixedMenu: '固定菜单'
  },
  size: {
    default: '默认',
    large: '大',
    small: '小'
  },
  login: {
    welcome: '欢迎使用本系统',
    message: '开箱即用的中后台管理系统',
    username: '用户名',
    password: '密码',
    register: '注册',
    checkPassword: '确认密码',
    login: '登录',
    otherLogin: '其它登录方式',
    remember: '记住我',
    hasUser: '已有账号？去登录',
    forgetPassword: '忘记密码',
    usernamePlaceholder: '请输入用户名',
    passwordPlaceholder: '请输入密码',
    code: '验证码',
    codePlaceholder: '请输入验证码'
  },
  router: {
    assetinfo: '资产信息',
    taskManagement: '任务管理',
    scanTask: '扫描任务',
    scheduledTask: '计划任务',
    nodeManagement: '节点管理',
    projectManagement: '项目管理',
    projectDetail: '项目信息',
    vulFingerprint: '漏洞-指纹',
    pocManagement: 'POC管理',
    fingerprintManagement: '指纹管理',
    sensitiveInformationRules: '敏感信息规则',
    dictionaryManagement: '字典管理',
    subdomainDictionary: '子域名字典',
    dirDictionary: '目录扫描',
    portDictionary: '端口',
    configuration: '配置',
    subfinder: 'subfinder配置',
    rad: 'rad配置',
    system: '系统配置',
    login: '登录',
    level: '多级菜单',
    menu: '菜单',
    menu1: '菜单1',
    menu11: '菜单1-1',
    menu111: '菜单1-1-1',
    menu12: '菜单1-2',
    menu2: '菜单2',
    dashboard: '首页',
    analysis: '分析页',
    workplace: '工作台',
    guide: '引导',
    component: '组件',
    icon: '图标',
    echart: '图表',
    countTo: '数字动画',
    watermark: '水印',
    qrcode: '二维码',
    highlight: '高亮',
    infotip: '信息提示',
    form: '表单',
    defaultForm: '全部示例',
    search: '查询',
    table: '表格',
    defaultTable: '基础示例',
    editor: '编辑器',
    richText: '富文本',
    jsonEditor: 'JSON编辑器',
    dialog: '弹窗',
    imageViewer: '图片预览',
    descriptions: '描述',
    example: '综合示例',
    exampleDialog: '综合示例 - 弹窗',
    examplePage: '综合示例 - 页面',
    exampleAdd: '综合示例 - 新增',
    exampleEdit: '综合示例 - 编辑',
    exampleDetail: '综合示例 - 详情',
    errorPage: '错误页面',
    authorization: '权限管理',
    user: '用户管理',
    role: '角色管理',
    document: '文档',
    inputPassword: '密码输入框',
    sticky: '黏性',
    treeTable: '树形表格',
    PicturePreview: '表格图片预览',
    department: '部门管理',
    menuManagement: '菜单管理',
    permission: '权限测试页',
    function: '功能',
    multipleTabs: '多开标签页',
    details: '详情页',
    iconPicker: '图标选择器',
    request: '请求',
    waterfall: '瀑布流',
    imageCropping: '图片裁剪',
    videoPlayer: '视频播放器',
    tableVideoPreview: '表格视频预览',
    cardTable: '卡片表格'
  },
  permission: {
    hasPermission: '请设置操作权限值'
  },
  dashboard: {
    totalAssets: '资产总数',
    subDomain: '子域名',
    informationLeakage: '信息泄露',
    URL: 'URL',
    nodeInfo: '节点状态信息',
    taskInfo: '任务信息'
  },
  node: {
    nodeName: '节点名称',
    nodeStatus: '节点状态',
    taskCount: '任务数量',
    finished: '完成数量',
    statusRun: '运行中',
    statusStop: '暂停',
    statusError: '未连接',
    nodeUsageStatus: '节点使用状态',
    nodeUsageCpu: 'CPU',
    nodeUsageMemory: '内存',
    nodeUsageLoad: '负载',
    createTime: '创建时间',
    updateTime: '更新时间',
    log: '日志',
    onlineNodeMsg: '没有连接中的扫描节点'
  },
  task: {
    taskName: '任务名称',
    taskCount: '任务数量',
    taskProgress: '任务进度',
    taskCycle: '任务周期',
    createTime: '创建时间',
    endTime: '结束时间',
    addTask: '新建任务',
    addURL: '新建URL',
    delURL: '删除URL',
    retest: '重新测试',
    delTask: '删除任务',
    delAsset: '同时删除资产:',
    typeTask: '任务类型',
    lastTime: '上次运行',
    nextTime: '下次运行',
    msgTaskName: '请输入任务名称',
    taskTarget: '目标',
    subdomainTakeover: '子域名接管',
    assetMapping: '资产测绘',
    msgTarget: '请输入域名或IP，一行一个。',
    subdomainScan: '子域名扫描',
    nodeSelect: '节点选择',
    nodeMsg: '请选择扫描节点',
    config: '配置',
    portScan: '端口扫描',
    portSelect: '选择端口',
    url: 'URL',
    msgUrl: '获取更多页面入口',
    sensitiveInfoScan: '扫描敏感信息',
    pageMonitoring: '监控页面变动',
    msgPageMonitoringAll: '监控所有页面',
    msgPageMonitoringJs: '仅监控JS页面',
    msgCrawler: '爬虫获取get以及post参数，建议开启URL扫描获取更多网站入口。',
    vulScan: '漏洞扫描',
    vulList: '漏洞列表',
    save: '保存',
    duplicatesSubdomain: '子域名去重',
    data: '数据',
    selectNodeMsg:
      '只有通过点击All选择节点当有新节点注册时才会自动将任务添加到新节点，否则任务只会在当前选择节点中运行！',
    duplicatesMsg: '历史已经查询到了子域名将会跳过',
    waybackUrlMsg: '从Wayback Machine获取URL',
    addPageMonitTask: '新建页面监控',
    duplicates: '去重',
    duplicatesPort: '端口去重',
    duplicatesPortMsg: '仅扫描未发现的端口',
    runNow: '立即运行'
  },
  asset: {
    assetName: '资产',
    banner: 'Banner',
    products: '应用/组件',
    IP: 'IP',
    domain: '域名',
    port: '端口',
    service: '服务',
    title: '标题',
    status: '状态码',
    time: '时间',
    total: '共',
    p: '条',
    detail: '详情',
    assetDetail: '资产详情',
    assetTotalNum: '资产总数',
    responseHeader: '响应头',
    responseBody: '响应体',
    historyDiff: '历史变更',
    export: '导出'
  },
  subdomain: {
    subdomainName: '子域名',
    recordType: '记录类型',
    recordValue: '记录值'
  },
  URL: {
    URLName: 'URL',
    source: '来源',
    type: '类型',
    input: '输入'
  },
  crawler: {
    crawlerName: '爬虫',
    getParameter: 'GET参数',
    postParameter: 'POST参数'
  },
  sensitiveInformation: {
    sensitiveInformationName: '敏感信息',
    sensitiveName: '名称',
    sensitiveColor: '颜色',
    sensitiveRegular: '正则',
    sensitiveNameMsg: '请输入规则名称',
    sensitiveRegularMsg: '请输入正则表达式',
    sensAggre: '敏感信息名称聚合'
  },
  dirScan: {
    dirScanName: '目录扫描',
    title: '标题',
    status: '状态码',
    length: '长度'
  },
  vulnerability: {
    vulnerabilityName: '漏洞'
  },
  PageMonitoring: {
    pageMonitoringName: '页面监控',
    oldResponseBody: '原始响应体',
    currentResponseBody: '当前响应体'
  },
  project: {
    project: '项目',
    addProject: '新建项目',
    totalAssets: '总资产',
    projectName: '项目名称',
    msgProject: '请输入项目名称',
    projectScope: '项目范围',
    msgProjectScope: '输入项目的根域名，一行一个。',
    msgScheduledTasks: '定时扫描',
    scheduledTasks: '定时任务',
    cycle: '监控周期',
    projectDetail: '项目信息',
    CreatTime: '创建时间',
    msgProjectTag: '请输入项目TAG',
    aggregation: '聚合',
    overview: '概况'
  },
  poc: {
    pocName: 'POC名称',
    level: '风险等级',
    content: 'POC内容',
    critical: '严重',
    high: '高危',
    medium: '中等',
    low: '低',
    info: '信息',
    unknown: '未知',
    nameMsg: '请输入POC名称,POC名称和POC内容中的name应保持一致。',
    contentMsg: '请输入poc内容'
  },
  configuration: {
    subfinder: 'subfinder配置',
    rad: 'rad配置',
    system: '系统配置',
    timezone: '时区',
    maxTaskNum: '最大任务数量',
    dirScanThread: '目录扫描并发数',
    portScanThread: '端口扫描并发数',
    crawlerThread: '爬虫并行数',
    urlThread: 'URL爬取线程数',
    maxUrlNum: '最大URL获取数量',
    threadMsg: '请根据系统内存自行配置并发数量(参考文档)',
    noticeConfig: '通知配置',
    newWebhookConfig: '新建配置',
    noticeHelp: '*msg*为消息参数位置。eg:http://example.com?msg=*msg*  or POST "msg":"*msg*"',
    duplicationconfiguration: '去重配置',
    deduplicationHour: '去重周期',
    deduplicationFlag: '去重开关',
    runNowOne: '立即运行一次'
  },
  form: {
    input: '搜索'
  },
  portDict: {
    name: '名称',
    value: '值',
    nameMsg: '请输入名称',
    valueMsg: '请输入值'
  },
  fingerprint: {
    name: '名称',
    rule: '规则',
    category: '类型',
    nameMsg: '请输入指纹名称',
    ruleMsg: '请输入规则内容',
    parentCategory: '归类',
    amount: '资产数量'
  },
  workplace: {
    goodMorning: '早安',
    happyDay: '祝你开心每一天!',
    toady: '今日晴',
    project: '项目数',
    access: '项目访问',
    toDo: '待办',
    introduction: '一个正经的简介',
    more: '更多',
    shortcutOperation: '快捷操作',
    operation: '操作',
    index: '指数',
    personal: '个人',
    team: '团队',
    quote: '引用',
    contribution: '贡献',
    hot: '热度',
    yield: '产量',
    dynamic: '动态',
    push: '推送',
    pushCode: 'Archer 推送 代码到 Github',
    follow: '关注'
  },
  formDemo: {
    input: '输入框',
    inputNumber: '数字输入框',
    default: '默认',
    icon: '图标',
    mixed: '复合型',
    password: '密码框',
    textarea: '多行文本',
    remoteSearch: '远程搜索',
    slot: '插槽',
    position: '位置',
    autocomplete: '自动补全',
    select: '选择器',
    optionSlot: '选项插槽',
    selectGroup: '选项分组',
    selectV2: '虚拟列表选择器',
    cascader: '级联选择器',
    switch: '开关',
    rate: '评分',
    colorPicker: '颜色选择器',
    transfer: '穿梭框',
    render: '渲染器',
    radio: '单选框',
    radioGroup: '单选框组',
    button: '按钮',
    checkbox: '多选框',
    checkboxButton: '多选框按钮',
    checkboxGroup: '多选框组',
    slider: '滑块',
    datePicker: '日期选择器',
    shortcuts: '快捷选项',
    today: '今天',
    yesterday: '昨天',
    aWeekAgo: '一周前',
    week: '周',
    year: '年',
    month: '月',
    dates: '日期',
    daterange: '日期范围',
    monthrange: '月份范围',
    dateTimePicker: '日期时间选择器',
    dateTimerange: '日期时间范围',
    timePicker: '时间选择器',
    timeSelect: '时间选择',
    inputPassword: '密码输入框',
    passwordStrength: '密码强度',
    defaultForm: '全部示例',
    formDes: '基于 ElementPlus 的 Form 组件二次封装，实现数据驱动，支持所有 Form 参数',
    example: '示例',
    operate: '操作',
    change: '更改',
    restore: '还原',
    disabled: '禁用',
    disablement: '解除禁用',
    delete: '删除',
    add: '添加',
    setValue: '设置值',
    resetValue: '重置值',
    set: '设置',
    subitem: '子项',
    formValidation: '表单验证',
    verifyReset: '验证重置',
    // 富文本编辑器
    richText: '富文本编辑器',
    // JSON编辑器
    jsonEditor: 'JSON编辑器',
    form: '表单',
    // 远程加载
    remoteLoading: '远程加载',
    // 聚焦
    focus: '聚焦',
    treeSelect: '树形选择器',
    showCheckbox: '显示复选框',
    selectAnyLevel: '选择任意级别',
    multiple: '多选',
    filterable: '可筛选',
    customContent: '自定义内容',
    lazyLoad: '懒加载',
    upload: '上传',
    userAvatar: '用户头像',
    iconPicker: '图标选择器'
  },
  guideDemo: {
    guide: '引导页',
    start: '开始',
    message:
      '引导页对于一些第一次进入项目的人很有用，你可以简单介绍下项目的功能。引导页基于 driver.js'
  },
  iconDemo: {
    icon: '图标',
    localIcon: '本地图标',
    iconify: 'Iconify组件',
    recommendedUse: '推荐使用',
    recommendeDes:
      'Iconify组件基本包含所有的图标，你可以查询到你想要的任何图标。并且打包只会打包所用到的图标。',
    accessAddress: '访问地址'
  },
  echartDemo: {
    echart: '图表',
    echartDes:
      '基于 echarts 二次封装组件，自适应宽度，只需传入 options 与 height 属性即可展示对应的图表。'
  },
  countToDemo: {
    countTo: '数字动画',
    countToDes: '基于 vue-count-to 进行改造，支持所有 vue-count-to 参数。',
    suffix: '后缀',
    prefix: '前缀',
    separator: '分割符号',
    duration: '持续时间',
    endVal: '结束值',
    startVal: '开始值',
    start: '开始',
    pause: '暂停',
    resume: '继续'
  },
  watermarkDemo: {
    watermark: '水印',
    createdWatermark: '创建水印',
    clearWatermark: '清除水印',
    resetWatermark: '重置水印'
  },
  qrcodeDemo: {
    qrcode: '二维码',
    qrcodeDes: '基于 qrcode 二次封装',
    basicUsage: '基础用法',
    imgTag: 'img标签',
    style: '样式配置',
    click: '点击事件',
    asynchronousContent: '异步内容',
    invalid: '失效',
    logoConfig: 'logo配置',
    logoStyle: 'logo样式',
    size: '大小配置'
  },
  highlightDemo: {
    highlight: '高亮',
    message: '种一棵树最好的时间是十年前，其次就是现在。',
    keys1: '十年前',
    keys2: '现在'
  },
  infotipDemo: {
    infotip: '信息提示',
    infotipDes: '基于 Highlight 组件二次封装',
    title: '注意事项'
  },
  levelDemo: {
    menu: '多级菜单缓存'
  },
  searchDemo: {
    search: '查询',
    searchDes: '基于 Form 组件二次封装，实现查询、重置功能',
    operate: '操作',
    change: '更改',
    grid: '栅格',
    button: '按钮',
    restore: '还原',
    inline: '内联',
    bottom: '底部',
    position: '位置',
    left: '左',
    center: '中',
    right: '右',
    dynamicOptions: '动态选项',
    // 删除单选框
    deleteRadio: '删除单选框',
    // 还原单选框
    restoreRadio: '还原单选框',
    loading: '加载中',
    reset: '重置'
  },
  stickyDemo: {
    sticky: '黏性'
  },
  tableDemo: {
    table: '表格',
    tableDes: '基于 ElementPlus 的 Table 组件二次封装',
    index: '序号',
    title: '标题',
    author: '作者',
    displayTime: '创建时间',
    importance: '重要性',
    pageviews: '阅读数',
    action: '操作',
    important: '重要',
    good: '良好',
    commonly: '一般',
    operate: '操作',
    example: '示例',
    show: '显示',
    hidden: '隐藏',
    pagination: '分页',
    reserveIndex: '叠加序号',
    restoreIndex: '还原序号',
    showSelections: '显示多选',
    hiddenSelections: '隐藏多选',
    showExpandedRows: '显示展开行',
    hiddenExpandedRows: '隐藏展开行',
    changeTitle: '修改标题',
    header: '头部',
    selectAllNone: '全选/全不选',
    delOrAddAction: '删除/添加操作列',
    showOrHiddenStripe: '显示/隐藏斑马纹',
    showOrHiddenBorder: '显示/隐藏边框',
    fixedHeaderOrAuto: '固定头部/自动',
    getSelections: '获取多选数据',
    preview: '封面',
    showOrHiddenSortable: '显示/隐藏排序',
    videoPreview: '视频预览',
    cardTable: '卡片表格'
  }
}
