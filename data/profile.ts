import type { I18nText } from "@/contexts/LanguageContext";

export const profile = {
  name: { zh: "李思奇", en: "Siqi Li" } satisfies I18nText,
  title: {
    zh: "博士后研究员",
    en: "Postdoctoral Researcher",
  } satisfies I18nText,
  affiliation: {
    zh: "清华大学 软件学院",
    en: "School of Software, Tsinghua University",
  } satisfies I18nText,
  avatar: (process.env.NEXT_PUBLIC_BASE_PATH || "") + "/avatar.jpg",
  bio: {
    zh: `我是清华大学软件学院博士后，入选清华大学\u201C水木学者\u201D计划与博士后国家资助计划C档，曾在清华大学与北京航空航天大学分别获得工学博士与工学学士学位。主持国家自然科学基金委青年基金项目（C类）、博士后面上项目等科研项目4项，作为项目核心骨干参与国家科技重大专项、基金委联合基金重点项目等，长期聚焦人工智能、计算机视觉与超图计算领域展开系统性研究，提出视觉超图计算系列理论方法，突破传统图结构难以建模高阶关联的桎梏，提升多模态异构数据的融合与表征能力，并应用于复杂场景视觉增强及多模态视觉感知等领域。相关研究成果近五年发表IEEE TPAMI、IJCV、中国科学及CVPR、ICCV等国内外高水平期刊会议论文20余篇，其中以第一/通讯作者身份发表15篇，构建并开源了11个开创性的大规模真实世界数据集。`,
    en: "I am a Postdoctoral Researcher at the School of Software, Tsinghua University, selected for the Tsinghua University \"Shuimu Scholar\" Program and the China Postdoctoral Science Foundation (Category C). I received my Ph.D. in Engineering from Tsinghua University and my B.E. from Beihang University. I have led 4 research projects including the NSFC Young Scientists Fund (Category C) and the China Postdoctoral Science Foundation General Program, and served as a core member in National Science and Technology Major Projects and NSFC Joint Fund Key Projects. My research systematically focuses on artificial intelligence, computer vision, and hypergraph computing, where I have proposed a series of theoretical methods for visual hypergraph computing that overcome the limitations of traditional graph structures in modeling high-order correlations, enhancing the fusion and representation capabilities of multimodal heterogeneous data, with applications in complex scene visual enhancement and multimodal visual perception. Over the past five years, I have published more than 20 papers in top-tier journals and conferences including IEEE TPAMI, IJCV, SCIENCE CHINA, CVPR, and ICCV, with 15 as the first/corresponding author, and have constructed and open-sourced 11 pioneering large-scale real-world datasets.",
  } satisfies I18nText,
  email: "lisiqi19971013@gmail.com",
  address: {
    zh: "北京市海淀区清华大学软件学院，邮编 100084",
    en: "School of Software, Tsinghua University, Haidian District, Beijing 100084, China",
  } satisfies I18nText,
  github: "https://github.com/zhangsan",
  researchInterests: [
    { zh: "人工智能", en: "Artificial Intelligence" },
    { zh: "计算机视觉", en: "Computer Vision" },
    { zh: "超图计算", en: "Hypergraph Computing" },
    { zh: "多模态感知", en: "Multimodal Perception" },
    { zh: "视觉增强", en: "Visual Enhancement" },
  ] as I18nText[],
};
