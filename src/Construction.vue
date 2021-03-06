<script>
import Brick from './Brick.vue';
import BrickForm from './bricks/BrickForm.vue';
import Stockpile from './bricks/Stockpile.vue';
import FontLoader from './bricks/FontLoader.vue';
import BuyMeBrick from './bricks/BuyMeBrick.vue';
import HistoryTimeLine from './bricks/HistoryTimeLine.vue';
import AndyMvpCss from './bricks/AndyMvpCss.vue';
import Orange from './bricks/Orange.vue';
import WorkersActivity from './bricks/WorkersActivity.vue';
import BrickBackgroundTile from './bricks/BrickBackgroundTile.vue';
import FavIcon from './bricks/FavIcon.vue';
import DefineForever from './bricks/DefineForever.vue';
import MobileUx from './bricks/MobileUx.vue';

export default {
  name: 'App',
  components: {
    Brick,
    BrickForm,
    Stockpile,
    FontLoader,
    BuyMeBrick,
    HistoryTimeLine,
    AndyMvpCss,
    Orange,
    WorkersActivity,
    BrickBackgroundTile,
    FavIcon,
    DefineForever,
    MobileUx,
  },
  data() { return { $loader: {} }; },
  created() {
    this.$operatorMachine.send({ type: 'START' });
    this.$workerMachine.send({ type: 'CALL_WORKERS' });
    this.$loader = this.$loading.show();
  },
  updated() {
    if (this.storage && this.storage.hasCalled) {
      this.$loader.hide();
    }
    if (this.storage) {
      document.body.className = '';
      document.body.classList.add(...this.brickStyler);
    }
  },
  computed: {
    stockpile() {
      return this.$operatorMachine.context.stockpile;
    },
    storage() {
      return this.$operatorMachine.context.storage;
    },
    history() {
      return this.$operatorMachine.context.history;
    },
    builders() {
      return this.$operatorMachine.context.builders;
    },
    brickStyler() {
      return Object.keys(this.builders);
    },
    workers() {
      return this.$workerMachine.context.workers;
    },
  },
  methods: {
    showHistory($event) {
      const { value: history } = $event.target;
      switch (history) {
        case 'LATEST':
          this.$operatorMachine.send('BACK_TO_NOW');
          break;
        case 'BASE':
        default:
          break;
      }
      this.$operatorMachine.send({
        type: 'SHOW_HISTORY',
        data: {
          history: this.history[$event.target.value],
        },
      });
    },
  },
};
</script>

<template>
  <main id="app" class="brick-builder-oxygen-mono-font brick-builder-wide-enough-paragraphs brick-builder-andy-mvp-css brick-builder-yellow-bg">
    <h1 class="user-brick-title">
      <brick name="user-bricks-logo">
        <img src="./assets/user-bricks-logo.png" alt="" width="100" style="vertical-align: middle;" class="brick-builder-user-bricks-logo"/>
      </brick>
      Hello, user!
    </h1>
    <p class="brick-builder-paragraph-length">
      <brick name="introductory-text" class="brick-builder-introductory-text">
        <template v-slot:old>
          <span class="brick-builder-base">This website</span> will be built on top of your requests.
          Each request is a brick and we can start a construction with them. So this is really under construction. Go bring a brick!
        </template>
        <span class="brick-builder-base">This website</span> will be entirely built on top of your requests.
        <span>Each request is a brick and construction is on going,</span>
        <brick name="define-forever">
          <template v-slot:old> forever </template>
          <define-forever/>
        </brick>
        <span>So this is really, always, under construction.  Go add a brick!</span>
      </brick>
    </p>
    <h2>Where can I put my bricks?</h2>
    <brick-form/>
    <stockpile />
    <footer>
      <brick name="orange" tag="div">
        <orange/>
      </brick>
      <brick name="font-loader" tag="div">
        <font-loader/>
      </brick>
      <div :style="{display:'none'}">
        History:
        <select name="history" @change="showHistory($event)">
          <option value="LATEST" selected>Latest</option>
          <option v-for="(value,key, hindex) in history" :key="key" :value="value.id">#{{hindex}} {{value.note}}</option>
        </select>
      </div>
      <history-time-line/>
      <div>
        <brick name="under-construction-gif">
          <img src="./assets/under-construction.gif"
               alt="A pictogram worker is digging the ground."
               title="Brick #1 by @ozdevi on 2020-05-14"
               class="brick-builder-under-construction-gif"
          />
          <div><small>gif graciously taken from <a href="http://textfiles.com/underconstruction/">textfiles.com</a></small></div>
        </brick>
        <brick name="squirrel" tag="div">
          <small>Squirrel photo by <a href="https://unsplash.com/photos/lhD1xpVFxDE">Ritam Ghosh</a> on <a href="https://unsplash.com">Unsplash</a></small>
        </brick>
        <brick name="super-squirrel" tag="div">
          <small>
            `SuperSquirrel - The Last squirrel of Krypton` photo by
            <a href="https://www.deviantart.com/shikharsrivastava/art/SuperSquirrel-The-Last-squirrel-of-Krypton-322938479">Shikhar Srivastava</a> on
            <a href="https://www.deviantart.com/">Deviantart</a>
          </small>
        </brick>
        <brick name="worker-activity"><workers-activity/></brick>
        <brick name="open-source">
          <small class="brick-builder-open-source">
            Made with <span style="color: #e25555;">❤</span> in London. The repository is available on
            <a href="https://github.com/ozdevi/user-bricks">GitHub</a></small>
        </brick>
      </div>
    </footer>
    <brick name="andy-mvp-css"><andy-mvp-css/></brick>
    <brick name="favicon"><fav-icon/></brick>
    <brick name="brick-background-tile"><brick-background-tile/></brick>
    <brick name="mobile-ux"><mobile-ux/></brick>
    <brick name="brick-background-tile"><buy-me-brick/></brick>
  </main>
</template>

<style lang="scss">
  html {
    scroll-behavior: smooth;
  }
  body {
    padding-bottom: 50px!important;
  }
  .leader-line {
    z-index: 999;
  }
.yellow-bg{
    background: #F9D206;
}
.base {
  .isDone {
    .instruction{
      color: #BBB; /* Brick Brick Brick */
    }
  }
}

.yellow-bg {
  .isDone {
    .instruction-label{
      color: #000;
      opacity: .3;
    }
  }
  .history-timeline.on {
    background-color: #F9D206;
  }

  small {
    color: rgba(0,0,0,.3);
  }
}

.sweet-checkboxes {
  ul {
    list-style: none;
  }

  li input{
    vertical-align: top;
    margin-bottom: 0;
  }

}
.paragraph-length {
  p, .container {
    max-width: 32em;
  }
}
.wide-enough-paragraphs {
  p, .container {
    max-width: 50em;
  }
}
.oxygen-mono-font {
  font-family: 'Oxygen Mono', monospace;
}
</style>
