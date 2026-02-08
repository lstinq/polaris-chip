import { LitElement, html, css } from 'lit';

/**
 * Now it's your turn. Here's what we need to try and do:
 * 1. Get your HTML from your card working in here 
 * 2. Get your CSS rescoped as needed to work here
 */

export class MyCard extends LitElement {

  static get tag() {
    return 'my-card';
  }

  constructor() {
    super();
    this.title = "My card";
  }

  static get styles() {
    return css`
    .card {
      border: 4px solid black;
      display: inline-block;
      padding: 8px;
      margin: 16px;
      max-width: 400px;
      background-color: #FFFFFF;
      vertical-align: top;
    }
    .card-image {
      width: 400px;
      height: 250px;
      object-fit: cover;
    }
    .card-title {
      font-weight: bold;
      font-size: 24px;
      margin-top: 16px;
      margin-bottom: 16px;
    }
    .card-description {
      font-size: 16px;
      margin-top: 16px;
      margin-bottom: 16px;
    }
    .card-details {
      font-size: 24px;
      font-weight: bold;
      color: black;
      background-color: #dadada;
    }
    .controls button {
      color: black;
      font-size: 24px;
      display: inline-block;
      padding: 8px;
      margin: 16px;
      background-color: white;
    }
    .alt-bg {
      background-color: #D1DDF3;
    }
    @media (min-width: 501px) and (max-width: 800px) {
      .card-details {
        display: inline-block;
      }
    }
    @media (max-width: 500px) {
      .card {
        transform: scale(0.9);
      }
    }
          :host {
            display: block;
          }
    `;
  }

  render() {
    return html`
    <div id="cardlist">
      <div class="card">
        <img class="card-image"
            src="https://m.media-amazon.com/images/S/pv-target-images/87ecb1079ad2b165f69882328719eb72df6cbff76ea3b5a42d21c9ef733d5690.jpg"
            alt="This is an alternative description."
        />
        <h2 class="card-title">
          My Journey to You (2023)
        </h2>
        <p class="card-description">
          The series tells the story of Yun Wei Shan, a spy longing for freedom, who infiltrates the Gong residence to complete a mission.
          In the eerie and treacherous Gong residence, she encounters love and friendship, embarks on a journey of self-discovery, and finds the determination to move forward.
          Together with the rebellious nobleman Gong Zi Yu, they grow and mature through their shared experiences.
        </p>
        <a href="https://example.com" class="card-details">Details</a>
      </div>
    </div>
    
        <div id="cardlist">
      <div class="card">
        <img class="card-image"
            src="https://images.travelandleisureasia.com/wp-content/uploads/sites/3/2025/02/17153051/the-white-olive-tree-1-1600x900.jpeg"
            alt="This is an alternative description."
        />
        <h2 class="card-title">
          The White Olive Tree (2025)
        </h2>
        <p class="card-description">
          During a mission in the East Country, reporter Song Ran is saved from danger by Li Zan, a Chinese explosive engineer.
          As they grow closer, they find their ideals and souls align, sparking a romantic connection.
          However, a bombing attack disrupts their budding relationship.
          After returning to China, they face personal struggles and lose contact.
          Li Zan suffers from guilt over his friend's death, while Song Ran faces controversy over a photo she took during the attack.
          By chance, they reunite, and together, they heal and plant a white olive tree, symbolizing hope.
        </p>
        <a href="https://example.com" class="card-details">Details</a>
      </div>
    </div>

        <div id="cardlist">
      <div class="card">
        <img class="card-image"
            src="https://img.tvb.com/youku/prd/20251206/053500006843FE61203CC710A4B54066_615_346_20251206075652.jpg"
            alt="This is an alternative description."
        />
        <h2 class="card-title">
          The Seven Relics of Ill Omen (2025)
        </h2>
        <p class="card-description">
          In ancient times, a mysterious substance descended upon Fengzi Ridge.
          Capable of parasitic invasion, it twisted the human heart and lured its host towards evil.
          Now, these relics of omen have reemerged, unleashing a series of bizarre and gruesome murders.
          Five ordinary yet passionate young people (Luo Ren, Mu Dai, Yi Wan San, Yan Hong Sha, and Cao Yan Hua) are drawn into this crisis through their own fateful encounters.
          They form the "Phoenix Squad" and embark on a perilous quest to subdue these seven omens.
          Through a long and arduous journey fraught with danger, the five overcome relentless challenges, and their friendship is tested and deepened in the fires of adversity.
        </p>
        <a href="https://example.com" class="card-details">Details</a>
      </div>
    </div>

        <div id="cardlist">
      <div class="card">
        <img class="card-image"
            src="https://m.media-amazon.com/images/M/MV5BNmVkZjdjNmMtMjliZC00ZTVkLWIxNDktZDlmYmU4OTEzODY4XkEyXkFqcGc@._V1_.jpg"
            alt="This is an alternative description."
        />
        <h2 class="card-title">
          Twelve Letters (2025)
        </h2>
        <p class="card-description">
          It follows the mysterious and emotional journey of Tang Yi Xun and his lover, Ye Hai Tang.
          When Hai Tang vanishes without warning, Yi Xun discovers a letter waiting in a mailbox.
          He writes back and realizes they are not only separated by distance but also by time.
          Across twelve letters spanning thirty-five years, their connection endures as they search for truth and hope, weaving together love, longing, and the challenges of fate.
        </p>
        <a href="https://example.com" class="card-details">Details</a>
      </div>
    </div>

        <div id="cardlist">
      <div class="card">
        <img class="card-image"
            src="https://media.themoviedb.org/t/p/w780/wxz9DOg9wMhkl4E2F3CjwZWSYS9.jpg"
            alt="This is an alternative description."
        />
        <h2 class="card-title">
          Lighter and Princess (2022)
        </h2>
        <p class="card-description">
          Li Xun, a top scorer and talented programmer, is uninterested in typical college life, causing friction with his classmates.
          Zhu Yun, a friendly and obedient young woman, meets Li Xun and is conflicted by his disruptive nature, yet feels drawn to him.
          As they start to grow closer, a life-altering incident threatens to tear them apart, testing their budding romance. 
        </p>
        <a href="https://example.com" class="card-details">Details</a>
      </div>
    </div>

    <div class="controls">
      <button class="duplicate">Clone card</button>
      <button class="title">Change title</button>
      <button class="img-change">Change image</button>
      <button id="bg-change">Change background</button>
      <button id="delete">Delete card</button>
    </div>`;
  }

  static get properties() {
    return {
      title: { type: String },
      image: { type: String },
      alt : { type: String },
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);
