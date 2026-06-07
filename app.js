const categories = ["全部", "验房", "报价", "水电", "防水", "施工", "材料", "验收", "维权"];

const prompts = [
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

let activeCategory = "全部";

const categoryTabs = document.querySelector("#categoryTabs");
const promptGrid = document.querySelector("#promptGrid");
const template = document.querySelector("#promptCardTemplate");
const searchInput = document.querySelector("#searchInput");
const toast = document.querySelector("#toast");

const profileFields = {
  houseState: document.querySelector("#houseState"),
  stage: document.querySelector("#stage"),
  community: document.querySelector("#community"),
  concern: document.querySelector("#concern"),
  recipient: document.querySelector("#recipient"),
  generatedPrompt: document.querySelector("#generatedPrompt")
};

function renderTabs() {
  categoryTabs.innerHTML = "";
  categories.forEach((category) => {
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
  const filtered = prompts.filter((item) => {
    const inCategory = activeCategory === "全部" || item.category === activeCategory;
    const inSearch = !keyword || `${item.category}${item.title}${item.when}${item.text}`.includes(keyword);
    return inCategory && inSearch;
  });

  promptGrid.innerHTML = "";
  if (!filtered.length) {
    const empty = document.createElement("p");
    empty.className = "when";
    empty.textContent = "没有找到对应话术，换个关键词试试，比如“报价”“防水”“水电”。";
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

function buildPrompt() {
  const houseState = profileFields.houseState.value;
  const stage = profileFields.stage.value;
  const community = profileFields.community.value.trim() || "我的小区";
  const concern = profileFields.concern.value.trim() || "怕报价不清楚、后期增项、隐蔽工程有问题";
  const recipient = profileFields.recipient.value;

  profileFields.generatedPrompt.value = `您好，我想咨询一下${recipient}这边的装修服务。我家是${community}的${houseState}，目前阶段是“${stage}”。我是装修小白，最担心的是：${concern}。

我想请您先按非毛坯回迁房的情况帮我判断，不要默认全拆全改。麻烦您重点说明：
1. 原有装修哪些可以保留，哪些建议拆改；
2. 水电、防水、墙地面、门窗这些地方有没有风险；
3. 报价里每项的材料、品牌、数量、人工和是否含垃圾清运；
4. 后期可能产生增项的地方，以及怎么提前确认；
5. 如果合作，开工前需要我准备或确认什么。

请您尽量用普通人能听懂的话回复我，也麻烦把关键内容写清楚，方便我和家里人商量。`;
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

document.querySelector("#buildPrompt").addEventListener("click", buildPrompt);
document.querySelectorAll("[data-copy-target]").forEach((button) => {
  button.addEventListener("click", () => {
    const target = document.querySelector(`#${button.dataset.copyTarget}`);
    if (!target.value.trim()) {
      buildPrompt();
    }
    copyText(target.value);
  });
});
searchInput.addEventListener("input", renderPrompts);

renderTabs();
renderPrompts();
buildPrompt();
