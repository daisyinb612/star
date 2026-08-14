import { useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import {
  ArrowRight,
  Checks,
  ImageSquare,
  ShieldCheck,
  Sparkle,
  X,
} from "@phosphor-icons/react";

function Mark() {
  return (
    <img className="brand-logo" src={`${import.meta.env.BASE_URL}star-logo.png`} alt="" aria-hidden="true" />
  );
}

export function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [qrOpen, setQrOpen] = useState(false);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const productUrl = "https://starmate.daisyinb612.cn/login";

  return (
    <main>
      <section className="hero" id="top">
        <nav className="nav shell" aria-label="主导航">
          <button className="brand" onClick={() => scrollTo("top")} aria-label="回到首页">
            <Mark />
            <span>星星启航计划</span>
          </button>
          <button
            className="menu-toggle"
            aria-label="打开导航"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((value) => !value)}
          >
            <span />
            <span />
          </button>
          <div className={`nav-links ${menuOpen ? "is-open" : ""}`}>
            <button onClick={() => scrollTo("story")}>产品介绍</button>
            <button onClick={() => scrollTo("path")}>如何使用</button>
            <button onClick={() => scrollTo("roles")}>适用人群</button>
          </div>
        </nav>

        <div className="hero-inner shell">
          <div className="hero-copy">
            <div className="hero-context">
              <p className="audience-badge"><Sparkle weight="fill" /> 专为孤独症青年设计</p>
              <p className="kicker">面向孤独症青年的职业转衔训练平台</p>
            </div>
            <h1>把职业技能<br />变成可以反复练习的互动卡片</h1>
            <p className="lead">星星启航计划借助多模态 AI，把真实教学中的示范、提示与判断沉淀为可复用的技能训练交互卡，连接孤独症青年（星青年）、引导员、机构与家长，共同支持从训练走向就业。</p>
            <div className="hero-actions">
              <a className="button primary hero-primary" href={productUrl}>
                体验星星启航计划 <ArrowRight />
              </a>
              <button className="hero-qr" type="button" onClick={() => setQrOpen(true)} aria-haspopup="dialog">
                <div className="qr-code" aria-label="扫描二维码体验星星启航计划">
                  <QRCodeSVG value={productUrl} size={92} level="M" />
                </div>
                <p><strong>扫码体验</strong><span>点击放大二维码</span></p>
              </button>
            </div>
            <div className="trust-line"><ShieldCheck /> 以尊重与支持为先，按照个人需要提供帮助</div>
          </div>
          <div className="hero-image" role="img" aria-label="年轻人在咖啡店练习制作饮品" />
        </div>
      </section>

      <section className="story section shell" id="story">
        <div className="impact-stats" aria-label="孤独症群体规模与就业现状">
          <article className="stat-main">
            <span>我国孤独症群体规模</span>
            <strong>1300<small>万+</small></strong>
            <p>这是需要被看见、被持续支持的庞大群体。</p>
          </article>
          <div className="stat-pair">
            <article>
              <strong>77.64%</strong>
              <span>18 岁以上孤独症人士尚未就业</span>
            </article>
            <article>
              <strong>11.18%</strong>
              <span>实现辅助性就业</span>
            </article>
          </div>
        </div>
        <div className="story-copy">
          <p className="eyebrow">为什么必须现在开始</p>
          <h2>跨过成年之后<br />就业支持仍有巨大缺口</h2>
          <p>已有部分机构开展职业转衔训练，但传统培训高度依赖教师反复示范。老师难以同时照顾每个人的理解方式，也很难把课堂中有效的支持稳定带到真实工作现场。</p>
          <p className="challenge-title">职业培训常遇到四个现实难题</p>
          <div className="challenge-tags" aria-label="职业培训面临的四个问题">
            <span>个体差异大</span>
            <span>教学负担重</span>
            <span>训练周期长</span>
            <span>技能迁移难</span>
          </div>
          <p className="data-source">数据说明：群体规模为公开报道估算；就业数据引自《中国孤独症教育康复行业发展状况报告（V）》2024 年数据。<a href="https://www.news.cn/health/20240402/cea420e9a10f4a51a9919915ede6c011/c.html" target="_blank" rel="noreferrer">规模来源</a><a href="https://doi.org/10.5539/ass.v20n6p42" target="_blank" rel="noreferrer">就业数据转引</a></p>
        </div>
      </section>

      <section className="knowledge section" id="path">
        <div className="shell knowledge-grid">
          <div className="knowledge-copy">
            <p className="eyebrow">我们怎样回应</p>
            <h2>让一次示范<br />成为可以反复练习的交互卡</h2>
            <p>我们希望借助多模态模型支持孤独症职业转衔训练：老师上传真实场景的图片、短视频或口述经验，AI 协助整理任务步骤、提示方式与异常情境，再由老师审核确认。</p>
            <p>经验不再只留在一节课里。技能训练交互卡可以重复使用、按个体需要调整，并支持青年从熟悉步骤逐步练习真实变化。</p>
          </div>
          <div className="card-flow" aria-label="教师经验生成技能训练交互卡的流程">
            <article className="source-card">
              <span className="endpoint-label">引导员教师端</span>
              <span className="flow-label">教师现场经验</span>
              <div className="source-row"><ImageSquare /><span><strong>咖啡师训练现场</strong><small>图片 · 视频 · 口述说明</small></span></div>
              <div className="source-note">“原料用完时，先让青年停下来检查，再练习怎样向主管说明和求助。”</div>
            </article>
            <div className="flow-bridge"><Sparkle weight="fill" /><span>多模态 AI 辅助整理</span><ArrowRight /></div>
            <article className="result-card">
              <span className="endpoint-label">星星人学生端</span>
              <span className="flow-label">技能训练交互卡</span>
              <h3>制作冰摇莓果茶</h3>
              <div className="skill-step"><span>1</span><p>确认订单与杯型</p></div>
              <div className="skill-step"><span>2</span><p>按图片准备原料</p></div>
              <div className="skill-step"><span>3</span><p>遇到缺料时主动求助</p></div>
              <div className="reviewed"><Checks /> 已由老师审核</div>
            </article>
          </div>
        </div>
      </section>

      <section className="support section" id="roles">
        <div className="shell">
          <div className="section-heading centered">
            <p className="eyebrow">一条连续的支持路径</p>
            <h2>从一位引导员的经验走向星青年的真实工作</h2>
            <p>平台提供学生端、引导员端和家长端；机构作为课程与就业支持的组织者，贯穿整个过程。</p>
          </div>
          <div className="support-flow" aria-label="职业训练的四方支持路径">
            <article><span className="flow-number">01</span><p className="role-label">引导员视角</p><h3>评估、拆解与示范</h3><p>先了解个体需要，再把真实任务拆成步骤，设置提示层级并审核训练内容。</p></article>
            <article><span className="flow-number">02</span><p className="role-label">机构视角</p><h3>组织、复用与迁移</h3><p>复用优质技能卡，安排模拟与门店实训，并持续调整岗位、环境和支持方式。</p></article>
            <article><span className="flow-number">03</span><p className="role-label">家长视角</p><h3>理解、配合与反馈</h3><p>了解训练目标与有效提示，观察日常生活中的迁移表现，并与引导员保持沟通。</p></article>
            <article><span className="flow-number">04</span><p className="role-label">星青年视角</p><h3>练习、自检与求助</h3><p>按适合自己的方式反复练习，面对变化时能够检查、表达困难并主动寻求帮助。</p></article>
          </div>
          <div className="jobs-inline">
            <p><strong>从咖啡师开始，走向更多真实工作</strong><span>同一套训练方法，未来可支持园艺养护、货架整理、酒店后勤与物品分类等岗位。</span></p>
          </div>
        </div>
      </section>

      <footer className="footer shell">
        <div className="brand"><Mark /><span>星星启航计划</span></div>
        <p>AI 仅作为辅助，训练与岗位判断由本人、家庭及专业支持人员共同决定。</p>
        <button onClick={() => scrollTo("top")}>回到顶部 ↑</button>
      </footer>

      {qrOpen && (
        <div className="qr-modal" role="presentation" onClick={() => setQrOpen(false)}>
          <section className="qr-dialog" role="dialog" aria-modal="true" aria-labelledby="qr-dialog-title" onClick={(event) => event.stopPropagation()}>
            <button className="qr-close" type="button" aria-label="关闭二维码" onClick={() => setQrOpen(false)}><X /></button>
            <p className="eyebrow">星星启航计划</p>
            <h2 id="qr-dialog-title">扫码体验产品</h2>
            <div className="qr-large">
              <QRCodeSVG value={productUrl} size={320} level="H" />
            </div>
            <p>打开手机相机或微信扫一扫</p>
            <a href={productUrl}>也可以直接点击进入 <ArrowRight /></a>
          </section>
        </div>
      )}
    </main>
  );
}

export default App;
