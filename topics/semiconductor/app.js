const directions = [
  {
    id: "semiconductor",
    title: "半导体总览",
    group: "底层框架",
    image: "./assets/semiconductor.png",
    tags: ["半导体", "总览", "制造"],
    short: "半导体是所有芯片方向的底座：设计、制造、封测、材料、设备都围绕它展开。",
    core: "核心问题是把更多电路放进更小面积，并让它更快、更省电、更可靠。",
    position: "上游是设备和材料，中游是设计、制造、封测，下游进入手机、服务器、汽车、工业和通信设备。",
    money: "景气度通常来自终端需求、资本开支、国产替代、制程升级和库存周期。",
    metrics: ["晶圆厂资本开支", "行业库存天数", "先进制程占比", "国产化率", "终端需求增速"],
    risks: ["库存去化慢", "资本开支下修", "价格战", "技术节点推进低于预期"],
    related: ["半导体设备", "半导体材料", "晶圆制造", "封装测试"]
  },
  {
    id: "design",
    title: "IC 设计 / EDA / IP",
    group: "芯片定义",
    image: "./assets/design.png",
    tags: ["半导体", "设计", "软件"],
    short: "设计公司决定芯片做什么，EDA 是画芯片的工具，IP 是可复用的功能模块。",
    core: "核心问题是用有限功耗、面积和成本，实现更高性能和更稳定的功能。",
    position: "处在产业链最前端，设计图纸交给晶圆厂流片，再交给封测厂做成可交付芯片。",
    money: "看下游新品周期、客户导入、授权模式、一次性 NRE 和量产后的版税收入。",
    metrics: ["流片次数", "客户设计定点", "IP 授权收入", "研发费用率", "毛利率"],
    risks: ["流片失败", "客户集中", "迭代慢于竞品", "EDA/IP 生态受限"],
    related: ["晶圆制造", "封装测试", "存储 / HBM", "功率半导体"]
  },
  {
    id: "fab",
    title: "晶圆制造",
    group: "制造核心",
    image: "./assets/semiconductor.png",
    tags: ["半导体", "制造", "资本开支"],
    short: "晶圆制造把芯片设计图转移到硅片上，是光刻、刻蚀、沉积、清洗等工艺的组合。",
    core: "核心问题是良率、成本和制程能力：同样的图纸，谁能稳定量产谁更有价值。",
    position: "连接设计公司和封测厂，也是设备、材料需求的最大来源之一。",
    money: "看产能利用率、先进制程进度、成熟制程价格、客户结构和折旧压力。",
    metrics: ["产能利用率", "良率", "ASP", "折旧占收入比", "资本开支"],
    risks: ["产能过剩", "良率爬坡慢", "折旧压力大", "制程迁移不顺"],
    related: ["半导体设备", "半导体材料", "封装测试", "IC 设计 / EDA / IP"]
  },
  {
    id: "equipment",
    title: "半导体设备",
    group: "制造工具",
    image: "./assets/equipment.png",
    tags: ["半导体", "制造", "设备"],
    short: "设备是晶圆厂和封测厂的生产工具，覆盖光刻、刻蚀、薄膜沉积、清洗、检测、量测。",
    core: "核心问题是工艺能力和稳定性：设备能否进入客户产线并持续拿到复购。",
    position: "位于制造环节上游，晶圆厂扩产和国产替代都会直接影响订单。",
    money: "常见催化是招标、验收、客户扩产、先进制程验证和国产替代突破。",
    metrics: ["新签订单", "在手订单", "验收节奏", "客户数量", "产品线覆盖度"],
    risks: ["验收延期", "客户扩产放缓", "核心零部件受限", "竞争导致毛利下降"],
    related: ["晶圆制造", "半导体材料", "封装测试", "检测量测"]
  },
  {
    id: "materials",
    title: "半导体材料",
    group: "制造耗材",
    image: "./assets/materials.png",
    tags: ["半导体", "材料", "制造"],
    short: "材料包括硅片、光刻胶、电子特气、湿电子化学品、靶材、CMP 抛光材料等。",
    core: "核心问题是纯度、稳定性和认证周期；材料一旦进产线，切换成本很高。",
    position: "贯穿晶圆制造和先进封装，是设备之外另一个国产替代重点。",
    money: "看客户认证、产能释放、进口替代份额、单耗提升和价格周期。",
    metrics: ["客户认证进度", "产能利用率", "国产替代份额", "单吨/单片盈利", "产品纯度等级"],
    risks: ["认证周期过长", "价格下行", "客户导入低于预期", "扩产后利用率不足"],
    related: ["晶圆制造", "半导体设备", "封装测试", "PCB / HDI / 载板"]
  },
  {
    id: "packaging",
    title: "封装测试 / 先进封装",
    group: "芯片成品化",
    image: "./assets/packaging.png",
    tags: ["半导体", "制造", "AI算力"],
    short: "封装把裸芯片保护、连接、散热并做成可安装的器件，测试确认性能和可靠性。",
    core: "核心问题是把多个芯片更高密度地连在一起，同时控制散热、信号完整性和成本。",
    position: "处在晶圆制造之后、终端装机之前；先进封装和 AI 芯片、HBM 高度相关。",
    money: "看 CoWoS、Chiplet、2.5D/3D 封装产能，测试机台需求和客户订单。",
    metrics: ["先进封装产能", "稼动率", "测试时长", "客户结构", "单位封装价值量"],
    risks: ["客户订单波动", "扩产不及预期", "良率爬坡慢", "价格压力"],
    related: ["存储 / HBM", "PCB / HDI / 载板", "半导体设备", "IC 设计 / EDA / IP"]
  },
  {
    id: "hbm",
    title: "存储 / HBM",
    group: "数据搬运",
    image: "./assets/hbm.png",
    tags: ["半导体", "AI算力", "存储"],
    short: "存储负责保存和搬运数据，HBM 是高带宽存储，常和 AI GPU 或 ASIC 共同封装。",
    core: "核心问题是带宽和功耗：AI 训练推理需要把大量数据快速喂给计算芯片。",
    position: "连接 AI 芯片、先进封装和服务器，是算力链条里价值量快速提升的环节。",
    money: "看 HBM 代际升级、供需缺口、价格、封装配套和国产替代进度。",
    metrics: ["DRAM/NAND 价格", "HBM 产能", "带宽规格", "客户认证", "库存水位"],
    risks: ["存储价格回落", "扩产过快", "客户认证滞后", "技术代际落后"],
    related: ["封装测试 / 先进封装", "IC 设计 / EDA / IP", "PCB / HDI / 载板"]
  },
  {
    id: "pcb",
    title: "PCB / HDI / 载板",
    group: "电子连接骨架",
    image: "./assets/pcb.png",
    tags: ["AI互连", "材料", "服务器"],
    short: "PCB 是电子设备的电路板，HDI 更高密度，ABF 载板常用于高性能芯片封装。",
    core: "核心问题是高速信号、电源完整性、层数、材料损耗和加工精度。",
    position: "连接芯片、内存、光模块、电源和整机，是服务器、交换机和消费电子的基础件。",
    money: "看 AI 服务器放量、高层数板占比、低损耗材料、载板供需和客户认证。",
    metrics: ["层数", "良率", "高端产品占比", "单位面积价值量", "客户认证"],
    risks: ["终端需求波动", "铜价和树脂成本", "扩产竞争", "客户切换"],
    related: ["光模块", "CPO", "存储 / HBM", "封装测试 / 先进封装"]
  },
  {
    id: "optical",
    title: "光模块",
    group: "数据中心互连",
    image: "./assets/optical-module.png",
    tags: ["AI互连", "通信", "服务器"],
    short: "光模块把电信号和光信号互相转换，是数据中心服务器和交换机之间高速通信的关键器件。",
    core: "核心问题是速率、功耗、成本和可靠性；800G、1.6T 代表更高带宽需求。",
    position: "位于数据中心网络和通信设备里，上游包括光芯片、DSP、PCB、结构件和光器件。",
    money: "看 AI 集群建设、海外云厂商资本开支、速率升级和客户份额。",
    metrics: ["800G/1.6T 出货", "客户份额", "单价", "毛利率", "光芯片自供率"],
    risks: ["客户砍单", "价格下行", "认证不达标", "技术路线切换"],
    related: ["CPO", "PCB / HDI / 载板", "硅光", "交换芯片"]
  },
  {
    id: "cpo",
    title: "CPO 共封装光学",
    group: "下一代互连",
    image: "./assets/cpo.png",
    tags: ["AI互连", "通信", "前沿"],
    short: "CPO 把光引擎放到交换芯片旁边，减少电信号走线距离，降低高速互连功耗。",
    core: "核心问题是当带宽继续提升时，传统可插拔光模块的功耗和信号损耗会越来越吃紧。",
    position: "处在交换芯片、硅光、封装、光器件和系统厂商的交叉点。",
    money: "看交换芯片代际、硅光成熟度、封装能力、热管理和大客户试点。",
    metrics: ["交换芯片带宽", "功耗/bit", "硅光良率", "系统验证", "量产时间表"],
    risks: ["商业化节奏慢", "可维护性挑战", "生态标准未统一", "传统光模块路线延寿"],
    related: ["光模块", "PCB / HDI / 载板", "封装测试 / 先进封装", "硅光"]
  },
  {
    id: "power",
    title: "功率半导体",
    group: "电能控制",
    image: "./assets/power.png",
    tags: ["半导体", "电力电子", "汽车"],
    short: "功率半导体负责开关、整流、变频和电源管理，常见于新能源车、光伏、储能、工业电源。",
    core: "核心问题是高电压、大电流、低损耗和可靠性，SiC、GaN 是重要升级方向。",
    position: "更靠近应用端，和汽车电动化、工业自动化、能源系统强相关。",
    money: "看新能源汽车渗透率、SiC 产能、模块封装、车规认证和价格曲线。",
    metrics: ["车规认证", "SiC 衬底良率", "模块出货", "导通损耗", "客户定点"],
    risks: ["车市需求放缓", "SiC 降价", "良率不足", "海外大厂竞争"],
    related: ["半导体材料", "封装测试 / 先进封装", "汽车电子"]
  }
];

const chain = [
  { title: "AI 应用", text: "训练、推理、多模态应用拉动算力需求。" },
  { title: "GPU / ASIC", text: "计算芯片决定峰值算力，也带动 HBM 和先进封装。" },
  { title: "HBM / 封装", text: "解决数据喂给芯片的带宽瓶颈。" },
  { title: "PCB / 载板", text: "承载高速信号、电源和封装连接。" },
  { title: "光模块 / CPO", text: "把服务器和交换机高速连起来。" },
  { title: "设备 / 材料", text: "扩产、工艺升级、国产替代的上游抓手。" }
];

const relations = [
  {
    title: "光模块和 CPO",
    text: "光模块是当下主流出货形态，CPO 是更靠前沿的集成路线。短期看 800G/1.6T 出货，长期看功耗和系统架构变化。"
  },
  {
    title: "PCB 和 AI 服务器",
    text: "AI 服务器对高层数、高速低损耗材料、供电和散热要求更高，因此普通 PCB 与高端服务器板的价值量差异很大。"
  },
  {
    title: "设备和材料",
    text: "设备通常随晶圆厂资本开支波动，材料更像持续消耗品；设备看订单和验收，材料看认证、份额和价格。"
  },
  {
    title: "先进封装和 HBM",
    text: "HBM 要和计算芯片高密度互连，先进封装能力直接影响 AI 芯片供给，因此两者经常一起被市场交易。"
  },
  {
    title: "设计和制造",
    text: "设计公司轻资产但研发风险高，制造厂重资产且折旧压力大；两者都受制程、客户和终端周期影响。"
  },
  {
    title: "功率半导体",
    text: "它和 AI 互连关系没那么直接，更偏新能源车、光伏、储能和工业控制，是另一条电力电子主线。"
  }
];

const glossary = [
  { term: "晶圆", tag: "制造", text: "用来制造芯片的圆形硅片。晶圆越大、良率越高，单位成本通常越低。" },
  { term: "流片", tag: "设计", text: "把芯片设计交给晶圆厂试生产。流片成功不等于量产成功，还要验证和良率爬坡。" },
  { term: "良率", tag: "制造", text: "合格芯片数量占总产出的比例。良率是制造和封装盈利能力的关键。" },
  { term: "光刻", tag: "设备", text: "把电路图案转移到晶圆上的关键工艺，光刻机是最受关注的半导体设备之一。" },
  { term: "刻蚀", tag: "设备", text: "按图案把材料去掉，形成电路结构。先进制程中刻蚀步骤很多。" },
  { term: "薄膜沉积", tag: "设备", text: "在晶圆上沉积极薄材料层，常见设备包括 CVD、PVD、ALD。" },
  { term: "电子特气", tag: "材料", text: "半导体制造用高纯气体，影响反应过程、纯度和良率。" },
  { term: "光刻胶", tag: "材料", text: "对光敏感的材料，用来形成图案。高端光刻胶认证周期长、壁垒高。" },
  { term: "CMP", tag: "材料", text: "化学机械抛光，让晶圆表面更平坦，常涉及抛光液和抛光垫。" },
  { term: "CoWoS", tag: "封装", text: "一种先进封装技术，常用于把 AI 计算芯片和 HBM 高密度连接。" },
  { term: "Chiplet", tag: "封装", text: "把大芯片拆成多个小芯片组合，提高设计灵活性和制造良率。" },
  { term: "HBM", tag: "存储", text: "高带宽存储，把多层 DRAM 堆叠起来，为 AI 芯片提供高数据带宽。" },
  { term: "SerDes", tag: "互连", text: "高速串并转换电路，是芯片间和板级高速通信的重要模块。" },
  { term: "PAM4", tag: "光模块", text: "一种高速信号调制方式，用更多电平承载更多信息，常见于高速光模块。" },
  { term: "800G / 1.6T", tag: "光模块", text: "光模块速率规格，代表每秒传输数据能力，AI 数据中心推动快速升级。" },
  { term: "硅光", tag: "CPO", text: "用硅基工艺制造光学器件，有望降低成本并提高集成度。" },
  { term: "CPO", tag: "CPO", text: "共封装光学，把光引擎靠近交换芯片，目标是降低高速互连功耗。" },
  { term: "ABF 载板", tag: "PCB", text: "高性能芯片封装常用基板，连接芯片和 PCB，对材料和加工精度要求高。" },
  { term: "HDI", tag: "PCB", text: "高密度互连电路板，用更细线路和微孔承载更多连接。" },
  { term: "SiC", tag: "功率", text: "碳化硅材料，适合高压高温功率器件，常见于新能源汽车和光伏。" }
];

const learningPath = [
  {
    title: "先分清三条主线",
    text: "半导体制造链、AI 数据中心互连链、功率电力电子链。很多新闻只是三条主线的不同节点。"
  },
  {
    title: "再定位产业链位置",
    text: "看到公司或概念时，先问它在上游设备材料、中游制造封测，还是下游服务器、通信、汽车。"
  },
  {
    title: "记住几个硬指标",
    text: "设备看订单和验收，材料看认证和份额，光模块看速率和客户，PCB 看层数和材料，封装看产能和良率。"
  },
  {
    title: "把技术词翻译成商业问题",
    text: "先进制程、CPO、HBM、SiC 本质都要回答成本、性能、功耗、可靠性和量产时间。"
  },
  {
    title: "区分当期业绩和远期想象",
    text: "光模块、PCB 可能已有订单兑现，CPO 和部分材料设备可能更多是远期验证和导入预期。"
  },
  {
    title: "用风险信号反向校验",
    text: "如果订单、价格、良率、客户认证、资本开支任何一个关键变量变弱，方向热度可能先于基本面降温。"
  }
];

const tagOrder = ["全部", "半导体", "AI互连", "制造", "材料", "通信", "服务器", "电力电子"];

const state = {
  activeId: "semiconductor",
  activeTag: "全部",
  query: "",
  view: "map"
};

const byId = new Map(directions.map((item) => [item.id, item]));

const els = {
  search: document.querySelector("#searchInput"),
  tagFilters: document.querySelector("#tagFilters"),
  directionGrid: document.querySelector("#directionGrid"),
  detailPane: document.querySelector("#detailPane"),
  chainFlow: document.querySelector("#chainFlow"),
  relationGrid: document.querySelector("#relationGrid"),
  metricsBody: document.querySelector("#metricsBody"),
  glossaryGrid: document.querySelector("#glossaryGrid"),
  learningPath: document.querySelector("#learningPath"),
  modeButtons: document.querySelectorAll(".mode-button"),
  views: document.querySelectorAll("[data-view-panel]")
};

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function searchable(value) {
  return String(value).toLowerCase().replace(/\s+/g, "");
}

function directionMatches(direction) {
  const tagMatches = state.activeTag === "全部" || direction.tags.includes(state.activeTag);
  if (!tagMatches) return false;
  if (!state.query) return true;
  const q = searchable(state.query);
  const haystack = searchable([
    direction.title,
    direction.group,
    direction.short,
    direction.core,
    direction.position,
    direction.money,
    direction.tags.join(" "),
    direction.metrics.join(" "),
    direction.related.join(" ")
  ].join(" "));
  return haystack.includes(q);
}

function glossaryMatches(item) {
  if (!state.query) return true;
  const q = searchable(state.query);
  return searchable(`${item.term}${item.tag}${item.text}`).includes(q);
}

function renderTags() {
  els.tagFilters.innerHTML = tagOrder.map((tag) => `
    <button class="tag-button ${tag === state.activeTag ? "active" : ""}" data-tag="${escapeHtml(tag)}">
      ${escapeHtml(tag)}
    </button>
  `).join("");
}

function renderCards() {
  const filtered = directions.filter(directionMatches);
  if (!filtered.length) {
    els.directionGrid.innerHTML = `<div class="empty-state">没有匹配方向</div>`;
    return;
  }

  if (!filtered.some((item) => item.id === state.activeId)) {
    state.activeId = filtered[0].id;
  }

  els.directionGrid.innerHTML = filtered.map((direction) => `
    <article class="direction-card ${direction.id === state.activeId ? "active" : ""}" data-id="${escapeHtml(direction.id)}" tabindex="0">
      <span class="direction-media"><img src="${escapeHtml(direction.image)}" alt="${escapeHtml(direction.title)}示意图" loading="lazy"></span>
      <span class="direction-body">
        <span class="direction-kicker">${escapeHtml(direction.group)}</span>
        <h3>${escapeHtml(direction.title)}</h3>
        <p>${escapeHtml(direction.short)}</p>
        <span class="mini-tags">
          ${direction.tags.slice(0, 3).map((tag) => `<span class="mini-tag">${escapeHtml(tag)}</span>`).join("")}
        </span>
      </span>
    </article>
  `).join("");
}

function renderDetail() {
  const direction = byId.get(state.activeId) || directions[0];
  els.detailPane.innerHTML = `
    <div class="detail-hero">
      <img src="${escapeHtml(direction.image)}" alt="${escapeHtml(direction.title)}示意图">
      <div>
        <span class="direction-kicker">${escapeHtml(direction.group)}</span>
        <h2>${escapeHtml(direction.title)}</h2>
        <p>${escapeHtml(direction.short)}</p>
      </div>
    </div>
    <div class="detail-content">
      <section class="detail-block">
        <h3>它解决什么问题</h3>
        <p>${escapeHtml(direction.core)}</p>
      </section>
      <section class="detail-block">
        <h3>产业链位置</h3>
        <p>${escapeHtml(direction.position)}</p>
      </section>
      <section class="detail-block">
        <h3>业绩和预期通常看什么</h3>
        <p>${escapeHtml(direction.money)}</p>
      </section>
      <section class="detail-block">
        <h3>常看指标</h3>
        <ul class="metric-list">
          ${direction.metrics.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
        </ul>
      </section>
      <section class="detail-block">
        <h3>容易误判的地方</h3>
        <ul class="bullet-list">
          ${direction.risks.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
        </ul>
      </section>
      <section class="detail-block">
        <h3>相邻方向</h3>
        <p>${escapeHtml(direction.related.join(" / "))}</p>
      </section>
    </div>
  `;
}

function renderChain() {
  els.chainFlow.innerHTML = chain.map((node) => `
    <div class="chain-node">
      <b>${escapeHtml(node.title)}</b>
      <span>${escapeHtml(node.text)}</span>
    </div>
  `).join("");

  els.relationGrid.innerHTML = relations.map((item) => `
    <article class="relation-card">
      <h3>${escapeHtml(item.title)}</h3>
      <p>${escapeHtml(item.text)}</p>
    </article>
  `).join("");
}

function renderMetrics() {
  els.metricsBody.innerHTML = directions.map((direction) => `
    <tr data-id="${escapeHtml(direction.id)}">
      <td><span class="table-title">${escapeHtml(direction.title)}</span><br>${escapeHtml(direction.group)}</td>
      <td>${escapeHtml(direction.core)}</td>
      <td>${escapeHtml(direction.metrics.join(" / "))}</td>
      <td>${escapeHtml(direction.risks.join(" / "))}</td>
    </tr>
  `).join("");
}

function renderGlossary() {
  const items = glossary.filter(glossaryMatches);
  els.glossaryGrid.innerHTML = items.length ? items.map((item) => `
    <article class="glossary-card">
      <span class="term-tag">${escapeHtml(item.tag)}</span>
      <h3>${escapeHtml(item.term)}</h3>
      <p>${escapeHtml(item.text)}</p>
    </article>
  `).join("") : `<div class="empty-state">没有匹配术语</div>`;
}

function renderLearningPath() {
  els.learningPath.innerHTML = learningPath.map((item, index) => `
    <article class="path-step">
      <span class="path-index">${index + 1}</span>
      <div>
        <h3>${escapeHtml(item.title)}</h3>
        <p>${escapeHtml(item.text)}</p>
      </div>
    </article>
  `).join("");
}

function showView(view) {
  state.view = view;
  els.modeButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.view === view);
  });
  els.views.forEach((panel) => {
    panel.classList.toggle("active", panel.dataset.viewPanel === view);
  });
}

function renderAll() {
  renderTags();
  renderCards();
  renderDetail();
  renderChain();
  renderMetrics();
  renderGlossary();
  renderLearningPath();
}

els.search.addEventListener("input", (event) => {
  state.query = event.target.value.trim();
  renderCards();
  renderDetail();
  renderGlossary();
});

els.tagFilters.addEventListener("click", (event) => {
  const button = event.target.closest("[data-tag]");
  if (!button) return;
  state.activeTag = button.dataset.tag;
  renderTags();
  renderCards();
  renderDetail();
});

els.directionGrid.addEventListener("click", (event) => {
  const card = event.target.closest("[data-id]");
  if (!card) return;
  state.activeId = card.dataset.id;
  renderCards();
  renderDetail();
});

els.directionGrid.addEventListener("keydown", (event) => {
  if (event.key !== "Enter" && event.key !== " ") return;
  const card = event.target.closest("[data-id]");
  if (!card) return;
  event.preventDefault();
  state.activeId = card.dataset.id;
  renderCards();
  renderDetail();
});

els.metricsBody.addEventListener("click", (event) => {
  const row = event.target.closest("[data-id]");
  if (!row) return;
  state.activeId = row.dataset.id;
  showView("map");
  renderCards();
  renderDetail();
  window.scrollTo({ top: 0, behavior: "smooth" });
});

els.modeButtons.forEach((button) => {
  button.addEventListener("click", () => showView(button.dataset.view));
});

renderAll();
