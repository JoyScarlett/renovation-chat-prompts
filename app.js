const ownerCategories = ["全部", "验房", "报价", "水电", "防水", "施工", "材料", "验收", "维权"];
const salesCategories = ["全部", "画像", "预算", "户型", "破冰", "需求", "痛点", "方案", "报价", "邀约", "促单", "跟进", "成交"];

const ownerPrompts = [
  {
    category: "验房",
    title: "约师傅上门前先说明房况",
    when: "适合第一次联系验房师、工长或装修公司。",
    text: "您好，我家是【非毛坯回迁房】，不是毛坯房。我想先做一次基础检查，再决定哪些保留、哪些拆改。麻烦您上门时重点帮我看：墙面空鼓开裂、地砖空鼓、门窗密封、厨卫防水、水电点位和原装修质量。请提前告诉我检查项目、费用、需要多长时间，以及检查后能不能给我一份问题清单。"
  },
  {
    category: "验房",
    title: "让对方别只看表面",
    when: "对方说“看着还行”时使用。",
    text: "我对装修不太懂，麻烦您不要只看表面新旧。这个房子是回迁房带装修，我更担心隐蔽问题，比如水电走线、防水、墙地面空鼓、下水坡度、门窗渗水。您能不能按项目逐项检查，并告诉我哪些是必须处理、哪些可以暂时保留？"
  },
  {
    category: "报价",
    title: "索要清楚报价单",
    when: "装修公司或工长只报总价时使用。",
    text: "麻烦不要只给我一个总价。我需要一份明细报价，写清楚每一项的施工内容、数量、单价、材料品牌型号、人工费、辅料、损耗、是否含拆除和垃圾清运。后面如果有增项，也请先报价、先确认，再施工。"
  },
  {
    category: "报价",
    title: "防止低价进场后增项",
    when: "对方报价明显偏低，或者催你签约时使用。",
    text: "我可以理解报价有高低，但我比较担心后期增项。麻烦您把目前能预见的项目都列进去，尤其是拆除、找平、防水、水电局改、墙面基层处理、收口、搬运、垃圾清运。哪些不包含，也请直接写在报价单里，我好做真实对比。"
  },
  {
    category: "水电",
    title: "非毛坯房水电局改沟通",
    when: "想保留原有装修，但又怕点位不够。",
    text: "我家不是全屋重装，水电希望以局部改造为主。麻烦您先帮我判断原有线路能不能继续用，哪些位置必须新增插座或改开关。请不要默认全屋重改，先给我一版保留方案和一版改造方案，并说明差价和风险。"
  },
  {
    category: "水电",
    title: "确认水电施工标准",
    when: "水电开工前发给工长。",
    text: "水电开工前麻烦先和我确认点位图、数量、回路、线径、水管品牌、走顶还是走地、是否拍照留底。施工完成后请给我看水电照片和尺寸记录，方便以后维修或打孔避开管线。没有确认的点位先不要改。"
  },
  {
    category: "防水",
    title: "要求厨卫重新做闭水",
    when: "卫生间、厨房要动砖或动管道。",
    text: "因为是回迁房带装修，我不确定原防水质量。如果卫生间或厨房涉及拆砖、改管、换地漏，麻烦按重新做防水处理，并做闭水试验。闭水前请通知我和楼下邻居/物业确认，闭水时间、照片和结果都留一下。"
  },
  {
    category: "施工",
    title: "施工前确认保护和责任",
    when: "家里有保留的门窗、地砖、柜体、电器。",
    text: "这套房有些原装修我想保留。开工前麻烦把需要保护的门窗、地砖、柜体、电器列出来，并确认保护方式。如果施工中造成损坏，请提前说清楚责任和修复办法。拆除前也请先拍照确认，避免误拆。"
  },
  {
    category: "施工",
    title: "让工长每天反馈进度",
    when: "自己不懂，也不能天天去现场。",
    text: "我不是很懂装修，也不一定每天能到现场。麻烦您每天收工后发我几张现场照片，简单说一下今天做了什么、明天做什么、有没有需要我确认的问题。涉及加钱、改方案、换材料的地方，请先微信确认。"
  },
  {
    category: "材料",
    title: "问清材料品牌和替换规则",
    when: "购买瓷砖、乳胶漆、板材、洁具前。",
    text: "麻烦您把材料的品牌、型号、规格、环保等级、颜色、数量、单价、送货安装费用写清楚。如果后面缺货或需要替换，请先给我同价位或更高标准的替代方案，经过我确认后再换，不要直接换成不清楚的型号。"
  },
  {
    category: "验收",
    title: "阶段验收确认",
    when: "水电、防水、瓦工、油工每个阶段完工时。",
    text: "这个阶段完工后，我想先验收再进入下一步。麻烦您把需要我看的地方列出来，包括数量、位置、工艺、是否和报价一致、有没有后续隐患。验收发现的问题请先整改，整改完成后我再确认下一阶段。"
  },
  {
    category: "维权",
    title: "发现问题后的冷静沟通",
    when: "出现质量问题、拖延或增项争议。",
    text: "这个问题我需要先暂停确认一下。麻烦您把原因、解决方案、费用责任和完成时间写清楚。我们之前约定的是先确认再施工/先报价再增项，所以这部分我暂时不能直接认可。请您今天先给我一个书面回复，方便双方核对。"
  }
];

const salesPrompts = [
  {
    category: "画像",
    title: "按客户画像开口",
    when: "知道顾客是自住、出租、父母住或急入住时。",
    text: "姐，我先按您的使用需求来判断，不按固定套餐硬套。如果是自住，重点是水电、防水、收纳和环保；如果是出租，重点是耐用、好打理、控制预算；如果是给父母住，重点是安全、防滑、动线方便。您这套更偏哪一种，我就按这个方向给您做建议。"
  },
  {
    category: "预算",
    title: "引导顾客说预算范围",
    when: "顾客怕一说预算就被抬价。",
    text: "姐，预算不是为了把钱花满，是为了帮您避开不合适的方案。您可以只说一个范围，比如基础入住、实用舒适、品质一点。回迁房装修最重要的是先分清必花的钱和可选的钱，这样后面才不会越装越超。"
  },
  {
    category: "户型",
    title: "让顾客发户型和面积",
    when: "报价前需要先确认户型。",
    text: "姐，方便的话把户型图或房本面积发我一下，最好再说一下几室几厅几卫。户型不同，水电点位、柜子、墙面面积和厨卫改造差别很大。我先按户型给您判断哪些项目是必须做的，哪些可以先不花钱。"
  },
  {
    category: "跟进",
    title: "按跟进天数推进下一步",
    when: "聊了几天但顾客还没行动。",
    text: "姐，咱们已经聊了几天了，我帮您捋一下现在最该定的不是马上花多少钱，而是先确定房子怎么装最合适。要不今天先把户型、预算和保留项目定一下，我给您做一版初步清单；您看完再决定要不要约量房，这样推进起来更踏实。"
  },
  {
    category: "破冰",
    title: "刚加微信的自然开场",
    when: "顾客刚通过微信，还没开始聊装修。",
    text: "姐您好，我是做回迁房装修服务的。刚加上您先不打扰，我简单了解一下：您这套房是准备自己住，还是先简单装一下出租？回迁房一般不是从零开始装，重点是判断哪些能保留、哪些必须改，这样更省钱也更稳。"
  },
  {
    category: "破冰",
    title: "不硬推的第一句",
    when: "担心顾客反感销售时。",
    text: "姐，我先不跟您推套餐，咱们先把房子情况弄清楚。您把小区、户型、打算入住时间告诉我，我先帮您判断大方向：是局部翻新合适，还是需要系统改造。能省的地方我会直接告诉您，没必要一上来就全拆。"
  },
  {
    category: "需求",
    title: "销售员必须问的 10 个问题",
    when: "用于建立客户档案，判断成交可能性。",
    text: "我先问您几个关键问题，方便后面给您做准确建议：1. 房子在哪个小区？2. 几室几厅几卫？3. 原装修打算保留多少？4. 准备自住、给父母住，还是出租？5. 大概什么时候入住？6. 家里几口人住？7. 预算大概有个范围吗？8. 最担心水电、防水、环保还是价格？9. 家里谁一起决策？10. 您更想先看报价，还是先预约量房？"
  },
  {
    category: "需求",
    title: "问预算但不冒犯",
    when: "顾客不愿意直接说预算。",
    text: "预算您不用说得特别准，我只是想避免给您推荐不合适的方案。您可以给我一个大概范围：比如想基础入住、实用舒适，还是想效果好一点。回迁房装修最怕方案和预算不匹配，前面聊清楚，后面就少花冤枉钱。"
  },
  {
    category: "痛点",
    title: "引导顾客说出担心点",
    when: "顾客只说“先了解一下”。",
    text: "明白，装修确实要先了解。那我先问一句：您现在最担心的是价格高、后期增项、施工质量，还是装完不好看不好住？您先告诉我最担心的点，我就按这个方向给您讲，免得我说一堆您用不上的。"
  },
  {
    category: "痛点",
    title: "把回迁房风险讲清楚",
    when: "顾客觉得房子带装修，可以随便弄弄。",
    text: "姐，回迁房带装修确实能省一部分，但不能只看表面。我们一般重点看四个地方：水电够不够用、防水稳不稳、墙地面有没有空鼓、门窗和收口质量怎么样。该保留的保留，该处理的提前处理，不然后面入住再返工更麻烦。"
  },
  {
    category: "方案",
    title: "给顾客三档方案选择",
    when: "顾客不知道怎么装。",
    text: "您这种情况我建议先按三档看：第一档是基础翻新，保留能用的，控制预算；第二档是舒适入住，重点改水电、防水、墙面和收纳；第三档是整体效果，设计、柜体、软装一起考虑。您先告诉我更偏哪一档，我再给您拆细项。"
  },
  {
    category: "方案",
    title: "让顾客发户型图/现场照片",
    when: "需要进一步判断房子情况。",
    text: "姐，您方便的话发我一下户型图，或者拍几张客厅、厨房、卫生间、卧室、阳台的照片。我先帮您看哪些地方能保留、哪些地方可能要改。这样我给您的建议会更准，也避免只凭感觉乱报价。"
  },
  {
    category: "报价",
    title: "解释报价不是只看总价",
    when: "顾客说别人更便宜。",
    text: "姐，您对比价格是对的，但装修不能只看总价。要看里面包不包拆除、垃圾清运、防水、水电、墙面基层、材料品牌和售后。有些报价低，是先少写项目，后面再增项。您可以把两份报价发我，我帮您按项目对比，哪里差钱一眼就能看出来。"
  },
  {
    category: "报价",
    title: "让报价显得透明可信",
    when: "顾客怕被坑、怕增项。",
    text: "我们这边可以把报价拆开给您看：人工、材料、工艺、数量、品牌、哪些包含、哪些不包含都写清楚。后期如果现场确实有变化，也一定是先说明、先报价、您确认后再施工，不会先干完再让您被动加钱。"
  },
  {
    category: "邀约",
    title: "邀约量房",
    when: "顾客有意向，但还没到店或没量房。",
    text: "姐，回迁房不看现场很难给准价格，因为要判断哪些能保留、哪些要改。要不我帮您约个免费量房？师傅上门把水电、防水、墙面、门窗简单看一遍，回来给您做一版更准的方案和预算。您明天方便，还是后天方便？"
  },
  {
    category: "邀约",
    title: "邀约到店看材料和案例",
    when: "顾客在线上聊得差不多，需要推进。",
    text: "姐，微信上能讲方向，但材料、工艺、报价明细最好还是现场看一下。您到店不用马上定，我们先带您看回迁房案例、材料样板和报价清单，您心里会更有底。您这周哪天方便，我给您提前安排接待？"
  },
  {
    category: "促单",
    title: "温和促单，不压迫",
    when: "顾客已经认可方案，但还没下定。",
    text: "姐，我看您现在主要是想再稳一稳，这个很正常。这样，咱们今天先把方案、报价和能保留的项目确认下来。如果您觉得方向没问题，可以先定量房/设计档期，后面细节还可以继续调整。这样不会耽误工期，也能把现在的优惠和师傅时间先锁住。"
  },
  {
    category: "促单",
    title: "临门一脚定金话术",
    when: "顾客说再考虑一下。",
    text: "姐，您再考虑我理解。只是现在您房子的情况、方案方向和预算范围都比较清楚了，继续拖主要会影响开工排期和材料活动价。您可以先交一个小定，把设计、量房和优惠名额锁住；如果后面方案细节有不合适，我们再调整到您满意再开工。"
  },
  {
    category: "跟进",
    title: "隔天跟进不尴尬",
    when: "顾客昨天聊过，今天没回复。",
    text: "姐，昨天咱们聊到您这套回迁房主要是想省心入住，又担心后期增项。我今天把重点给您整理一下：先看原装修能保留多少，再确定水电防水要不要改，最后按明细报价控制预算。您看我现在给您做一版初步清单，还是先约个时间看现场？"
  },
  {
    category: "成交",
    title: "成交后安抚和确认",
    when: "顾客交定后，增强信任感。",
    text: "姐，收到您的确认了。后面我会按流程帮您盯好：量房、方案、报价、材料、开工和阶段验收都会提前跟您确认。涉及加钱、换材料、改方案的地方，一定先给您说清楚再做。您放心，咱们目标就是把钱花明白，把房子装踏实。"
  }
];

let activeMode = "owner";
let activeCategory = "全部";

const categoryTabs = document.querySelector("#categoryTabs");
const promptGrid = document.querySelector("#promptGrid");
const template = document.querySelector("#promptCardTemplate");
const searchInput = document.querySelector("#searchInput");
const toast = document.querySelector("#toast");

const modeButtons = document.querySelectorAll("[data-mode]");
const ownerProfile = document.querySelector("#ownerProfile");
const salesProfile = document.querySelector("#salesProfile");
const ownerNotes = document.querySelector("#ownerNotes");
const salesNotes = document.querySelector("#salesNotes");
const ownerRecipient = document.querySelector(".owner-recipient");
const salesRecipient = document.querySelector(".sales-recipient");
const eyebrow = document.querySelector("#eyebrow");
const pageTitle = document.querySelector("#pageTitle");
const composerTitle = document.querySelector("#composerTitle");
const composerHint = document.querySelector("#composerHint");

const fields = {
  houseState: document.querySelector("#houseState"),
  stage: document.querySelector("#stage"),
  community: document.querySelector("#community"),
  concern: document.querySelector("#concern"),
  recipient: document.querySelector("#recipient"),
  generatedPrompt: document.querySelector("#generatedPrompt"),
  customerPersona: document.querySelector("#customerPersona"),
  customerStatus: document.querySelector("#customerStatus"),
  customerHouse: document.querySelector("#customerHouse"),
  customerLayout: document.querySelector("#customerLayout"),
  budgetRange: document.querySelector("#budgetRange"),
  followDays: document.querySelector("#followDays"),
  customerFocus: document.querySelector("#customerFocus"),
  salesGoal: document.querySelector("#salesGoal"),
  salesTone: document.querySelector("#salesTone")
};

function getCategories() {
  return activeMode === "owner" ? ownerCategories : salesCategories;
}

function getPrompts() {
  return activeMode === "owner" ? ownerPrompts : salesPrompts;
}

function setMode(mode) {
  activeMode = mode;
  activeCategory = "全部";
  searchInput.value = "";
  modeButtons.forEach((button) => button.classList.toggle("active", button.dataset.mode === mode));

  const isSales = mode === "sales";
  ownerProfile.classList.toggle("hidden", isSales);
  ownerNotes.classList.toggle("hidden", isSales);
  ownerRecipient.classList.toggle("hidden", isSales);
  salesProfile.classList.toggle("hidden", !isSales);
  salesNotes.classList.toggle("hidden", !isSales);
  salesRecipient.classList.toggle("hidden", !isSales);

  eyebrow.textContent = isSales ? "回迁房装修销售微信话术" : "装修小白聊天提示词";
  pageTitle.textContent = isSales ? "从聊天破冰到促单成交" : "选场景，直接复制发给对方";
  composerTitle.textContent = isSales ? "一键生成销售跟进微信" : "一键生成开场白";
  composerHint.textContent = isSales
    ? "把顾客状态、房屋情况和成交动作合进去，生成一段能直接发的微信。"
    : "把你的房屋情况合进去，适合发给装修公司、工长、设计师或物业。";

  renderTabs();
  renderPrompts();
  isSales ? buildSalesPrompt() : buildOwnerPrompt();
}

function renderTabs() {
  categoryTabs.innerHTML = "";
  getCategories().forEach((category) => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = category;
    button.className = category === activeCategory ? "active" : "";
    button.addEventListener("click", () => {
      activeCategory = category;
      renderTabs();
      renderPrompts();
    });
    categoryTabs.appendChild(button);
  });
}

function renderPrompts() {
  const keyword = searchInput.value.trim();
  const filtered = getPrompts().filter((item) => {
    const inCategory = activeCategory === "全部" || item.category === activeCategory;
    const inSearch = !keyword || `${item.category}${item.title}${item.when}${item.text}`.includes(keyword);
    return inCategory && inSearch;
  });

  promptGrid.innerHTML = "";
  if (!filtered.length) {
    const empty = document.createElement("p");
    empty.className = "when";
    empty.textContent = "没有找到对应话术，换个关键词试试，比如“报价”“防水”“促单”“邀约”。";
    promptGrid.appendChild(empty);
    return;
  }

  filtered.forEach((item) => {
    const card = template.content.firstElementChild.cloneNode(true);
    card.querySelector(".tag").textContent = item.category;
    card.querySelector("h3").textContent = item.title;
    card.querySelector(".when").textContent = item.when;
    const textarea = card.querySelector("textarea");
    textarea.value = item.text;
    card.querySelector(".copy-btn").addEventListener("click", () => copyText(item.text));
    promptGrid.appendChild(card);
  });
}

function buildOwnerPrompt() {
  const houseState = fields.houseState.value;
  const stage = fields.stage.value;
  const community = fields.community.value.trim() || "我的小区";
  const concern = fields.concern.value.trim() || "怕报价不清楚、后期增项、隐蔽工程有问题";
  const recipient = fields.recipient.value;

  fields.generatedPrompt.value = `您好，我想咨询一下${recipient}这边的装修服务。我家是${community}的${houseState}，目前阶段是“${stage}”。我是装修小白，最担心的是：${concern}。

我想请您先按非毛坯回迁房的情况帮我判断，不要默认全拆全改。麻烦您重点说明：
1. 原有装修哪些可以保留，哪些建议拆改；
2. 水电、防水、墙地面、门窗这些地方有没有风险；
3. 报价里每项的材料、品牌、数量、人工和是否含垃圾清运；
4. 后期可能产生增项的地方，以及怎么提前确认；
5. 如果合作，开工前需要我准备或确认什么。

请您尽量用普通人能听懂的话回复我，也麻烦把关键内容写清楚，方便我和家里人商量。`;
}

function buildSalesPrompt() {
  const persona = fields.customerPersona.value;
  const status = fields.customerStatus.value;
  const house = fields.customerHouse.value.trim() || "回迁房，带基础装修，具体户型还需要进一步确认";
  const layout = fields.customerLayout.value.trim() || "户型和面积还没完全确认";
  const budget = fields.budgetRange.value;
  const followDays = fields.followDays.value || "1";
  const focus = fields.customerFocus.value;
  const goal = fields.salesGoal.value;
  const tone = fields.salesTone.value;

  fields.generatedPrompt.value = `姐您好，我先按您的情况简单整理一下。您现在属于“${status}”，客户需求更偏“${persona}”。房子情况大概是：${house}；户型是：${layout}；预算目前是“${budget}”。咱们已经跟进到第 ${followDays} 天，您比较在意的是“${focus}”，所以我不会一上来给您推贵的方案，咱们先把能保留的、必须改的、容易后期花冤枉钱的地方弄清楚。

我建议咱们下一步先做“${goal}”。这样做的好处是：
1. 按您的客户画像决定装修重点，不乱推不适合的项目；
2. 按预算范围先分清必做项和可选项，避免越聊越超；
3. 按户型判断水电、防水、墙面、柜体这些真实工程量；
4. 报价按项目列清楚，避免后面临时增项；
5. 您和家里人也能有依据，不用只听别人说。

您方便的话，先把户型图或现场照片发我几张。我先帮您做一个初步判断，再告诉您怎么装更省心、更划算。`;

  if (tone === "温和促单") {
    fields.generatedPrompt.value += "\n\n如果您觉得方向没问题，我可以先帮您把量房/设计时间排上，后面方案和预算都还能继续细调。先把时间和优惠锁住，不耽误入住计划，也不用现在就把所有细节一次性定死。";
  }
}

async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text);
  } catch (error) {
    const helper = document.createElement("textarea");
    helper.value = text;
    document.body.appendChild(helper);
    helper.select();
    document.execCommand("copy");
    helper.remove();
  }
  toast.classList.add("show");
  window.setTimeout(() => toast.classList.remove("show"), 1300);
}

modeButtons.forEach((button) => {
  button.addEventListener("click", () => setMode(button.dataset.mode));
});

document.querySelector("#buildPrompt").addEventListener("click", buildOwnerPrompt);
document.querySelector("#buildSalesPrompt").addEventListener("click", buildSalesPrompt);
document.querySelectorAll("[data-copy-target]").forEach((button) => {
  button.addEventListener("click", () => {
    const target = document.querySelector(`#${button.dataset.copyTarget}`);
    if (!target.value.trim()) {
      activeMode === "sales" ? buildSalesPrompt() : buildOwnerPrompt();
    }
    copyText(target.value);
  });
});

searchInput.addEventListener("input", renderPrompts);

setMode("owner");
