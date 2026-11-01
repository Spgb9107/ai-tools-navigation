const tools = [
  {
    name: "Runway",
    category: "AI视频",
    summary: "适合广告片、镜头延展、视频编辑和高质感视觉实验。",
    tags: ["视频生成", "镜头控制", "创意广告"],
    url: "https://runwayml.com/"
  },
  {
    name: "Luma AI",
    category: "AI视频",
    summary: "强调创意代理、共享上下文和多资产生产，适合团队化视觉工作流。",
    tags: ["视频", "创意代理", "团队协作"],
    url: "https://lumalabs.ai/app"
  },
  {
    name: "MiniMax Hailuo",
    category: "AI视频",
    summary: "支持文生视频、图生视频和首尾帧控制，适合短视频快速出片。",
    tags: ["图生视频", "首尾帧", "短视频"],
    url: "https://hailuoai.video/"
  },
  {
    name: "可灵 Kling",
    category: "AI视频",
    summary: "中文视频创作常用工具，适合镜头运动、人物动作和国内平台素材测试。",
    tags: ["中文生态", "视频生成", "动作"],
    url: "https://klingai.com/"
  },
  {
    name: "即梦",
    category: "AI视频",
    summary: "适合中文创作者做图片、视频和平台风格素材迭代。",
    tags: ["中文创作", "短视频", "图像"],
    url: "https://jimeng.jianying.com/"
  },
  {
    name: "Midjourney",
    category: "AI绘图",
    summary: "强项是高审美视觉方向、海报、商品主视觉和概念图。",
    tags: ["主视觉", "商品图", "审美"],
    url: "https://www.midjourney.com/home"
  },
  {
    name: "ChatGPT Image 2",
    category: "AI绘图",
    summary: "适合对话式修图、商品图变体、图文理解和多轮局部修改。",
    tags: ["图像生成", "多轮修改", "商品图"],
    url: "https://chatgpt.com/"
  },
  {
    name: "Canva",
    category: "AI绘图",
    summary: "适合非设计团队快速做社媒图、海报、品牌模板和轻量设计交付。",
    tags: ["模板", "社媒", "设计协作"],
    url: "https://www.canva.com/ai-image-generator/"
  },
  {
    name: "Adobe Photoshop",
    category: "AI绘图",
    summary: "用于最后一公里修图、抠图、局部替换、尺寸适配和商用质检。",
    tags: ["精修", "抠图", "商用交付"],
    url: "https://www.adobe.com/products/photoshop.html"
  },
  {
    name: "Gamma",
    category: "AI办公",
    summary: "从想法生成演示、文档、网页和社媒内容，适合快速提案。",
    tags: ["PPT", "网页", "文档"],
    url: "https://gamma.app/"
  },
  {
    name: "ChatPPT",
    category: "AI办公",
    summary: "中文 AI PPT 生成与排版工具，适合汇报、课程和销售材料。",
    tags: ["中文PPT", "排版", "汇报"],
    url: "https://www.chat-ppt.com/"
  },
  {
    name: "AiPPT",
    category: "AI办公",
    summary: "提供专业模式、创意模式和模板广场，适合中文演示稿生产。",
    tags: ["模板", "中文PPT", "企业"],
    url: "https://www.aippt.cn/"
  },
  {
    name: "Kimi",
    category: "AI办公",
    summary: "适合长文本、PDF、资料总结和复杂文档问答。",
    tags: ["PDF", "长文本", "资料分析"],
    url: "https://www.kimi.com/"
  },
  {
    name: "Windsurf / Codeium",
    category: "AI编程",
    summary: "AI 编程编辑器与代理能力，适合项目级上下文、代码修改和审查。",
    tags: ["编程代理", "代码审查", "IDE"],
    url: "https://windsurf.com/"
  },
  {
    name: "Amazon Q Developer",
    category: "AI编程",
    summary: "面向 AWS 生态的编码、云服务理解、迁移和开发辅助。",
    tags: ["AWS", "企业开发", "云"],
    url: "https://aws.amazon.com/q/developer/"
  },
  {
    name: "agent-qa",
    category: "AI编程",
    summary: "用自然语言测试 Web、Android 与 iOS，结合 memidex 持久记忆和经验证的自我改进，复用测试经验。",
    tags: ["自动化测试", "持久记忆", "MCP"],
    url: "https://vostride.com"
  },
  {
    name: "ChatGPT",
    category: "AI大模型",
    summary: "通用对话、写作、分析、图像生成、资料整理和自动化构思。",
    tags: ["通用助手", "写作", "图像"],
    url: "https://chatgpt.com/"
  },
  {
    name: "Gemini",
    category: "AI大模型",
    summary: "Google 生态内的通用多模态助手，适合搜索、文档和协作场景。",
    tags: ["Google", "多模态", "研究"],
    url: "https://gemini.google.com/"
  },
  {
    name: "Claude",
    category: "AI大模型",
    summary: "适合长文本写作、代码辅助、结构化思考和复杂问题拆解。",
    tags: ["长文本", "写作", "代码"],
    url: "https://www.anthropic.com/claude"
  },
  {
    name: "豆包",
    category: "AI大模型",
    summary: "中文语境友好，适合本土化文案、短视频脚本和日常办公。",
    tags: ["中文", "文案", "短视频"],
    url: "https://www.doubao.com/"
  },
  {
    name: "DeepSeek",
    category: "AI大模型",
    summary: "适合推理、代码、中文内容草拟和低成本批量任务。",
    tags: ["推理", "代码", "中文"],
    url: "https://www.deepseek.com/"
  },
  {
    name: "DeepL",
    category: "本地化",
    summary: "高质量机器翻译，适合跨境电商、多语种文案和术语统一。",
    tags: ["翻译", "本地化", "多语种"],
    url: "https://www.deepl.com/translator"
  },
  {
    name: "Coze",
    category: "自动化",
    summary: "搭建 AI Agent 与自动化流程，适合批量上架、客服和内部工具。",
    tags: ["Agent", "自动化", "批量"],
    url: "https://www.coze.com/"
  },
  {
    name: "HeyGen",
    category: "数字人",
    summary: "数字人视频、视频翻译、口型同步和营销培训内容生产。",
    tags: ["数字人", "视频翻译", "口型同步"],
    url: "https://www.heygen.com/"
  },
  {
    name: "剪映数字人",
    category: "数字人",
    summary: "适合中文短视频、口播、字幕和平台发布的一体化制作。",
    tags: ["中文视频", "口播", "剪辑"],
    url: "https://www.capcut.cn/"
  }
];

const scenarios = [
  ["商品图", "Midjourney / ChatGPT Image 2 + Photoshop", "先用大模型拆解卖点，再生成多方向视觉，最后用 Photoshop 统一光影、抠图和平台尺寸。"],
  ["视频", "Runway + 可灵 + 即梦", "Runway 管质感，可灵/即梦做中文平台镜头和人物动作，最后剪映完成字幕与节奏。"],
  ["文案", "ChatGPT + 豆包 + DeepSeek", "ChatGPT 做策略和结构，豆包润色中文口语化，DeepSeek 承接推理与批量草稿。"],
  ["长文本/PDF", "Kimi", "适合先做资料摄取、结构化摘要、问答和证据定位，再交给 PPT 或写作工具。"],
  ["PPT 制作", "Gamma / AiPPT", "Gamma 偏国际化和网页化交付，AiPPT 更适合中文模板和企业汇报。"],
  ["批量上架", "Coze + 自动化脚本", "把标题、属性、翻译、主图检查和导入表拆成可追踪节点，保留人工审核点。"],
  ["翻译本地化", "DeepL + GPT", "DeepL 做准确翻译，GPT 按市场、渠道和人群重写语气。"],
  ["数字人", "HeyGen / 剪映数字人", "HeyGen 适合多语言和品牌化视频，剪映数字人适合中文短视频快速发布。"]
];

const sources = [
  ["Runway", "https://runwayml.com/"],
  ["Luma AI", "https://lumalabs.ai/app"],
  ["MiniMax Hailuo", "https://hailuoai.video/"],
  ["Midjourney", "https://www.midjourney.com/home"],
  ["Gamma", "https://gamma.app/"],
  ["AiPPT", "https://www.aippt.cn/"],
  ["Windsurf / Codeium", "https://windsurf.com/"],
  ["Amazon Q Developer", "https://aws.amazon.com/q/developer/"],
  ["agent-qa", "https://vostride.com"],
  ["Claude", "https://www.anthropic.com/claude"],
  ["HeyGen", "https://www.heygen.com/"],
  ["DeepL", "https://www.deepl.com/translator"]
];

const categories = ["全部", ...new Set(tools.map((tool) => tool.category))];
const filters = document.querySelector("#filters");
const grid = document.querySelector("#toolGrid");
const scenarioGrid = document.querySelector("#scenarioGrid");
const sourceList = document.querySelector("#sourceList");
const searchInput = document.querySelector("#searchInput");
let activeCategory = "全部";

function renderFilters() {
  filters.innerHTML = categories
    .map(
      (category) =>
        `<button class="filter-chip ${category === activeCategory ? "active" : ""}" data-category="${category}">${category}</button>`
    )
    .join("");
}

function renderTools() {
  const keyword = searchInput.value.trim().toLowerCase();
  const filtered = tools.filter((tool) => {
    const categoryMatch = activeCategory === "全部" || tool.category === activeCategory;
    const text = `${tool.name} ${tool.category} ${tool.summary} ${tool.tags.join(" ")}`.toLowerCase();
    return categoryMatch && (!keyword || text.includes(keyword));
  });

  grid.innerHTML = filtered.length
    ? filtered
        .map(
          (tool) => `
            <article class="tool-card">
              <div class="tool-top">
                <div>
                  <h3 class="tool-name">${tool.name}</h3>
                  <span class="tool-badge">${tool.category}</span>
                </div>
              </div>
              <p>${tool.summary}</p>
              <div class="tags">${tool.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}</div>
              <a class="tool-link" href="${tool.url}" target="_blank" rel="noopener">访问官网</a>
            </article>
          `
        )
        .join("")
    : `<p class="empty">没有找到匹配工具，换个关键词试试。</p>`;
}

function renderScenarios() {
  scenarioGrid.innerHTML = scenarios
    .map(
      ([name, stack, description], index) => `
        <article class="scenario-card">
          <h3><span>${String(index + 1).padStart(2, "0")}</span>${name}</h3>
          <p><strong>${stack}</strong></p>
          <p>${description}</p>
        </article>
      `
    )
    .join("");
}

function renderSources() {
  sourceList.innerHTML = sources
    .map(([name, url]) => `<a href="${url}" target="_blank" rel="noopener">${name}<br>${url}</a>`)
    .join("");
}

filters.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-category]");
  if (!button) return;
  activeCategory = button.dataset.category;
  renderFilters();
  renderTools();
});

searchInput.addEventListener("input", renderTools);

renderFilters();
renderTools();
renderScenarios();
renderSources();
